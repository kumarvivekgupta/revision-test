import { Component, OnInit, Input } from '@angular/core';
import { Student, IBatch } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input() studentData: Student;
  batches: IBatch[] = [
    { batchId: '19CBT', description: '', courseId: null, start: null },
    { batchId: '19CBT.B2', description: '', courseId: null, start: null },
    { batchId: '19RRBCE', description: '', courseId: null, start: null },
    { batchId: '19RRBEC', description: '', courseId: null, start: null },
    { batchId: '19RRBEE', description: '', courseId: null, start: null },
    { batchId: '19RRBME', description: '', courseId: null, start: null },
  ];
}
