import Validation from '../util/Validation.js';

class VisitDate {

    #day;

    constructor(day) {
        this.#day = day;
        this.#validate();
    }

    #validate() {
        Validation.inputVisitScheduleValidate(this.#day);
    }

    getDay() {
        return this.#day;
    }

}

export default VisitDate