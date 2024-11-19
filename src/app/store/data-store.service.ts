import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private curPart: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private curAudio: BehaviorSubject<HTMLAudioElement | undefined> = new BehaviorSubject<HTMLAudioElement | undefined>(undefined);
  private audios: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); // Хранение аудиофайлов
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // Статус загрузки


  constructor() {
  }

  setShowElement(data: number): void {
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

  setAudios(data: any[]): void {
    this.audios.next(data);
  }

  getAudios(): Observable<any[]> {
    return this.audios.asObservable();
  }

  setLoading(status: boolean): void {
    this.loading.next(status);
  }

  getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }
}
