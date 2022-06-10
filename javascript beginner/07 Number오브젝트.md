# Number 오브젝트
숫자 (123) 처리를 위한 오브젝트

즉, Number 오브젝트에 숫자처리를 위한 함수와 프로퍼티가 포함되어 있으며, 함수를 호출하여 숫자 처리를 하게 된다.
<br></br>

## 프로퍼티 리스트
new Number( ) : 인스턴스 생성
<br></br>

```[Number 함수]```

Number( ) : 숫자 값으로 변환하여 반환
<br></br>

```[Number.prototype]```

constructor : 생성자

toString( ) : 숫자 값을 문자열로 변환

toLocalString( ) : 숫자 값을 지역화 문자로 변환

valueOf( ) : 프리미티브 값 변환

toExponential( ) : 지수 표기로 변환

toFixed( ) : 고정 소숫점 표기로 변환

toPrecision( ) : 고정 소숫점 또는 지수 표기로 변환
<br></br>

---
<br></br>

# Number 타입으로 변환
## Number ( )
| 구분 | 데이터 (값) |
| -- | -- |
| 파라미터 | 변환할 값 opt |
| 반환 | 변환한 값 |
<br></br>

파라미터 값을 Number 타입으로 변환

1. 파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
```js
ss
```

2. 숫자로 변환할 수 있으면 변환
```js
ss
```

파라미터 값을 작성하지 않으면 0을 반환
<br></br>

## Number 상수
| 상수 이름 | 값 |
| -- | -- |
| Number.MAX_VALUE | 1.7976931348623157 * 10 (308승) |
| Number.MIN_VALUE | 5 * 10 (-324승) |
| Number.NaN | Not-a-Number |
| Number.POSITIVE_INFINITY | Infinity |
| Number.NEGATIVE_INFINITY | -Infinity |
<br></br>

```[특징]```
1. 상수는 값을 변경, 삭제할 수 없음

2. 영문 대문자 사용이 관례

3. Number.MAX_VALUE 형태 가짐
<br></br>

---
<br></br>

# new 연산자
| 구분 | 데이터 (값) |
| -- | -- |
| constructor | 변환할 값 opt |
| 파라미터 | 값 opt |
| 반환 | 생성한 인스턴스 |
<br></br>

오브젝트로 인스턴스를 생성하여 반환

원본을 복사하는 개념

new 연산자를 사용하면 인스턴스
```js
ss
```

코딩관례로 첫 문자를 대문자로 작성

인스턴스 생성 목적

인스턴스마다 값을 갖기 위한 것
```js
ss
```
<br></br>

---
<br></br>

# Number 인스턴스 생성
## new Number( )
| 구분 | 데이터 (값) |
| -- | -- |
| 파라미터 | 값 opt |
| 반환 | 생성한 Number 인스턴스 |
<br></br>


빌트인 Number 오브젝트로 새로운 인스턴스를 생성
```js
ss
```

=> 인스턴스 형태
<br></br>

---
<br></br>

# 프리미티브 값
## Primitive Value
언어에 있어 가장 낮은 단계의 값

```var book = "책";```

"책"은 더 이상 분해, 전개 불가
<br></br>

## 프리미티브 타입
Number, String, Boolean : 인스턴스 생성 가능

Null, Undefined : 인스턴스 생성 불가

Object는 프리미티브 값을 제공하지 않음
<br></br>

## 인스턴스의 프리미티브 값
``` var obj = new Number(123); ```

인스턴스를 생성하면 파라미터 값을 인스턴스의 프리미티브 값으로 설정

프리미티브 값을 갖는 오브젝트

: Boolean, Date, Number, String
```js
ss
```
<br></br>

## valueOf( )
| 구분 | 데이터 (값) |
| -- | -- |
| data | Number 인스턴스, 숫자 |
| 파라미터 | 사용하지 않음 |
| 반환 | 프리미티브 값 |
<br></br>

Number 인스턴스의 프리미티브 값 반환
```js
ss
```
<br></br>

---
<br></br>

# String 타입으로 변환
## toString( )
| 구분 | 데이터 (값) |
| -- | -- |
| data | 변환대상 |
| 파라미터 | 진수(2~36) opt, 디폴트 : 10진수 |
| 반환 | 변환한 값 |
<br></br>

1. data를 String 타입으로 변환
```js
ss
```

2. 변환시 주의사항
```js
ss
```
<br></br>

## toLocalString( )
| 구분 | 데이터 (값) |
| -- | -- |
| data | 변환대상 |
| 파라미터 | 사용하지 않음  |
| 반환 | 변환한 값 |
<br></br>

숫자를 브라우저가 지원하는 지역화 문자로 변환

지역화 지원 및 형태를 브라우저 개발사에 일임

지역화를 지원하지 않으면 toString( )으로 변환

### 스펙 상태
ES5 : 파라미터 사용 불가 

ES6 : 파라미터에 언어 타입 사용 가능
```js
ss
```
<br></br>

---
<br></br>

# 지수 표기, 고정 소수점 표기
## toExponential( )
| 구분 | 데이터 (값) |
| -- | -- |
| data | 변환대상 |
| 파라미터 | 소수 이하 자릿수 (0~20) |
| 반환 | 변환한 값 |
<br></br>

숫자를 지수 표기로 변환하여 문자열로 반환

파라미터에 소수 이하 자릿수 작성 -> 0에서 20까지
<br></br>

### 표시 방법
변환 대상의 첫 자리만 소수점(.)앞에 표시

나머지는 소수 아래에 표시 
```js
ss
```

```js
ss
```
<br></br>

지수(e+) 다음에 정수에서 소수로 변환된 자릿수 표시
<br></br>

## toFixed( ) 
| 구분 | 데이터 (값) |
| -- | -- |
| data | 변환대상 |
| 파라미터 | 반환할 소수 이하 자릿수 |
| 반환 | 변환한 값 |
<br></br>

고정 소숫점 표기로 변환하여 문자열로 반환

파라미터에 소수 이하 자릿수 작성 -> 0에서 20까지

변환 대상 자릿수보다 파라미터 값이 크면 나머지를 0으로 채워 반환
```js
ss
```
<br></br>