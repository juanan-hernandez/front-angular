import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_URL  =  'http://localhost:8000';
  experiences: {} ;

  constructor(private  http:  HttpClient) {}

  getExperiences() {
    return this.http.get(`${this.API_URL}/api/`).subscribe((res) => {
      this.experiences = res;
      // console.log(this.experiences);
      });
  }

  getMonthAndYear(dateString) {
    if (dateString === null) {
      return 'act.';
    } else {
      const date = new Date(dateString);
      const month = date.toLocaleString('es-es', {month: 'long'});
      const year = date.getFullYear();
      return month + '-' + year;
    }
  }

  ngOnInit() {
    this.getExperiences();
    // this.getMonthAndYear('2019-02-01');
  }

}
