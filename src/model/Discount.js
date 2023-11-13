import { DATE, AMOUNT, DESSERT_MENU } from '../contants/constants.js';
import { MAIN_MENU } from "../contants/constants.js"

class Discount {

    christmasDiscountCheck(day) {
        let totalAmount = AMOUNT.CHRISTMAS_START_AMOUNT;
        const CHRISTMAS_DATE = DATE.EVENT_MAX_DATE.getDate();
        if(day <= CHRISTMAS_DATE) {
            for(let i = 1; i < day; i++) {
                totalAmount += AMOUNT.CHRISTMAS_PLUS_AMOUNT;
            }
            return totalAmount;
        }
        return 0;
    }

    weekendDiscountCheck(day, order) {
        let weekendDiscount = 0;
        let weekday;
        const VISIT_DAY = new Date(2023, 11, day);
        if(VISIT_DAY.getDay() >= AMOUNT.WEEKDAY_START && VISIT_DAY.getDay() <= AMOUNT.WEEKDAY_END) {
            weekday = DATE.EVENT_WEEKDAY;
            weekendDiscount = this.#weekendDiscountAmountCheck(weekday, order);
        } 
        if(VISIT_DAY.getDay() >= AMOUNT.WEEKEND_START && VISIT_DAY.getDay() <= AMOUNT.WEEKEND_END) {
            weekday = DATE.EVENT_WEEKEND;
            weekendDiscount = this.#weekendDiscountAmountCheck(weekday, order);
        }
        return {weekday, weekendDiscount};
    }

    #weekendDiscountAmountCheck(weekday, order) {
        let discountAmount = 0;
        order.forEach((data, idx) => {
            const [menu, quantity] = data.split('-');
            if(weekday === DATE.EVENT_WEEKEND && Object.values(MAIN_MENU).find(data => data.name === menu)){
                discountAmount += AMOUNT.WEEKDAY_DISCOUNT * quantity;
            } 
            if(weekday === DATE.EVENT_WEEKDAY && Object.values(DESSERT_MENU).find(data => data.name === menu)) {
                discountAmount += AMOUNT.WEEKDAY_DISCOUNT * quantity;
            }
        });
        return discountAmount;
    }

    specialDiscountCheck(day) {
        let specialDiscount = 0;
        const VISIT_DAY = new Date(2023, 11, day);
        const CHRISTMAS_DATE = DATE.EVENT_MAX_DATE.getDate();
        const SUNDAY = AMOUNT.WEEKDAY_START;
        if(VISIT_DAY.getDay() === SUNDAY || day === CHRISTMAS_DATE){
            specialDiscount = AMOUNT.SPECIAL_DISCOUNT;
        }
        return specialDiscount;
    }
}

export default Discount