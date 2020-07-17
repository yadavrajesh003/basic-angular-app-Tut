import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './tutorial/header.component';
import { FooterComponent } from './tutorial/footer.component';
import { LinksComponent } from './tutorial/links.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot()
    ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    ExampleComponent
    ],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
