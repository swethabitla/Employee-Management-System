import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '../../../node_modules/angularfire2/firestore';
import { Message } from '../models/Message';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messagesCollection: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;

  constructor(private firestore: AngularFirestore) {
    this.messagesCollection = this.firestore.collection('messages', ref =>
      ref.orderBy('date', 'desc')
    );
  }

  getMessages(): Observable<Message[]> {
    this.messages = this.messagesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Message;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.messages;
  }

  addMessage(message: Message): void {
    this.messagesCollection.add(message);
  }
}
