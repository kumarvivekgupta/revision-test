import { Injectable } from '@angular/core';
import { CrudService } from '../../../service';
import { ICache } from './ICache';

@Injectable({
  providedIn: 'root'
})
export class InMemoryCache implements ICache {
  static readonly MODEL_KEY = 'ngxcrudmodelsstore';
  private _service: CrudService;
  ModelMap: Map<string, string>;
  constructor() {}

  registerService(crud: CrudService) {
    this._service = crud;
  }

  registerModel(key: string, value: string) {
    this.ModelMap.set(key, value);
  }
  unregisterModel(key: string, value: string) {
    this.ModelMap.delete(key);
  }

  add<T extends IModel>(data: T) {
    const result = <T>{};
    for (const id in data) {
      if (!result.hasOwnProperty(id)) {
        (<any>result)[id] = (<any>data)[id];
      }
    }
    return result;
  }


  public DATA<T extends IModel>(): T[] {
    return [];
  }

  addEntity<T>(key: string, entity: T): void {
    throw new Error('Method not implemented.');
  }
  addEntities<T>(key: string, entities: T[]): void {
    throw new Error('Method not implemented.');
  }
  updateEntity<T>(key: string, entity: T): void {
    throw new Error('Method not implemented.');
  }
  updateEntities<T>(key: string, entities: T[]): void {
    throw new Error('Method not implemented.');
  }
  removeEntity<T>(key: string, entity: T): void {
    throw new Error('Method not implemented.');
  }
  removeEntities<T>(key: string, entities: T[]): void {
    throw new Error('Method not implemented.');
  }
  clear<T>(key: string): void {
    throw new Error('Method not implemented.');
  }
  clearAll(): void {
    throw new Error('Method not implemented.');
  }
}
