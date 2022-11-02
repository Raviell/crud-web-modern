import { Card } from './../../models/interfaces/card';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = "http://localhost:3000/cards"

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
    
    
  }

  create(card: Card): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, card).pipe(
      map(obj => obj ),
      catchError(e => this.errorHandler(e))      
    );
  }

  read(): Observable<Card[]>{
    return this.http.get<Card[]>(this.baseUrl).pipe(
      map(obj => obj ),
      catchError(e => this.errorHandler(e))      
    );
  }

  readById(id: string): Observable<Card> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Card>(url).pipe(
      map(obj => obj ),
      catchError(e => this.errorHandler(e))      
    );
  }

  update(card: Card): Observable<Card> {
    const url = `${this.baseUrl}/${card.id}`
    return this.http.put<Card>(url, card).pipe(
      map(obj => obj ),
      catchError(e => this.errorHandler(e))      
    );
  }

  delete(id: number): Observable<Card>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Card>(url).pipe(
      map(obj => obj ),
      catchError(e => this.errorHandler(e))      
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('An error has occurred', true)
    return EMPTY
  }
}
