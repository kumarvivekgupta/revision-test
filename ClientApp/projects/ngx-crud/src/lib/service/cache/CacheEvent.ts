import { CrudEvent } from './CrudEventType.enum';


export class CacheEvent {
    isOptimistic = true;
    data?: any[] | any;
    tableName?: string;
    type: CrudEvent;
    keyProp?: string;
    keyValue?: string;
    message: string;
    title?: string;
}

