import { ERROR_MESSAGE } from "../contants/message.js";

const Validation = {
    inputVisitScheduleValidate(visitSchedule){
        if(visitSchedule < 1 || visitSchedule > 31){
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
        }
        if(visitSchedule == 0 || visitSchedule == '' || visitSchedule == undefined){
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
        }
        if(isNaN(visitSchedule)){
            throw new Error(`${ERROR_MESSAGE.VISIT_SCHEDULE_ERROR}`);
        }
    }
}

export default Validation