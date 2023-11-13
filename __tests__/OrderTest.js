import Order from "../src/model/Order.js";

describe("Order 클래스 테스트", () => {
    test("사용자의 입력값이 메뉴판에 없는 메뉴일 경우 예외가 발생한다.", () => {
        expect(() => {
          new Order(('에프본스테이크-1,바비큐립-1').split(','));
        }).toThrow("[ERROR]");
    });

    test("사용자의 입력값의 메뉴가 중복일 경우 예외가 발생한다.", () => {
        expect(() => {
          new Order(('티본스테이크-1,바비큐립-1,초코케이크-2,바비큐립-1').split(','));
        }).toThrow("[ERROR]");
    });

    test("사용자의 입력값 메뉴의 수량이 0일 경우 예외가 발생한다.", () => {
        expect(() => {
          new Order(('티본스테이크-0,바비큐립-1,초코케이크-2,제로콜라-1').split(','));
        }).toThrow("[ERROR]");
    });

    test("1) 사용자의 입력값 메뉴의 형식이 예시와 다를 경우 예외가 발생한다.", () => {
        expect(() => {
          new Order(('티본스테이크--0,바비큐립-1,초코케이크-2,제로콜라-1').split(','));
        }).toThrow("[ERROR]");
    });

    test("2) 사용자의 입력값 메뉴의 형식이 예시와 다를 경우 예외가 발생한다.", () => {
        expect(() => {
          new Order(('티본스테이크-0바비큐립-1,제로콜라-1').split(','));
        }).toThrow("[ERROR]");
    });  

    test("사용자의 입력값 메뉴가 음료 하나만 있을 경우 예외가 발생한다.", () => {
        expect(() => {
          new Order(('제로콜라-1').split(','));
        }).toThrow("[ERROR]");
    });

    test("사용자의 입력값 메뉴가 음료만 있을 경우 예외가 발생한다.", () => {
        expect(() => {
          new Order(('제로콜라-1,샴페인3').split(','));
        }).toThrow("[ERROR]");
    }); 
});