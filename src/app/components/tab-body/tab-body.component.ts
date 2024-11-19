import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataStoreService } from '../../store/data-store.service';

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css']
})
export class TabBodyComponent implements OnInit {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  audios: any[] = [];
  paginatedAudios: any[] = [];
  currentAudioUrl?: string;
  currentPage = 0;
  pageSize = 12;

  constructor(private store: DataStoreService) {}

  ngOnInit(): void {
    this.store.getCurPart().subscribe(curPart => {
      this.audios = this.generateAudios(curPart);
      this.updatePaginatedAudios();
    });
  }

  loadAudio(url: string): void {
    if (url===this.currentAudioUrl){
     return;
    }
    this.currentAudioUrl = url;
      const player = this.audioPlayer?.nativeElement;
      if (player) {
        player.load();
        player.play();
      }

  }

  onPlay(audioPlayer: HTMLAudioElement): void {
    audioPlayer.play();
  }

  onPause(audioPlayer: HTMLAudioElement): void {
    audioPlayer.pause();
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedAudios();
  }

  onCloseAudio(): void {
    this.currentAudioUrl = undefined;
  }

  private updatePaginatedAudios(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedAudios = this.audios.slice(start, end);
  }

  private generateAudios(part: number): any[] {
    if (part < 1 || part > 3) return [];
    const basePath = `/assets/part${part}/part${part}-lesson-`;
    return Array.from({ length: 30 }, (_, i) => ({
      title: `Урок ${i + 1}`,
      url: `${basePath}${i + 1}.mp3`
    }));
  }
}
