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

    constructor() {
        this.#discount = new Discount();
        this.#decemberEvent = new DecemberEvent();
    }

    async christmasProcess(){
        OutputView.outputWelCome();
        await this.#inputVisitSchedule();
        await this.#inputOrderMenu();
        const DISCOUNT = this.#discountCheck();
        const EVENT = this.#eventCheck(DISCOUNT);
        this.#outputEventResult(DISCOUNT, EVENT);
    }

    async #inputVisitSchedule(){
        try{
            const INPUT_VISIT_SCHEDULE = await InputView.userInputVisitSchedule();
            this.#visitSchedule = new VisitDate(INPUT_VISIT_SCHEDULE).getDay();
        }catch(error){
            Console.print(error.message);
            await this.#inputVisitSchedule();
        }
    }

    async #inputOrderMenu(){
        try{
            const INPUT_ORDER_MENU = await InputView.userInputOrderMenu();
            this.#orderMenu = new Order(INPUT_ORDER_MENU).totalMenuOrderAmount();
        }catch(error){
            Console.print(error.message);
            await this.#inputOrderMenu();
        }
    }

    #discountCheck(){
        const DISCOUNT = this.#discount.promotionTotalDiscount(this.#visitSchedule, this.#orderMenu.ORDER);
        return DISCOUNT;
    }

    #eventCheck(discount){
        const GIFT_EVENT = this.#decemberEvent.giftEventCheck(discount.TOTAL_DISCOUNT, this.#orderMenu.totalAmount);
        const BADGE = this.#decemberEvent.badgeEventCheck(discount.TOTAL_DISCOUNT);
        const EVENT = {GIFT_EVENT, BADGE};
        return EVENT;
    }

    #outputEventResult(discount, event){
        OutputView.outputPreviewEventBenefit(this.#visitSchedule);
        OutputView.outputOrderMenu(this.#orderMenu.ORDER);
        OutputView.outputDiscountBeforeTotalAmount(this.#orderMenu.totalAmount);
        OutputView.outputGiftMenu(event.GIFT_EVENT.champagneGift);
        OutputView.outputBenefitList(discount, event.GIFT_EVENT.champagneGift);
        OutputView.outputTotalBenefitAmount(event.GIFT_EVENT.giftTotalDiscount);
        OutputView.outputDiscountAfterTotalAmount(this.#orderMenu.totalAmount-discount.TOTAL_DISCOUNT);
        OutputView.outputEventBadge(event.BADGE);
    }

}

export default ChristmasController
