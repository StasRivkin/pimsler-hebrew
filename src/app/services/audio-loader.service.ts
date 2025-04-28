import {Injectable} from '@angular/core';
import {DataStoreService} from "../store/data-store.service";

@Injectable({
    providedIn: 'root'
})
export class AudioLoaderService {

    constructor(private dataStoreService: DataStoreService) {
    }

    preloadAudioFiles(part: number, totalFiles: number = 30): Promise<any[]> {
        const partPrefix = `/assets/part${part}/part${part}-lesson-`;
        let loadedCount = 0;
        const audios: any[] = [];
        this.dataStoreService.setLoading(true);
        return new Promise((resolve, reject) => {
            for (let i = 1; i <= totalFiles; i++) {
                const audio = new Audio();
                audio.src = `${partPrefix}${i}.mp3`;
                audio.load();

                audio.oncanplaythrough = () => {
                    loadedCount++;
                    audios.push({
                        title: `Урок ${i}`,
                        description: `Описание урока ${i}`,
                        url: `${partPrefix}${i}.mp3`,
                    });

                    if (loadedCount === totalFiles) {
                        this.dataStoreService.setLoading(false);
                        resolve(audios); // возвращаем массив аудиофайлов, когда все загружены
                    }
                };
                audio.onerror = (error) => {
                    this.dataStoreService.setLoading(false);
                    reject('Ошибка загрузки аудиофайлов');
                };
            }
        });
    }
}
