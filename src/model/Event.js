import { EVENT, BADGE, BADGE_AMOUNT, BEVERAGE_MENU } from '../contants/constants.js';

class Event {

    constructor(discount, totalAmount) {
        this.totalDiscount = discount;
        this.badge;
        this.champagneGift;
        this.#giftEventCheck(discount, totalAmount);
    }

    #giftEventCheck(discount, totalAmount) {
        if(totalAmount >= EVENT.GIFT_AMOUNT){
            this.champagneGift = BEVERAGE_MENU.CHAMPAGNE.name;
            this.totalDiscount = BEVERAGE_MENU.CHAMPAGNE.price + discount;
        }
        this.#badgeEventCheck();
    }

    #badgeEventCheck() {
        if(this.totalDiscount >= BADGE_AMOUNT.STAR_AMOUNT){
            this.badge = BADGE.STAR;
        }
        if(this.totalDiscount >= BADGE_AMOUNT.TREE_AMOUNT){
            this.badge = BADGE.TREE;
        }
        if(this.totalDiscount >= BADGE_AMOUNT.SANTA_AMOUNT){
            this.badge = BADGE.SANTA;
        }
    }

}

export default Event