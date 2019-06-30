import { Component, OnInit, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

@Injectable({
  providedIn:  'root'
})

export class ContactoComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;
  ngOnInit() {
  }
  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. The subject is ${this.subject}. My email is ${this.email}. My message is ${this.message}`;
    alert('hola');
  }
}

