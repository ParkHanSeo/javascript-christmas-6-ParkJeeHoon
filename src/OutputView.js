import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, BENEFIT_MESSAGE } from './contants/message.js';

const OutputView = {

    outputWelCome() {
        Console.print(MESSAGE.WELCOME_MSG);
    },

    outputPreviewEventBenefit(day) {
        Console.print(MESSAGE.EVENT_BENEFIT_MSG(day)+'\n');
    },

}

export default OutputView
