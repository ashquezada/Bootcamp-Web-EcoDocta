import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  // Variables for the form
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() { }

  processForm() {
    console.log("Enviamos el formulario!");
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }
}
