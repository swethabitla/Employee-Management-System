import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Client } from '../../../models/Client';
import { DeleteModalService } from '../../../services/delete-modal.service';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  client: Client;

  constructor(
    private clientService: ClientsService,
    private activatedRouted: ActivatedRoute,
    private deleteModal: DeleteModalService
  ) {}

  ngOnInit() {
    const id = this.activatedRouted.snapshot.params.id;
    this.clientService
      .getClient(id)
      .subscribe(client => (this.client = client));
  }

  onDeleteClick(): void {
    this.deleteModal.changeState(true);
  }
}
