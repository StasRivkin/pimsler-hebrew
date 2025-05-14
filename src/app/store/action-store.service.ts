import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActionStoreService {
  private isAutoplayModeOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getAutoplayModeFromStorage());
  private isBurgerMenuOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isChangePasswordModalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  private getAutoplayModeFromStorage(): boolean {
    try {
      const savedState = localStorage.getItem('isAutoplayModeOn');
      return savedState ? JSON.parse(savedState) : false;
    } catch (error) {
      console.error('Ошибка при чтении из localStorage', error);
      return false;
    }
  }

  setIsAutoplayModeOn(status: boolean): void {
    this.isAutoplayModeOn.next(status);
    localStorage.setItem('isAutoplayModeOn', JSON.stringify(status));  // Сохраняем состояние в localStorage
  }

  getIsAutoplayModeOn(): Observable<boolean> {
    return this.isAutoplayModeOn.asObservable();
  }

  setIsBurgerMenuOpen(status: boolean): void {
    this.isBurgerMenuOpen.next(status);
  }

  getIsBurgerMenuOpen(): Observable<boolean> {
    return this.isBurgerMenuOpen.asObservable();
  }

  setIsChangePasswordModalOpen(status: boolean): void {
    this.isChangePasswordModalOpen.next(status);
  }

  getIsChangePasswordModalOpen(): Observable<boolean> {
    return this.isChangePasswordModalOpen.asObservable();
  }
}
