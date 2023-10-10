import { BehaviorSubject, Observable } from "rxjs";

export abstract class Store<T> {
  private state$!: BehaviorSubject<T>;

   constructor (initiaState?: T |  any) {
    this.state$ = new BehaviorSubject(initiaState);
  }

  getAll = (): T => this.state$.getValue();

  getAll$ = (): Observable<T> => this.state$.asObservable();

  store = (nexState: T): void => (this.state$.next(nexState));
}
