import { CacheLocation } from './misc/cache-location';

export class NgxCrudConfig {
    ApiEndpoint: string;
    httpOptions?: any;
    /** Future feature, but I'll take care of it, just configure it now and it'll be working in future. */
    cache = CacheLocation.None;
    errorHandler?: Function;
    Optimistic = true;
    UserConsentRequired: false;
}
