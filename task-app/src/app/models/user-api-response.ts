export interface DataApiResponse<T> {
    data: T[]
}

export interface UserLoginApiResponse {
    loggedIn: boolean,
    userId: number,
    userName: string
}

export interface UserRegisterApiResponse {
    register: boolean,
}