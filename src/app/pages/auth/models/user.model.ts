export interface UserLoginModel {
  username: string;
  password: string;
}

export interface UserModel {
  username: string;
  password: string;
  gender: Gender;
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}
