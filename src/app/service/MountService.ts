import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mount} from '../model/Mount';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MountService {
  private baseUrl = 'http://localhost:8080/alexander/api/mounts';

  constructor(private  http: HttpClient) {
  }

  getMount(id: number): Observable<Mount> {
    return this.http.get<Mount>(`${this.baseUrl}/${id}`);
  }
  createMount(mount: Mount, id: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, mount);
  }
  updateMount(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMount(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMountsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
