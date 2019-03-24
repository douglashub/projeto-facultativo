export interface MoodModel {
  date: Date;
  mood: Mood;
  notes: string;
}

export enum Mood {
  GOOD = 'Good',
  BAD = 'Bad',
  AVERAGE = 'Average'
}

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
