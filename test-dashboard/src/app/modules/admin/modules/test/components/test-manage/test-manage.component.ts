import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../../../../core/models/test.model';
import {YotestAdminApiService} from '../../../../../core/services/yotest-admin-api.service';

@Component({
  selector: 'yot-test-manage',
  templateUrl: './test-manage.component.html',
  styleUrls: ['./test-manage.component.scss']
})
export class TestManageComponent implements OnInit {
  @Input() test: Test;
  index = 0;
  questionSet: any;

  constructor(private service: YotestAdminApiService) {

  }

  ngOnInit(): void {
  }

  testCreated(test: any) {
    this.service.createTest(test).subscribe(t => {
      this.test = t;
      this.index++;
    });
  }
}
