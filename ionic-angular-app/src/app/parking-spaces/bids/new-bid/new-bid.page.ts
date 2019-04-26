import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParkingSpacesService } from '../../parking-spaces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.page.html',
  styleUrls: ['./new-bid.page.scss'],
})
export class NewBidPage implements OnInit {
form: FormGroup;

  constructor(
    private parkingService: ParkingSpacesService,
    private router: Router) { }

  ngOnInit() {
    // create a new form on page load
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(100)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      from: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      to: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

// creates a new parking space
onCreateSpace() {
  this.parkingService.addParkingSpace(
    this.form.value.title,
    this.form.value.description,
    +this.form.value.price,
    new Date(this.form.value.from),
    new Date(this.form.value.to) 
  )
  .subscribe(() => {
    // clear the form and redirect after submission
    this.form.reset();
    this.router.navigate(['/']);
    console.log('new parking space created...');
  });
}

}
