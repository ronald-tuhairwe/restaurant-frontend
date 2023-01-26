import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { Ifood } from "./ifood";
import { OrderComponent } from "./order.component";
import { StateService } from "./state.service";

@Component({
  selector: "app-menu",
  template: `
    <section id="menu" class="menu section-bg ">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" class="filter-active" (click)="all()">All</li>
              <li (click)="foods()">Foods</li>
              <li (click)="drinks()">Drinks</li>
              <li (click)="sweety()">Sweety</li>
            </ul>
          </div>
        </div>
        <div
          class="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
          *ngFor="let fd of food"
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
                <button
                  class="button m-2 is-link is-rounded"
                  (click)="order(fd)"
                >
                  order
                </button>
              </span>
            </div>
            <div class="menu-ingredients">
              {{ fd.information }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- special -->

    <section id="specials" class="specials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Specials</h2>
          <p>Check Our Specials</p>
        </div>
        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a
                  class="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tab-1"
                  >BreakeFast Today</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2"
                  >Lunch Today</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3"
                  >Drinks Today</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4"
                  >Ice Creams Today</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-5"
                  >Doble for Today</a
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Architecto ut aperiam autem id</h3>
                    <p class="fst-italic">
                      One of the best dishes that give you the Best feel of the
                      American and Carribean dishes with the natural scent of
                      herbs and freshness
                    </p>
                    <p>
                      My favorite food is seafood. I love seafood because it is
                      so healthy and when you cook it right, it can be delicious
                      also. I am going to tell you about the different kinds of
                      fish that I like. My favorite fish to eat is salmon salmon
                      beats out any other type of fish in the se
                    </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-1.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-2">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Et blanditiis nemo veritatis excepturi</h3>
                    <p class="fst-italic">
                      One of the best dishes that give you the Best feel of the
                      American and Carribean dishes with the natural scent of
                      herbs and freshness
                    </p>
                    <p>
                      r the Star Spangled Banner being sung in Fenway Park. The
                      scrumptious smell of blueberries makes me think of
                      towering blueberry bushes that are over my head. I choose
                      a ripe round strawberry and it feels wet and firm as I
                      plop it in my mouth. As I bite down on the tender
                      strawberry the flavorful juice makes my taste buds
                      explode. Then I toss a sweet succulent strawberry covered
                      in light whipped cream into my satisfied belly.
                    </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-2.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-3">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                    <p class="fst-italic">
                      One of the best dishes that give you the Best feel of the
                      American and Carribean dishes with the natural scent of
                      herbs and freshness
                    </p>
                    <p>
                      Fettuccini Alfredo with chicken and peas is a delicious
                      and flavorful meal everyone will absolutely love! The
                      creamy sauce is cheesy, warm, and thick. This scrumptious
                      sauce coats the long and squiggly fettuccini noodles. The
                      tender, juicy chicken pieces are another wonderful part of
                      this tasty dish. The small, green peas add color and
                      flavor to this delectable entrée. This satisfying, awesome
                      dish would go great with some crispy, colorful salad
                      filled with crunchy Romaine lettuce, black olives, red
                      peppers,
                    </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-3.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-4">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>
                      Fuga dolores inventore laboriosam ut est accusamus
                      laboriosam dolore
                    </h3>
                    <p class="fst-italic">
                      Totam aperiam accusamus. Repellat consequuntur iure
                      voluptas iure porro quis delectus
                    </p>
                    <p>
                      Fettuccini Alfredo with chicken and peas is a delicious
                      and flavorful meal everyone will absolutely love! The
                      creamy sauce is cheesy, warm, and thick. This scrumptious
                      sauce coats the long and squiggly fettuccini noodles. The
                      tender, juicy chicken pieces are another wonderful part of
                      this tasty dish. The small peppers,
                    </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-4.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="tab-5">
                <div class="row">
                  <div class="col-lg-8 details order-2 order-lg-1">
                    <h3>
                      Est eveniet ipsam sindera pad rone matrelat sando reda
                    </h3>
                    <p class="fst-italic">
                      Omnis blanditiis saepe eos autem qui sunt debitis porro
                      quia.
                    </p>
                    <p>
                      The creamy sauce is cheesy, warm, and thick. This
                      scrumptious sauce coats the long and squiggly fettuccini
                      noodles. The tender, juicy chicken pieces are another
                      wonderful part of this tasty dish. The small, green peas
                      add color and flavor to this delectable entrée. This
                      satisfying, awesome dish would go great with some crispy,
                      colorful salad filled with crunchy Romaine lettuce, black
                      olives, red peppers,
                    </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-5.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class MenuComponent {
  food!: Ifood[];
  orderArray: Ifood[] = [];

  constructor(private service: StateService, private toastr: ToastrService) {
    this.service.getAllFood().subscribe((fd: any) => {
      this.food = fd.data;
    });
  }

  showCase() {
    this.toastr.success("order placed");
  }

  all() {
    this.service.getAllFood().subscribe((fd: any) => {
      this.food = fd.data;
    });
  }

  foods() {
    this.service.getAllFood().subscribe((fd: any) => {
      this.food = fd.data.filter((itm: any) => itm.category === "food");
    });
  }

  drinks() {
    this.service.getAllFood().subscribe((fd: any) => {
      this.food = fd.data.filter((itm: any) => itm.category === "drink");
    });
  }

  sweety() {
    this.service.getAllFood().subscribe((fd: any) => {
      this.food = fd.data.filter((itm: any) => itm.category === "sweety");
    });
  }

  order(item: Ifood) {
    this.orderArray.push(item);
    this.service.orderSubject.next(this.orderArray);
    this.showCase();
  }
}
