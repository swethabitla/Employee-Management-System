import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { ClientspageComponent } from '../components/clients/clientspage/clientspage.component';
import { ChatpageComponent } from '../components/chatpage/chatpage.component';
import { AddClientComponent } from '../components/clients/add-client/add-client.component';
import { ClientDetailsComponent } from '../components/clients/client-details/clients-details.component';
import { EditClientComponent } from '../components/clients/edit-client/edit-client.component';
import { AuthGuard } from '../guards/auth.guard';
import { ContactusComponent } from '../contactus/contactus.component';
import { ConnectionService } from '../connection.service';

const router = [
  { path: '', component: HomepageComponent },
  { path: 'clients', component: ClientspageComponent,  canActivate: [AuthGuard] },
  { path: 'clients/add', component: AddClientComponent,  canActivate: [AuthGuard] },
  { path: 'clients/details/:id', component: ClientDetailsComponent,  canActivate: [AuthGuard] },
  { path: 'clients/edit/:id', component: EditClientComponent,  canActivate: [AuthGuard] },
  { path: 'chat', component: ChatpageComponent,  canActivate: [AuthGuard]},
  { path: 'contactus', component: ContactusComponent,  canActivate: [AuthGuard]  },
  { path: 'connectionservice', component: ConnectionService,  canActivate: [AuthGuard]  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(router)],
  providers:[AuthGuard]
})
export class RoutingModule {}
