import { Component, OnInit } from '@angular/core';
import { ProfessionalsModel } from '../models/professional.model';
import { professionalsList } from '../data/professionals-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hfmh-professionals-profile',
  templateUrl: './professionals-profile.component.html',
  styleUrls: ['./professionals-profile.component.scss']
})
export class ProfessionalsProfileComponent implements OnInit {
  professional: ProfessionalsModel;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('professionalId');
      this.professional = professionalsList.find(p => p.id.toString() === id);
    });
  }

  ngOnInit() {}
}
