import {Component, OnInit} from '@angular/core';
import {DataStoreService} from "../../store/data-store.service";
import {LessonsDataService} from "../../services/lessonsData/lessons-data.service";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent implements OnInit {
  displayedColumns: string[] = ['hebrew', 'translation', 'transcription'];
  dataSource: any[] = [];
  curPart: number = 0;
  curLesson: string = "";

  constructor(
    private lessonDataService: LessonsDataService,
    private store: DataStoreService
  ) {
  }

  ngOnInit(): void {
    combineLatest([
      this.store.getCurPart(),
      this.store.getCurAudio()
    ]).subscribe(([part, audio]) => {
      this.curPart = part;
      if (part && audio) {
        this.curLesson = audio['title'].match(/\d+$/)?.[0];
        this.dataSource = this.lessonDataService.getLessonData(this.curPart, this.curLesson);
      }
    });
  }
}
