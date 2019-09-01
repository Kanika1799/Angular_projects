import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Expense } from './expense';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const expenses = [
      {price: 2000 , activity: 'Food'},
      {price: 4000 , activity: 'Rent'},
      {price: 3000 , activity: 'Entertainment'}
    ];
    return {expenses};
  }
}