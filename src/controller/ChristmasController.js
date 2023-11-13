import InputView from '../InputView.js';

class ChristmasController {

    #visitSchedule;

    async christmasProcess(){
        this.#inputVisitSchedule();
    }

    async #inputVisitSchedule(){
        this.#visitSchedule = InputView.userInputVisitSchedule();
    }

}