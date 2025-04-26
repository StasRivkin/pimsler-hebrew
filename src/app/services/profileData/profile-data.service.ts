import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProfile} from "../../inteface/Interfaces";
import {DataStoreService} from "../../store/data-store.service";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {
  private mainUrl = "https://129.159.133.45:443/profile"

  constructor(
    private http: HttpClient,
    private dataStoreService: DataStoreService
  ) {
  }

  async pingService() {
    try {
      return await lastValueFrom(this.https.get<String>(this.mainUrl + '/pingPong', {
        responseType: 'text' as 'json'
      }));
    } catch (error) {
      console.error('Failed', error);
      return 'Ошибка ПингПонг.';
    }
  }

  async getProfileData(data: { email: string, password: string }) {
    const credentials = btoa(`${data.email}:${data.password}`);
    const headers = new HttpHeaders({
      Authorization: `Basic ${credentials}`
    });
    try {
      const response = await lastValueFrom(this.https.post<IProfile>(this.mainUrl + '/login', {}, {headers}));
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
  }) {
    try {
      const response = await lastValueFrom(this.https.post<IProfile>(this.mainUrl + '/registration', data, {}));
      this.dataStoreService.setProfile(response);
      return "";
    } catch (error) {
      console.error('Registration failed', error);
      return 'Произошла ошибка. Попробуйте еще раз.';
    }
  }

  async removeProfileData(token: string) {
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    try {
      await lastValueFrom(this.https.post<IProfile>(this.mainUrl + `/logout`, {}, {headers}));
      this.dataStoreService.setProfile(null);
    } catch (error) {
      console.error('Registration failed', error);
    }
  }

  async addPassedLessonIntoProfileData(token: string, lessonId: string) {
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    try {
      await lastValueFrom(this.https.put<IProfile>(this.mainUrl + `/addPassedLesson/${lessonId}`, {}, {headers}));
      return "";
    } catch (error) {
      console.error('Registration failed', error);
      return 'Произошла ошибка. Попробуйте еще раз.';
    }
  }
}
