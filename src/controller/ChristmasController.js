import { Console } from "@woowacourse/mission-utils";
import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import Discount from '../model/Discount.js';
import Event from '../model/Event.js';
import Order from '../model/Order.js';
import VisitDate from '../model/VisitDate.js';

class ChristmasController {

    #visitSchedule;
    #orderMenu;

    async christmasProcess(){
        OutputView.outputWelCome();
        await this.#inputVisitSchedule();
        await this.#inputOrderMenu();
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

    async #inputOrderMenu(){
        try{
            const INPUT_ORDER_MENU = await InputView.userInputOrderMenu();
            this.#orderMenu = new Order(INPUT_ORDER_MENU);
        }catch(error){
            Console.print(error.message);
            await this.#inputOrderMenu();
        }
    }

}