import { Component, DoCheck, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { ToastrService } from "ngx-toastr";
import { IuserLog } from "./ifood";
import { StateService } from "./state.service";

@Component({
  selector: "app-root",
  template: `
    <!-- LoginIn Page -->

    <div *ngIf="showLogin">
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div
          class="container d-flex justify-content-center justify-content-md-between"
        >
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-phone d-flex align-items-center"
              ><span>+1 888 1234</span></i
            >
            <i class="bi bi-clock d-flex align-items-center ms-4"
              ><span> Mon-Sat: 11AM - 23PM</span></i
            >
          </div>
          <div class="languages d-none d-md-flex align-items-center">
            <ul>
              <li>En</li>
              <li><a href="#">De</a></li>
            </ul>
          </div>
        </div>

        <header id="header" class="fixed-top d-flex align-items-cente">
          <div
            class="container-fluid container-xl d-flex align-items-center justify-content-lg-between"
          >
            <h1 class="logo me-auto me-lg-0">
              <a href="#">Restaurant</a>
            </h1>
            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a class="nav-link scrollto active">Home</a>
                </li>

                <li>
                  <a class="nav-link scrollto">Tasty Menu</a>
                </li>

                <li>
                  <a class="nav-link scrollto">Events</a>
                </li>
                <li>
                  <a class="nav-link scrollto">Chefs</a>
                </li>
                <li>
                  <a class="nav-link scrollto">Gallery</a>
                </li>
                <li>
                  <a class="nav-link scrollto">Contact</a>
                </li>
                <li>
                  <a class="nav-link scrollto">Your Orders</a>
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <a class="book-a-table-btn scrollto d-none d-lg-flex"
              >Book a table</a
            >
          </div>
        </header>
      </div>

      <div style="margin-top: 5%">
        <main id="main">
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
                      <p>Robustor, FairField, USA</p>
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
                        >
                          Robustor@gmail.cook
                        </a>
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
                  style="background-color: #171329; width:30%;height:80%"
                >
                  <!-- signup -->
                  <form
                    [formGroup]="form"
                    (ngSubmit)="onSubmit()"
                    style="margin: 5%"
                    *ngIf="showsignup"
                  >
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
                              (form.controls['first_name'].pristine &&
                                !onSubmit) ||
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
                              (form.controls['last_name'].pristine &&
                                !onSubmit) ||
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
                              (form.controls['password'].pristine &&
                                !onSubmit) ||
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

                  <!-- login form -->
                  <form
                    [formGroup]="form1"
                    (ngSubmit)="onLogin()"
                    style="margin: 5%"
                    *ngIf="showlogin"
                  >
                    <div class="row">
                      <div class="m-2">
                        <input
                          class="form-control "
                          type="email"
                          placeholder="e.g. alex@example.com"
                          formControlName="email"
                          email="true"
                          required
                        />
                        <small
                          class="text-danger"
                          [hidden]="
                            form1.controls['email'].valid ||
                            (form1.controls['email'].pristine && !onLogin) ||
                            !form1.touched
                          "
                          >Email Required</small
                        >
                      </div>
                      <div class="m-2">
                        <input
                          class="form-control "
                          type="password"
                          placeholder="********"
                          formControlName="password"
                          required
                        />
                        <small
                          class="text-danger"
                          [hidden]="
                            form1.controls['password'].valid ||
                            (form1.controls['password'].pristine && !onLogin) ||
                            !form1.touched
                          "
                          >password Required</small
                        >
                      </div>
                    </div>

                    <div class="m-2">
                      <button
                        class="btn-book "
                        type="submit"
                        style="background-color: #c7a148"
                      >
                        Login
                      </button>
                      Or
                      <a (click)="singnUp()">SignUp</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <!-- footer -->

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>Restaurant</h3>
                  <p>
                    Robustor <br />
                    Fairfield, USA
                  </p>
                  <div class="social-links mt-3">
                    <a href="#" class="twitter"
                      ><i class="bx bxl-twitter"></i
                    ></a>
                    <a href="#" class="facebook"
                      ><i class="bx bxl-facebook"></i
                    ></a>
                    <a href="#" class="instagram"
                      ><i class="bx bxl-instagram"></i
                    ></a>
                    <a href="#" class="google-plus"
                      ><i class="bx bxl-skype"></i
                    ></a>
                    <a href="#" class="linkedin"
                      ><i class="bx bxl-linkedin"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Product Management</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  If at all you wana keep updated with our New Offers then
                  subscribe
                </p>
                <form action="" method="post">
                  <input type="email" name="email" /><input
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Restaurant</span></strong
            >. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://therichpost.com/">Ronald Tuhairwe</a>
          </div>
        </div>
      </footer>
      <!-- <div id="preloader"></div> -->
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
        ><i class="bi bi-arrow-up-short"></i
      ></a>
    </div>

    <!-- Customer Page -->

    <div *ngIf="showCustomer">
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div
          class="container d-flex justify-content-center justify-content-md-between"
        >
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-phone d-flex align-items-center"
              ><span>+1 888 1234</span></i
            >
            <i class="bi bi-clock d-flex align-items-center ms-4"
              ><span> Mon-Sat: 11AM - 23PM</span></i
            >
          </div>
          <div class="languages d-none d-md-flex align-items-center">
            <ul>
              <li>En</li>
              <li><a href="#">De</a></li>
            </ul>
          </div>
        </div>

        <header id="header" class="fixed-top d-flex align-items-cente">
          <div
            class="container-fluid container-xl d-flex align-items-center justify-content-lg-between"
          >
            <img
              src="assets/img/chefs/chefs-3.jpg"
              alt=""
              class="img-fluid rounded-circle m-2"
              style="width: 5%"
            />
            <h1 class="logo me-auto me-lg-0">
              <a href="#">Restaurant</a>
            </h1>
            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a
                    class="nav-link scrollto active"
                    [routerLink]="['', 'home']"
                    >Home</a
                  >
                </li>

                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'menu']"
                    >Menu</a
                  >
                </li>

                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'event']"
                    >Events</a
                  >
                </li>
                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'chefs']"
                    >Chefs</a
                  >
                </li>
                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'gallery']"
                    >Gallery</a
                  >
                </li>
                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'contact']"
                    >Contact</a
                  >
                </li>
                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'order']"
                    >Your Orders</a
                  >
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <a
              [routerLink]="['', 'bookTable']"
              class="book-a-table-btn scrollto d-none d-lg-flex"
              >Book a table</a
            >

            <a
              (click)="logOut()"
              class="book-a-table-btn scrollto d-none d-lg-flex"
              >LogOut</a
            >
          </div>
        </header>
      </div>

      <div style="margin-top: 5%">
        <main id="main">
          <router-outlet></router-outlet>
        </main>
      </div>
      <!-- footer -->

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>Restaurant</h3>
                  <p>
                    Robustor <br />
                    Fairfield, USA
                  </p>
                  <div class="social-links mt-3">
                    <a href="#" class="twitter"
                      ><i class="bx bxl-twitter"></i
                    ></a>
                    <a href="#" class="facebook"
                      ><i class="bx bxl-facebook"></i
                    ></a>
                    <a href="#" class="instagram"
                      ><i class="bx bxl-instagram"></i
                    ></a>
                    <a href="#" class="google-plus"
                      ><i class="bx bxl-skype"></i
                    ></a>
                    <a href="#" class="linkedin"
                      ><i class="bx bxl-linkedin"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Product Management</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>
                  If at all you wana keep updated with our New Offers then
                  subscribe
                </p>
                <form action="" method="post">
                  <input type="email" name="email" /><input
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Restaurant</span></strong
            >. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://therichpost.com/">Ronald Tuhairwe</a>
          </div>
        </div>
      </footer>
      <!-- <div id="preloader"></div> -->
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
        ><i class="bi bi-arrow-up-short"></i
      ></a>
    </div>

    <!-- for adminstartion -->

    <div *ngIf="showAdmin">
      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div
          class="container d-flex justify-content-center justify-content-md-between"
        >
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-phone d-flex align-items-center"
              ><span>+1 888 1234</span></i
            >
            <i class="bi bi-clock d-flex align-items-center ms-4"
              ><span> Mon-Sat: 11AM - 23PM</span></i
            >
          </div>
          <div class="languages d-none d-md-flex align-items-center">
            <ul>
              <li>En</li>
              <li><a href="#">De</a></li>
            </ul>
          </div>
        </div>

        <header id="header" class="fixed-top d-flex align-items-cente">
          <div
            class="container-fluid container-xl d-flex align-items-center justify-content-lg-between"
          >
            <img
              src="assets/img/chefs/chefs-3.jpg"
              alt=""
              class="img-fluid rounded-circle m-2"
              style="width: 5%"
            />
            <h1 class="logo me-auto me-lg-0">
              <a href="#">ADIMN-DashBoard</a>
            </h1>
            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a
                    class="nav-link scrollto active"
                    [routerLink]="['', 'adminHome']"
                    >FoodList</a
                  >
                </li>

                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'addFood']"
                    >AddFood</a
                  >
                </li>

                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'addAdmin']"
                    >AddAdmin</a
                  >
                </li>

                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'bookings']"
                    >Bookings
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" [routerLink]="['', 'info']">
                    Info</a
                  >
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <a
              [routerLink]="['', 'adminOrders']"
              class="book-a-table-btn scrollto d-none d-lg-flex"
              >pending orders</a
            >

            <a
              (click)="logOut()"
              class="book-a-table-btn scrollto d-none d-lg-flex"
              >LogOut</a
            >
          </div>
        </header>
      </div>

      <div style="margin-top: 5%">
        <main id="main">
          <router-outlet></router-outlet>
        </main>
      </div>
      <!-- footer -->

      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Restaurant</span></strong
            >. All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://therichpost.com/">Ronald Tuhairwe</a>
          </div>
        </div>
      </footer>
      <!-- <div id="preloader"></div> -->
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
        ><i class="bi bi-arrow-up-short"></i
      ></a>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements DoCheck {
  form1 = this.formBuilder.nonNullable.group({
    email: [""],
    password: [""],
  });

  form = this.formBuilder.nonNullable.group({
    email: [""],
    first_name: [""],
    last_name: [""],
    password: [""],
  });

  showCustomer: boolean = false;
  showAdmin: boolean = false;
  showLogin: boolean = true;

  showlogin: boolean = true;
  showsignup: boolean = false;

  user!: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: StateService,
    private toastr: ToastrService
  ) {}

  ngDoCheck(): void {
    const local = localStorage.getItem("USER")!;
    if (local) {
      this.user = JSON.parse(local);
      if (this.user.role === "customer") {
        this.showLogin = false;
        this.showCustomer = true;
      } else {
        this.showLogin = false;
        this.showAdmin = true;
      }
    }
  }

  onLogin() {
    this.service.login(this.form1.value).subscribe((resp) => {
      if (resp.success) {
        const decoded = jwtDecode(resp.data) as any;
       

        if (decoded.role === "customer") {
          localStorage.setItem("USER", JSON.stringify(decoded));
          localStorage.setItem("TOKEN", JSON.stringify(resp.data));

          this.showLogin = false;
          this.showCustomer = true;
        } else {
          localStorage.setItem("USER", JSON.stringify(decoded));
          this.showAdmin = true;
        }
      }
      this.toastr.success("Successfully Login");
    
    });

    this.form1.reset();
  }

  singnUp() {
    this.showlogin = false;
    this.showsignup = true;
  }

  onSubmit() {
    this.service.signUp(this.form.value).subscribe((resp) => alert(resp.data));
    this.showlogin = true;
    this.showsignup = false;
  }

  title = "restauranttemplate";

  logOut() {
    localStorage.clear();
    this.showLogin = true;
    this.showCustomer = false;
    this.showAdmin = false;
    this.toastr.success("Successfully LoggedOut");
  }
}
