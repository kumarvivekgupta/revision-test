import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgxCrudConfig } from '../ngx-crud-config';
import { CreateService } from './_create.service';
import { UpdateService } from './_update.service';
import { ReadService } from './_read.service';
import { DeleteService } from './_delete.service';
import { ModelConfig } from '../misc/model-config';
import { CacheEvent } from './cache/CacheEvent';
import { CrudEvent } from './cache/CrudEventType.enum';

@Injectable()
export class CrudService {
  public controller: string;
  public Optimistic: boolean;
  modelConfig = new Map<string, ModelConfig>();
  private _events = new BehaviorSubject<CacheEvent>({ type: CrudEvent.Initialize, message: 'Initialized', isOptimistic: false });
  public get events() {
    return this._events;
  }
  public set events(value) {
    this._events = value;
  }

  public Loading = new BehaviorSubject<boolean>(false);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(config: NgxCrudConfig,
    private CS: CreateService,
    private RS: ReadService,
    private US: UpdateService,
    private DS: DeleteService,
  ) {
    this.controller = config.ApiEndpoint;
    if (config.httpOptions) {
      this.httpOptions = config.httpOptions;
    }
    this.Optimistic = config.Optimistic;

    // Caches
    // User Consent
    // error Handler Not Use
    // Initialize Services
    CS.registerService(this);
    RS.registerService(this);
    US.registerService(this);
    DS.registerService(this);
  }

  create<T extends IModel>(data: T) {
    this.CS.create(data);
  }
  createSub<T extends IModel>(data: T): Observable<T | T[]> {
    return this.CS.createSubscription(data);
  }
  read<T extends IModel>() {
    this.RS.read();
  }
  readSub<T extends IModel>(): Observable<T | T[]> {
    return this.RS.readSubscription();
  }
  update<T extends IModel>(data: T) {
    this.US.update(data);
  }
  updateSub<T extends IModel>(data: T): Observable<T | T[]> {
    return this.US.updateSubscription(data);
  }
  delete<T extends IModel>(data: T) {
    this.DS.delete(data);
  }
  deleteSub<T extends IModel>(data: T): Observable<T | T[]> {
    return this.DS.deleteSubscription(data);
  }
  getKey<T extends IModel>(data: T): string {
    if (this.modelConfig.has(data.constructor.name)) {
      return Object.keys(data).find(a => a === this.modelConfig[data.constructor.name].key);
    }
    if (data['id']) {
      return data['id'];
    }
    throw new Error('Class not registered');
  }

  // getCacheKey<T extends IModel>(data: T): string {
  //   return CacheService.MODEL_KEY + this.getKey<T>(data);
  // }

  cleanCache() {
    throw new Error('Not Implemented');
  }

  registerModel(type: Object, config: ModelConfig) {
    this.modelConfig.set(type.constructor.name, config);
  }

  unregisterModel(type: Object, config: ModelConfig) {
    this.modelConfig.delete(type.constructor.name);
  }
}
