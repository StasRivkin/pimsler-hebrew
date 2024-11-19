import {Injectable} from '@angular/core';
import {DataStoreService} from "../store/data-store.service";

@Injectable({
    providedIn: 'root'
})
export class AudioLoaderService {

    constructor(private dataStoreService: DataStoreService) {
    }

    preloadAudioFiles(part: number, totalFiles: number = 30): void {
        const partPrefix = `/assets/part${part}/part${part}-lesson-`;
        let loadedCount = 0;
        const audios: any[] = [];
        this.dataStoreService.setLoading(true);
        for (let i = 1; i <= totalFiles; i++) {
            const audio = new Audio();
            audio.src = `${partPrefix}${i}.mp3`;
            audio.load(); // Начинаем загрузку
            audio.oncanplaythrough = () => {
                loadedCount++;
                audios.push({
                    title: `Урок ${i}`,
                    description: `Описание урока ${i}`,
                    url: `${partPrefix}${i}.mp3`,
                });
                if (loadedCount === totalFiles) {
                    console.log('Все файлы загружены.');
                    this.dataStoreService.setAudios(audios);
                    this.dataStoreService.setLoading(false);
                }
            };
        }
    }
}
