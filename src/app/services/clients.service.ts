import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Client } from '../models/Client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clients: Observable<Client[]>;
  clientDoc: AngularFirestoreDocument<Client>;

  constructor(private firestore: AngularFirestore) {
    this.clientsCollection = this.firestore.collection('clients', ref => ref);
  }

  getClients(): Observable<Client[]> {
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.clients;
  }

  addClient(client: Client): void {
    this.clientsCollection.add(client);
  }

  deleteClient(client: Client): void {
    this.firestore.doc(`clients/${client.id}`).delete();
  }

  getClient(id: string): Observable<Client> {
    const client = this.firestore.doc<Client>(`clients/${id}`);
    return client.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Client;
          data.id = action.payload.id;
          return data;
        }
      })
    );
  }

  updateClient(client: Client): void {
   this.clientDoc =  this.firestore.doc(`clients/${client.id}`);
   this.clientDoc.update(client);
  }
}
