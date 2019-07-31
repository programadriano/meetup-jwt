import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  result: any;

  constructor(private homeService: HomeService) { }
  
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.homeService.getAll().subscribe((data) => {
      this.result = data;
    })
  }

}
