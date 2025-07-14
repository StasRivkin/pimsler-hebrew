export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  applicationData: IActivities;
  passwordRequired: boolean;
  token: string;
}
export interface IActivities{
  passedLessons: string[];
  lastListenedLesson: {key: string, value: number};
}
