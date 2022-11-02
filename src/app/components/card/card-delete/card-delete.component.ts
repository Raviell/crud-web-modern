import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from './../../../services/card/card.service';
import { Card } from './../../../models/interfaces/card';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.scss']
})
export class CardDeleteComponent implements OnInit {

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

  deleteCard(): void {
    this.cardService.delete(this.card.id!).subscribe(() => {
      this.cardService.showMessage('Card deleted with sucess!');
      this.router.navigate(['/cards'])

    })
  }

  cancel(): void {
    this.router.navigate(['/cards'])
  }
}
