import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angular4-http-6fbdf.firebaseio.com/data.json', servers, {headers: headers});
    return this.http.put('https://angular4-http-6fbdf.firebaseio.com/data.json', servers, {headers: headers});
  };

  getServers() {
    return this.http.get('https://angular4-http-6fbdf.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ).catch(
        (error: Response) => {
          return Observable.throw('Something went wrong.');
        }
      );
  }

  getAppName() {
    return this.http.get('https://angular4-http-6fbdf.firebaseio.com/AppName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
