import { CardService } from './../../../services/card/card.service';
import { Card } from './../../../models/interfaces/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.scss']
})
export class CardReadComponent implements OnInit {

  cards!: Card[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.read().subscribe( card => {
      this.cards = card;
    })
  }

}
