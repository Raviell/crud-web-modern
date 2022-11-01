import { Router } from '@angular/router';
import { CardService } from './../../../services/card/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  constructor(
    private cardservice: CardService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  createCard(): void {
    this.cardservice.showMessage('Operação executada com sucesso!')
  }

  cancel(){
    this.router.navigate(['cards'])
  }
}
