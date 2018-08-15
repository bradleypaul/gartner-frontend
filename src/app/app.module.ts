import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// main app component
import { AppComponent } from './app.component';

// routed components
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { PageNotFoundComponentComponent } from './page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: '',
    redirectTo: '/summary',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailsComponent,
    UpdateComponent,
    CreateComponent,
    PageNotFoundComponentComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
