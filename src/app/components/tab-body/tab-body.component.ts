import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css']
})
export class TabBodyComponent implements OnInit {
  @ViewChild('audioPlayer', {static: false}) audioPlayer!: ElementRef<HTMLAudioElement>;

  audios: any[] = [];
  paginatedAudios: any[] = [];
  currentAudioUrl?: string;
  currentPage = 0;
  pageSize = 13;


  isPlaying = false;        // Состояние воспроизведения
  isMuted = false;          // Состояние звука
  currentTime = 0;          // Текущее время
  audioDuration = 0;        // Длительность трека

  constructor(private store: DataStoreService) {
  }

  ngOnInit(): void {
    this.store.getCurPart().subscribe(curPart => {
      this.audios = this.generateAudios(curPart);
      this.updatePaginatedAudios();
      this.currentAudioUrl = undefined;
      this.isMuted = false;
    });
  }

  loadAudio(url: string): void {
    if (url === this.currentAudioUrl) {
      return;
    }
    this.currentAudioUrl = url;
    const player = this.audioPlayer?.nativeElement;
    if (player) {
      player.load();
      player.play();
      player.muted = this.isMuted;
      this.isPlaying = true;
      player.onloadedmetadata = () => {
        this.audioDuration = player.duration;
      };
    }
  }

  onPlay(audioPlayer: HTMLAudioElement): void {
    audioPlayer.play();
    audioPlayer.muted = this.isMuted;
    this.isPlaying = true;
  }

  onPause(audioPlayer: HTMLAudioElement): void {
    audioPlayer.pause();
    this.isPlaying = false;
    this.isMuted = false;
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedAudios();
  }

  onCloseAudio(): void {
    this.currentAudioUrl = undefined;
    this.isPlaying = false;
    this.isMuted = false;
  }

  private updatePaginatedAudios(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedAudios = this.audios.slice(start, end);
  }

  private generateAudios(part: number): any[] {
    if (part < 1 || part > 3) return [];
    const basePath = `/assets/part${part}/part${part}-lesson-`;
    return Array.from({length: 30}, (_, i) => ({
      title: `Урок ${i + 1}`,
      url: `${basePath}${i + 1}.mp3`
    }));
  }

  togglePlayPause(): void {
    const player = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  toggleMute(): void {
    const player = this.audioPlayer.nativeElement;
    player.muted = !this.isMuted;
    this.isMuted = !this.isMuted;
  }

  onTimeUpdate(player: HTMLAudioElement): void {
    this.currentTime = player.currentTime;
    this.audioDuration = player.duration;
  }

  onSeek(event: any): void {
    const player = this.audioPlayer.nativeElement;
    player.currentTime = event.target.value;
  }

  onEnded(player: HTMLAudioElement): void {
    const currentIndex = this.audios.findIndex(audio => audio.url === this.currentAudioUrl);
    if (currentIndex !== -1 && currentIndex < this.audios.length - 1) {
      const nextAudio = this.audios[currentIndex + 1];
      this.loadAudio(nextAudio.url);
      this.isPlaying = true;
      this.isMuted = false;
    }else {
      this.isPlaying = false;
      this.isMuted = false;
    }
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

}
