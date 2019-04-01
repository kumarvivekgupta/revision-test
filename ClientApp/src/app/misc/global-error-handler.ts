import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private toastr: ToastrService) { }
    handleError(error) {
        console.log('####', error);
        this.toastr.show(error.error || error.message || error.statusText || error);
        throw error;
    }
}
