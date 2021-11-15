import { CreateComponent } from './breakfast-options/create/create.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Option } from './breakfast-options/option.model';
import { Collaborator } from './collaborator/collaborator.model';
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {


  constructor(private alert: MatSnackBar, private http: HttpClient) { }

  showMensagem(msg : string): void {
    this.alert.open(msg,' X ', {
        duration: 300000,
        horizontalPosition: "end",
        verticalPosition: "bottom"

  })
  }

  createOption(item: any): Observable<CreateComponent>{
    return this.http.post<CreateComponent>(`/api/listofoptions`, item)
  }

  listOptions(){
  return this.http.get<CreateComponent[]>(`/api/listofoptions`)
  }

  createCollaborator(item: any): Observable<String>{
    return this.http.post<String>(`/api/collaborator`, item)
  }

  listCollaborator(){
  return this.http.get<Collaborator[]>(`/api/collaborator`)
  }

  updateCollaborator(id: number, collaborator: Collaborator) {
    return this.http.put<Collaborator>(`/api/collaborator/${id}`, collaborator);
  }
}
