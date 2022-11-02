import { HeaderService } from './../../../services/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Home',
      icon: '',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
