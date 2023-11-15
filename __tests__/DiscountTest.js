import Discount from "../src/model/Discount.js";
import Order from "../src/model/Order.js";

describe("DecemberEvent 클래스 테스트", () => {
    test("크리스마스 디데이 할인 계산 테스트 - 할인 적용", () => {
        const discount = new Discount();
        const orderMenu = new Order(('타파스-1,제로콜라-1').split(',')).totalMenuOrderAmount();
        const discountResult = discount.promotionTotalDiscount(20, orderMenu.ORDER).CHRISTMAS_DISCOUNT;
        const expected = 2900;
        expect(discountResult).toStrictEqual(expected);
    });

    test("크리스마스 디데이 할인 계산 테스트 - 할인 미적용", () => {
        const discount = new Discount();
        const orderMenu = new Order(('타파스-1,제로콜라-1').split(',')).totalMenuOrderAmount();
        const discountResult = discount.promotionTotalDiscount(26, orderMenu.ORDER).CHRISTMAS_DISCOUNT;
        const expected = 0;
        expect(discountResult).toStrictEqual(expected);
    });

    test("평일, 주말 할인 계산 테스트 - 평일 할인 적용", () => {
        const discount = new Discount();
        const orderMenu = new Order(('티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1').split(',')).totalMenuOrderAmount();
        const discountResult = discount.promotionTotalDiscount(3, orderMenu.ORDER).WEEKEND_DISCOUNT;
        const expected = {"weekday": "wd", "weekendDiscount": 4046};
        expect(discountResult).toStrictEqual(expected);
    });

    test("평일, 주말 할인 계산 테스트 - 주말 할인 적용", () => {
        const discount = new Discount();
        const orderMenu = new Order(('바비큐립-1,아이스크림-1,샴페인-1').split(',')).totalMenuOrderAmount();
        const discountResult = discount.promotionTotalDiscount(2, orderMenu.ORDER).WEEKEND_DISCOUNT;
        const expected = {"weekday": "we", "weekendDiscount": 2023};
        expect(discountResult).toStrictEqual(expected);
    });

    test("평일, 주말 할인 계산 테스트 - 할인 미적용", () => {
        const discount = new Discount();
        const orderMenu = new Order(('양송이수프-1,제로콜라-1').split(',')).totalMenuOrderAmount();
        const discountResult = discount.promotionTotalDiscount(26, orderMenu.ORDER).CHRISTMAS_DISCOUNT;
        const expected = 0;
        expect(discountResult).toStrictEqual(expected);
    });
});