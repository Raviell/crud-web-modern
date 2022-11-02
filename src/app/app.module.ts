import { FormsModule} from '@angular/forms';
import { MaterialModule } from './angular-material-all-imports/material.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CardsCrudComponent } from './components/views/cards-crud/cards-crud.component';
import { RedDirective } from './directives/red.directive';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { HttpClientModule } from '@angular/common/http';
import { CardReadComponent } from './components/card/card-read/card-read.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CardUpdateComponent } from './components/card/card-update/card-update.component';
import { CardDeleteComponent } from './components/card/card-delete/card-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardsCrudComponent,
    RedDirective,
    CardCreateComponent,
    CardReadComponent,
    CardUpdateComponent,
    CardDeleteComponent,   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
