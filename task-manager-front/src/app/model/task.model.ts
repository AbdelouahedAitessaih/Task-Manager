export class Task {
  _id?: string;
  title:string;
  description:string;
  estimation?:number;
  statut?:string;
  _groupId?:number;
  completed?:boolean;
  createdAt?:Date;
  updatedAt?:Date;
}
