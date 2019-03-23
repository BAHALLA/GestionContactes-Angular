import { Component, OnInit } from '@angular/core';
import {ContactService} from '../services/contact-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pageContacts: any;
  rechercheForm: FormGroup;
  mc = '';
  page = 0;
  size = 5;
  pages; any;
  constructor(private contactservice: ContactService , private frombuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.rechercheForm = this.frombuilder.group(
      {
        mc : ['', [Validators.maxLength(20)]]
      }
    );
  }
  /* get contact by key word in their names */
  onSubmit() {
    this.mc = this.rechercheForm.get(['mc']).value;
    this.contactservice.getAllContact(this.mc, this.page, this.size).subscribe(
      (data) => {
        this.pageContacts = data;
        this.pages = new Array(this.pageContacts .totalPages);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /* get the i page from the server   */
  gotoPage(i: number) {
    this.page = i;
    this.contactservice.getAllContact(this.mc, this.page , this.size).subscribe(
      (data) => {
        this.pageContacts = data;
        this.pages = new Array(this.pageContacts .totalPages);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
