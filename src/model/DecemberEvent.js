import { EVENT, BADGE, BADGE_AMOUNT, BEVERAGE_MENU } from '../contants/Constants.js';

class DecemberEvent {

    getGiftChampagneCheck(totalAmount) {
        let champagneGift = '';
        if(totalAmount >= EVENT.GIFT_AMOUNT){
            champagneGift = BEVERAGE_MENU.CHAMPAGNE.name;
        }
        return champagneGift;
    }

    getGiftTotalDiscountCheck(discount, champagneGift) {
        if(champagneGift != ''){
            return discount + BEVERAGE_MENU.CHAMPAGNE.price;
        }
        return discount;
    }

    getBadgeEventCheck(totalDiscount) {
        let badge = '';
        if(totalDiscount >= BADGE_AMOUNT.STAR_AMOUNT){
            badge = BADGE.STAR;
        }
        if(totalDiscount >= BADGE_AMOUNT.TREE_AMOUNT){
            badge = BADGE.TREE;
        }
        if(totalDiscount >= BADGE_AMOUNT.SANTA_AMOUNT){
            badge = BADGE.SANTA;
        }
        return badge;
    }

}

export default DecemberEvent