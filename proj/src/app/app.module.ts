import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogpostFeaturedComponent } from './blogpost/blogpost-featured/blogpost-featured.component';
import { BlogpostListComponent } from './blogpost/blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost/blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost/blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './blogpost/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    BlogpostFeaturedComponent,
    BlogpostListComponent,
    BlogpostDetailComponent,
    BlogpostRecentComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
