import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { Client } from '../../../models/Client';
import { DeleteModalService } from '../../../services/delete-modal.service';

@Component({
  selector: 'app-clientspage',
  templateUrl: './clientspage.component.html',
  styleUrls: ['./clientspage.component.css']
})
export class ClientspageComponent implements OnInit {
  clients: Client[];
  currentClient: Client;
  visibleClients: Client[];
  query = '';

  constructor(
    private clientService: ClientsService,
    private deleteModal: DeleteModalService
  ) {}

  ngOnInit() {
    this.clientService
      .getClients()
      .subscribe(clients => (this.clients = clients));
  }

  onDeleteClick(client: Client): void {
    this.currentClient = client;
    this.deleteModal.changeState(true);
  }

  onChange(e) {
    this.visibleClients = this.clients.filter(client => {
      const clientName = `${client.firstName} ${client.lastName}`.toLowerCase();
      const query = this.query.toLowerCase().trim();
      return clientName.includes(query);
    });
  }
}
