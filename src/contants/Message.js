export const MESSAGE = {
    WELCOME_MSG: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
    TOTAL_MENU_MSG: '<주문 메뉴>',
    TOTAL_ORDER_MSG: '\n<할인 전 총주문 금액>',
    GIFT_MENU_MSG: '<증정 메뉴>',
    BENEFIT_LIST_MSG: '\n<혜택 내역>',
    TOTAL_BENEFIT_AMOUNT_MSG: '\n<총혜택 금액>',
    EXPECTED_PAYMENT_AMOUNT_MSG: '<할인 후 예상 결제 금액>',
    EVENT_BADGE_MSG: '<12월 이벤트 배지>',
    NONE: '없음',
    EVENT_BENEFIT_MSG: (day) => {
        return `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`;
    },
    ORDER_MENU_MSG: (menu, quantity) => {
        if(menu === undefined || menu === 0 || menu === false){
            return '없음\n';
        }
        return `${menu} ${quantity}개`;
    },
    AMOUNT_MSG: (amount) => {
        if(amount === 0){
            return '없음';
        }
        return `${amount}원\n`;
    },
    DISCOUNT_MSG: (amount) => {
        if(amount == 0){
            return `${amount}원\n`;
        }
        return `-${amount}원\n`;
    },
    BADGE_MSG: (badge) => {
        if(!badge){
            return '없음';
        }
        return `${badge}`;
    }
}

export const INPUT_MESSAGE = {
    INPUT_VISIT_SCHEDULE_MSG: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
    INPUT_ORDER_MENU_MSG: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
}

export const ERROR_MESSAGE = {
    VISIT_SCHEDULE_ERROR: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
    ORDER_MENU_ERROR: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
}

export const BENEFIT_MESSAGE = {
    CHRISTMAS_DDAY_DISCOUNT: (discount) => {
        return `크리스마스 디데이 할인: -${discount}`;
    },
    WEEKDAY_DISCOUNT: (discount, weekday) => {
        if(weekday === 'we')
            return `주말 할인: -${discount}`;
        if(weekday === 'wd')
            return `평일 할인: -${discount}`;
    },
    SPECIAL_DISCOUNT: (discount) => {
        return `특별 할인: -${discount}`;
    },
    GIFT_EVENT: (gitf) => {
        return `증정 이벤트: -25,000`;
    },
}
