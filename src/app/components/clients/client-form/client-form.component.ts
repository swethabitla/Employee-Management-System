import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { ValidationErrorsService } from '../../../services/validation-errors.service';
import { ClientsService } from '../../../services/clients.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { FlashMessagesService } from '../../../../../node_modules/angular2-flash-messages';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit, OnDestroy {
  @Input()
  client;
  @Input()
  onSubmit;
  showMessage = true;
  constructor(
    public validationErrors: ValidationErrorsService,
    private clientService: ClientsService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.cdRef.markForCheck();
  }
}
