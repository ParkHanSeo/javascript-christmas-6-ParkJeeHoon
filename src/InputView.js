import { Console } from "@woowacourse/mission-utils";
import Validation from './util/Validation.js';
import { INPUT_MESSAGE } from './contants/message.js';

const InputView = {
    async userInputVisitSchedule() {
        try{
            const VISIT_SCHEDULE = await Console.readLineAsync(INPUT_MESSAGE.INPUT_VISIT_SCHEDULE_MSG);
            Validation.inputVisitScheduleValidate(Number(VISIT_SCHEDULE));
            return Number(VISIT_SCHEDULE);
        }catch(error){
            Console.print(error.message);
            await this.userInputVisitSchedule();
        }
    },

    async userInputOrderMenu() {
        try{
            const ORDER_MENU = await Console.readLineAsync(INPUT_MESSAGE.INPUT_ORDER_MENU_MSG);
        }catch(error){

        }
    }
}

export default InputView