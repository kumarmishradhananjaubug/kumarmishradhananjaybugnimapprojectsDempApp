import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
// import { NgxMaskModule } from 'ngx-mask';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';
import { StorageService } from './services/storage.service';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'profile', component: ProfileComponent },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
    ProfileComponent,
    NavComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
   
    // RouterModule.forRoot(
    //   appRoutes
    // ),
    // NgxMaskModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [ModalService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
