import { TranslocoService } from '@ngneat/transloco';
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appSetLanguageActive]',
  standalone: true,
})
export class SetLanguageActiveDirective implements OnChanges {
  @Input() languageButton: string = '';
  @Input() currentLanguage: string = '';
  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentLanguage'].currentValue) {
      this.highlightButton();
    }
  }

  private highlightButton(): void {
    const isActive = this.currentLanguage === this.languageButton;
    if (isActive) {
      this.elementRef.nativeElement.classList.add('active');
    } else {
      this.elementRef.nativeElement.classList.remove('active');
    }
  }
}
