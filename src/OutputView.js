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
        if(discount.christmasDiscount !== 0)
            Console.print(BENEFIT_MESSAGE.CHRISTMAS_DDAY_DISCOUNT(new Intl.NumberFormat().format(discount.christmasDiscount)));
        if(discount.weekendDiscount !== 0)
            Console.print(BENEFIT_MESSAGE.WEEKDAY_DISCOUNT(new Intl.NumberFormat().format(discount.weekendDiscount), discount.weekday));
        if(discount.specialDiscount !== 0)
            Console.print(BENEFIT_MESSAGE.SPECIAL_DISCOUNT(new Intl.NumberFormat().format(discount.specialDiscount)));
        if(gift !== '' && gift !== undefined)
            Console.print(BENEFIT_MESSAGE.GIFT_EVENT(gift));
        this.checkBenefitOunput(discount, gift);
    },

    checkBenefitOunput(discount, gift) {
        if (discount.christmasDiscount === 0 && discount.weekendDiscount === 0 && discount.specialDiscount === 0 && gift === undefined) {
            return Console.print('없음');
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
