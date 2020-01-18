import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  contacts = [
    {
      "user": "Sanket",
      "pic": "../../assets/images/s.jpg"
    },
    {
      "user": "Riddhi",
      "pic": "../../assets/images/r.jpg"
    }
  ]

  constructor() { }

  getContacts(username) {
    return this.contacts.filter(contact => contact.user.toLowerCase() != username.toLowerCase());
  }

}
