import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_URL  =  'http://localhost:8000';
  experiences: any = null;

  constructor(private  http:  HttpClient) {}

  getExperiences() {
    this.http.get(`${this.API_URL}/api/`).subscribe(apiData => (this.experiences = apiData));
    // x => console.log(x)
  }

  ngOnInit() {
    // TODO arreglar esto...
    this.getExperiences();
    console.log(this.experiences);
    this.getExperiences();
    console.log(this.experiences);
  }

}
