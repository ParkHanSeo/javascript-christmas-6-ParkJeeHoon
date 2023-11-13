import InputView from '../InputView.js';

class ChristmasController {

    #visitSchedule;

    async christmasProcess(){
        OutputView.outputWelCome();
        this.#inputVisitSchedule();
    }

    async #inputVisitSchedule(){
        try{
            const INPUT_VISIT_SCHEDULE = await InputView.userInputVisitSchedule();
            this.#visitSchedule = new VisitDate(INPUT_VISIT_SCHEDULE);
        }catch(error){
            Console.print(error.message);
            await this.#inputVisitSchedule();
        }
    }

}