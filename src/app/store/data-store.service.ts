import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private curPart: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private curAudio: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private actionSlider: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() {
  }

  setCurPart(data: number): void {
    this.curPart.next(data);
  }

  getCurPart(): Observable<number> {
    return this.curPart.asObservable();
  }

  setCurAudio(data: any): void {
    this.curAudio.next(data);
  }

  getCurAudio(): Observable<any> {
    return this.curAudio.asObservable();
  }


  setLoading(status: boolean): void {
    this.loading.next(status);
  }

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setActionSlider(status: string): void {
    this.actionSlider.next(status);
  }

  getActionSlider(): Observable<string> {
    return this.actionSlider.asObservable();
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
