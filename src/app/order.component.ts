import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Ifood } from "./ifood";
import { StateService } from "./state.service";

@Component({
  selector: "app-order",
  template: `
    <section id="menu" class="menu section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>ORDER</h2>
          <p>Check What You Have Ordered</p>
        </div>

        <div
          class="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
          *ngFor="let fd of orderArr"
        >
          <div
            class="col-lg-6 menu-item filter-starters"
            style=" marginLeft:10%"
          >
            <img
              src="assets/img/menu/{{ fd.name }}.jpg"
              class="menu-img"
              alt=""
            />
            <div class="menu-content">
              <a href="#">{{ fd.name }}</a
              ><span>
                {{ fd.price }}
              </span>
            </div>
            <div class="menu-ingredients">
              {{ fd.information }}
            </div>
          </div>
        </div>
        <div class="price" style="width:15%; marginTop:4%; marginLeft:70%">
          <strong
            >Total : {{price|currency}}
            <hr
          /></strong>

          <div class="m-2">
            <button
              class="btn-book "
              (click)="sendOrder()"
              style="background-color: #c7a148"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class OrderComponent {
  orderArr!: Ifood[];
price!:number;


  constructor(private service: StateService,private toastr: ToastrService,private router: Router,) {
    this.service.orderSubject.subscribe((fd: Ifood[]) => {
      this.orderArr = fd;
    
      let c=0;
      this.price = this.orderArr.map(it =>it.price)
      .reduce(function(c,a){
        return( c +  a);
      
      });



    });
  }

  sendOrder() {
    const user = JSON.parse(localStorage.getItem("USER")!);
    this.service
      .senderOrder(user.id, this.orderArr)
      .subscribe((resp) => {
        this.toastr.success("Your order has beem sent,Thank you!");
        this.router.navigate(["", "menu"]);
    
    });
  }
}
