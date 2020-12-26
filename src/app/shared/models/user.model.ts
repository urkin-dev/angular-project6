export interface User {
    id?: number;
    name: string;
    surname: string;
    type: number;
    phone: string;
    email: string;
    birthday: string;
}

export enum MyUserType {
    IT,
    sales_department,
    delivery_department,
    legal_department
  }
