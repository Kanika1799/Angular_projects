import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Expense } from './expense';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
private expensesURL = 'api/expenses';
  constructor(
    private http: HttpClient
  ) { }

}
