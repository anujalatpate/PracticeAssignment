import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  ChkPrime(num: number): boolean {
    for (let i = 2; i <= Math.sqrt(num); i++){
      if (num % i === 0) return false;
    }
    return num > 1;
  }
}
