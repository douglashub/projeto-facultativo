import { ProfessionalStatus, ProfessionalsModel } from '../models/professional.model';
import { Gender } from '../../auth/models/user.model';

export const professionalsList: ProfessionalsModel[] = [
  {
    id: 1,
    name: 'Dr. James Macdonald',
    status: ProfessionalStatus.ONLINE,
    queue: 1,
    profession: 'Psychologist',
    location: 'University of Toronto',
    gender: Gender.MALE
  },
  {
    id: 2,
    name: 'Mary Thompson',
    status: ProfessionalStatus.OFFLINE,
    queue: 1,
    profession: 'Counsellor',
    location: 'Addiction & Mental Health Ontario',
    gender: Gender.FEMALE
  },
  {
    id: 3,
    name: 'Johnson Dickson',
    status: ProfessionalStatus.OFFLINE,
    queue: 1,
    profession: 'Counsellor',
    location: 'Addiction & Mental Health Ontario',
    gender: Gender.FEMALE
  },
  {
    id: 4,
    name: 'Bruce Planner',
    status: ProfessionalStatus.OFFLINE,
    queue: 1,
    profession: 'Counsellor',
    location: 'Addiction & Mental Health Ontario',
    gender: Gender.FEMALE
  }
];
