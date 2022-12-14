import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusUrl = '/api/status';

  constructor(private http: HttpClient) { }

  getStatus(): Promise<void | any> {
    return this.http.get(this.statusUrl).toPromise()
            .then(response => {
              console.log(`response: ${JSON.stringify(response)}`);
            })
            .catch(this.error)
  }

  // Error handling
  private error (error: any) {
    let message = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(message);
  }
}
