import DecemberEvent from "../src/model/DecemberEvent.js";
import Order from "../src/model/Order.js";
import Discount from "../src/model/Discount.js";

describe("DecemberEvent 클래스 테스트", () => {
    test("증정품 여부 테스트.", () => {
        const decemberEvent = new DecemberEvent();
        const orderMenu = new Order(('해산물파스타-2,레드와인-1,초코케이크-1').split(',')).totalMenuOrderAmount();
        const discount = new Discount().promotionTotalDiscount(3, orderMenu.ORDER);
        const giftResult = decemberEvent.giftEventCheck(discount.TOTAL_DISCOUNT, orderMenu.totalAmount);
        const expected = { giftTotalDiscount: 29223, champagneGift: '샴페인' };
        expect(giftResult).toStrictEqual(expected);
    });

    test("증정품 없음 테스트.", () => {
        const decemberEvent = new DecemberEvent();
        const orderMenu = new Order(('타파스-1,제로콜라-1').split(',')).totalMenuOrderAmount();
        const discount = new Discount().promotionTotalDiscount(26, orderMenu.ORDER);
        const giftResult = decemberEvent.giftEventCheck(discount.TOTAL_DISCOUNT, orderMenu.totalAmount);
        const expected = { giftTotalDiscount: 0, champagneGift: '' };
        expect(giftResult).toStrictEqual(expected);
    });

    test("별 뱃지 제공 테스트", () => {
        const decemberEvent = new DecemberEvent();
        const badgeResult = decemberEvent.badgeEventCheck(5000);
        const expected = '별';
        expect(badgeResult).toStrictEqual(expected);
    });

    test("트리 뱃지 제공 테스트", () => {
        const decemberEvent = new DecemberEvent();
        const badgeResult = decemberEvent.badgeEventCheck(10000);
        const expected = '트리';
        expect(badgeResult).toStrictEqual(expected);
    });

    test("산타 뱃지 제공 테스트", () => {
        const decemberEvent = new DecemberEvent();
        const badgeResult = decemberEvent.badgeEventCheck(20000);
        const expected = '산타';
        expect(badgeResult).toStrictEqual(expected);
    });

    test("뱃지 없음 제공 테스트", () => {
        const decemberEvent = new DecemberEvent();
        const badgeResult = decemberEvent.badgeEventCheck(4999);
        const expected = '';
        expect(badgeResult).toStrictEqual(expected);
    });
});