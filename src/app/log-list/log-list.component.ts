import { Component } from '@angular/core';
import { logs } from '../logs';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css'],
})
export class LogListComponent {
  logs = logs;
  average;
  constructor() {
    let total = 0;
    logs.forEach((log) => {
      let multipler = 1000;
      let substring = -1;
      if (log.response_time.indexOf('ms') > -1) {
        multipler = 1;
        substring = -2;
      }
      total =
        total +
        Number(
          log.response_time.substring(0, log.response_time.length + substring)
        ) *
          multipler;
    });
    this.average = total / logs.length;
  }
}
