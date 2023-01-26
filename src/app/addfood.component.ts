import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StateService } from './state.service';

@Component({
  selector: 'app-addfood',
  template: `

<section id="book-a-table" class="book-a-table">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>ADD FOOD</h2>
          <p>New food to the Store</p>
        </div>
        <form
          [formGroup]="form"
          (ngSubmit)="addFood()"
          data-aos="fade-up"
          data-aos-delay="100" class="php-email-form"
        >
          <div class="row">
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                class="form-control"
                formControlName="name"
                placeholder="Food Name"
                required
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                class="form-control"
                formControlName="category"
                placeholder="Category"
                required
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                class="form-control"
                formControlName="price"
                placeholder="Price"
                required
              />
              <div class="validate"></div>
            </div>
          </div>
          <div class="form-group mt-3">
            <textarea
              class="form-control"
              formControlName="information"
              rows="5"
              placeholder="Information"
            ></textarea>
            <div class="validate"></div>
          </div>
          <div class="m-3">
            <div class="sent-message">
              We aim at giving the best Our customers, the happy customers teh
              Happy restruant and the Happy pockest on you!
            </div>
          </div>
          <div class="m-2 text-center">
            <button
              class="btn-book "
              style="background-color: #c7a148"
              type="submit" [disabled]="form.invalid"
            >
              Add Food
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class AddfoodComponent {


 
  
  form = this.formBuilder.nonNullable.group({
    name: [""],
    category: [""],
    price: [""],
    information: [""],
   
  });

  constructor(private router: Router, private formBuilder: FormBuilder,private service: StateService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  addFood() {
    this.service
    .addFood(this.form.value)
    .subscribe((resp) =>  this.toastr.success("The food added Succeffully"));

  this.router.navigate(["", "adminHome"]);
  }


}
