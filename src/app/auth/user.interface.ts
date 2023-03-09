export interface User {
    id?: number,
    idStatus: string,
    idTipoUser: string,
    Login: string,
    remember_me: boolean,
    password: string,
    HashPass: string
}