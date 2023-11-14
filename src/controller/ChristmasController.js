import { Console } from "@woowacourse/mission-utils";
import InputView from '../InputView.js';
import OutputView from '../OutputView.js';
import Discount from '../model/Discount.js';
import DecemberEvent from '../model/DecemberEvent.js';
import Order from '../model/Order.js';
import VisitDate from '../model/VisitDate.js';


class ChristmasController {

    #visitSchedule;
    #orderMenu;
    #discount;
    #decemberEvent;
    #totalDiscount;

    constructor() {
        this.#discount = new Discount();
        this.#decemberEvent = new DecemberEvent();
    }

    async christmasProcess(){
        OutputView.outputWelCome();
        await this.#inputVisitSchedule();
        await this.#inputOrderMenu();
        const DISCOUNT = this.#discountCheck();
        const EVENT = this.#eventCheck();
        this.#playEvent(DISCOUNT, EVENT);
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

    #discountCheck(){
        const CHRISTMAS_DISCOUNT = this.#discount.christmasDiscountCheck(this.#visitSchedule.day);
        const WEEKEND_DISCOUNT = this.#discount.weekendDiscountCheck(this.#visitSchedule.day, this.#orderMenu.order);
        const SPECIAL_DISCOUNT = this.#discount.specialDiscountCheck(this.#visitSchedule.day);
        const DISCOUNT = {CHRISTMAS_DISCOUNT, WEEKEND_DISCOUNT, SPECIAL_DISCOUNT};
        this.#totalDiscount = (CHRISTMAS_DISCOUNT + WEEKEND_DISCOUNT.weekendDiscount + SPECIAL_DISCOUNT);
        return DISCOUNT;
    }

    #eventCheck(){
        const GIFT_EVENT = this.#decemberEvent.giftEventCheck(this.#totalDiscount, this.#orderMenu.totalOrderAmount);
        const BADGE = this.#decemberEvent.badgeEventCheck();
        const EVENT = {GIFT_EVENT, BADGE};
        return EVENT;
    }

    #playEvent(discount, event){
        OutputView.outputPreviewEventBenefit(this.#visitSchedule.day);
        OutputView.outputOrderMenu(this.#orderMenu.order);
        OutputView.outputDiscountBeforeTotalAmount(this.#orderMenu.totalOrderAmount);
        OutputView.outputGiftMenu(event.GIFT_EVENT.champagneGift);
        OutputView.outputBenefitList(discount, event.GIFT_EVENT.champagneGift);
        OutputView.outputTotalBenefitAmount(event.GIFT_EVENT.giftTotalDiscount);
        OutputView.outputDiscountAfterTotalAmount(this.#orderMenu.totalOrderAmount-this.#totalDiscount);
        OutputView.outputEventBadge(event.BADGE);
    }

}

export default ChristmasController
