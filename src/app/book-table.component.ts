import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { StateService } from "./state.service";

@Component({
  selector: "app-book-table",
  template: `
    <section id="book-a-table" class="book-a-table">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>
        <form
          [formGroup]="form"
          (ngSubmit)="bookTable()"
          class="php-email-form"
        >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                formControlName="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                class="form-control"
                formControlName="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="number"
                ngModel
                maxlength="8"
                class="form-control"
                formControlName="phone"
                id="phone"
                placeholder="Your Phone"
                required
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
                formControlName="date"
                class="form-control"
                id="date"
                placeholder="Date"
                required
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                class="form-control"
                formControlName="time"
                id="time"
                placeholder="Time"
                required
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                class="form-control"
                formControlName="people"
                id="people"
                placeholder="# of people"
                required
              />
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea
              class="form-control"
              formControlName="message"
              rows="5"
              placeholder="Message"
            ></textarea>
            <div class="validate"></div>
          </div>

          <div class="text-center mt-4">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [],
})
export class BookTableComponent {
 

  form = this.formBuilder.nonNullable.group({
    name: [""],
    email: [""],
    phone: [""],
    date: [""],
    time: [""],
    people: [""],
    message: [""],
    dt: new Date()
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: StateService,
    private toastr: ToastrService
  ) {}

  bookTable() {
    this.service

      .bookTable(this.form.value)
      .subscribe((resp) => this.toastr.success(resp.data));

    this.router.navigate(["", "home"]);
  }
}
