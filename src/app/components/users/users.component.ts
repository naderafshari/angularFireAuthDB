import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface UserInfo {
  firstName: string;
  LastName: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  firstName: string;
  lastName: string;
  usersCol: AngularFirestoreCollection<UserInfo>;
  users: Observable<UserInfo[]>;
  
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
  }

  addUser() {
    this.afs.collection('users').doc('userInfo').set({'firstName': this.firstName, 
                                                      'lastName': this.lastName
                                                    });  
  }

}
