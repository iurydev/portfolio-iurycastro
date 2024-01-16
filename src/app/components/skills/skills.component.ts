import { Component, OnInit } from '@angular/core';
import { SkillInterface } from './interfaces/skill.interface';
import { TranslocoDirective, TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

export const loader = ['en', 'pt-br'].reduce((acc: any, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`);
  return acc;
}, {});

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  providers: [
    provideTranslocoScope({
      scope: 'translocoSkills',
      loader
    })
  ]
})
export class SkillsComponent implements OnInit {
  skillsList: SkillInterface[] = [
    {
      name: 'HTML & CSS',
      experience: '5'
    },
    {
      name: 'JavaScript',
      experience: '4'
    },
    {
      name: 'Angular',
      experience: '4'
    },
    {
      name: 'TypeScript',
      experience: '4'
    },
    {
      name: 'Sass',
      experience: '2'
    },
    {
      name: 'Git',
      experience: '4'
    },
    {
      name: 'Java',
      experience: '1'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
