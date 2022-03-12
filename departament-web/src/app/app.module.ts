import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './utilities/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PagesPageComponent } from './pages/pages-page/pages-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BtnEcoComponent } from './utilities/btn-eco/btn-eco.component';
import { SectionUtiComponent } from './utilities/section-uti/section-uti.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    BlogPageComponent,
    PagesPageComponent,
    ContactPageComponent,
    BtnEcoComponent,
    SectionUtiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
