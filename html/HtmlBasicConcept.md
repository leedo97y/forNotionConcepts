# HTML basic

[https://github.com/leedo97y/forNotionConcepts](https://github.com/leedo97y/forNotionConcepts)

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
<!--1. type 속성-->
<ol type="1">
<!--기본형식 : type을 넣지 않아도 숫자로 보임-->
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="A">
<!--A, B, C...-->
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="a">
<!--a, b, c...-->
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="I">
<!--로마자 대문자-->
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol type="i">
<!--로마자 소문자-->
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>
```

1. start 속성 : 항목을 셀때 시작할 수 

⇒ type 이랑 같이 사용가능 / li 태그에 value 값을 넣어줘도 똑같이 사용가능

하지만, value 태그를 중간에 있는 li 코드에 적용한다면, value 가 쓰인 부분 이후로 숫자가 흘러감

```html
<!--2. start 속성 / Value 속성-->
<ol start="4">
<!--숫자가 4부터 시작함-->
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol>
	<li value="4">Toy Story</li>
	<!--숫자가 4부터 시작함-->
	<li>Zootopia</li>
	<li>Inside Out</li>
</ol>

<ol>
	<li>Toy Story</li>
	<li>Zootopia</li>
	<li value="8">Inside Out</li>
	<!--1, 2, 8... 이렇게 흘러감-->
</ol>
```

1. reversed 속성 : 숫자가 역전이 된다. ⇒ 예) 3, 2, 1 순서

---

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
<!--불렛포인트 기본 검정-->
	<li>Cheese</li>
		<ul>
		<!--불렛포인트 하양-->
			<li>Blue cheese</li>
			<li>Feta</li>
		</ul>
	<li>Zootopia</li>
	<li>Inside Out</li>
</ul>
```

```html
<ol>
	<li>first item</li>
	<li>
		second item
		<ul>
			<li>second item first subitem</li>
			<li>second item second subitem</li>
			<li>second item third subitem</li>
		</ul>
	</li>
	<li>third item</li>
</ol>
```

⇒ 여러번 중첩이 가능하다 !

---

### li tag

단일 목록 태그 ul, ol 이 바깥에 쓰이고, li 태그는 그 내부에 쓰인다.

## HTML di, dt, dd tag

### dl tag

설명 목록을 나타낸다. / 주로 dt 와 dd 를 감싸서 표현한다

용어를 정의 (용어 사전) 하고 메타데이터 (키 - 값 쌍 목록)를 표시할때 사용된다.

dt - dd 는 짝을 이뤄서 표현됨.

---

### dt tag : t - term

용어

---

### dd tag : d - description

1. 용어 설명 - 기본

```html
<dl>
	<dt>Firefox</dt>
	<dd>
		Mozilla 재단과 수 백명의 
		자원봉사자가 개발한 무료 
		오픈소스 크로스 플랫폼 그래픽 웹 브라우저.
	</dd>

	<!--다른 용어 및 정의-->
</dl>
```

1. 여러개의 용어와 하나의 정의

```html
<dl>
	<dt>Firefox</dt>
	<dt>Mozilla Firefox</dt>
	<dt>Fx</dt>
	<dd>
		Mozilla 재단과 수 백명의 
		자원봉사자가 개발한 무료 
		오픈소스 크로스 플랫폼 그래픽 웹 브라우저.
	</dd>

	<!--다른 용어 및 정의-->
</dl>
```

1. 하나의 용어와 여러개의 정의 

```html
<dl>
	<dt>Firefox</dt>
	<dd>
		Mozilla 재단과 수 백명의 
		자원봉사자가 개발한 무료 
		오픈소스 크로스 플랫폼 그래픽 웹 브라우저.
	</dd>
	<dd>
		붉은 판다, 레서 판다, 렛서 판다, 
		혹은 "Firefox"는 초식성 포유류이다.
		몸 길이는 애완용 고양이보다 약간
		큰 정도인 60cm 이다.
	</dd>

	<!--다른 용어 및 정의-->
</dl>
```

1. 스타일링을 위해서 div로 dt, dd를 함께 감싸서 사용할 수도 있다.
    
    ```html
    <dl>
    	<div>
    		<dt>Color</dt>
    		<dd>Green</dd>
    	</div>
    	<div>
    		<dt>Color</dt>
    		<dd>Blue</dd>
    	</div>
    	<div>
    		<dt>Color</dt>
    		<dd>GrayYellow</dd>
    	</div>
    </dl>
    ```
    

## HTML table, tr, th, td tag

### table tag

테이블은 조금 더 복잡한 형식 - 행렬 모양으로 구성됨

지금은 테이블 태그로 만드는거 지양 해야한다. ⇒ 시멘틱 웹 구조를 만들때 

가장 바깥쪽에 쓰인다. / 내부에 tr, th, td 태그 담을 수 있다.

---

### tr tag : r - row

row 를 뜻하며, 행을 나타낸다. - 가로줄

---

### th tag : h - head

세로줄을 표현 / 열을 표현한다.

대표하는 줄을 작성한다.

1. scope 속성 : 범위를 뜻함 - th에만 쓰임

⇒ th는 무언가를 대표 / 따라서, 행을 대표하는지, 열을 대표하는지 표시 = 접근성 good

```html
<table>
	<!--1열-->
	<tr>
		<!--행 대표-->
		<th scope="col">나라이름</th>
		<th scope="col">수도</th>
		<th scope="col">인구</th>
	</tr>

	<!--2열-->
	<tr>
		<th scope="row">한국</th>
		<!--열 대표-->
		<td>서울</td>
		<td>5100만</td>
	</tr>
	
	<!--3열-->
	<tr>
		<th scope="row">미국</th>
		<!--열 대표-->
		<td>워싱턴 D.C.</td>
		<td>3억</td>
	</tr>

	<!--4열-->
	<tr>
		<th scope="row">태국</th>
		<!--열 대표-->
		<td>방콕</td>
		<td>6900만</td>
	</tr>
</table>
```

1. colspan 속성 : 칸의 폭을 뜻함. / 숫자를 넣은 만큼 칸의 넓이를 지정 가능.

```html
<tr>
		<td colspan="2">방콕</td>
		<!--여기서는 2칸 차지-->
		<td>6900만</td>
	</tr>
```

---

### td tag : d - data

단순히 데이터를 적는 태그로 쓰인다.

## HTML thead, tbody, tfoot tag

```html
<!--기본 코드-->
<table>
	<!--t head-->
	<tr>
		<th scope="col">품목</th>
		<th scope="col">지출</th>
	</tr>

	<!--t body-->
	<tr>
		<th scope="row">대파</th>
		<td>3,000</td>
	</tr>
	
	<tr>
		<th scope="row">달걀</th>
		<td>4,000</td>
	</tr>

	<tr>
		<th scope="row">고양이간식</th>
		<td>12,000</td>
	</tr>

	<tr>
		<th scope="row">종이봉투</th>
		<td>300</td>
	</tr>

	<!--t foot-->
	<tr>
		<th scope="row">Totals</th>
		<td>33,300</td>
	</tr>
</table>
```

### thead tag

테이블의 head 영역

```html
<table>
	<thead>
		<tr>
			<th scope="col">품목</th>
			<th scope="col">지출</th>
		</tr>
	</thead>
</table>
```

---

### tbody tag

테이블의 body 영역

1. 기본 코드 

```html
<table>
	<tbody>
		<tr>
			<th scope="row">대파</th>
			<td>3,000</td>
		</tr>
	
		<tr>
			<th scope="row">달걀</th>
			<td>4,000</td>
		</tr>

		<tr>
			<th scope="row">고양이간식</th>
			<td>12,000</td>
		</tr>

		<tr>
			<th scope="row">종이봉투</th>
			<td>300</td>
		</tr>
	</tbody>
</table>
```

1. 두개의 tbody

```html
<table>
	<!--body1-->
	<tbody>
		<tr>
			<th scope="row">대파</th>
			<td>3,000</td>
		</tr>
	
		<tr>
			<th scope="row">달걀</th>
			<td>4,000</td>
		</tr>
	</tbody>

	<!--body2-->
	<tbody>
		<tr>
			<th scope="row">고양이간식</th>
			<td>12,000</td>
		</tr>

		<tr>
			<th scope="row">종이봉투</th>
			<td>300</td>
		</tr>
	</tbody>
</table>
```

1. 두개의 tbody에 각각의 제목 정해주기

```html
<table>
	<!--body1-->
	<tbody>
		<tr>
			<th colspan="2">식재료</th>
		</tr>

		<tr>
			<th scope="row">대파</th>
			<td>3,000</td>
		</tr>
	
		<tr>
			<th scope="row">달걀</th>
			<td>4,000</td>
		</tr>
	</tbody>

	<!--body2-->	
	<tbody>
		<tr>
			<th colspan="2">기타 품목</th>
		</tr>
		
		<tr>
			<th scope="row">고양이간식</th>
			<td>12,000</td>
		</tr>

		<tr>
			<th scope="row">종이봉투</th>
			<td>300</td>
		</tr>
	</tbody>
</table>
```

---

### tfoot tag

테이블의 footer 영역

```html
<table>
	<tfoot>
		<tr>
			<th scope="row">Totals</th>
			<td>33,300</td>
		</tr>
	</tfoot>
</table>
```

⇒ css 스타일링 할때 구획을 나눠서 스타일링 할 수 있어서 용이하다.

## HTML caption tag

### caption tag

표 설명 요소

테이블을 설명하기 위해 만들어진 요소이다. / 표 제목을 정할 수 있음

캡션은 무조건 테이블 요소의 첫번째 자식이다.

tr들이 여러가지이면 tr의 맨 앞에 해야된다. 

⇒ 캡션을 아래에 넣으려면 css 이용해서 수정해야한다. / 자동 가운데 정렬

⇒ 만약에 테이블이 아닌곳에 캡션을 사용하려면 figcaption을 사용한다.