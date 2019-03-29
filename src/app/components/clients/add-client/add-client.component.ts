import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from '../../../models/Client';
import { ClientsService } from '../../../services/clients.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { FlashMessagesService } from '../../../../../node_modules/angular2-flash-messages';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit, OnDestroy {
  client: Client = {
    employeeid: '',
    firstName: '',
    lastName: '',
    position: '',
    city: '',
    email: '',
    phone: '',
    balance: 0
  };
  timeout: any;

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    this.clientService.addClient(this.client);
    this.flashMessage.show(
      `${this.client.firstName} ${this.client.lastName} has been added.`,
      { cssClass: 'alert-success', timeout: 4000 }
    );
    this.timeout = setTimeout(() => this.router.navigate(['/clients']), 4000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
}
