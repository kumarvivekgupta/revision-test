import {Component, OnInit} from '@angular/core';
import {YotestApiService} from '../../../core/services/yotest-api.service';
import {Test} from '../../../core/models/test.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../core/services/alert';

@Component({
  selector: 'yot-test-instructions',
  templateUrl: './test-instructions.component.html',
  styleUrls: ['./test-instructions.component.scss']
})

export class TestInstructionsComponent implements OnInit {
  // test: Test;
  test: Test = {
    id: 4,
    title: 'Scholarship Test',
    description: 'This is a test of scholarship for the candidates.',
    instructions: [
      'There are a total of 60 questions',
      'Each question carry 4 marks',
      'For every correct answer you will be awarded 4 marks',
      'There is no negative marking for incorrect answer',
      'Any electronic device is not allowed inside test',
      'Cheating will result in disqualification',
      'Devslane reserves the right to disqualify without any prior information'
    ],
    duration: 150,
    date: '35-5-5'
  };

  constructor(private yotService: YotestApiService, private router: Router, private activatedRoute: ActivatedRoute,private alert:AlertService) {
  }

  ngOnInit() {
    // TODO uncomment below line later when test instructions have been correctly added
    // this.test = this.yotService.test;
  }

  startExam() {
    this.yotService.getQuestions().subscribe((res) => {
      this.router.navigate(['../questions'], {relativeTo: this.activatedRoute});
    }, (error) => {
      console.log(error);
      console.log('some error occured');
    });
  }
}
