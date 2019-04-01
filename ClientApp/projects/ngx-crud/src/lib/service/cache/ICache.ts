import { CrudService } from '../crud.service';

export interface ICache {
    addEntity<T>(key: string, entity: T):  void;
    addEntities<T>(key: string, entities: T[]):  void;

    updateEntity<T>(key: string, entity: T):  void;
    updateEntities<T>(key: string, entities: T[]):  void;

    removeEntity<T>(key: string, entity: T):  void;
    removeEntities<T>(key: string, entities: T[]):  void;

    clear<T>(key: string):  void;
    clearAll():  void;
}
