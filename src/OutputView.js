import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, BENEFIT_MESSAGE } from './contants/message.js';

const OutputView = {

    outputWelCome() {
        Console.print(MESSAGE.WELCOME_MSG);
    },

    outputPreviewEventBenefit(day) {
        Console.print(MESSAGE.EVENT_BENEFIT_MSG(day)+'\n');
    },

    outputOrderMenu(orderMenu) {
        Console.print(MESSAGE.TOTAL_MENU_MSG);
        orderMenu.forEach((data, idx) => {
            const [menu, quantity] = data.split('-');
            Console.print(MESSAGE.ORDER_MENU_MSG(menu, quantity));
        });
    },

}

export default OutputView
