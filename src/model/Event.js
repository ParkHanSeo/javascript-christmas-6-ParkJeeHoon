import { EVENT, BADGE, BADGE_AMOUNT, BEVERAGE_MENU } from '../contants/constants.js';

class Event {

    #totalDiscount

    constructor() {
        this.#totalDiscount = 0;
    }

    giftEventCheck(discount, totalAmount) {
        let champagneGift;
        let giftTotalDiscount = 0;
        if(totalAmount >= EVENT.GIFT_AMOUNT){
            champagneGift = BEVERAGE_MENU.CHAMPAGNE.name;
            giftTotalDiscount = BEVERAGE_MENU.CHAMPAGNE.price + discount;
        }
        this.#totalDiscount = giftTotalDiscount;
        return { giftTotalDiscount, champagneGift };
    }

    badgeEventCheck() {
        let badge;
        if(this.#totalDiscount >= BADGE_AMOUNT.STAR_AMOUNT){
            badge = BADGE.STAR;
        }
        if(this.#totalDiscount >= BADGE_AMOUNT.TREE_AMOUNT){
            badge = BADGE.TREE;
        }
        if(this.#totalDiscount >= BADGE_AMOUNT.SANTA_AMOUNT){
            badge = BADGE.SANTA;
        }
        return badge;
    }

}

export default Event