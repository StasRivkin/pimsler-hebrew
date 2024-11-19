import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private curPart: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private curAudio: BehaviorSubject<HTMLAudioElement | undefined> = new BehaviorSubject<HTMLAudioElement | undefined>(undefined);
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() {
  }

  setCurPart(data: number): void {
    this.curPart.next(data);
  }

  getCurPart(): Observable<number> {
    return this.curPart.asObservable();
  }

  setCurAudio(data: HTMLAudioElement | undefined): void {
    this.curAudio.next(data);
  }

  getCurAudio(): Observable<HTMLAudioElement | undefined> {
    return this.curAudio.asObservable();
  }


  setLoading(status: boolean): void {
    this.loading.next(status);
  }

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  private sortAudio(data: any[]): any[] {
    data.sort((a, b) => {
      const numA = parseInt(a.title.replace(/[^\d]/g, ''), 10); // Извлекаем число из строки (например, "Урок 2" -> 2)
      const numB = parseInt(b.title.replace(/[^\d]/g, ''), 10); // То же для второго объекта
      return numA - numB;
    });
    return data;
  }
}
