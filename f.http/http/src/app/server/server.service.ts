import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]){
   // const header = new Headers({'Content-Type':'application/json'}); //Header not wrking
    return this.http.post('https://httpbasic-a7f23.firebaseio.com/data.json',
                          servers
                         // {header : Headers}
    );                          //this is returning observable
  }

  getServers(){
    return this.http.get('https://httpbasic-a7f23.firebaseio.com/data.json');
  }

  storeServersUsingPUT(servers: any[]){
    return this.http.put('https://httpbasic-a7f23.firebaseio.com/data.json', servers);
  }

  getServers_map(){
    return this.http.get('https://httpbasic-a7f23.firebaseio.com/data.json')
                    .pipe(map(                     // data extraction centralization
                      (response : Response) => {
                        const data = response.json();
                        for(const server of data){
                          server.name = "Fetched" + server.name;
                        }
                        return data;
                      }
                    ));            // Here map transform data and return new observable
  }
}
