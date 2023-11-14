import { ERROR_MESSAGE } from "../contants/Message.js";
import { TOTAL_MENU, BEVERAGE_MENU, DATE, QUANTITY } from "../contants/Constants.js"

const Validation = {
    inputVisitScheduleValidate(visitSchedule){
        if(visitSchedule < DATE.START_DAY || visitSchedule > DATE.END_DAY)
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
        if(visitSchedule == 0 || visitSchedule == '' || visitSchedule == undefined)
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
        if(isNaN(visitSchedule))
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
    },

    inputOrderMenuValidate(orderMenu){
        const duplicateData = [];
        let menuQuantityCount = 0;
        orderMenu.forEach((data, idx) => {
            const [MENU, QUANTITY] = data.split('-');
            duplicateData.push(MENU);
            menuQuantityCount += Number(QUANTITY);
            this.orderMenuForValidateCheck(orderMenu, data, MENU, QUANTITY);
        });
        this.orderMenuValidateCheck(orderMenu, duplicateData, menuQuantityCount);
    },

    orderMenuForValidateCheck(orderMenu, data, menu, quantity){
        if(!Object.values(TOTAL_MENU).find(data => data.name === menu))
            throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
        if(isNaN(quantity) || quantity == 0)
            throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
        if(orderMenu.length == 1 && Object.values(BEVERAGE_MENU).find(data => data.name === menu))
            throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
    },

    orderMenuValidateCheck(orderMenu, duplicateData, menuQuantityCount){
        if([...new Set(duplicateData)].length !== orderMenu.length)
            throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
        if(menuQuantityCount > QUANTITY.MAX_QUANTITY)
            throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
        if(orderMenu.every((menu) => Object.values(BEVERAGE_MENU).find(data => data.name === menu.split('-')[0])))
            throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
    }
}

export default Validation