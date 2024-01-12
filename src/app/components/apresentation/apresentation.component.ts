import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
import { SetLanguageActiveDirective } from '../../directives/set-language-active.directive';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css'],
  imports: [CommonModule, TranslocoModule, SetLanguageActiveDirective],
  standalone: true,
})
export class ApresentationComponent implements OnInit {
  listLanguages: any[] = [
    {
      title: 'English',
      description: 'Site language',
      code: 'en',
    },
    {
      title: 'Português',
      description: 'Idioma do site',
      code: 'pt-br',
    },
  ];
  constructor(protected translocoService: TranslocoService) {}

  ngOnInit() {}

  changeLanguage(code: 'en' | 'pt-br') {
    this.translocoService.setActiveLang(code);
  }
}
