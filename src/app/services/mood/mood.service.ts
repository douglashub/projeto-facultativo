import { Injectable } from '@angular/core';
import { MoodModel } from 'src/app/pages/mood/models/mood.model';

@Injectable({
  providedIn: 'root'
})
export class MoodService {
  constructor() {}

  getMoods(): MoodModel[] {
    const moods: MoodModel[] = this.getObject('mood');
    return moods;
  }

  addMood(mood: MoodModel): void {
    const curMoods: MoodModel[] = this.getObject('mood') || [];

    curMoods.push(mood);

    this.storeObject('mood', curMoods);
  }

  storeObject(itemName: string, item: any): void {
    localStorage.setItem(itemName, JSON.stringify(item));
  }

  getObject(itemName: string): any {
    return JSON.parse(localStorage.getItem(itemName));
  }
}
