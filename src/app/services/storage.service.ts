import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageSub = new Subject<{ key: 'value' }>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }
  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next({ key: data });
    console.log(this.storageSub);

  }

  constructor() { }
}
