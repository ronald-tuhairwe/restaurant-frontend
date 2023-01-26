import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminHomeComponent } from "./admin-home.component";
import { EditFoodComponent } from "./edit-food.component";
import { AddfoodComponent } from "./addfood.component";

import { OrderComponent } from "./order.component";
import { MenuComponent } from "./menu.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { ContactComponent } from "./contact.component";
import { EventComponent } from "./event.component";
import { BookTableComponent } from "./book-table.component";
import { GalleryComponent } from "./gallery.component";
import { ChefsComponent } from "./chefs.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AddAdminComponent } from "./add-admin.component";
import { AdminOrdersComponent } from "./admin-orders.component";
import { ToastrModule } from "ngx-toastr";
import { InfoComponent } from "./info.component";
import { BookingComponent } from "./booking.component";
import { AuthorizeInterceptor } from "./authorize.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    EditFoodComponent,
    AddfoodComponent,

    OrderComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    EventComponent,
    BookTableComponent,
    GalleryComponent,
    ChefsComponent,
    AddAdminComponent,
    AdminOrdersComponent,
    InfoComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: "full" },

      { path: "home", component: HomeComponent },
      { path: "addFood", component: AddfoodComponent },

      { path: "adminHome", component: AdminHomeComponent },
      { path: "addAdmin", component: AddAdminComponent },
      { path: "adminOrders", component: AdminOrdersComponent },
      { path: "menu", component: MenuComponent },
      { path: "event", component: EventComponent },
      { path: "chefs", component: ChefsComponent },
      { path: "bookTable", component: BookTableComponent },
      { path: "contact", component: ContactComponent },
      { path: "edit", component: EditFoodComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "info", component: InfoComponent },
      { path: "bookings", component: BookingComponent },
      { path: "order", component: OrderComponent },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
