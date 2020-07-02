import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("learn react가 올바르게 렌더링되는지", () => {
  // <App />에서 렌더링되는 텍스트를 받아온다. 아래는 테스트 쿼리중 하나인 getByText의 액션실행함수
  // export type GetByText = (container: HTMLElement, id: Matcher, options?: SelectorMatcherOptions) => HTMLElement;
  const { getByText } = render(<App />);
  // 콘솔을 찍어 봤지만 [Function: bound ]가 나온다. consloe.log자체를 테스트한듯
  console.log(getByText);
  // getByText의 인자로 정규식을 넣어서 해당 값이 존재하지 않으면 에러를 반화한다.
  const linkElement = getByText(/learn react/i);
  // 우리가 예싱한 값이 나왔는지 확인할 수 있다.
  // toBeInTheDocument()는 특정 엘리먼트가 화면에서 확인하는 역할을 한다.
  expect(linkElement).toBeInTheDocument();
});
