import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Planet {
  name: string;
  type: string;
  moons: number;
}
@Injectable({
  providedIn: 'root'
})
export class IonicRestService {
  URL: string = 'https://jsonblob.com/1133493103792873472';
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  addPlanet(planet: Planet): Observable<any> {
    return this.http
    .post<Planet>(`${URL}/`, planet, this.httpHeader)
    .pipe(catchError(this.handleError<Planet>('Add Planet')));
  }

  getPlanet(id: any): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${this.URL}/` + id).pipe(
      tap((_) => console.log(`Planet fetched: ${id}`)),
      catchError(this.handleError<Planet[]>(`Get planet id=${id}`))
    );
  }
  getPlanetList(): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${this.URL}/`).pipe(
      tap((Planet) => console.log('Planet fetched!')),
      catchError(this.handleError<Planet[]>('Get planet', []))
    );
  }
  updatePlanet(id: any, planet: Planet): Observable<any> {
    return this.http.put(`${URL}/` + id, planet, this.httpHeader).pipe(
      tap((_) => console.log(`Planet updated: ${id}`)),
      catchError(this.handleError<Planet[]>('Update planet'))
    );
  }
  deletePlanet(id: any): Observable<Planet[]> {
    return this.http.delete<Planet[]>(`${URL}/` + id, this.httpHeader).pipe(
      tap((_) => console.log(`Planet deleted: ${id}`)),
      catchError(this.handleError<Planet[]>('Delete planet'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };

  }
}
