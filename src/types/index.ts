//создаем типы полей для объекта User
export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}