import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PagesPageComponent } from './pages/pages-page/pages-page.component';

const routes: Routes = [
  {path:  '',         component: HomePageComponent},
  {path:  'about',    component: AboutPageComponent},
  {path:  'blog',     component: BlogPageComponent},
  {path:  'pages',    component: PagesPageComponent},
  {path:  'contact',  component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
