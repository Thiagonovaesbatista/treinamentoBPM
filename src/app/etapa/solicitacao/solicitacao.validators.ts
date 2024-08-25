import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function nomeIniciaPor(inicialNome: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nome = control.value;

      if (!nome) {
        return null;
      }

      if (nome[0] == inicialNome) {
        return null;
      }

      return { nomeIniciaPor: true };
    };
  }

