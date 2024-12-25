import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hebrew-alphabet',
  templateUrl: './hebrew-alphabet.component.html',
  styleUrls: ['./hebrew-alphabet.component.css']
})
export class HebrewAlphabetComponent implements OnInit {
  private letters = [
    {id: 1, letter: 'א', type: 'printed', translit: 'АЛЕФ (ПЕЧАТНЫЙ)'},
    {id: 2, letter: 'א', type: 'cursive', translit: 'АЛЕФ (ПРОПИСНОЙ)'},
    {id: 3, letter: 'ב', type: 'printed', translit: 'БЕТ (ПЕЧАТНЫЙ)'},
    {id: 4, letter: 'ב', type: 'cursive', translit: 'БЕТ (ПРОПИСНОЙ)'},
    {id: 5, letter: 'ג', type: 'printed', translit: 'ГИМЕЛЬ (ПЕЧАТНЫЙ)'},
    {id: 6, letter: 'ג', type: 'cursive', translit: 'ГИМЕЛЬ (ПРОПИСНОЙ)'},
    {id: 7, letter: 'ד', type: 'printed', translit: 'ДАЛЕТ (ПЕЧАТНЫЙ)'},
    {id: 8, letter: 'ד', type: 'cursive', translit: 'ДАЛЕТ (ПРОПИСНОЙ)'},
    {id: 9, letter: 'ה', type: 'printed', translit: 'ХЕЙ (ПЕЧАТНЫЙ)'},
    {id: 10, letter: 'ה', type: 'cursive', translit: 'ХЕЙ (ПРОПИСНОЙ)'},
    {id: 11, letter: 'ו', type: 'printed', translit: 'ВАВ (ПЕЧАТНЫЙ)'},
    {id: 12, letter: 'ו', type: 'cursive', translit: 'ВАВ (ПРОПИСНОЙ)'},
    {id: 13, letter: 'ז', type: 'printed', translit: 'ЗАИН (ПЕЧАТНЫЙ)'},
    {id: 14, letter: 'ז', type: 'cursive', translit: 'ЗАИН (ПРОПИСНОЙ)'},
    {id: 15, letter: 'ח', type: 'printed', translit: 'ХЕТ (ПЕЧАТНЫЙ)'},
    {id: 16, letter: 'ח', type: 'cursive', translit: 'ХЕТ (ПРОПИСНОЙ)'},
    {id: 17, letter: 'ט', type: 'printed', translit: 'ТЕТ (ПЕЧАТНЫЙ)'},
    {id: 18, letter: 'ט', type: 'cursive', translit: 'ТЕТ (ПРОПИСНОЙ)'},
    {id: 19, letter: 'י', type: 'printed', translit: 'ЙУД (ПЕЧАТНЫЙ)'},
    {id: 20, letter: 'י', type: 'cursive', translit: 'ЙУД (ПРОПИСНОЙ)'},
    {id: 21, letter: 'כ', type: 'printed', translit: 'КАФ/ХАФ (ПЕЧАТНЫЙ)'},
    {id: 22, letter: 'כ', type: 'cursive', translit: 'КАФ/ХАФ (ПРОПИСНОЙ)'},
    {id: 23, letter: 'ך', type: 'printed', translit: 'ФИНАЛЬНЫЙ ХАФ (ПЕЧАТНЫЙ)'},
    {id: 24, letter: 'ך', type: 'cursive', translit: 'ФИНАЛЬНЫЙ ХАФ (ПРОПИСНОЙ)'},
    {id: 25, letter: 'ל', type: 'printed', translit: 'ЛАМЕД (ПЕЧАТНЫЙ)'},
    {id: 26, letter: 'ל', type: 'cursive', translit: 'ЛАМЕД (ПРОПИСНОЙ)'},
    {id: 27, letter: 'מ', type: 'printed', translit: 'МЕМ (ПЕЧАТНЫЙ)'},
    {id: 28, letter: 'מ', type: 'cursive', translit: 'МЕМ (ПРОПИСНОЙ)'},
    {id: 29, letter: 'ם', type: 'printed', translit: 'ФИНАЛЬНЫЙ МЕМ (ПЕЧАТНЫЙ)'},
    {id: 30, letter: 'ם', type: 'cursive', translit: 'ФИНАЛЬНЫЙ МЕМ (ПРОПИСНОЙ)'},
    {id: 31, letter: 'נ', type: 'printed', translit: 'НУН (ПЕЧАТНЫЙ)'},
    {id: 32, letter: 'נ', type: 'cursive', translit: 'НУН (ПРОПИСНОЙ)'},
    {id: 33, letter: 'ן', type: 'printed', translit: 'ФИНАЛЬНЫЙ НУН (ПЕЧАТНЫЙ)'},
    {id: 34, letter: 'ן', type: 'cursive', translit: 'ФИНАЛЬНЫЙ НУН (ПРОПИСНОЙ)'},
    {id: 35, letter: 'ס', type: 'printed', translit: 'САМЕХ (ПЕЧАТНЫЙ)'},
    {id: 36, letter: 'ס', type: 'cursive', translit: 'САМЕХ (ПРОПИСНОЙ)'},
    {id: 37, letter: 'ע', type: 'printed', translit: 'АЙН (ПЕЧАТНЫЙ)'},
    {id: 38, letter: 'ע', type: 'cursive', translit: 'АЙН (ПРОПИСНОЙ)'},
    {id: 39, letter: 'פ', type: 'printed', translit: 'ПЕЙ/ФЕЙ (ПЕЧАТНЫЙ)'},
    {id: 40, letter: 'פ', type: 'cursive', translit: 'ПЕЙ/ФЕй (ПРОПИСНОЙ)'},
    {id: 41, letter: 'ף', type: 'printed', translit: 'ФИНАЛЬНЫЙ ПЕЙ (ПЕЧАТНЫЙ)'},
    {id: 42, letter: 'ף', type: 'cursive', translit: 'ФИНАЛЬНЫЙ ПЕЙ (ПРОПИСНОЙ)'},
    {id: 43, letter: 'צ', type: 'printed', translit: 'ЦАДИК (ПЕЧАТНЫЙ)'},
    {id: 44, letter: 'צ', type: 'cursive', translit: 'ЦАДИК (ПРОПИСНОЙ)'},
    {id: 45, letter: 'ץ', type: 'printed', translit: 'ФИНАЛЬНЫЙ ЦАДИК (ПЕЧАТНЫЙ)'},
    {id: 46, letter: 'ץ', type: 'cursive', translit: 'ФИНАЛЬНЫЙ ЦАДИК (ПРОПИСНОЙ)'},
    {id: 47, letter: 'ק', type: 'printed', translit: 'КУФ (ПЕЧАТНЫЙ)'},
    {id: 48, letter: 'ק', type: 'cursive', translit: 'КУФ (ПРОПИСНОЙ)'},
    {id: 49, letter: 'ר', type: 'printed', translit: 'РЕШ (ПЕЧАТНЫЙ)'},
    {id: 50, letter: 'ר', type: 'cursive', translit: 'РЕШ (ПРОПИСНОЙ)'},
    {id: 51, letter: 'ש', type: 'printed', translit: 'ШИН/СИН (ПЕЧАТНЫЙ)'},
    {id: 52, letter: 'ש', type: 'cursive', translit: 'ШИН/СИН (ПРОПИСНОЙ)'},
    {id: 53, letter: 'ת', type: 'printed', translit: 'ТАВ (ПЕЧАТНЫЙ)'},
    {id: 54, letter: 'ת', type: 'cursive', translit: 'ТАВ (ПРОПИСНОЙ)'}
  ];

  shuffledLetters: any[] = [];
  currentTask: { letter: string; type: string; translit: string } | null = null;
  resultMessage: string = '';
  timer: number = 0;
  timerInterval: any = null;
  gameStarted: boolean = false;
  errors: any[] = [];

  ngOnInit() {
    this.startGame();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  shuffleArray(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  startGame() {
    this.shuffledLetters = this.shuffleArray([...this.letters]);
    this.setRandomTask();
    this.resultMessage = ''; // Сбрасываем сообщение
    this.gameStarted = false;
    this.errors = [];
  }

  setRandomTask() {
    if (this.shuffledLetters.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.shuffledLetters.length);
      const taskLetter = this.shuffledLetters[randomIndex];
      this.currentTask = {letter: taskLetter.letter, type: taskLetter.type, translit: taskLetter.translit};
      this.resultMessage = '';
    } else {
      this.currentTask = null;
      this.resultMessage = 'Игра окончена! Все буквы найдены.';
      clearInterval(this.timerInterval);
    }
  }

  selectLetter(letter: any) {
    if (!this.gameStarted) {
      this.startTimer();
    }
    if (letter.letter === this.currentTask?.letter && letter.type === this.currentTask?.type) {
      this.shuffledLetters = this.shuffledLetters.filter(l => l !== letter);
      this.resultMessage = 'Верно!';
      this.setRandomTask();
    } else {
      this.resultMessage = 'Неверно, попробуйте снова.';
      if (!this.errors.some(e => e.letter === letter.letter && e.type === letter.type)) {
        this.errors.push(letter);
      }
    }
  }

  // Перезапуск игры
  restartGame() {
    this.startGame(); // Перезапускаем игру
    this.resultMessage = ''; // Сбрасываем сообщение
    this.timer = 0;
  }

  // Запуск таймера
  startTimer() {
    this.gameStarted = true; // Игра началась
    this.timer = 0; // Сбрасываем время
    this.timerInterval = setInterval(() => {
      this.timer++; // Увеличиваем время каждую секунду
    }, 1000);
  }

  formattedTime(): string {
    const hours = Math.floor(this.timer / 3600);
    const minutes = Math.floor((this.timer % 3600) / 60);
    const seconds = this.timer % 60;

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
