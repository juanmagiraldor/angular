import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name: string = "";
  identifier: string = "";
  identifierCopy: string = "";

  submitForm() {
    console.log(this.identifier, this.name);
  }

  onInputChanged() {
    return false;
  }

  onInputBlur() {
    this.identifierCopy = this.identifier;

    if (this.identifier.length > 2) {
      const lastTwoDigits = this.identifier.substr(-2);
      this.identifier = new Array(this.identifierCopy.length - 2).fill("*").join("") + lastTwoDigits.toString().padStart(2, '0');
    }
  }

  putRealIdentifier() {
    this.identifier = this.identifierCopy;
  }
}
