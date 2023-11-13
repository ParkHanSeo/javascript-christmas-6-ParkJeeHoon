import Validation from '../util/Validation.js';
import { TOTAL_MENU } from "../contants/constants.js"

class Order {

    constructor(order) {
        this.order = order;
        this.#validate(order);
        this.totalOrderAmount;
    }

    #validate() {
        Validation.inputOrderMenuValidate(this.order);
        this.totalOrderAmount = this.#totalOrderAmount(this.order)
    }

    #totalOrderAmount(order) {
        let totalAmount = 0;
        order.forEach((data, idx) => {
            const [menu, quantity] = data.split('-');
            const MENU_CHECK = Object.values(TOTAL_MENU).find(data => data.name === menu)
            if(MENU_CHECK){
                totalAmount += MENU_CHECK.price * parseInt(quantity);
            }
        });
        return totalAmount
    }

}

export default Order