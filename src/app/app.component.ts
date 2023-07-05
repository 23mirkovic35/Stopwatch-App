import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stopwatch';

  hoursStr = "00";
  minutesStr = "00";
  secondsStr = "00";
  millisecondsStr = "00";
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  isCounting = false;

  stopwatch = setInterval(()=>{
    if(this.isCounting){
      this.millisecondsStr = (++this.milliseconds<10)?'0' +  this.milliseconds:this.milliseconds.toString();
      if(this.milliseconds == 99){
        this.milliseconds = 0;
        this.secondsStr = (++this.seconds<10)?'0' +  this.seconds:this.seconds.toString();
      }
      if(this.seconds == 59){
        this.seconds = 0;
        this.minutesStr = (++this.minutes<10)?'0' +  this.minutes:this.minutes.toString();
      }
      if(this.minutes == 59){
        this.minutes = 0;
        this.hoursStr = (++this.hours<10)?'0' +  this.hours:this.hours.toString();
      }
    }
  },1);

  start(){
    this.isCounting = true;
  }

  pause(){
    if(this.isCounting){
      this.isCounting = false;
    }
  }

  restart(){
    this.hoursStr = "00";
    this.minutesStr = "00";
    this.secondsStr = "00";
    this.millisecondsStr = "00";
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.isCounting = false;
  }

}
