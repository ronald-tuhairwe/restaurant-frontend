import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StateService } from './state.service';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
               <div class="section-title">
                  <h2>Contact</h2>
                  <p>Contact Us</p>
               </div>
            </div>
            <!-- <div data-aos="fade-up"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.009364089381!2d75.8663357!3d30.914362399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8312b7eb6f0b%3A0xac26b878a1cdcdbc!2sBaba%20Than%20Singh%20Chowk%2C%20Baba%20Than%20Singh%20Chowk%2C%20Opposite%20Kalra%20Hospital%2C%20Fatehganj%2C%20Ludhiana%2C%20Punjab%20141008!5e0!3m2!1sen!2sin!4v1657085446837!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> -->
            <div class="container" data-aos="fade-up">
               <div class="row mt-5">
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
                           <p> Monday-Saturday:<br> 11:00 AM - 2300 PM</p>
                        </div>
                        <div class="email">
                           <i class="bi bi-envelope"></i>
                           <h4>Email:</h4>
                           <p><a href="/cdn-cgi/l/email-protection"
                            class="__cf_email__" data-cfemail="2940474f46694c51484459454c074a4644">Robustor@gmail.cook</a></p>
                        </div>
                        <div class="phone">
                           <i class="bi bi-phone"></i>
                           <h4>Call:</h4>
                           <p>+1 888 1234</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-8 mt-5 mt-lg-0">
                     <form [formGroup]="form"
          (ngSubmit)="contact()" class="php-email-form">
                        <div class="row">
                           <div class="col-md-6 form-group"> <input type="text" name="name" class="form-control" formControlName="name" placeholder="Your Name" required></div>
                           <div class="col-md-6 form-group mt-3 mt-md-0"> <input type="email" class="form-control" name="email" formControlName="email" placeholder="Your Email" required></div>
                        </div>
                        <div class="form-group mt-3"> <input type="text" class="form-control" name="subject" formControlName="subject" placeholder="Subject" required></div>
                        <div class="form-group mt-3"><textarea class="form-control" formControlName="information" rows="8" placeholder="Message" required></textarea></div>
                        <div class="my-3">
                       
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
  `,
  styles: [
  ]
})
export class ContactComponent {


   form = this.formBuilder.nonNullable.group({
      name: [""],
      email: [""],
      subject: [""],
      information: [""],
      dt: new Date()
    });


    constructor(private router: Router, private formBuilder: FormBuilder,private service: StateService,private toastr: ToastrService) {}

    contact() {
      this.service
      
      .contactRest(this.form.value)
      .subscribe((resp) => this.toastr.success(resp.data));
  
    this.router.navigate(["", "home"]);
    }

}
