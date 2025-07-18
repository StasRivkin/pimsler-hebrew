import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IActivities, IProfile} from "../../inteface/Interfaces";
import {DataStoreService} from "../../store/data-store.service";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  private APP = "PIMSLER"
  private mainUrl = "https://rls-auth-service.duckdns.org/authorization"

  // mainUrl = "https://localhost/authorization"

  constructor(
    private http: HttpClient,
    private dataStoreService: DataStoreService
  ) {
  }

  async pingService() {
    try {
      return await lastValueFrom(this.http.get<String>(this.mainUrl + '/pingPong', {
        responseType: 'text' as 'json'
      }));
    } catch (error) {
      console.error('Failed', error);
      return 'Ошибка ПингПонг.';
    }
  }

  async getProfileData(data: { email: string, password: string }) {
    const credentials = btoa(`${data.email}||${this.APP}:${data.password}`);
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      "X-application": this.APP
    });
    try {
      const response = await lastValueFrom(this.http.post<IProfile>(this.mainUrl + '/login', {}, {headers}));
      this.dataStoreService.setProfile(response);
      return "";
    } catch (error) {
      console.error('Login failed', error);
      return 'Неверный email или пароль. Попробуйте еще раз.';
    }
  }

  async setProfileData(data: {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    application: string
  }) {
    data.application = this.APP;
    try {
      const response = await lastValueFrom(this.http.post<IProfile>(this.mainUrl + '/registration', data, {}));
      response.applicationData = {
        passedLessons: [],
        lastListenedLesson: {
          key: '',
          value: 0
        }
      };
      this.dataStoreService.setProfile(response);
      return "";
    } catch (error) {
      console.error('Registration failed', error);
      return 'Произошла ошибка. Попробуйте еще раз.';
    }
  }

  async removeProfileData(token: string) {
    const headers = new HttpHeaders(
      {
        Authorization: `Bearer ${token}`,
        "X-application": this.APP
      },
    );
    try {
      await lastValueFrom(this.http.post<IProfile>(this.mainUrl + `/logout`, {}, {headers}));
      this.dataStoreService.setProfile(null);
    } catch (error) {
      this.dataStoreService.setProfile(null);
      console.error('removeProfileData failed', error);
    }
  }

  async addPassedLessonIntoProfileData(token: string, applicationData: IActivities) {
    const obj = {
      passedLessons: applicationData.passedLessons,
      lastListenedLesson: {
        key: applicationData.lastListenedLesson.key,
        value: applicationData.lastListenedLesson.value
      }
    }
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    try {
      // this.dataStoreService.setProfile(await lastValueFrom(this.http.put<IProfile>(this.mainUrl + `/processApplicationData`, obj, {headers})));
      await lastValueFrom(this.http.put<IProfile>(this.mainUrl + `/processApplicationData`, obj, {headers}))
      return "";
    } catch (error) {
      console.error('Registration failed', error);
      return 'Произошла ошибка. Попробуйте еще раз.';
    }
  }

  async resetPassword(email: string) {
    const headers = new HttpHeaders(
      {
        "X-application": this.APP
      },
    );
    try {
      await lastValueFrom(this.http.put<IProfile>(this.mainUrl + `/resetPassword/${email}`, {}, {headers}));
      return "";
    } catch (error) {
      console.error('resetPassword failed', error);
      return 'Произошла ошибка. Попробуйте еще раз.';
    }
  }

  async changePassword(newPassword: string, token: string) {
    const headers = new HttpHeaders(
      {
        Authorization: `Bearer ${token}`,
        "X-application": this.APP,
        "X-Password": newPassword
      },
    );
    try {
      await lastValueFrom(this.http.put<IProfile>(this.mainUrl + `/editpassword`, {}, {headers}));
      return "";
    } catch (error: any) {
      console.error('resetPassword failed', error);
      return 'Произошла ошибка: ' + error.message;
    }
  }

  async getProfile(token: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      "X-application": this.APP
    });
    try {
      const response = await lastValueFrom(this.http.get<IProfile>(this.mainUrl + '/getProfile', {headers}));
      this.dataStoreService.setProfile(response);
      return "";
    } catch (error) {
      console.error('Login failed', error);
      return 'Неверный email или пароль. Попробуйте еще раз.';
    }
  }
}
