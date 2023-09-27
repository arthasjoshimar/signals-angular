import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {
  // estamos injectando el HOST. es decir la etiqueta HTML donde se esta injectando esta directiva:
  private htmlElement = inject(ElementRef<HTMLElement>);
  private _color = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color (value:string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor() {
    console.log(this.htmlElement);
    this.htmlElement.nativeElement.innerHTML = '';
   }
  ngOnInit(): void {    
  }

  setStyle(): void {
    if(!this.htmlElement) return;
    
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if(!this.htmlElement) return;
    
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;  
    }

    const errors = Object.keys(this._errors);
    console.log(errors);
    
    if(errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }
    
    if(errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres.`;
      return;
    }

    if(errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'No cumple con el formato de email';
      return;
    }

    
    
    
  }
}
