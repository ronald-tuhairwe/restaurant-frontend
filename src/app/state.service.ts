import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

import { Ifood, Ifood2, INITIAL_STATE, Iuser, Iuser2, IuserLog } from "./ifood";
@Injectable({
  providedIn: "root",
})



export class StateService {
  bSubject = new BehaviorSubject<Ifood[]>(INITIAL_STATE);
  orderSubject = new BehaviorSubject<Ifood[]>([]);



  constructor(private http: HttpClient) {}

  getAllFood() {
    return this.http.get<Ifood[]>(environment.apiURL + "foods");
  }

  addFood(food: any) {
    return this.http.post<{ success: boolean; data: string }>(
     environment.apiURL + "foods",
      food
    );
  }

  deleteFood(foodId: string) {
    return this.http.delete<{ success: boolean; data: string }>(
     environment.apiURL + `foods/food/${foodId}`
    );
  }

  updateFood(foodId: string, food: any) {
    return this.http.patch<{ success: boolean; data: string }>(
     environment.apiURL + `foods/food/${foodId}`,
      food

    );
  }

  login(user: any) {
    return this.http.post<{ success: boolean; data: string }>(
     environment.apiURL + "login",
      user
    );
  }

  signUp(user: any) {
    return this.http.post<{ success: boolean; data: string }>(
     environment.apiURL + "signup",
      user
    );
  }

  getAllCustomers() {
    return this.http.get<{ data: Iuser2[] }>(environment.apiURL +"customers");
  }

  signUpAdmin(user: any) {
    return this.http.post<{ success: boolean; data: string }>(
     environment.apiURL + "signupAdmin",
      user
    );
  }

  deleteUser(userId: string) {
    return this.http.delete<{ success: boolean; data: string }>(
     environment.apiURL + `user/${userId}`
    );
  }

  senderOrder(userId: string, food: Ifood[]) {
    return this.http.patch<{ success: boolean; data: string }>(
     environment.apiURL + `order/${userId}`,
      food
    );
  }

  contactRest(message: any) {
    return this.http.post<{ success: boolean; data: string }>(
     environment.apiURL + "info/contact",
      message
    );
  }

  bookTable(message: any) {
    return this.http.post<{ success: boolean; data: string }>(
     environment.apiURL + "info/bookTable",
      message
    );
  }

  //
  cleareHistory(id: string) {
    return this.http.patch<{ success: boolean; data: string }>(
     environment.apiURL + "info/clear",
      id
    );
  }

  getAllInfo() {
    return this.http.get<{ success: boolean; data: any[] }>(
     environment.apiURL + "info"
    );
  }
}
