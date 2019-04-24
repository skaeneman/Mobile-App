import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-bid',
  templateUrl: './new-bid.page.html',
  styleUrls: ['./new-bid.page.scss'],
})
export class NewBidPage implements OnInit {
newForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // create a new form on page load
    this.newForm = new FormGroup({
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

onCreateBid() {
  console.log(this.newForm);
}

}
