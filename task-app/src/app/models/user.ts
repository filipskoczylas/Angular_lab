export class User {
    userId: number;
    userName:string;
    userIsOnline: boolean;


    constructor(userId: number, userName: string, userIsOnline:boolean = false) {
       this.userId = userId;
       this.userName = userName;
       this.userIsOnline = userIsOnline;
    }
}