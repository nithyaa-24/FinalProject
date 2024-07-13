import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookingComponent } from './addbooking/addbooking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { TicketconformationComponent } from './ticketconformation/ticketconformation.component';
import { JoinUsComponent } from './joinus/joinus.component';
import { UserLoginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { LandingComponent } from './landing/landing.component';
import { TicketComponent } from './ticket/ticket.component';
import { HeaderComponent } from './header/header.component';
import { SearchTicketComponent } from './searchticket/searchticket.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { AddtrainComponent } from './addtrain/addtrain.component';
import { DeletetrainComponent } from './deletetrain/deletetrain.component';
import { UpdatetrainComponent } from './updatetrain/updatetrain.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { AddbusbookingComponent } from './addbusbooking/addbusbooking.component';
import { BusticketconfirmationComponent } from './busticketconfirmation/busticketconfirmation.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { AddbusComponent } from './addbus/addbus.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'joinus', component: JoinUsComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'search', component:SearchTicketComponent},
  { path: 'admin', component: AdminDashboardComponent },
  {path:'addtrain',component:AddtrainComponent},
  { path: 'about', component: HomeComponent },
  { path: 'provider', component: ProviderDashboardComponent },
  {path: 'addbooking',component: AddBookingComponent},
  {path:'ticketconformation',component:TicketconformationComponent},
  {path:'deletetrain',component:DeletetrainComponent},
  {path:'update/:id',component:UpdatetrainComponent},
  {path:'searchbus',component:SearchBusComponent},
  {path:'addbusbook',component:AddbusbookingComponent},
  {path:'busticketconfirm',component:BusticketconfirmationComponent},
  {path:'update1/:id', component:UpdatebusComponent},
  {path:'addbus', component:AddbusComponent},
  {path:'knowus', component:FeatureComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
