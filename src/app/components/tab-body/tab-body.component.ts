import { Component, OnInit } from '@angular/core';
import { AudioLoaderService } from '../../services/audio-loader.service';
import { DataStoreService } from "../../store/data-store.service";

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.css']
})
export class TabBodyComponent implements OnInit {
  audios: any[] = [];
  paginatedAudios: any[] = [];
  currentPage = 0;
  pageSize = 6;

  currentAudio: HTMLAudioElement | undefined;
  isPlaying = false;

  constructor(
    private audioLoaderService: AudioLoaderService,
    private store: DataStoreService
  ) {}

  ngOnInit(): void {
    this.loadAudios(1);
    this.store.getAudios().subscribe(audios => {
      this.audios = audios;
      this.updatePaginatedAudios();
    });
  }

  loadAudios(part: number): void {
    this.audioLoaderService.preloadAudioFiles(part);
  }

  onPlay(audio: any, audioPlayer: HTMLAudioElement): void {
    if (this.currentAudio && this.currentAudio !== audioPlayer) {
      this.stopAllAudios(this.currentAudio);
    }
    audioPlayer.src = audio.url;
    audioPlayer.load();
    audioPlayer.play();
    this.store.setCurAudio(audioPlayer);
  }

  onPause(currentAudio: HTMLAudioElement): void {
    if (currentAudio) {
      currentAudio.pause();
      this.isPlaying = false;
    }
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedAudios();
  }

  private updatePaginatedAudios(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedAudios = this.audios.slice(startIndex, endIndex);
  }

  private stopAllAudios(currentAudio: HTMLAudioElement): void {
    const allAudioPlayers = document.querySelectorAll('audio');
    allAudioPlayers.forEach((audio: HTMLAudioElement) => {
      if (audio !== currentAudio) {
        audio.pause();
      }
    });
  }
}
