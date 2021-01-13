import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ANGyStoreService {

  constructor() { }

  public sayHello(): string {
    return "Hello";
  }
}
