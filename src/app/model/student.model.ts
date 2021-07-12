import { Base } from "./base.model";

export class Student extends Base {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public major: string,
        public gradePointAverage: number,
        public description: string
    ) {
        super();
    }
}