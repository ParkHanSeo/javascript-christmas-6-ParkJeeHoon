import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe("기능 테스트", () => {
  test("모든 타이틀 출력", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["3", "티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = [
      "<주문 메뉴>",
      "<할인 전 총주문 금액>",
      "<증정 메뉴>",
      "<혜택 내역>",
      "<총혜택 금액>",
      "<할인 후 예상 결제 금액>",
      "<12월 이벤트 배지>",
    ];

    expectLogContains(getOutput(logSpy), expected);
  });

  test("혜택 내역 타이틀과 없음 출력", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["26", "타파스-1,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = ["<혜택 내역>" + LINE_SEPARATOR + "없음"];

    expectLogContains(getOutput(logSpy), expected);
  });

  test("모든 타이틀 및 output 출력 TEST", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["25", "양송이수프-1,크리스마스파스타-1,아이스크림-2,레드와인-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = [
      "<주문 메뉴>",
      "양송이수프 1개",
      "크리스마스파스타 1개",
      "아이스크림 2개",
      "레드와인 1개",
      "<할인 전 총주문 금액>",
      "101,000원",
      "<증정 메뉴>",
      "없음",
      "<혜택 내역>",
      "크리스마스 디데이 할인: -3,400",
      "평일 할인: -4,046",
      "<총혜택 금액>",
      "-7,446원",
      "<할인 후 예상 결제 금액>",
      "93,554원",
      "<12월 이벤트 배지>",
      "별",
    ];

    expectLogContains(getOutput(logSpy), expected);
  });

  test("증정 메뉴 타이틀과 없음 출력 TEST", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["30", "초코케이크-1,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = ["<증정 메뉴>" + LINE_SEPARATOR + "없음"];

    expectLogContains(getOutput(logSpy), expected);
  });

  test("혜택 내역 타이틀과 없음 출력 TEST", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["30", "초코케이크-1,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = ["<혜택 내역>" + LINE_SEPARATOR + "없음"];

    expectLogContains(getOutput(logSpy), expected);
  });

  test("총혜택 금액 타이틀과 0원 출력 TEST", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["30", "초코케이크-1,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = ["<총혜택 금액>" + LINE_SEPARATOR + "0원"];

    expectLogContains(getOutput(logSpy), expected);
  });

  test("12월 이벤트 배지 타이틀과 없음 출력 TEST", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["30", "초코케이크-1,제로콜라-1"]);

    // when
    const app = new App();
    await app.run();

    // then
    const expected = ["<12월 이벤트 배지>" + LINE_SEPARATOR + "없음"];

    expectLogContains(getOutput(logSpy), expected);
  });
});

describe("예외 테스트", () => {
  test("날짜 예외 테스트", async () => {
    // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "해산물파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions(["a", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test("1) 날짜 예외 테스트 : 1 ~ 31 사이의 숫자가 아닐 경우", async () => {
    // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "크리스마스파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions(["0", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test("2) 날짜 예외 테스트 : 1 ~ 31 사이의 숫자가 아닐 경우", async () => {
    // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "티본스테이크-2"];
    const logSpy = getLogSpy();
    mockQuestions(["32", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test("날짜 예외 테스트 : 값이 공백일 경우", async () => {
    // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "바비큐립-1"];
    const logSpy = getLogSpy();
    mockQuestions([" ", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test("날짜 예외 테스트 : 값이 숫자가 아닐 경우", async () => {
    // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "해산물파스타-4"];
    const logSpy = getLogSpy();
    mockQuestions(["notnumber", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test("날짜 예외 테스트 : 값이 숫자가 아니며 공백도 있을 경우", async () => {
    // given
    const INVALID_DATE_MESSAGE = "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["1", "크리스마스파스타-3"];
    const logSpy = getLogSpy();
    mockQuestions(["    notnumber", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_DATE_MESSAGE));
  });

  test("주문 예외 테스트", async () => {
    // given
    const INVALID_ORDER_MESSAGE = "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["해산물파스타-2"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "제로콜라-a", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });

  test("주문 예외 테스트 : 없는 메뉴일 경우", async () => {
    // given
    const INVALID_ORDER_MESSAGE = "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["티본스테이크-2"];
    const logSpy = getLogSpy();
    mockQuestions(["21", "펩시콜라-2", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });

  test("주문 예외 테스트 : 메뉴가 중복일 경우", async () => {
    // given
    const INVALID_ORDER_MESSAGE = "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["바비큐립-2"];
    const logSpy = getLogSpy();
    mockQuestions(["12", "시저샐러드-1,시저샐러드-2", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });

  test("주문 예외 테스트 : 메뉴의 수량이 0일 경우", async () => {
    // given
    const INVALID_ORDER_MESSAGE = "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["양송이수프-2"];
    const logSpy = getLogSpy();
    mockQuestions(["3", "타파스-0", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });

  test("주문 예외 테스트 : 입력값이 예시와 다를 경우", async () => {
    // given
    const INVALID_ORDER_MESSAGE = "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";
    const INPUTS_TO_END = ["시저샐러드-2"];
    const logSpy = getLogSpy();
    mockQuestions(["7", "아이스크림-|-0", ...INPUTS_TO_END]);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(INVALID_ORDER_MESSAGE));
  });
  
});
