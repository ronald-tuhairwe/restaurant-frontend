import { Component, DoCheck } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Ifood } from "./ifood";
import { StateService } from "./state.service";

@Component({
  selector: "app-admin-home",
  template: `
    <section id="hero" class="d-flex align-items-center">
      <div
        class="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div class="row">
          <div class="col-lg-8" style="margin-left:20%">
            <div class="card" style="background-color: #d9d7c3">
              <div
                class="card-header card-header-warning"
                style="background-color: #8a855b"
              >
                <h4 class="card-title">List of food we have in Restaurant</h4>
              </div>
              <div class="card-content table-responsive table-full-width">
                <table class="table">
                  <thead class="text-danger">
                    <th>&nbsp; Name</th>
                    <th>category</th>
                    <th>price</th>
                    <th>Action</th>
                  </thead>
                  <tbody *ngFor="let fd of food">
                    <tr>
                      <td>&nbsp;&nbsp; {{ fd.name }}</td>
                      <td>{{ fd.category }}</td>
                      <td>$ {{ fd.price }}</td>
                      <td class="text-danger">
                        <span (click)="edit(fd)">
                          Edit &nbsp;&nbsp;&nbsp;
                        </span>
                        <span (click)="delete(fd._id)"> Delete</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AdminHomeComponent {
  food!: Ifood[];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: StateService,
    private toastr: ToastrService
  ) {
    this.service.getAllFood().subscribe((fd: any) => {
      this.food = fd.data;
    });
  }

  edit(fd: Ifood) {
    this.router.navigate(["", "edit"], { state: fd });
    console.log(fd)
  }

  delete(foodId: string) {
    this.service.deleteFood(foodId).subscribe((resp) => {
      this.toastr.success(resp.data);
    });

    this.service.getAllFood().subscribe((fd: any) => {
      this.food = fd.data;
    });
  }
}
