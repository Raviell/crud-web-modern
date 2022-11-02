import { Card } from './../../../models/interfaces/card';
import { Router } from '@angular/router';
import { CardService } from './../../../services/card/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  card: Card = {
    name: "",
    price: null
  }
    
  constructor(
    private cardservice: CardService,
    private router: Router,
  
    ) { }

  ngOnInit(): void {
    
  }

  createCard(): void {
    this.cardservice.create(this.card).subscribe(() => {
      this.cardservice.showMessage('Card created!')
      this.router.navigate(['cards'])
    })
   
  }

  cancel(){
    this.router.navigate(['cards'])
  }
}
