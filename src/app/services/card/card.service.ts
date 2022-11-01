import { Card } from './../../models/interfaces/card';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = "http://localhost:3000/cards"

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
    
  }

  create(card: Card): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, card)
  }
}
