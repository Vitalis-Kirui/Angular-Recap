import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Quote } from '../Classes/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quote!: Quote;

  constructor(private http: HttpClient) { 
    this.quote = new Quote("", "");
  }

  makeRequest() {

    interface APIRequest {
      quote: string;
      author: string;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<APIRequest | any>(environment.apiUrl).toPromise().then((response) => {
        this.quote.quote = response.quote;
        this.quote.author = response.author;

        resolve(response);
      },
        
        error => {
          this.quote.quote = "Angular is create when you grasp it."
          this.quote.author = "Vitalis Kirui"

          reject(error);

        }
      )
    }
    )

    return promise;
    
  }

}
