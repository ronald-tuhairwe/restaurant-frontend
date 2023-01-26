import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { StateService } from "./state.service";

@Component({
  selector: "app-add-admin",
  template: `
    <section id="hero" class="d-flex align-items-center">
      <div
        class="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <!-- login part -->

        <div class="row mt-2 ">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Robustor, FairField, USA </p>
              </div>
              <div class="open-hours">
                <i class="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday:<br />
                  11:00 AM - 2300 PM
                </p>
              </div>
              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="2940474f46694c51484459454c074a4644"
                    >Robustor@gmail.cook</a
                  >
                </p>
              </div>
              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 888 1234</p>
              </div>
            </div>
          </div>
          <div
            class="col-lg-8 mt-5 mt-lg-0 box"
            style="background-color: #171329; width:50%;"
          >
            <p
              style="color:#827b1d; marginLeft:10%; marginTop:4% ;font-family:'Courier New';font-size:25px"
            >
              <strong> We hire the Best to be the best</strong>
            </p>
            <form [formGroup]="form" (ngSubmit)="onSubmit()" style="margin: 5%" class="php-email-form">
              <div class="form-group block">
                <div class="row">
                  <div class="m-2">
                    <input
                      class="form-control "
                      type="email"
                      placeholder="e.g. alex@example.com"
                      formControlName="email"
                      ngModel
                      email="true"
                      required
                    />
                    <small
                      class="text-danger"
                      [hidden]="
                        form.controls['email'].valid ||
                        (form.controls['email'].pristine && !onSubmit) ||
                        !form.touched
                      "
                      >Email Required</small
                    >
                  </div>

                  <div class="m-2">
                    <input
                      class="form-control "
                      type="text"
                      placeholder="FirstName"
                      formControlName="first_name"
                      required
                    />

                    <small
                      class="text-danger"
                      [hidden]="
                        form.controls['first_name'].valid ||
                        (form.controls['first_name'].pristine && !onSubmit) ||
                        !form.touched
                      "
                      >First name Required</small
                    >
                  </div>

                  <div class="m-2">
                    <input
                      class="form-control "
                      type="text"
                      placeholder="LastName"
                      formControlName="last_name"
                      required
                    />
                    <small
                      class="text-danger"
                      [hidden]="
                        form.controls['last_name'].valid ||
                        (form.controls['last_name'].pristine && !onSubmit) ||
                        !form.touched
                      "
                      >Last name Required</small
                    >
                  </div>

                  <div class="m-2">
                    <input
                      class="form-control "
                      type="password"
                      placeholder="Password"
                      formControlName="password"
                      ngModel
                      minlength="5"
                      required
                    />
                    <small
                      class="text-danger"
                      [hidden]="
                        form.controls['password'].valid ||
                        (form.controls['password'].pristine && !onSubmit) ||
                        !form.touched
                      "
                      >Paasword Required(max>5)</small
                    >
                  </div>
                </div>
                <div class="m-2">
                  <button
                    class="btn-book"
                    type="submit"
                    style="background-color: #c7a148"
                    [disabled]="form.invalid"
                  >
                    Sing Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AddAdminComponent implements OnInit {
  form = this.formBuilder.nonNullable.group({
    email: [""],
    first_name: [""],
    last_name: [""],
    password: [""],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: StateService, private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  showError() {
    alert("the input information is not right");
  }

  onSubmit() {
    this.service
      .signUpAdmin(this.form.value)
      .subscribe((resp) =>  this.toastr.success(resp.data));

    this.router.navigate(["", "adminHome"]);
  }
}
