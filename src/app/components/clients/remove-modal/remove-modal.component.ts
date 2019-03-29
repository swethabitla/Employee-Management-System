import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { DeleteModalService } from '../../../services/delete-modal.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.css']
})
export class RemoveModalComponent implements OnInit {
  @Input()
  client;
  showModal: boolean;

  constructor(
    private clientService: ClientsService,
    private deleteModal: DeleteModalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.deleteModal.getState().subscribe(state => (this.showModal = state));
  }

  onDeleteConfirm(): void {
    this.clientService.deleteClient(this.client);
    this.deleteModal.changeState(false);
    this.router.navigate(['/clients']);
  }
  onDeleteCancel(): void {
    this.deleteModal.changeState(false);
  }
}
