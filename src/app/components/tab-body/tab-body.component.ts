import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {DataStoreService} from "../../store/data-store.service";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrl: './tab-body.component.css'
})
export class TabBodyComponent implements OnInit {
  audios: any[] = [];
  pageSize = 6;
  currentPage = 0;
  paginatedAudios: any[] = [];

  currentAudio: HTMLAudioElement | undefined;
  isPlaying = false;

  constructor(private store: DataStoreService) {
  }

  ngOnInit(): void {
    this.store.getCurPart().subscribe(curPart => {
      this.updateAudios(curPart);
      this.updatePaginatedAudios();
    });
    this.store.getCurAudio().subscribe(curAudio => {
      if (curAudio) {
        this.stopAllAudios(curAudio);
        this.currentAudio = curAudio;
        this.isPlaying = !curAudio.paused;
        this.currentAudio.play();
      }else{
        this.currentAudio?.pause();
      }
    });
  }

  onPlay(currentAudio: HTMLAudioElement) {
    this.store.setCurAudio(currentAudio);
  }

  onPause(currentAudio: HTMLAudioElement) {
    if (currentAudio) {
      currentAudio.pause();
      this.isPlaying = false;
    }
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedAudios();
  }

  private updateAudios(curPart: number) {
    switch (curPart) {
      case 0:
        this.audios = Array.from({length: 30}, (_, i) => ({
          title: `Урок ${i + 1}`,
          description: `Описание урока ${i + 1}`,
          url: `/assets/part1/part1-lesson-${i + 1}.mp3`
        }));
        break;
      case 1:
        this.audios = Array.from({length: 30}, (_, i) => ({
          title: `Урок ${i + 1}`,
          description: `Описание урока ${i + 1}`,
          url: `/assets/part2/part2-lesson-${i + 1}.mp3`
        }));
        break;
      case 2:
        this.audios = Array.from({length: 30}, (_, i) => ({
          title: `Урок ${i + 1}`,
          description: `Описание урока ${i + 1}`,
          url: `/assets/part3/part3-lesson-${i + 1}.mp3`
        }));
        break;
      default:
        this.audios = [];
    }
  }

  private updatePaginatedAudios() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedAudios = this.audios.slice(startIndex, endIndex);
  }

  private stopAllAudios(currentAudio: HTMLAudioElement): void {
    const sourceElement = currentAudio.querySelector('source');
    if (sourceElement) {
      const allAudioPlayers = document.querySelectorAll('audio');
      allAudioPlayers.forEach((audio: HTMLAudioElement) => {
        if (audio !== currentAudio) {
          audio.pause();
        }
      });
    }
  }
}
