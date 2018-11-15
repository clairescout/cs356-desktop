import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private googleApiKey = 'AIzaSyBHGmlJTnblR5Jy58Wbhiy3p576i8BMLRw';
  private googleBaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  currentBook: any;

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    this.getGoogleBooks();
  }

  getGoogleBooks() {
    this.httpClient.get(`${this.googleBaseUrl}?isbn:9780545010221&key=${this.googleApiKey}`).subscribe( data => {
      console.log(data);
      // console.log(JSON.stringify(data));
      const data_string = JSON.stringify(data);
      this.currentBook = JSON.parse(data_string).items[0].volumeInfo;
      console.log(this.currentBook);
    });
  }

}
