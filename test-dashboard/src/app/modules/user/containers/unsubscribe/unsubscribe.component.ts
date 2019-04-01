import {OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

export abstract class UnsubscribeComponent implements OnDestroy {
  protected destroy$: Subject<boolean> = new Subject<boolean>();

  protected constructor() {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
