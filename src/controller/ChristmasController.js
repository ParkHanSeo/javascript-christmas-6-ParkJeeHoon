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
            this.#orderMenu = new Order(INPUT_ORDER_MENU).orderProcess();
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
        const GIFT_CHAMPAGNE = this.#decemberEvent.getGiftChampagneCheck(this.#orderMenu.TOTAL_AMOUNT);
        const GIFT_TOTAL_DISCOUNT = this.#decemberEvent.getGiftTotalDiscountCheck(discount.TOTAL_DISCOUNT, GIFT_CHAMPAGNE);
        const BADGE = this.#decemberEvent.getBadgeEventCheck(GIFT_TOTAL_DISCOUNT);
        const EVENT = {GIFT_CHAMPAGNE, GIFT_TOTAL_DISCOUNT, BADGE};
        return EVENT;
    }

    #outputEventResult(discount, event){
        OutputView.outputPreviewEventBenefit(this.#visitSchedule);
        OutputView.outputOrderMenu(this.#orderMenu.ORDER);
        OutputView.outputDiscountBeforeTotalAmount(this.#orderMenu.TOTAL_AMOUNT);
        OutputView.outputGiftMenu(event.GIFT_CHAMPAGNE);
        OutputView.outputBenefitList(discount, event.GIFT_CHAMPAGNE);
        OutputView.outputTotalBenefitAmount(event.GIFT_TOTAL_DISCOUNT);
        OutputView.outputDiscountAfterTotalAmount(this.#orderMenu.TOTAL_AMOUNT-discount.TOTAL_DISCOUNT);
        OutputView.outputEventBadge(event.BADGE);
    }

}

export default ChristmasController
