import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverID:number = 10;
  serverStatus:string = 'running';
  allowNewServer:boolean = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
      this.serverStatus = 'stopped';
    },2000)
  }

  ngOnInit(): void {
  }

}
