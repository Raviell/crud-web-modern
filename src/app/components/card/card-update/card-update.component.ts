import { Card } from './../../../models/interfaces/card';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from './../../../services/card/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.scss']
})
export class CardUpdateComponent implements OnInit {

  card: Card = {
    name: "",
    price: null
  }  

  constructor(
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cardService.readById(id!).subscribe(card => {
      this.card = card;      
    })
  }

  updateCard(): void{
    this.cardService.update(this.card).subscribe(card => {
      this.cardService.showMessage("Card altered with sucess");
      this.router.navigate(['/cards']);
    })
  }

  cancel(): void{
    this.router.navigate(['/cards'])

  }
}
