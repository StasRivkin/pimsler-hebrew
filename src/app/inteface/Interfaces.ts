export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  activities: IActivities;
  token: string;
}
interface IActivities{
  passedLessons: string[];
  lastListenedLesson: {key: string, value: string};
}
