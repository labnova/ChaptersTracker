import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(public chapterService: ChapterService) {}

  addNewChapter() {
    this.chapterService.addChapter();
  }
}
