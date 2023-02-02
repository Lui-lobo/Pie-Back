export interface User {
    id?: number,
    idStatus: string,
    idTipoUser: string,
    Login: string,
    remember_me: boolean,
    PassWord: string,
    HashPass: string
}