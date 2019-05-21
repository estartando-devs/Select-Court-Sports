import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DbService {

  constructor(private db: AngularFireDatabase) { }

  add(item: any) {
    this.db.list('courts').push(item)
    .then((result: any) => {
      console.log(result.key);
    });
  }

  update(item: any, key: string) {
    this.db.list('courts').update(key, item)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getAll() {
    return this.db.list('courts')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      })
    );
  }

  delete(key: string) {
    this.db.object(`courts/${key}`).remove()
  }
}
