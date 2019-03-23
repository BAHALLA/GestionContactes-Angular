import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../modules/Contact';
import {ContactService} from '../services/contact-service.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  addForm: FormGroup;
  contact: Contact;
  mode = 1;
  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.addForm = this.formBuilder.group(
      {
        name : ['', [Validators.maxLength(20), Validators.required]],
        prename : ['', [Validators.required , Validators.maxLength(20)]],
        date : ['' , [Validators.required]],
        email : ['' , [Validators.email, Validators.required]],
        tel : ['' , [Validators.required]]
      }
    );
  }
  onSubmit() {
    this.contact = new Contact();
    this.contact.nom = this.addForm.get(['name']).value;
    this.contact.prenom = this.addForm.get(['prename']).value;
    this.contact.dateNaissance = this.addForm.get(['date']).value;
    console.log('test date ' + this.contact.dateNaissance);
    this.contact.email = this.addForm.get(['email']).value;
    this.contact.tel = this.addForm.get(['tel']).value;
    /*call service to send data to server side*/
    this.contactService.saveContact(this.contact).subscribe(
      (data) => {
        this.contact = data;
        this.mode = 2;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.contact);
  }
}
