import InputView from '../InputView.js';

class ChristmasController {
    async christmasProcess(){
        this.#inputVisitSchedule();
    }

    async #inputVisitSchedule(){
        try{
            const VISIT_SCHEDULE = new InputView.userInputVisitSchedule();
        }catch(error){

        }
    }

}