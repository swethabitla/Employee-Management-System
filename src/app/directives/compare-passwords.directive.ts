import { Directive, forwardRef, Input } from '@angular/core';
import {
  Validator,
  AbstractControl,
  NG_VALIDATORS
} from '@angular/forms';

@Directive({
  selector: '[appComparePasswords]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ComparePasswordsDirective,
      multi: true
    }
  ]
})
export class ComparePasswordsDirective implements Validator {
  @Input()
  appComparePasswords: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value !== this.appComparePasswords
      ? { differentPasswords: true }
      : null;
  }
}
