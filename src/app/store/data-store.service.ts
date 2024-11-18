import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private curPart: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private curAudio: BehaviorSubject<HTMLAudioElement | undefined> = new BehaviorSubject<HTMLAudioElement | undefined>(undefined);

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
}
