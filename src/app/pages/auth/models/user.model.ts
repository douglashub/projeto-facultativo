export interface UserLoginModel {
  username: string;
  password: string;
}

export interface UserModel {
  username: string;
  password: string;
  gender: UserGender;
}

export enum UserGender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}
