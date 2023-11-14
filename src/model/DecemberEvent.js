import { EVENT, BADGE, BADGE_AMOUNT, BEVERAGE_MENU } from '../contants/constants.js';

class DecemberEvent {

    #totalDiscount;

    constructor() {
        this.#totalDiscount = 0;
    }

    giftEventCheck(discount, totalAmount) {
        let champagneGift;
        let giftTotalDiscount = discount;
        if(totalAmount >= EVENT.GIFT_AMOUNT){
            champagneGift = BEVERAGE_MENU.CHAMPAGNE.name;
            giftTotalDiscount += BEVERAGE_MENU.CHAMPAGNE.price;
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

export default DecemberEvent