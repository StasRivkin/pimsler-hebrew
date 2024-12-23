import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css']
})
export class TabBodyComponent implements OnInit {
  @ViewChild('audioPlayer', {static: false}) audioPlayer!: ElementRef<HTMLAudioElement>;
  audios: any[] = [];
  curAudio: any;
  currentAudioUrl?: string;

  isPlaying = false;
  isMuted = false;
  currentTime = 0;
  audioDuration = 0;

  constructor(private store: DataStoreService) {
  }

  ngOnInit(): void {
    this.store.getCurAudio().subscribe(data => {
      if (data) {
        this.curAudio = data;
        const tabHeader = document.querySelector('.mat-mdc-tab-header');
        if (tabHeader) {
          (tabHeader as HTMLElement).style.display = 'none';
        }
      }else{
        this.curAudio = data;
        const tabHeader = document.querySelector('.mat-mdc-tab-header');
        if (tabHeader) {
          (tabHeader as HTMLElement).style.display = 'flex';
        }
      }


    });
    this.store.getCurPart().subscribe(curPart => {
      this.audios = this.generateAudios(curPart);
      this.currentAudioUrl = undefined;
      this.isMuted = false;
    });
  }

  loadAudio(audio: any, url: string): void {
    this.store.setCurAudio(audio);
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

  onCloseAudio(): void {
    this.currentAudioUrl = undefined;
    this.isPlaying = false;
    this.isMuted = false;
    this.store.setCurAudio(null);
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
      this.loadAudio(null, nextAudio.url);
      this.isPlaying = true;
      this.isMuted = false;
    } else {
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
