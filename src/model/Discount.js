import { MAIN_MENU, DATE, AMOUNT, DESSERT_MENU } from '../contants/Constants.js';

class Discount {

    promotionTotalDiscount(day, order) {
        const CHRISTMAS_DISCOUNT = this.#christmasDiscountCheck(day);
        const WEEKEND_DISCOUNT = this.#weekendDiscountCheck(day, order);
        const SPECIAL_DISCOUNT = this.#specialDiscountCheck(day);
        const TOTAL_DISCOUNT = CHRISTMAS_DISCOUNT + WEEKEND_DISCOUNT.weekendDiscount + SPECIAL_DISCOUNT;
        return { CHRISTMAS_DISCOUNT, WEEKEND_DISCOUNT, SPECIAL_DISCOUNT, TOTAL_DISCOUNT }
    }
    
    #christmasDiscountCheck(day) {
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

    #weekendDiscountCheck(day, order) {
        let weekendDiscount = 0;
        let weekday;
        const VISIT_DAY = new Date(DATE.THIS_YEAR, DATE.EVENT_MONTH, day);
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
        order.forEach((data) => {
            const [MENU, QUANTITY] = data.split('-');
            if(weekday === DATE.EVENT_WEEKEND && Object.values(MAIN_MENU).find(data => data.name === MENU)){
                discountAmount += AMOUNT.WEEKDAY_DISCOUNT * QUANTITY;
            } 
            if(weekday === DATE.EVENT_WEEKDAY && Object.values(DESSERT_MENU).find(data => data.name === MENU)) {
                discountAmount += AMOUNT.WEEKDAY_DISCOUNT * QUANTITY;
            }
        });
        return discountAmount;
    }

    #specialDiscountCheck(day) {
        let specialDiscount = 0;
        const VISIT_DAY = new Date(DATE.THIS_YEAR, DATE.EVENT_MONTH, day);
        const CHRISTMAS_DATE = DATE.EVENT_MAX_DATE.getDate();
        const SUNDAY = AMOUNT.WEEKDAY_START;
        if(VISIT_DAY.getDay() === SUNDAY || day === CHRISTMAS_DATE){
            specialDiscount = AMOUNT.SPECIAL_DISCOUNT;
        }
        return specialDiscount;
    }
}

export default Discount