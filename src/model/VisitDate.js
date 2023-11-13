import Validation from '../util/Validation.js';

class VisitDate {

    constructor(day) {
        this.day = day;
        this.#validate();
    }

    #validate() {
        Validation.inputVisitScheduleValidate(this.day);
    }

}

export default VisitDate