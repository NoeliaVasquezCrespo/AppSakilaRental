import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect frontend to backend

  apiUrlCountry = 'http://localhost:3000/country';
  apiUrlUser = 'http://localhost:3000/users';
  apiUrlAuth = 'http://localhost:3000/auth';
  apiUrlAddress = 'http://localhost:3000/address';

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  getAllData(): Observable<any> {
    return this._http.get(this.apiUrlCountry).pipe(
      catchError(this.handleError)
    );
  }

  getAddressData(): Observable<any> {
    return this._http.get(this.apiUrlAddress).pipe(
      catchError(this.handleError)
    );
  }

  
  
 

  //get single data Tasks
  getSingleData(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrlCountry}/'${id}'/film`).pipe(
      catchError(this.handleError)
    );
  }

  

  /*--------------- USER ---------------*/ 
  //get all data User
  getAllDataUser(): Observable<any> {
    return this._http.get(`${this.apiUrlUser}`);
  }

  //create data User
  createDataUser(data:any): Observable<any>{
    console.log(data,'createapi=>')
    return this._http.post(`${this.apiUrlUser}`,data)
  }
  
  //get single data User
  getSingleDataUser(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrlUser}/${ids}`);
  }

  /*--------------- AUTH ---------------*/ 
  createAuth(data:any): Observable<any>{
    console.log(data,'createapi=>')
    return this._http.post(`${this.apiUrlAuth}`,data)
  }



  // Manejo de errores de APIs
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
