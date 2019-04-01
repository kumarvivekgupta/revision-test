// interface IDataBaseObj {
//     tableName: string;    
//     id: string;
// }

// export interface IStudent extends IDataBaseObj {
//     name?: string;
//     type?: string;
//     origin?: string;
//     age?: number;
//     dateCreated?: Date;
//     dateObtained?: Date;

//     companyKey?: string;
// }

// export class Student implements IStudent {
//     static tableName: string = 'Products';
//     id: string;

//     constructor(props: IStudent) {
//         Object.keys(props).forEach(prop => {
//             const value = props[prop];
//             this[prop] = value;
//         });
//         // OPTIONAL: If you are using a different primary key than "id" you can transform this here
//         // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
//     }
// }