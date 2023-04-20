import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './screen/history/history.component';
import { InvitationComponent } from './screen/invitation/invitation.component';
import { TripDateComponent } from './screen/trip-date/trip-date.component';

const routes: Routes = [
  {path: '', component: HistoryComponent},
  {path: 'invite', component: InvitationComponent},
  {path: 'trip-date', component: TripDateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
