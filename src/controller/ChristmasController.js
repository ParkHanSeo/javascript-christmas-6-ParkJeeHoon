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
    #discount;
    #event;
    #totalDiscount;

    constructor() {
        this.#discount = new Discount();
    }

    async christmasProcess(){
        OutputView.outputWelCome();
        await this.#inputVisitSchedule();
        await this.#inputOrderMenu();
        this.#discountCheck();
        this.#eventCheck();
        this.#playEvent();
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
        this.#discount = {CHRISTMAS_DISCOUNT, WEEKEND_DISCOUNT, SPECIAL_DISCOUNT};
        this.#totalDiscount = (CHRISTMAS_DISCOUNT + WEEKEND_DISCOUNT.weekendDiscount + SPECIAL_DISCOUNT);
    }

    #eventCheck(){
        this.#event = new Event(this.#totalDiscount, this.#orderMenu.totalOrderAmount);
    }

    #playEvent(){
        OutputView.outputPreviewEventBenefit(this.#visitSchedule.day);
        OutputView.outputOrderMenu(this.#orderMenu.order);
        OutputView.outputDiscountBeforeTotalAmount(this.#orderMenu.totalOrderAmount);
        OutputView.outputGiftMenu(this.#event.champagneGift);
        OutputView.outputBenefitList(this.#discount, this.#event.champagneGift);
        OutputView.outputTotalBenefitAmount(this.#event.totalDiscount);
        OutputView.outputDiscountAfterTotalAmount(this.#orderMenu.totalOrderAmount-this.#totalDiscount);
        OutputView.outputEventBadge(this.#event.badge);
    }

}

export default ChristmasController
