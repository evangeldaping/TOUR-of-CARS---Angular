import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Car } from './car';
import { MessageService } from './message.service';
 
@Injectable({
  providedIn: 'root'
})

export class CarService {
 
  private carsUrl = 'api/cars';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET cars from the server */
  getCars (): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
    .pipe(
      tap(_ => this.log('fetched cars')),
      catchError(this.handleError<Car[]>('getCars', []))
    );
  }

  /** GET car by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Car> {
    const url = `${this.carsUrl}/?id=${id}`;
    return this.http.get<Car[]>(url)
      .pipe(
        map(cars => cars[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} car id=${id}`);
        }),
        catchError(this.handleError<Car>(`getCar id=${id}`))
      );
  }
  
   /** GET car by id. Will 404 if id not found */
   getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      tap(_ => this.log(`fetched car id=${id}`)),
      catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  /* GET cars whose name contains search term */
  searchCars(term: string): Observable<Car[]> {
    if (!term.trim()) {
      // if not search term, return empty car array.
      return of([]);
    }
    return this.http.get<Car[]>(`${this.carsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found cars matching "${term}"`) :
         this.log(`no cars matching "${term}"`)),
      catchError(this.handleError<Car[]>('searchCars', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new car to the server */
  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, this.httpOptions).pipe(
      tap((newCar: Car) => this.log(`added car w/ id=${newCar.id}`)),
      catchError(this.handleError<Car>('addCar'))
    );
  }

  /** DELETE: delete the car from the server */
  deleteCar (car: Car | number): Observable<Car> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;

    return this.http.delete<Car>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted car id=${id}`)),
      catchError(this.handleError<Car>('deleteCar'))
    );
  }

  /** PUT: update the car on the server */
  updateCar (car: Car): Observable<any> {
    return this.http.put(this.carsUrl, car, this.httpOptions).pipe(
      tap(_ => this.log(`updated car id=${car.id}`)),
      catchError(this.handleError<any>('updateCar'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CarService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CarService: ${message}`);
  }

}