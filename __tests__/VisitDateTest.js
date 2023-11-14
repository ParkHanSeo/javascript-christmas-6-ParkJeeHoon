import VisitDate from "../src/model/VisitDate.js";

describe("VisitDate 클래스 테스트", () => {
    test("1) 방문 예정일자가 1 ~ 31 사이의 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new VisitDate(0);
        }).toThrow("[ERROR]");
    });

    test("2) 방문 예정일자가 1 ~ 31 사이의 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new VisitDate(32);
        }).toThrow("[ERROR]");
    });

    test("1) 방문 예정일자가 공백일 경우 예외가 발생한다.", () => {
        expect(() => {
          new VisitDate('');
        }).toThrow("[ERROR]");
    });

    test("2) 방문 예정일자가 공백일 경우 예외가 발생한다.", () => {
        expect(() => {
          new VisitDate(undefined);
        }).toThrow("[ERROR]");
    });

    test("1) 방문 예정일자가 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new VisitDate('one');
        }).toThrow("[ERROR]");
    });

    test("2) 방문 예정일자가 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new VisitDate('   two');
        }).toThrow("[ERROR]");
    });
});