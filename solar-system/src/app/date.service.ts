export class DateService {
    constructor() {}
    calculateAge(yob:number):number{
        let d:Date = new Date();
        let currentYear:number = d.getFullYear();
        return currentYear - yob;


    }



}