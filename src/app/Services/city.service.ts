import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icity } from '../viewmodels/icity';
import { IHotel } from '../viewmodels/ihotel';
import { IProgram } from '../viewmodels/iprogram';
import { ITrain } from '../viewmodels/itrain';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private CityList: Icity[]=[];
  constructor(private httpclient: HttpClient ) {}

  getCity(): Observable<Icity[]> {
    return this.httpclient.get<Icity[]>(`${environment.API_URL}/city`);
  }

  getHotelsByCityID(cityID: number): Observable<IHotel[]> {
    return this.httpclient.get<IHotel[]>(`${environment.API_URL}/hotels?cityID=${cityID}`);
  }

  getTrainsByCityID(cityID: number): Observable<ITrain[]> {
    return this.httpclient.get<ITrain[]>(`${environment.API_URL}/trains?cityID=${cityID}`);
  }
  getProgramByID(pID:number): Observable<IProgram> {
    console.log(pID)
    return this.httpclient.get<IProgram>(`${environment.API_URL}/programs/${pID}`);
  }

  saveProgram(program: IProgram): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };

    return this.httpclient.post<any>(`${environment.API_URL}/programs`, program, httpOptions);
  }
  viewProgram(programID:any) : Observable<any>{
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
      
    return this.httpclient.get<any>(`${environment.API_URL}/programs/${programID}`);

  }
  editProgram(programID:any, programBody:any) : Observable<any[]> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
      
    return this.httpclient.put<any>(`${environment.API_URL}/programs//${programID}` ,programBody, httpOptions);
  }

  deleteProgram(id:any) : Observable<any[]> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //,'Accept':' */*'
      //,'Authorization': 'my-auth-token'
        })};
      
    return this.httpclient.delete<any>(`${environment.API_URL}/programs/${id}`, httpOptions);
  }
}
