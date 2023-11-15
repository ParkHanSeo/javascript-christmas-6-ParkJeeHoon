import Validation from '../util/Validation.js';
import { TOTAL_MENU } from "../contants/Constants.js"

class Order {

    #order;

    constructor(order) {
        this.#order = order;
        this.#validate();
    }

    #validate() {
        Validation.inputOrderMenuValidate(this.#order);
    }

    orderProcess() {
        const ORDER = this.#order;
        const TOTAL_AMOUNT = this.#getTotalOrderMenuAmount();
        return { ORDER, TOTAL_AMOUNT }
    }

    #getTotalOrderMenuAmount() {
        let totalAmount = 0;
        this.#order.forEach((data) => {
            const [MENU, QUANTITY] = data.split('-');
            const MENU_CHECK = Object.values(TOTAL_MENU).find(data => data.name === MENU);
            if(MENU_CHECK){
                totalAmount += MENU_CHECK.price * parseInt(QUANTITY);
            }
        });
        return totalAmount;
    }

}

export default Order