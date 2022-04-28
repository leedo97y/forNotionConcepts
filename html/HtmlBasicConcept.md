# HTML basic

Created: April 28, 2022 6:51 PM
Last Edited Time: April 28, 2022 8:32 PM
Stakeholders: Anonymous
Status: In Review
Type: basic concept

# 구조를 나타내는 요소 / 시멘틱웹 관련태그

## HTML header / footer tag

브라우저 호환성 좋음 / 하나만 사용 가능

어떤 곳으로 이동하든 한결같이 보임

푸터 안에 헤더,  다른 푸터는 넣을 수 없다.

## HTML nav tag

상위 내용을 클릭하면 이동할 수 있게 도와줌, 탐색을 용이하게 해주는 부분

목록의 형태를 띄고 있음, 

내부의 데이터를 나눌때 쓰임

푸터의 링크들은 전체 페이지를 아우르는 링크지만, 네비의 링크는 현재 페이지를 중심으로 한 링크이다.

⇒ 링크를 넣을때 네비에 들어가는게 나은지 푸터에 들어가는게 나은지 고민해야 한다.

## HTML aside tag

문서의 주요 내용ㅇ과 간접적으로만 연관된 부분을 나타낸다.

⇒ 주로 사이드바나 콜아웃 박스로 표현한다.

부가적인 정보를 넣지만, 없어도 상관 없다.

광고가 들어가기도 한다.

## HTML main tag

body에 해당하는  주요 태그이다. / 하나만 사용 가능

주요 콘텐츠 나타냄

2 ~ 3개 나타낼 거면 hidden 이라는 속성을 사용해서 나타내야 한다.  ⇒ 접근성에 관련

internet explorer 에서는 지원이 안됨

h1, 본문 설명요소 등 넣어줄 수 있음 - main tag는 모든 설명 태그를 아우르는 가장 바깥쪽 컨테이너 

## HTML article tag

문서 페이지, application, 사이트 안에서 독립적으로 구분해 배포하거나, 재사용할 수 이ㅛ는 구획을 나타낸다. / 즉, article 태그 하나로도 단독적인 컨텐츠를 나타낼 수 있음

section 안에 여러개의 article이 들어갈 수 있으며, 그 반대로 article 안에 여러개의 section이 들어갈 수 도 있다. 

article 을 식별할 수 있는 제목을 많이 넣어줌

## HTML section tag

article과 비슷한데 다름 / article이 될 수 있다면 article 을 쓰고, 그게 아니면 section 쓴다.

전체적인 페이지에서 흐름이 맞지 않거나 독립적인 구획에 쓰인다.

div랑은 또 다름. /  div는 전체적인 흐름과 어우러진다.

⇒ 단독으로 쓰일 수 있다면 article을 쓰는게 맞음

article과 마찬가지로 h1 ~ h6 태그를 이용해서 제목을 붙여줌 = 접근성 높일 수 있다.

# 목록과 표

## HTML ul, ol, li tag

### ol tag

순서가 있는 목록

순위를 나타내거나 단계적으로 수행해야하는 (요리 레시피) 컨텐츠에 쓰임

별도의 설정이 없으면 기본적으로 1, 2, 3 .. 등의 숫자가 앞에 붙는다.

1. type 속성 : 항목으로 셀때 나타나는 type 속성이 있다.

⇒ a, A, i, I, 1 등으로 셀 수 있다.

```html
// 1. type 속성
<ol type="1">
// 기본형식 type을 넣지않아도 숫자로 보임
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="A">
// A, B, C... 
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="a">
// a, b, c...
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="I">
// 로마자 대문자
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="i">
// 로마자 소문자
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>
```

1. start 속성 : 항목을 셀때 시작할 수 

⇒ type 이랑 같이 사용가능 / li 태그에 value 값을 넣어줘도 똑같이 사용가능

하지만, value 태그를 중간에 있는 li 코드에 적용한다면, value 가 쓰인 부분 이후로 숫자가 흘러감

```html
// 2. start 속성 / value 속성
<ol start="4">
// 숫자가 4 부터 시작함
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol>
	<li value="4">Toy Story</li>
	// 숫자가 4 부터 시작함
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol>
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li value="8">Inside Out</li>
	// 1, 2, 8 ... 이렇게 흘러감
</ol>
```

1. reversed 속성 : 숫자가 역전이 된다. ⇒ 예) 3, 2, 1 순서

### ul tag

비정렬 목록 / 불렛포인트로 나타내는 목록

목록을 나타낼 때 주로 쓰인다.

특정 속성이 없음 / 비교적 사용이 단순

하위태그가 존재하면 불렛포인트 색상이 달라짐 ⇒ 브라우저에 따라 불렛포인트 색상이 다름

```html
<ul>
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ul>

<ul>
// 불렛포인트 (기본) 검정
	<li>Cheese</li>
		<ul>
		// 불렛포인트 하양
			<li>Blue cheese</li>
			<li>Feta</li>
		</ul>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ul>
```

### li tag

단일 목록 태그 ul, ol 이 바깥에 쓰이고, li 태그는 그 내부에 쓰인다.

## HTML di, dt, dd tag

## HTML table, tr, th, td tag

## HTML thead, tbody, tfoot tag

## HTML caption tag