import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { StateService } from "./state.service";

@Component({
  selector: "app-info",
  template: `
    <section id="specials" class="specials">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Specials</h2>
          <p>Check Out Cutomer Emails</p>
        </div>
        <div
          class="row m-4 "
          data-aos="fade-up"
          data-aos-delay="100"
          *ngFor="let c of contact; index as i"
          style="border:solid 1px #c7a148;border-radius:20px"
        >
          <div class="col-lg-3 mt-3">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item">
                <a
                  class="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tab-1"
                  >Name : {{ c.name }}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <div class="row">
                  <div class="col-lg-9 details order-2 order-lg-1 mt-3 mb-3">
                    <h3>Email : {{ c.email }}</h3>
                    <p class="fst-italic">Subject : {{ c.subject }}</p>
                    <p>information: {{ c.information }}</p>
                  </div>

                  <div class="col-lg-3 text-center order-1 order-lg-2 ">
                    <img
                      src="assets/img/chefs/chefs-{{ i }}.jpg"
                      alt=""
                      class="img-fluid rounded-circle m-2"
                      style="width: 75%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-left:70%;">
        <a
          (click)="clearHistory()"
          style="margin-right:35%;"
          class="book-a-table-btn scrollto d-none d-lg-flex"
          >Clear info</a
        >
      </div>
    </section>
  `,
  styles: [],
})
export class InfoComponent {
  contact!: any[];

  constructor(private service: StateService, private toastr: ToastrService) {
    this.service.getAllInfo().subscribe((resp) => {
      this.contact = resp.data[0].contact;
      console.log(this.contact);
    });
  }

  clearHistory() {
    this.service
      .cleareHistory("")
      .subscribe((resp) => this.toastr.success(resp.data));
  }
}
