import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverID:number = 10;
  serverStatus:string = 'No server running';
  allowNewServer:boolean = false;
  serverName = 'Test';

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
      this.serverStatus = 'stopped';
    },2000)
  }

  ngOnInit(): void {
  }
onAddServer(){
  this.serverStatus = "Server is created and running!"
}

// onInputUpdate(event: Event){
//   this.serverName = (<HTMLInputElement>event.target).value;
// }
}
