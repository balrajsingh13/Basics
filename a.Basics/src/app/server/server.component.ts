import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server_id: number = 10;
  server_name: string;
  server_name1: string;
  addNewServer: boolean = true;
  addNewServerName: string;
  i= 1;
  user_servers: String;
  user_servers_twoWayBinding: String;
  add_onn: String;
  add_onn2: String;

  constructor() {
    this.server_name = 'Apache';
    setInterval(()=>{
      this.addNewServer = ! this.addNewServer;
    },2000);
   }

  serverFun(): String{
    this.server_name1 = 'Tomcat';
    return this.server_name1;
  }

  addServer(){
    this.addNewServerName = "DNSo1" + this.i;
    this.i++;
  }

  addUsersServer(event: Event){
    this.user_servers = (<HTMLInputElement>event.target).value;
  }

  addOnn1(event: Event){
    this.add_onn = (<HTMLInputElement>event.target).value;
  }

  addOnn(){
    this.add_onn2 = "Server Name on CLICK " + this.add_onn;
  }

  ngOnInit() {

  }

}
