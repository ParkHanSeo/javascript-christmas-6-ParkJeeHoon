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

    totalMenuOrderAmount() {
        let totalAmount = 0;
        const ORDER = this.#order;
        ORDER.forEach((data) => {
            const [MENU, QUANTITY] = data.split('-');
            const MENU_CHECK = Object.values(TOTAL_MENU).find(data => data.name === MENU);
            if(MENU_CHECK){
                totalAmount += MENU_CHECK.price * parseInt(QUANTITY);
            }
        });
        return { ORDER, totalAmount };
    }

}

export default Order