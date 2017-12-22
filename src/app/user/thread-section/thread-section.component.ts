import { Component, OnInit } from '@angular/core';
import {ThreadService} from '../../services/thread.service';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.scss']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.threadService.loadUserThread();
  }

}
