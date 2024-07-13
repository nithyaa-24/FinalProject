import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './joinus/joinus.component';
import { UserLoginComponent } from './userlogin/userlogin.component';
import { RegisteredlistComponent } from './registeredlist/registeredlist.component';
import { LandingComponent } from './landing/landing.component';
import { TicketComponent } from './ticket/ticket.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchTicketComponent } from './searchticket/searchticket.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { AddBookingComponent } from './addbooking/addbooking.component';

import { TicketconformationComponent } from './ticketconformation/ticketconformation.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DeletetrainComponent } from './deletetrain/deletetrain.component';
import { UpdatetrainComponent } from './updatetrain/updatetrain.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { AddbusbookingComponent } from './addbusbooking/addbusbooking.component';
import { BusticketconfirmationComponent } from './busticketconfirmation/busticketconfirmation.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    // BookTicketComponent,
    // TDetailsComponent,
    BookingListComponent,
    // UpdateBookingComponent,
    HeaderComponent,
    HomeComponent,
    JoinUsComponent,
    UserLoginComponent,
    RegisteredlistComponent,
    LandingComponent,
    TicketComponent,
    SearchTicketComponent,
    AdminDashboardComponent,
    ProviderDashboardComponent,
    AddBookingComponent,
    TicketconformationComponent,
    AddtrainComponent,
    DeletetrainComponent,
    UpdatetrainComponent,
    SearchBusComponent,
    AddbusbookingComponent,
    BusticketconfirmationComponent,
    UpdatebusComponent,
    AddbusComponent,
    DeletebusComponent,
    FeatureComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
