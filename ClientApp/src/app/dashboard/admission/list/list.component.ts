import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListDataSource } from './list-datasource';
import { AdmissionService } from '../admission.service';
import { Student } from 'src/app/shared/student/student';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'phone', 'email', 'actions'];
  constructor(private studs: AdmissionService, private toastr: ToastrService) {

  }
  ngOnInit() {
    this.dataSource = new ListDataSource(this.paginator, this.sort);
    this.studs.getAll()
      .subscribe(a => this.dataSource.data.next(a));
    this.dataSource.connect();
  }
  delete(s: Student, ev) {
    if (ev === 'yes') {
      this.studs.delete('' + s.enrollmentId)
        .subscribe(() => this.toastr.success('Delete Successful'));

      this.studs.getAll()
        .subscribe(a => this.dataSource.data.next(a));
    }
  }
}
