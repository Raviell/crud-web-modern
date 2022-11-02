import { HeaderService } from './../../../services/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-crud',
  templateUrl: './cards-crud.component.html',
  styleUrls: ['./cards-crud.component.scss']
})
export class CardsCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
    ) {
    headerService.headerData = {
      title: 'Cards',
      icon: '',
      routeUrl: '/cards'
    }
   }
  
  

  ngOnInit(): void {
  }

  toCreateCard(){
    this.router.navigate(['/cards/create'])
    }
}
