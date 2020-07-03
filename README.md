# react-testing-library 기본



## testing-library

CRA로 만든 react프로젝트에는 자동으로 테스팅 프레임워크가 적용되어있다. 아래는 cra의 package.json의 dependencies의 일부이다.

```json
 "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
  },
```

testing 관련 라이브러리가 있는 것을 확인 할 수 있다.



## 사용하는 함수 

```
it
```

- 새로운 테스트 케이스를 만드는 함수이다.

```
expect
```

- it 내부에서 해당 함수를 통하여 특정 값이 우리가 예상한 값이 나왔는지 확인 할 수 있다.

```
describe
```

- 여러개의 `it`을 넣기 위함이다. `describe`안에는 또 여러개의 `describe`를 넣을 수 있다.

```
render
```

- 이 함수가 호출되면 그 결과물에는 DOM을 선택 할 수 있는 다양한 쿼리들과 `container`가 포함되어 있다. 여기서 `container`는 해당 컴포넌트의 최상위 `DOM`을 가르키며, 이를 가지고 스냅샷 테스팅을 할 수 도 있다.



## 사용하는 쿼리 함수



각각의 쿼리들을 비슷한 규칙을 가지고 있다

```
getBy*
```

- 조건에 일치하는 DOM 엘리먼트 하나를 선택. 존재하지 않으면 에러.

```
getAllBy*
```

- 조건에 일치하는 DOM 엘리먼트 여러개를 선택. 존재하지 않으면 에러.

```
queryBy*
```

- 조건에 일치하는 DOM 엘리먼트 하나를 선택. 존재하지 않아도 에러 X.

```
queryAllBy*
```

- 조건에 일치하는 DOM 엘리먼트 여러개를 선택. 존재하지 않아도 에러 X.

```
findBy*
```

- 조건에 일치하는 DOM 엘리먼트 하나가 나타날 때까지 기다렸다가 해당 `DOM`을 선택하는 `Promise` 반환. 

```
findAllBy*
```

- 조건에 일치하는 DOM 엘리먼트 여러개가 나타날 때까지 기다렸다가 해당 `DOM`을 선택하는 `Promise` 반환. (기본 Timeout 조건인 4500ms 이후에도 나타나지 않으면 에러 발생)

