import { Component, OnInit } from '@angular/core';
import { ProfessionalsModel } from '../models/professional.model';
import { professionalsList } from '../data/professionals-list';

@Component({
  selector: 'hfmh-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {
  professionals: ProfessionalsModel[];
  filterTerm: string;

  constructor() {
    this.professionals = professionalsList;
  }

  ngOnInit() {}
}
