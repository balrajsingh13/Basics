import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  servers =[];

  addNewServer(name: string){
    this.servers.push({
      name: name,
      ID: this.generateID()
    });
  }

  generateID(){
    return Math.round(Math.random() * 1000);
  }

  constructor( private serverService : ServerService ) {}

  onClick_POST(){
    this.serverService.storeServers(this.servers)
    .subscribe(
      (response) => {console.log(response)},
      (error) => {console.log(error)}
    );
  }

  onClick_GET(){
    this.serverService.getServers()
    .subscribe(
                (response : Response) => {
                  const data = response.json();   //Unwrapping the body ID
                  console.log(data);
                }, 
                (error) => {console.log(error)}
               );
  }

  onClick_PUT(){
    this.serverService.storeServersUsingPUT(this.servers)
    .subscribe(
                (response) => {console.log(response)},
                (error) => {console.log(error)}
              );
  }

  onClick_GET_map(){
      this.serverService.getServers_map().subscribe(
      (servers: any[]) => console.log(servers)
    );
  }

}
