import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../modules/Contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly url = 'http://localhost:8080/ChercherContacts?mc=';
  private readonly urlSave = 'http://localhost:8080/contacts';
  constructor(private  http: HttpClient) { }

  /* get contact from server side with httpClient */
  getAllContact(mc: string, page: number, size: number) {
    return this.http.get(this.url + mc + '&page=' + page + '&size=' + size);
  }

  saveContact( contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.urlSave , contact);
  }
}
