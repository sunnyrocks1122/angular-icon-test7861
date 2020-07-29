import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, MaterialModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
