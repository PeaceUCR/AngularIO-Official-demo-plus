import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroesRoutingModule} from './heroes-routing.module';
import {PopupComponent} from './popup.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    PopupComponent
  ]
})
export class HeroesModule {}
