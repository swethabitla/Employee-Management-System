import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { Client } from '../../../models/Client';
import {
  ActivatedRoute,
  Router
} from '../../../../../node_modules/@angular/router';
import { FlashMessagesService } from '../../../../../node_modules/angular2-flash-messages';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit, OnDestroy {
  client: Client;
  modal = false;
  timeout: any;
  constructor(
    private clientService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.clientService
      .getClient(id)
      .subscribe(client => (this.client = client));
  }

  onSubmit(): void {
    this.clientService.updateClient(this.client);
    this.flashMessage.show(
      `${this.client.firstName} ${this.client.lastName} has been updated.`,
      { cssClass: 'alert-success', timeout: 4000 }
    );
    this.timeout = setTimeout(() => this.router.navigate(['/clients']), 4000);
  }

  openModal(): void {
    this.modal = true;
  }

  onBalanceChange(): void {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance has been updated', {
      cssClass: 'alert-success',
      timeout: 4000
    });
    this.modal = false;
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
}
