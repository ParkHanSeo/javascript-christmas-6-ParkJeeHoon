import { ERROR_MESSAGE } from "../contants/message.js";
import { TOTAL_MENU } from "../contants/constants.js"

const Validation = {
    inputVisitScheduleValidate(visitSchedule){
        if(visitSchedule < 1 || visitSchedule > 31)
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
        if(visitSchedule == 0 || visitSchedule == '' || visitSchedule == undefined)
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
        if(isNaN(visitSchedule))
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
    },

    inputOrderMenuValidate(orderMenu){
        const duplicateData = [];
        orderMenu.forEach((data, idx) => {
            const [menu, quantity] = data.split('-');
            duplicateData.push(menu);
            if(!Object.values(TOTAL_MENU).find(data => data.name === menu))
                throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
            if(isNaN(quantity))
                throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
        });
        if([...new Set(duplicateData)].length !== orderMenu.length)
            throw new Error(`${ERROR_MESSAGE.ORDER_MENU_ERROR}`);
    }
}

export default Validation