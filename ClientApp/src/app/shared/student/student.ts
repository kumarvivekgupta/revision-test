export interface IStudent {
    enrollmentId: number;
    studentName: string;
    phone: number;
    phone2: number;
    isWhatsapp: boolean;
    isWhatsapp2: boolean;
    passingCollege: string;
    batchId: string;
    fatherName: string;
    email: string;
    passoutYear: number;

    haveDoneCoachingInPast: boolean;
    pastCoaching: string;
    admissionSource: string;
    aadharNo: number;
    photo: string;
    idCardIssued: boolean;
}
export class Student implements IStudent {
    enrollmentId: number;
    studentName: string;
    phone: number;
    phone2: number;
    isWhatsapp: boolean;
    isWhatsapp2: boolean;
    passingCollege: string;
    batchId: string;
    fatherName: string;
    passoutYear: number;
    admissionSource: string;
    aadharNo: number;
    photo: string;
    idCardIssued: boolean;
    email: string;
    batchStudents: IBatch[];
    haveDoneCoachingInPast: boolean;
    pastCoaching: string;
}
export interface IBatch {
    batchId: string;
    description?: string;
    courseId: string;
    start: string;
    branchId?: string;
}
