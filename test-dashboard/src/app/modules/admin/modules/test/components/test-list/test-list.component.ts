import {Component, OnInit} from '@angular/core';
import {Test} from '../../../../../core/models/test.model';
import {YotestAdminApiService} from '../../../../../core/services/yotest-admin-api.service';
import {MatDialog} from '@angular/material';
import {QuestionContainerComponent} from '../../../question/components/question-container/question-container.component';
import {ActivatedRoute, Router} from '@angular/router';
import {TestManageContainerComponent} from '../test-manage-container/test-manage-container.component';
import {DeleteTestComponent} from '../../../../../shared/components/delete-test/delete-test.component';
import {config} from 'rxjs';
import {Question} from '../../../../../core/models/question.model';
import {AlertService} from '../../../../../core/services/alert';

@Component({
  selector: 'yot-test-list', templateUrl: './test-list.component.html', styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  testArr: Test[] = [];
  res;

  constructor(private service: YotestAdminApiService, private dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute, private alert: AlertService) {
  }

  ngOnInit(): void {
    this.service.getTests().subscribe(tests => this.testArr = tests);
  }

  open() {
    const ref = this.dialog.open(QuestionContainerComponent, {
      width: '100%', height: '100%', maxWidth: '100vw', maxHeight: '100vh', data: {
        id        : 1,
        question  : 'test question',
        diagram   : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXw8PCr3pWq3pPx8PKn3Y+44af08fXi7N+74qvg7Nvl7eL18fa34aW14KL38vml3Y3V6c3C5LWw35zs7+vA58WmAAAB+ElEQVR4nO3c23HCQBBFQSMQbxA2+edqE4FmqF15VPQJYLhd+M/Ufn1JkiRJkvSpbUOt+NTzEOkcOVbz1PYw7eabbvu1nvq7tdvMN4yhWRVPFZ1FSFh/FiFh/VmEhPVnERLWn0VIWH8WIWH9WYSE9WcREtafRUhYfxYhYf1ZhIT1Z/2H8L6f7XKehkCxU0sLNz/HQNfbGCh0ahyWFm4i3850uMx/Pfdj5FQE2FgYaXcK/L5lfwytj0RImI+QMBshYT5CwmyEhPkICbMREuYjJMxGSJiPkDAbIWE+QsJshIT5PkI436WocAg8cbCbHpGXHq6R5xIW/z/+cDuc5nvEnnoInVr6txjDeAn8AS5/ym+i6s4iJKw/i5Cw/ixCwvqzCAnrzyIkrD+LkLD+LELC+rMICevPIiSsP4uQsP4sQsJ3bnk1wqsRXo14J0LCfISE2QgJ8xESZiMkzEdImI2QMB8hYTZCwnyEhNkICfMREmYjJMxHWFoYezUiJBxX/GrE6Rn6wMiloq9GBL7B1ydGqvmbqIYREva61S5Cwl632kVI2OtWuwgJe91qFyFhr1vtIiTsdatdhIS9brWLkLDXrXYREva61S5Cwl632kVI2OtWu9oKQ089XJcWtlu1PUeeerh+LyxsuWo7/9DDq96mVaySJEmSJKlMvz/upTgVw3a/AAAAAElFTkSuQmCC',
        created_at: null,
        updated_at: null,
        options   : [
          {
            id: 1, option: 'cs', diagram: null, created_at: null, updated_at: null
          }
        ]
      }
    });
    ref.afterClosed().pipe().subscribe((r) => {
      this.res   = r;
      const data = {
        question      : this.res.question,
        options       : this.res.options,
        correct_answer: this.res.correct_option,
        diagram       : this.res.diagram
      };
      console.log(data);
      this.service.createQues(data).subscribe((r) => {
        this.alert.success('Ques Added');
      });
    });
  }

  editTest(t: Test) {
    this.dialog.open(TestManageContainerComponent, {
      width: '100%', height: '100%', maxWidth: '100vw', maxHeight: '100vh', data: t
    });
  }

  deleteTest(t: Test) {
    const ref = this.dialog.open(DeleteTestComponent, {
      width: '25%', height: '30%'
    });
    ref.afterClosed().pipe().subscribe((r) => {
      if (r === '1') {
        this.service.deleteTest(t.id).subscribe((res) => {
          console.log(res);
        });
      }
    });
  }
}
