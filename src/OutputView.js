import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, BENEFIT_MESSAGE } from './contants/Message.js';

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
            const [MENU, QUANTITY] = data.split('-');
            Console.print(MESSAGE.ORDER_MENU_MSG(MENU, QUANTITY));
        });
    },

    outputDiscountBeforeTotalAmount(beforeTotalAmount) {
        Console.print(MESSAGE.TOTAL_ORDER_MSG);
        Console.print(MESSAGE.AMOUNT_MSG(new Intl.NumberFormat().format(beforeTotalAmount)));
    },

    outputGiftMenu(champagneGift) {
        Console.print(MESSAGE.GIFT_MENU_MSG);
        Console.print(MESSAGE.ORDER_MENU_MSG(champagneGift, 1));
    },

    outputBenefitList(discount, gift) {
        Console.print(MESSAGE.BENEFIT_LIST_MSG);
        if(discount.CHRISTMAS_DISCOUNT !== 0)
            Console.print(BENEFIT_MESSAGE.CHRISTMAS_DDAY_DISCOUNT(new Intl.NumberFormat().format(discount.CHRISTMAS_DISCOUNT)));
        if(discount.WEEKEND_DISCOUNT !== 0)
            Console.print(BENEFIT_MESSAGE.WEEKDAY_DISCOUNT(new Intl.NumberFormat().format(discount.WEEKEND_DISCOUNT), discount.WEEKDAY));
        if(discount.SPECIAL_DISCOUNT !== 0)
            Console.print(BENEFIT_MESSAGE.SPECIAL_DISCOUNT(new Intl.NumberFormat().format(discount.SPECIAL_DISCOUNT)));
        if(gift !== '' && gift !== undefined)
            Console.print(BENEFIT_MESSAGE.GIFT_EVENT(gift));
        this.checkBenefitOunput(discount, gift);
    },

    checkBenefitOunput(discount, gift) {
        if (discount.CHRISTMAS_DISCOUNT === 0 && discount.WEEKEND_DISCOUNT === 0 && discount.SPECIAL_DISCOUNT === 0 && gift === '') {
            return Console.print(MESSAGE.NONE);
        }
    },

    outputTotalBenefitAmount(amount) {
        Console.print(MESSAGE.TOTAL_BENEFIT_AMOUNT_MSG);
        Console.print(MESSAGE.DISCOUNT_MSG(new Intl.NumberFormat().format(amount)));
    },

    outputDiscountAfterTotalAmount(amount) {
        Console.print(MESSAGE.EXPECTED_PAYMENT_AMOUNT_MSG);
        Console.print(MESSAGE.AMOUNT_MSG(new Intl.NumberFormat().format(amount)));
    },

    outputEventBadge(badge) {
        Console.print(MESSAGE.EVENT_BADGE_MSG);
        Console.print(MESSAGE.BADGE_MSG(badge));
    }
}

export default OutputView
