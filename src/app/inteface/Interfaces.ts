export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  applicationData: IActivities;
  token: string;
}
export interface IActivities{
  passedLessons: string[];
  lastListenedLesson: {key: string, value: number};
}
