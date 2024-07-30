import { Injectable, signal } from '@angular/core';
import { Chapter } from '../models/chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  chapterSig = signal<Chapter[]>([]);

  addChapter() {
    const newChapter : Chapter = {
      title: "title1",
	    description: "description1",
	    note: "note1",
	    read: false
    }
    this.chapterSig.update((chapters) => [...chapters, newChapter]);
  }
  
  constructor() { }
}
