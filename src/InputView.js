import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from './contants/message.js';

const InputView = {
    async userInputVisitSchedule() {
        return await Console.readLineAsync(INPUT_MESSAGE.INPUT_VISIT_SCHEDULE_MSG);
    },

    async userInputOrderMenu() {
        const ORDER_MENU = await Console.readLineAsync(INPUT_MESSAGE.INPUT_ORDER_MENU_MSG);
        return ORDER_MENU.split(',');
    }
}

export default InputView