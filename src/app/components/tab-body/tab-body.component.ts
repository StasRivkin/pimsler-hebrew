import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataStoreService} from '../../store/data-store.service';
import {ActionStoreService} from "../../store/action-store.service";
import {ProfileDataService} from "../../services/profileData/profile-data.service";
import {IProfile} from "../../inteface/Interfaces";

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css']
})
export class TabBodyComponent implements OnInit {
  @ViewChild('audioPlayer', {static: false}) audioPlayer!: ElementRef<HTMLAudioElement>;
  curPart: number = 0;
  audios: any[] = [];
  curAudio: any;
  currentAudioUrl?: string;

  isPlaying = false;
  isMuted = false;
  currentTime = 0;
  audioDuration = 0;

  isAutoplayModeOn = false;

  showNotification = false;
  currentProfile: IProfile | null = null;

  constructor(
    private dataStore: DataStoreService,
    private actionStore: ActionStoreService,
    private profileDataService: ProfileDataService,
  ) {
  }

  ngOnInit(): void {
    this.dataStore.getCurAudio().subscribe(data => {
      if (data) {
        this.curAudio = data;
        const tabHeader = document.querySelector('.mat-mdc-tab-header');
        if (tabHeader) {
          (tabHeader as HTMLElement).style.display = 'none';
        }
      } else {
        this.curAudio = data;
        this.currentAudioUrl = undefined;
        this.isPlaying = false;
        this.isMuted = false;
        const tabHeader = document.querySelector('.mat-mdc-tab-header');
        if (tabHeader) {
          (tabHeader as HTMLElement).style.display = 'flex';
        }
      }
    });
    this.dataStore.getCurPart().subscribe(curPart => {
      this.curPart = curPart;
      this.audios = this.generateAudios(curPart);
      this.currentAudioUrl = undefined;
      this.isMuted = false;
    });
    this.actionStore.getIsAutoplayModeOn().subscribe(flag => this.isAutoplayModeOn = flag);
    this.dataStore.getProfile().subscribe(data => {
      this.currentProfile = data;
      this.audios.forEach(audio => {
        if (this.currentProfile) {
          audio.isPassed = this.currentProfile!.activities.passedLessons.includes(this.curPart + "_" + audio.title);
        }
      });
    })
  }

  loadAudio(audio: any, url: string): void {
    this.dataStore.setCurAudio(audio);
    console.log(audio)
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
    this.dataStore.setCurAudio(null);
  }

  private generateAudios(part: number): any[] {
    if (part < 1 || part > 3) return [];
    const basePath = `/assets/part${part}/part${part}-lesson-`;
    return Array.from({length: 30}, (_, i) => ({
      title: `Урок ${i + 1}`,
      url: `${basePath}${i + 1}.mp3`,
      isPassed: this.currentProfile?.activities.passedLessons.includes(part + "_" + `Урок ${i + 1}`)
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

  async onEnded(player: HTMLAudioElement): Promise<void> {
    if (player.currentTime === player.duration) {
      const userDecision = await this.showCustomNotification();
      if (userDecision === 'yes') {
        console.log('Урок добавлен в список пройденных');
        const curPartLesson = this.curPart + "_" + this.curAudio.title;
        if (this.currentProfile!.activities.passedLessons.indexOf(curPartLesson) < 0) {
          this.currentProfile!.activities.passedLessons.push(curPartLesson);
          this.dataStore.setProfile(this.currentProfile);
        }
        await this.profileDataService.addPassedLessonIntoProfileData(this.currentProfile?.token!, curPartLesson);
      } else {
        console.log('Действие отменено');
      }
    }
    this.isPlaying = false;
    this.isMuted = false;
    this.audioDuration = 0;
    this.currentTime = 0;
    this.dataStore.setCurAudio(null);
  }

  showCustomNotification(): Promise<string> {
    this.showNotification = true;
    return new Promise((resolve) => {
      this.handleOnYesClick = () => {
        this.showNotification = false;
        resolve('yes');
      };
      this.handleOnNoClick = () => {
        this.showNotification = false;
        resolve('no');
      };
    });
  }

  handleOnYesClick() {
  }

  handleOnNoClick() {
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

}
