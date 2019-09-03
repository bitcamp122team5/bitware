/*!
 * jQuery 자바 스크립트 라이브러리 v3.4.1
 * https://jquery.com/
 *
 * Sizzle.js 포함
 * https://sizzlejs.com/
 *
 * 저작권 JS 재단 및 기타 기고자
 * MIT 라이센스에 따라 출시
 * https://jquery.org/license
 *
 * 날짜 : 2019-05-01T21 : 04Z
 */
기능

	"엄격한 사용";

	if (typeof module === "object"&& typeof module.exports === "object") {

		// 적절한`창 '이있는 CommonJS 및 CommonJS와 유사한 환경
		// 존재하면 팩토리를 실행하고 jQuery를 가져옵니다.
		//`document`가있는`window`가없는 환경의 경우
		// (예 : Node.js) 팩토리를 module.exports로 노출합니다.
		// 이것은 실제`창 '을 만들 필요성을 강조합니다.
		// 예를 들어 var jQuery = require ( "jquery") (window);
		// 자세한 내용은 티켓 # 14549를 참조하십시오.
		module.exports = global.document?
			공장 (글로벌, 참) :
			함수 (w) {
				if (! w.document) {
					새로운 오류를 던지십시오 ( "jQuery는 문서가있는 창이 필요합니다");
				}
				반품 공장 (w);
			};
	} else {
		공장 (글로벌);
	}

// 윈도우가 아직 정의되지 않은 경우 전달
}) (typeof window! == "undefined"? window : this, function (window, noGlobal) {

// Edge <= 12-13 +, Firefox <= 18-45 +, IE 10-11, Safari 5.1-9+, iOS 6-9.1
// 엄격하지 않은 코드 (예 : ASP.NET 4.5)가 엄격 모드에 액세스하면 예외가 발생합니다.
// arguments.callee.caller (trac-13335). 그러나 jQuery 3.0 (2016)부터 엄격 모드가 일반적이어야합니다.
// 이러한 모든 시도가 try 블록에서 보호되도록 충분합니다.
"엄격한 사용";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call (객체);

var support = {};

var isFunction = 함수 isFunction (obj) {

      // 지원 : Chrome <= 57, Firefox <= 52
      // 일부 브라우저에서 typeof는 HTML <object> 요소에 대해 "function"을 반환합니다.
      // (즉,`typeof document.createElement ( "object") === "function"`).
      // * any * DOM 노드를 함수로 분류하고 싶지 않습니다.
      return typeof obj === "function"&& typeof obj.nodeType! == "숫자";
  };


var isWindow = 함수 isWindow (obj) {
		return obj! = null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		유형 : true,
		src : 사실,
		nonce : 사실,
		noModule : 참
	};

	함수 DOMEval (code, node, doc) {
		doc = doc || 문서;

		var i, val,
			script = doc.createElement ( "script");

		script.text = 코드;
		if (node) {
			for (i는 preservedScriptAttributes에서) {

				// 지원 : Firefox 64 이상, Edge 18+
				// 일부 브라우저는 스크립트에서 "nonce"속성을 지원하지 않습니다.
				// 반면에`getAttribute`를 사용하는 것만으로는 충분하지 않습니다.
				//`nonce` 속성은 매번 빈 문자열로 재설정됩니다
				// 브라우징 컨텍스트가 연결됩니다.
				// https://github.com/whatwg/html/issues/2369 참조
				// https://html.spec.whatwg.org/#nonce-attributes 참조
				//`node.getAttribute` 검사가 추가되었습니다.
				//`nQuery.globalEval`은 nonce 함유 노드를 위조 할 수 있도록
				// 객체를 통해.
				val = node [i] || node.getAttribute && node.getAttribute (i);
				if (val) {
					script.setAttribute (i, val);
				}
			}
		}
		doc.head.appendChild (스크립트) .parentNode.removeChild (스크립트);
	}


함수 toType (obj) {
	if (obj == null) {
		return obj + "";
	}

	// 지원 : Android <= 2.3 만 (RegExp 기능)
	반환 typeof obj === "객체"|| typeof obj === "함수"?
		class2type [toString.call (obj)] || "object":
		obj의 타입;
}
/ * 전역 기호 * /
// .eslintrc.json에서이 전역을 정의하면 전역을 사용할 위험이 있습니다.
// 다른 곳에서 보호를받지 않으면이 모듈에 대해서만 전역을 정의하는 것이 더 안전 해 보입니다



var
	버전 = "3.4.1",

	// jQuery의 로컬 사본 정의
	jQuery = 함수 (선택자, 컨텍스트) {

		// jQuery 객체는 실제로 init 생성자입니다.
		// jQuery가 호출되면 init가 필요합니다 (포함되지 않은 경우 오류가 발생하도록 허용).
		새로운 jQuery.fn.init (selector, context);
	},

	// 지원 : Android <= 4.0 만
	// BOM과 NBSP를 다듬어야합니다.
	rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g;

jQuery.fn = jQuery.prototype = {

	// 사용중인 jQuery의 현재 버전
	jquery : 버전,

	생성자 : jQuery,

	// jQuery 객체의 기본 길이는 0입니다.
	길이 : 0,

	toArray : 함수 () {
		return slice.call (this);
	},

	// 일치하는 요소 집합에서 N 번째 요소를 얻거나
	// 일치하는 전체 요소 집합을 깨끗한 배열로 가져옵니다.
	get : function (num) {

		// 깨끗한 배열의 모든 요소를 ​​반환
		if (num == null) {
			return slice.call (this);
		}

		// 집합에서 하나의 요소 만 반환
		반환 숫자 <0? this [num + this.length] : this [num];
	},

	// 요소 배열을 가져 와서 스택에 밀어 넣습니다.
	// (새로 일치하는 요소 집합을 반환)
	pushStack : 함수 (elems) {

		// 새로운 jQuery와 일치하는 요소 집합을 만듭니다.
		var ret = jQuery.merge (this.constructor (), elems);

		// 스택에 기존 객체를 추가합니다 (참조).
		ret.prevObject = 이것;

		// 새로 형성된 요소 집합을 반환
		리트 윗을 반환;
	},

	// 일치하는 세트의 모든 요소에 대한 콜백을 실행합니다.
	각각 : function (callback) {
		return jQuery.each (this, callback);
	},

	지도 : 함수 (콜백) {
		이것을 돌려줍니다. pushStack (jQuery.map (this, function (elem, i) {
			return callback.call (elem, i, elem);
		}));
	},

	슬라이스 : function () {
		this.pushStack (slice.apply (this, arguments))을 반환합니다.
	},

	첫 번째 : function () {
		이것을 돌려줍니다 .eq (0);
	},

	마지막 : function () {
		이것을 돌려줍니다 .eq (-1);
	},

	eq : 함수 (i) {
		var len = this.length,
			j = + i + (i <0? len : 0);
		이것을 돌려줍니다. pushStack (j> = 0 && j <len? [this [j]] : []);
	},

	끝 : 함수 () {
		this.prevObject를 리턴하십시오. || this.constructor ();
	},

	// 내부 전용.
	// jQuery 메서드가 아닌 Array 메서드처럼 동작합니다.
	밀어 밀어,
	정렬 : arr.sort,
	스플 라이스 : arr.splice
};

jQuery.extend = jQuery.fn.extend = function () {
	var 옵션, 이름, src, 복사, copyIsArray, 복제,
		대상 = 인수 [0] || {},
		i = 1
		길이 = arguments.length,
		깊은 = 거짓;

	// 딥 카피 상황 처리
	if (typeof target === "boolean") {
		깊은 = 목표;

		// 부울과 대상을 건너 뜁니다.
		대상 = 인수 [i] || {};
		i ++;
	}

	// target이 문자열이거나 무언가 인 경우 대소 문자 처리 (딥 카피 가능)
	if (typeof target! == "object"&&! isFunction (target)) {
		대상 = {};
	}

	// 하나의 인수 만 전달되면 jQuery 자체를 확장합니다.
	if (i === length) {
		목표 = 이것;
		나는--;
	}

	for (; i <길이; i ++) {

		// null이 아닌 / 정의되지 않은 값만 처리
		if ((옵션 = 인수 [i])! = null) {

			// 기본 객체 확장
			for (옵션의 이름) {
				복사 = 옵션 [이름];

				// Object.prototype 오염 방지
				// 끝없는 루프 방지
				if (name === "__proto__"|| target === 복사) {
					잇다;
				}

				// 일반 객체 또는 배열을 병합하는 경우 재귀
				if (deep && copy && (jQuery.isPlainObject (복사) ||
					(copyIsArray = Array.isArray (copy)))) {
					src = 대상 [이름];

					// 소스 값에 적합한 유형을 확인하십시오.
					if (copyIsArray &&! Array.isArray (src)) {
						클론 = [];
					} else if (! copyIsArray &&! jQuery.isPlainObject (src)) {
						클론 = {};
					} else {
						클론 = src;
					}
					copyIsArray = 거짓;

					// 원본 객체를 옮기지 말고 복제하십시오.
					target [name] = jQuery.extend (심층 복제, 복사);

				// 정의되지 않은 값을 가져 오지 마십시오
				} else if (copy! == undefined) {
					대상 [이름] = 복사;
				}
			}
		}
	}

	// 수정 된 객체를 반환
	반품 대상;
};

jQuery.extend ({

	// 페이지에서 jQuery의 각 사본마다 고유
	expando : "jQuery"+ (버전 + Math.random ()) .replace (/ \ D / g, ""),

	// 준비 모듈없이 jQuery가 준비되었다고 가정
	isReady : true,

	오류 : function (msg) {
		새로운 오류를 던지십시오 (msg);
	},

	noop : function () {},

	isPlainObject : 함수 (obj) {
		var proto, Ctor;

		// 명백한 부정을 감지
		// jQuery.type 대신 toString을 사용하여 호스트 객체를 포착
		if (! obj || toString.call (obj)! == "[object Object]") {
			거짓을 반환;
		}

		프로토 = getProto (obj);

		// 프로토 타입이없는 객체 (예 :`Object.create (null)`)는 평범합니다
		if (! proto) {
			true를 반환;
		}

		// 프로토 타입이있는 객체는 전역 객체 함수로 생성 된 경우 일반입니다.
		Ctor = hasOwn.call (proto, "constructor") && proto.constructor;
		반환 유형 of Ctor === "함수"&& fnToString.call (Ctor) === ObjectFunctionString;
	},

	isEmptyObject : 함수 (obj) {
		var 이름;

		for (obj의 이름) {
			거짓을 반환;
		}
		true를 반환;
	},

	// 글로벌 컨텍스트에서 스크립트를 평가합니다
	globalEval : 함수 (코드, 옵션) {
		DOMEval (code, {nonce : 옵션 및 옵션 .nonce});
	},

	각각 : function (obj, callback) {
		var 길이, i = 0;

		if (isArrayLike (obj)) {
			길이 = obj.length;
			for (; i <길이; i ++) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					단절;
				}
			}
		} else {
			for (i in obj) {
				if (callback.call (obj [i], i, obj [i]) === false) {
					단절;
				}
			}
		}

		반환 obj;
	},

	// 지원 : Android <= 4.0 만
	다듬기 : function (text) {
		텍스트 반환 == null?
			"":
			(text + "") .replace (rtrim, "");
	},

	// 결과는 내부 용입니다
	makeArray : 함수 (arr, results) {
		var ret = 결과 || [];

		if (arr! = null) {
			if (isArrayLike (Object (arr))) {
				jQuery.merge (ret,
					typeof arr === "문자열"?
					[arr] : arr
				);
			} else {
				push.call (ret, arr);
			}
		}

		리트 윗을 반환;
	},

	inArray : 함수 (elem, arr, i) {
		return arr == null? -1 : indexOf.call (arr, elem, i);
	},

	// 지원 : Android <= 4.0 만, PhantomJS 1 만
	// 고대 WebKit에서 push.apply (_, arraylike)가 발생합니다.
	병합 : function (first, second) {
		var len = + second.length,
			j = 0,
			i = first.length;

		for (; j <len; j ++) {
			첫 번째 [i ++] = 두 번째 [j];
		}

		first.length = i;

		먼저 돌아 오십시오;
	},

	grep : 함수 (요소, 콜백, 반전) {
		var callbackInverse,
			일치 = [],
			i = 0,
			길이 = elems.length,
			callbackExpect =! 역전;

		// 배열을 살펴보고 항목 만 저장
		// 유효성 검사기 함수를 전달합니다.
		for (; i <길이; i ++) {
			callbackInverse =! callback (elems [i], i);
			if (callbackInverse! == callbackExpect) {
				matches.push (요소 [i]);
			}
		}

		리턴 매치;
	},

	// arg는 내부 사용 전용입니다.
	지도 : function (elems, callback, arg) {
		var 길이, 값,
			i = 0,
			ret = [];

		// 각 항목을 새로운 값으로 변환하여 배열을 살펴 봅니다.
		if (isArrayLike (elems)) {
			길이 = elems.length;
			for (; i <길이; i ++) {
				값 = 콜백 (elems [i], i, arg);

				if (value! = null) {
					ret.push (값);
				}
			}

		// 객체의 모든 키를 살펴보고
		} else {
			for (나는 elems) {
				값 = 콜백 (elems [i], i, arg);

				if (value! = null) {
					ret.push (값);
				}
			}
		}

		// 중첩 배열을 병합
		반환 concat.apply ([], ret);
	},

	// 객체에 대한 전역 GUID 카운터
	안내 : 1,

	// jQuery.support는 Core에서 사용되지 않지만 다른 프로젝트는
	// 속성이 존재해야합니다.
	지원 : 지원
});

if (typeof Symbol === "function") {
	jQuery.fn [Symbol.iterator] = arr [Symbol.iterator];
}

// class2type 맵을 채 웁니다
jQuery.each ( "부울 숫자 문자열 함수 배열 날짜 RegExp 객체 오류 기호".split ( ""),
함수 (i, 이름) {
	class2type [ "[object"+ name + "]"] = name.toLowerCase ();
});

함수 isArrayLike (obj) {

	// 지원 : 실제 iOS 8.2 전용 (시뮬레이터에서는 재현 할 수 없음)
	// JIT 오류 방지에 사용되는`in` 검사 (gh-2145)
	// 잘못된 부정으로 인해 hasOwn이 사용되지 않습니다.
	// IE의 노드 목록 길이
	obj && obj.length에서 var length = !! obj && "length",
		유형 = toType (obj);

	if (isFunction (obj) || isWindow (obj)) {
		거짓을 반환;
	}

	반환 유형 === "배열"|| 길이 === 0 ||
		obj의 typeof length === "숫자"&& 길이> 0 && (길이-1);
}
var Sizzle =
/ *!
 * Sizzle CSS 선택기 엔진 v2.3.4
 * https://sizzlejs.com/
 *
 * 저작권 JS 재단 및 기타 기고자
 * MIT 라이센스에 따라 출시
 * https://js.foundation/
 *
 * 날짜 : 2019-04-08
 * /
(기능 (윈도우) {

var i,
	지원하다,
	전문가,
	getText,
	isXML,
	토큰 화
	엮다,
	고르다,
	가장 바깥 쪽 문맥,
	sortInput,
	hasDuplicate,

	// 로컬 문서 변수
	setDocument,
	문서,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	성냥,
	포함

	// 인스턴스 별 데이터
	expando = "sizzle"+ 1 * 새 날짜 (),
	preferredDoc = window.document,
	dirruns = 0,
	완료 = 0,
	classCache = createCache (),
	tokenCache = createCache (),
	compilerCache = createCache (),
	nonnativeSelectorCache = createCache (),
	sortOrder = 함수 (a, b) {
		if (a === b) {
			hasDuplicate = true;
		}
		리턴 0;
	},

	// 인스턴스 메소드
	hasOwn = ({}). hasOwnProperty,
	arr = [],
	팝 = arr.pop,
	push_native = arr.push,
	푸시 = arr.push,
	슬라이스 = arr.slice,
	// 네이티브보다 빠르기 때문에 잘린 indexOf를 사용하십시오.
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = 함수 (list, elem) {
		var i = 0,
			len = list.length;
		for (; i <len; i ++) {
			if (list [i] === elem) {
				i를 반환;
			}
		}
		리턴 -1;
	},

	부울 = "선택 | 선택 | 비동기 | 자동 초점 | 자동 실행 | 제어 | 지연 | 비활성화 | 숨김 | ismap | 루프 | 여러 | 열기 | 읽기 전용 | 필수 | 범위",

	// 정규식

	// http://www.w3.org/TR/css3-selectors/#whitespace
	공백 = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	식별자 = "(? : \\\\. | [\\ w-] | [^ \ 0-\\ xa0]) +",

	// 속성 선택기 : http://www.w3.org/TR/selectors/#attribute-selectors
	속성 = "\\ ["+ 공백 + "* ("+ 식별자 + ") (?:"+ 공백 +
		// 연산자 (캡처 2)
		"* ([* ^ $ |! ~]? =)"+ 공백 +
		// "속성 값은 CSS 식별자 [캡처 5] 또는 문자열 [캡처 3 또는 캡처 4]이어야합니다."
		"* (? : '((? : \\\\. | [^ \\\\']) *) '| \"((? : \\\. | [^ \\\\\ "" ) *) \ "| ("+ identifier + ")) |)"+ 공백 +
		"* \\]",

	의사 = ":("+ 식별자 + ") (? : \\ (("+
		// preFilter에서 토큰 화가 필요한 선택기의 수를 줄이려면 인수를 선호하십시오.
		// 1. 인용 (캡처 3; 캡처 4 또는 캡처 5)
		"( '((? : \\\ .. [^ \\\\']) *) '| \"((?? \\\\. | [^ \\\\\ "]) *) \ ") |"+
		// 2. 단순 (캡처 6)
		"((?? \\\\. | [^ \\\\ () [\\]] |"+ 속성 + ") *) |" +
		// 3. 다른 것 (캡쳐 2)
		". *"+
		") \\) |)",

	// 선행 및 이스케이프 처리되지 않은 후행 공백. 공백이 아닌 문자를 앞뒤 공백으로 캡처
	rwhitespace = 새로운 RegExp (공백 + "+", "g"),
	rtrim = 새로운 RegExp ( "^"+ 공백 + "+ | ((? : ^ | [^ \\\\]) (? : \\\ .. **" "+ 공백 +"+ $ ","g "),

	rcomma = new RegExp ( "^"+ 공백 + "*,"+ 공백 + "*"),
	rcombinators = 새로운 RegExp ( "^"+ 공백 + "* ([> + ~] |"+ 공백 + ")"+ 공백 + "*"),
	rdescend = 새로운 RegExp (공백 + "|>"),

	rpseudo = 새로운 RegExp (의사),
	ridentifier = 새로운 RegExp ( "^"+ 식별자 + "$"),

	matchExpr = {
		"ID": 새로운 RegExp ( "^ # ("+ identifier + ")"),
		"CLASS": 새로운 RegExp ( "^ \\. ("+ identifier + ")"),
		"TAG": 새로운 RegExp ( "^ ("+ identifier + "| [*])"),
		"ATTR": 새로운 RegExp ( "^"+ 속성),
		"PSEUDO": 새로운 RegExp ( "^"+ 의사),
		"CHILD": 새로운 RegExp ( "^ :( only | first | last | nth | nth-last)-(child | of-type) (? : \\ ("+ 공백 +
			"* (짝 | 홀수 | ((([+-] |) (\\ d *) n |)"+ 공백 + "* (? : ([+-] |)"+ 공백 +
			"* (\\ d +) |))"+ 공백 + "* \\) |)", "i"),
		"bool": 새로운 RegExp ( "^ (?:"+ booleans + ") $", "i"),
		// .is ()를 구현하는 라이브러리에서 사용
		//`select`에서 POS 매칭을 위해 이것을 사용
		"needsContext": 새로운 RegExp ( "^"+ 공백 + "* [> + ~] | : (even | odd | eq | gt | lt | nth | first | last) (? : \\ ("+
			공백 + "* ((? :-\\ d)? \\ d *)"+ 공백 + "* \\) |) (? = [^-] | $)", "i")
	},

	rhtml = / HTML $ / i,
	rinputs = / ^ (?: 입력 | 선택 | 텍스트 | 버튼) $ / i,
	rheader = / ^ h \ d $ / i,

	rnative = / ^ [^ {] + \ {\ s * \ [네이티브 \ w /,

	// 쉽게 구문 분석 가능 / 검색 가능 ID 또는 TAG 또는 CLASS 선택기
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = / [+ ~] /,

	// CSS 이스케이프
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp ( "\\\\ ([\\ da-f] {1,6}"+ 공백 + "? | ("+ 공백 + ") |.)", "ig"),
	funescape = 함수 (_, 이스케이프, 이스케이프 된 공백) {
		var high = "0x"+ 이스케이프-0x10000;
		// NaN은 비 코드 포인트를 의미
		// 지원 : Firefox <24
		// + "0x"의 잘못된 숫자 해석
		높은 반환! == 높은 || escapedWhitespace?
			탈출 :
			높음 <0?
				// BMP 코드 포인트
				String.fromCharCode (높음 + 0x10000) :
				// 보조 평면 코드 포인트 (대리 쌍)
				String.fromCharCode (높음 >> 10 | 0xD800, 높음 및 0x3FF | 0xDC00);
	},

	// CSS 문자열 / 식별자 직렬화
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = / ([\ 0- \ x1f \ x7f] | ^-? \ d) | ^-$ | [^ \ 0- \ x1f \ x7f- \ uFFFF \ w-] / g,
	fcssescape = 함수 (ch, asCodePoint) {
		if (asCodePoint) {

			// U + 0000 NULL이 U + FFFD 교체 문자가 됨
			if (ch === "\ 0") {
				"\ uFFFD"를 반환;
			}

			// 제어 문자 및 (위치에 따라) 숫자가 코드 포인트로 이스케이프됩니다.
			ch.slice (0, -1) + "\\"+ ch.charCodeAt (ch.length-1) .toString (16) + ""를 반환합니다.
		}

		// 다른 잠재적으로 특수한 ASCII 문자는 백 슬래시로 이스케이프됩니다.
		"\\"+ ch를 반환;
	},

	// iframe에 사용
	// setDocument () 참조
	// 함수 래퍼를 제거하면 "권한이 거부되었습니다"
	// IE 오류
	unloadHandler = 함수 () {
		setDocument ();
	},

	inDisabledFieldset = addCombinator (
		함수 (elem) {
			return elem.disabled === true && elem.nodeName.toLowerCase () === "필드 셋";
		},
		{dir : "parentNode", 다음 : "legend"}
	);

// push.apply (_, NodeList)에 최적화
{
	push.apply (
		(arr = slice.call (preferredDoc.childNodes)),
		preferredDoc.childNodes
	);
	// 지원 : Android <4.0
	// 자동으로 실패한 push.apply 감지
	arr [preferredDoc.childNodes.length] .nodeType;
} catch (e) {
	push = {적용 : arr.length?

		// 가능하면 슬라이스 활용
		함수 (target, els) {
			push_native.apply (대상, slice.call (els));
		} :

		// 지원 : IE <9
		// 그렇지 않으면 직접 추가
		함수 (target, els) {
			var j = target.length,
				i = 0;
			// NodeList.length를 신뢰할 수 없음
			while ((target [j ++] = els [i ++])) {}
			target.length = j-1;
		}
	};
}

함수 Sizzle (선택자, 컨텍스트, 결과, 시드) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = 컨텍스트 && context.ownerDocument,

		// 컨텍스트는 기본적으로 문서이므로 nodeType의 기본값은 9입니다.
		nodeType = 컨텍스트? context.nodeType : 9;

	결과 = 결과 || [];

	// 잘못된 선택기 또는 컨텍스트가있는 호출에서 일찍 반환
	if (typeof selector! == "string"||! selector ||
		nodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		결과 반환;
	}

	// HTML 문서에서 찾기 작업을 바로 가기로 시도하십시오 (필터가 아닌).
	if (! seed) {

		if ((문맥? context.ownerDocument || 문맥 : preferredDoc)! == 문서) {
			setDocument (컨텍스트);
		}
		문맥 = 문맥 || 문서;

		if (documentIsHTML) {

			// 선택기가 충분히 간단한 경우 "get * By *"DOM 메소드를 사용해보십시오.
			// (메서드가없는 DocumentFragment 컨텍스트 제외)
			if (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// 아이디 선택기
				if ((m = match [1])) {

					// 문서 컨텍스트
					if (nodeType === 9) {
						if ((elem = context.getElementById (m))) {

							// 지원 : IE, Opera, 웹킷
							// TODO : 버전 식별
							// getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
							if (elem.id === m) {
								results.push (elem);
								결과 반환;
							}
						} else {
							결과 반환;
						}

					// 요소 컨텍스트
					} else {

						// 지원 : IE, Opera, 웹킷
						// TODO : 버전 식별
						// getElementById는 ID 대신 이름으로 요소를 일치시킬 수 있습니다.
						if (newContext && (elem = newContext.getElementById (m)) &&
							포함 (문맥, 요소) &&
							elem.id === m) {

							results.push (elem);
							결과 반환;
						}
					}

				// 타입 선택기
				} else if (match [2]) {
					push.apply (결과, context.getElementsByTagName (selector));
					결과 반환;

				// 클래스 선택기
				} else if ((m = match [3]) && support.getElementsByClassName &&
					context.getElementsByClassName) {

					push.apply (결과, context.getElementsByClassName (m));
					결과 반환;
				}
			}

			// querySelectorAll 활용
			if (support.qsa &&
				! nonnativeSelectorCache [선택기 + ""] &&
				(! rbuggyQSA ||! rbuggyQSA.test (selector)) &&

				// 지원 : IE 8 만
				// 객체 요소 제외
				(nodeType! == 1 || context.nodeName.toLowerCase ()! == "object")) {

				newSelector = 선택기;
				newContext = 문맥;

				// qSA는 자식을 평가할 때 범위를 벗어난 요소를 고려합니다.
				// 우리가 원하는 것이 아닌 하위 컴비 네이터.
				// 그런 경우에는 모든 셀렉터 앞에 접두사를 붙여 동작을 해결합니다.
				// 범위 컨텍스트를 참조하는 ID 선택기를 사용하여 나열합니다.
				//이 기술에 대해 Andrew Dupont에게 감사합니다.
				if (nodeType === 1 && rdescend.test (selector)) {

					// 컨텍스트 ID를 캡처하여 필요한 경우 먼저 설정
					if ((nid = context.getAttribute ( "id"))) {
						nid = nid.replace (rcssescape, fcssescape);
					} else {
						context.setAttribute ( "id", (nid = expando));
					}

					// 목록의 모든 선택기 접두사
					그룹 = tokenize (선택기);
					i = groups.length;
					while (i--) {
						groups [i] = "#"+ nid + ""+ toSelector (groups [i]);
					}
					newSelector = groups.join ( ",");

					// 형제 선택기의 컨텍스트 확장
					newContext = rsibling.test (selector) && testContext (context.parentNode) ||
						문맥;
				}

				{
					push.apply (결과,
						newContext.querySelectorAll (newSelector)
					);
					결과 반환;
				} catch (qsaError) {
					nonnativeSelectorCache (선택자, true);
				} 마지막으로 {
					if (nid === expando) {
						context.removeAttribute ( "id");
					}
				}
			}
		}
	}

	// 다른 모든
	return select (selector.replace (rtrim, "$ 1"), 컨텍스트, 결과, 시드);
}

/ **
 제한된 크기의 키-값 캐시 만들기
 * @returns {function (string, object)} 객체 데이터를
 * 속성 이름 (공백 접미어) 문자열 및 (캐시가 Expr.cacheLength보다 큰 경우)
 * 가장 오래된 항목 삭제
 * /
함수 createCache () {
	var keys = [];

	함수 캐시 (키, 값) {
		// 기본 프로토 타입 속성과의 충돌을 피하려면 (키 + "")를 사용하십시오 (문제 # 157 참조)
		if (keys.push (key + "")> Expr.cacheLength) {
			// 가장 최근 항목 만 유지
			캐시 삭제 [keys.shift ()];
		}
		return (캐시 [키 + ""] = 값);
	}
	캐시 반환;
}

/ **
 * Sizzle의 특수 용도 기능 표시
 * @param {Function} fn 표시 할 기능
 * /
함수 markFunction (fn) {
	fn [expando] = true;
	리턴 fn;
}

/ **
 * 요소를 사용한 지원 테스트
 * @param {Function} fn 작성된 요소를 전달하고 부울 결과를 리턴합니다.
 * /
함수 assert (fn) {
	var el = document.createElement ( "fieldset");

	{
		return !! fn (el);
	} 잡기 (e) {
		거짓을 반환;
	} 마지막으로 {
		// 기본적으로 부모에서 제거
		if (el.parentNode) {
			el.parentNode.removeChild (el);
		}
		// IE에서 메모리 해제
		el = null;
	}
}

/ **
 * 지정된 모든 attr에 동일한 핸들러를 추가합니다
 * @param {String} attrs 파이프로 구분 된 속성 목록
 * @param {Function} 핸들러 적용 할 메소드
 * /
함수 addHandle (attrs, handler) {
	var arr = attrs.split ( "|"),
		i = arr.length;

	while (i--) {
		Expr.attrHandle [arr [i]] = 핸들러;
	}
}

/ **
 * 두 형제의 문서 순서를 확인합니다
 * @param {요소}
 * @param {요소} b
 * @returns {Number} a 앞에 b가 있으면 0보다 작고 a 뒤에 b가 있으면 0보다 큰 것을 반환합니다.
 * /
기능 형제 확인 (a, b) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex-b.sourceIndex;

	// 두 노드에서 모두 사용 가능한 경우 IE sourceIndex를 사용하십시오.
	if (diff) {
		반품 차이;
	}

	// b가 a를 따르는 지 확인
	if (cur) {
		while ((cur = cur.nextSibling)) {
			if (cur === b) {
				리턴 -1;
			}
		}
	}

	?를 반환 1 : -1;
}

/ **
 * 입력 유형에 대한 의사에서 사용할 함수를 반환
 * @param {String} 유형
 * /
함수 createInputPseudo (type) {
	리턴 함수 (elem) {
		var name = elem.nodeName.toLowerCase ();
		반환 이름 === "입력"&& elem.type === 유형;
	};
}

/ **
 * 버튼에 의사에서 사용할 함수를 반환
 * @param {String} 유형
 * /
함수 createButtonPseudo (type) {
	리턴 함수 (elem) {
		var name = elem.nodeName.toLowerCase ();
		return (name === "input"|| name === "button") && elem.type === 유형;
	};
}

/ **
 : : enabled / : disabled에 대한 의사에서 사용할 함수를 반환합니다.
 * @param {Boolean} disabled : disabled에 대해 true입니다. : enabled에 대해 false
 * /
함수 createDisabledPseudo (disabled) {

	// 알려진 : 잘못된 오 탐지 : fieldset [disabled]> legend : nth-of-type (n + 2) : can-disable
	리턴 함수 (elem) {

		// 특정 요소 만 : enabled 또는 : disabled와 일치 할 수 있습니다.
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if (elem의 "form") {

			// 관련 비활성화되지 않은 요소에서 상속 된 비활성화를 확인합니다.
			// * 비활성화 된 필드 세트에 나열된 양식 관련 요소
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * 비활성화 된 optgroup의 옵션 요소
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// 이러한 모든 요소에는 "form"속성이 있습니다.
			if (elem.parentNode && elem.disabled === false) {

				// 옵션 요소가 있으면 부모 optgroup을 연기합니다.
				if (elem의 "label") {
					if (elem.parentNode의 "label") {
						반환 elem.parentNode.disabled === 비활성화;
					} else {
						반환 elem.disabled === 비활성화;
					}
				}

				// 지원 : IE 6-11
				// isDisabled 단축키 속성을 사용하여 비활성화 된 필드 셋 조상을 확인합니다.
				반환 elem.isDisabled === 비활성화 ||

					// isDisabled가없는 경우 수동으로 확인
					/ * jshint -W018 * /
					elem.isDisabled! ==! disabled &&
						inDisabledFieldset (elem) === 비활성화 됨;
			}

			반환 elem.disabled === 비활성화;

		// disabled 속성을 신뢰하기 전에 비활성화 할 수없는 요소를 알아 내십시오.
		// 일부 희생자들은 우리의 그물 (라벨, 범례, 메뉴, 트랙)에 갇히지 만
		// 부울 값을 갖는 것은 물론이고 그들에게도 존재합니다.
		} else if (elem의 "label") {
			반환 elem.disabled === 비활성화;
		}

		// 나머지 요소는 : enabled 또는 : disabled가 아닙니다.
		거짓을 반환;
	};
}

/ **
 * 위치에 대한 의사에서 사용할 함수를 반환
 * @param {함수} fn
 * /
함수 createPositionalPseudo (fn) {
	return markFunction (함수 (인수) {
		인수 = + 인수;
		return markFunction (함수 (종자, 일치) {
			var j,
				matchIndexes = fn ([], seed.length, argument),
				i = matchIndexes.length;

			// 지정된 인덱스에서 찾은 요소 일치
			while (i--) {
				if (seed [(j = matchIndexes [i])]) {
					seed [j] =! (일치 [j] = seed [j]);
				}
			}
		});
	});
}

/ **
 * Sizzle 컨텍스트로서 노드의 유효성을 확인합니다
 * @param {Element | Object =} 컨텍스트
 * @returns {Element | Object | Boolean} 허용되는 경우 입력 노드, 그렇지 않은 경우 잘못된 값
 * /
함수 testContext (컨텍스트) {
	컨텍스트 반환 && typeof context.getElementsByTagName! == "정의되지 않음"&& 컨텍스트;
}

// 편의를 위해 지원 변수를 노출
support = Sizzle.support = {};

/ **
 * XML 노드를 감지
 * @param {Element | Object} elem 요소 또는 문서
 * @returns {Boolean} HTML이 아닌 XML 노드 인 경우 참
 * /
isXML = Sizzle.isXML = 함수 (elem) {
	var 네임 스페이스 = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem) .documentElement;

	// 지원 : IE <= 8
	// iframe 내부로드와 같이 documentElement가 아직없는 경우 HTML을 가정합니다.
	// https://bugs.jquery.com/ticket/4833
	return! rhtml.test (네임 스페이스 || docElem && docElem.nodeName || "HTML");
};

/ **
 * 현재 문서를 기준으로 문서 관련 변수를 한 번 설정
 * @param {Element | Object} [doc] 문서를 설정하는 데 사용할 요소 또는 문서 개체
 * @returns {Object} 현재 문서를 반환
 * /
setDocument = Sizzle.setDocument = 함수 (노드) {
	var hasCompare, subWindow,
		doc = 노드? node.ownerDocument || 노드 : preferredDoc;

	// doc이 유효하지 않거나 이미 선택된 경우 일찍 반환
	if (doc === document || doc.nodeType! == 9 ||! doc.documentElement) {
		반품 서류;
	}

	// 전역 변수 업데이트
	문서 = 문서;
	docElem = document.documentElement;
	documentIsHTML =! isXML (문서);

	// 지원 : IE 9-11, Edge
	// 언로드 후 iframe 문서에 액세스하면 "권한 거부"오류가 발생 함 (jQuery # 13936)
	if (preferredDoc! == 문서 &&
		(subWindow = document.defaultView) && subWindow.top! == subWindow) {

		// 지원 : IE 11, Edge
		if (subWindow.addEventListener) {
			subWindow.addEventListener ( "언로드", 언로드 핸들러, 거짓);

		// 지원 : IE 9-10 만
		} else if (subWindow.attachEvent) {
			subWindow.attachEvent ( "onunload", unloadHandler);
		}
	}

	/ * 속성
	-------------------------------------------------- -------------------- * /

	// 지원 : IE <8
	// getAttribute가 속성이 아닌 속성을 실제로 반환하는지 확인
	// (IE8 부울 제외)
	support.attributes = assert (function (el) {
		el.className = "i";
		return! el.getAttribute ( "className");
	});

	/ * getElement (s)으로 *
	-------------------------------------------------- -------------------- * /

	// getElementsByTagName ( "*")가 요소 만 반환하는지 확인
	support.getElementsByTagName = assert (함수 (el) {
		el.appendChild (document.createComment ( ""));
		return! el.getElementsByTagName ( "*"). length;
	});

	// 지원 : IE <9
	support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// 지원 : IE <10
	// getElementById가 이름으로 요소를 리턴하는지 확인
	// 깨진 getElementById 메소드는 프로그래밍 방식으로 설정된 이름을 선택하지 않습니다.
	// 로터리 getElementsByName 테스트를 사용하십시오.
	support.getById = assert (function (el) {
		docElem.appendChild (el) .id = expando;
		! document.getElementsByName을 리턴하십시오. || ! document.getElementsByName (expando) .length;
	});

	// ID 필터와 찾기
	if (support.getById) {
		Expr.filter [ "ID"] = 함수 (id) {
			var attrId = id.replace (runescape, funescape);
			리턴 함수 (elem) {
				return elem.getAttribute ( "id") === attrId;
			};
		};
		Expr.find [ "ID"] = 함수 (id, 컨텍스트) {
			if (typeof context.getElementById! == "undefined"&& documentIsHTML) {
				var elem = context.getElementById (id);
				엘렘을 반환? [요소] : [];
			}
		};
	} else {
		Expr.filter [ "ID"] = 함수 (id) {
			var attrId = id.replace (runescape, funescape);
			리턴 함수 (elem) {
				var node = typeof elem.getAttributeNode! == "정의되지 않음"&&
					elem.getAttributeNode ( "id");
				리턴 노드 && node.value === attrId;
			};
		};

		// 지원 : IE 6-7 만
		// getElementById는 찾기 바로 가기로 신뢰할 수 없습니다
		Expr.find [ "ID"] = 함수 (id, 컨텍스트) {
			if (typeof context.getElementById! == "undefined"&& documentIsHTML) {
				var 노드, i, elems,
					elem = context.getElementById (id);

				if (elem) {

					// id 속성 확인
					노드 = elem.getAttributeNode ( "id");
					if (node ​​&& node.value === id) {
						반환 [elem];
					}

					// getElementsByName으로 폴백
					elems = context.getElementsByName (id);
					i = 0;
					while ((elem = elems [i ++])) {
						노드 = elem.getAttributeNode ( "id");
						if (node ​​&& node.value === id) {
							반환 [elem];
						}
					}
				}

				반환 [];
			}
		};
	}

	// 태그
	Expr.find [ "TAG"] = support.getElementsByTagName?
		함수 (태그, 컨텍스트) {
			if (typeof context.getElementsByTagName! == "undefined") {
				context.getElementsByTagName (tag)을 반환합니다.

			// DocumentFragment 노드에는 gEBTN이 없습니다.
			} else if (support.qsa) {
				context.querySelectorAll (tag)을 반환합니다.
			}
		} :

		함수 (태그, 컨텍스트) {
			var elem,
				tmp = [],
				i = 0,
				// 행복한 우연의 일치로, (파손 된) gEBTN이 DocumentFragment 노드에도 나타납니다.
				결과 = context.getElementsByTagName (태그);

			// 가능한 주석을 필터링
			if (tag === "*") {
				while ((elem = results [i ++])) {
					if (elem.nodeType === 1) {
						tmp.push (요소);
					}
				}

				tmp를 반환;
			}
			결과 반환;
		};

	// 수업
	Expr.find [ "CLASS"] = support.getElementsByClassName && function (className, 컨텍스트) {
		if (typeof context.getElementsByClassName! == "undefined"&& documentIsHTML) {
			context.getElementsByClassName (className)을 반환합니다.
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- -------------------- * /

	// QSA 및 matchesSelector 지원

	// matchesSelector (: active)가 true 인 경우 false를보고합니다 (IE9 / Opera 11.5)
	rbuggyMatches = [];

	// true 인 경우 qSa (: focus)에서 false를보고합니다 (Chrome 21)
	// IE8 / 9의 버그로 인해 오류가 발생합니다.
	//`document.activeElement`가 iframe에서 액세스 될 때마다
	// IE 오류를 피하기 위해 : focus가 항상 QSA를 통과하도록 허용합니다.
	// https://bugs.jquery.com/ticket/13378 참조
	rbuggyQSA = [];

	if ((support.qsa = rnative.test (document.querySelectorAll))) {
		// QSA 정규식 작성
		// Diego Perini에서 채택한 정규식 전략
		assert (함수 (el) {
			// 선택은 선택적으로 빈 문자열로 설정됩니다
			// IE의 명시적인 처리를 테스트하기위한 것입니다.
			// 부울 컨텐츠 속성 설정
			// 존재가 충분해야하기 때문에
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild (el) .innerHTML = "<a id='" + expando + "'> </a>"+
				"<select id = '"+ expando + "-\ r \\'msallowcapture = ''>"+
				"<option selected = ''> </ option> </ select>";

			// 지원 : IE8, Opera 11-12.16
			// 빈 문자열이 ^ = 또는 $ = 또는 * = 뒤에 올 때는 아무것도 선택하지 않아야합니다.
			// Opera에서는 테스트 속성을 알 수 없지만 WinRT의 경우 "안전"해야합니다.
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if (el.querySelectorAll ( "[msallowcapture ^ = '']"). length) {
				rbuggyQSA.push ( "[* ^ $] ="+ 공백 + "* (? : '' ''\\"\ ")");
			}

			// 지원 : IE8
			// 부울 속성 및 "값"이 올바르게 처리되지 않습니다
			if (! el.querySelectorAll ( "[selected]"). length) {
				rbuggyQSA.push ( "\\ ["+ 공백 + "* (?: value |"+ 부울 + ")");
			}

			// 지원 : Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			if (! el.querySelectorAll ( "[id ~ ="+ expando + "-]") .length) {
				rbuggyQSA.push ( "~ =");
			}

			// Webkit / Opera-: 선택하면 선택한 옵션 요소가 반환됩니다.
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8에서 오류가 발생하고 나중에 테스트가 표시되지 않습니다.
			if (! el.querySelectorAll ( ": checked"). length) {
				rbuggyQSA.push ( ": checked");
			}

			// 지원 : Safari 8 이상, iOS 8 이상
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// 인 페이지`selector # id sibling-combinator selector`가 실패 함
			if (! el.querySelectorAll ( "a #"+ expando + "+ *") .length) {
				rbuggyQSA.push ( ". #. + [+ ~]");
			}
		});

		assert (함수 (el) {
			el.innerHTML = "<a href='' disabled='disabled'> </a>"+
				"<select disabled = 'disabled'> <option /> </ select>";

			// 지원 : Windows 8 기본 앱
			// .innerHTML 할당 중에 type 및 name 속성이 제한됩니다.
			var input = document.createElement ( "input");
			input.setAttribute ( "type", "hidden");
			el.appendChild (input) .setAttribute ( "name", "D");

			// 지원 : IE8
			// 이름 속성의 대소 문자 구분을 시행합니다
			if (el.querySelectorAll ( "[name = d]"). length) {
				rbuggyQSA.push ( "name"+ 공백 + "* [* ^ $ |! ~]? =");
			}

			// FF 3.5-: enabled / : 비활성화 및 숨겨진 요소 (숨겨진 요소는 여전히 활성화 됨)
			// IE8에서 오류가 발생하고 나중에 테스트가 표시되지 않습니다.
			if (el.querySelectorAll ( ": enabled"). length! == 2) {
				rbuggyQSA.push ( ": enabled", ": disabled");
			}

			// 지원 : IE9-11 +
			// IE : 비활성화 선택기가 비활성화 된 필드 집합의 자식을 선택하지 않습니다.
			docElem.appendChild (el) .disabled = true;
			if (el.querySelectorAll ( ": disabled"). length! == 2) {
				rbuggyQSA.push ( ": enabled", ": disabled");
			}

			// 오페라 10-11은 쉼표 뒤에 유효하지 않은 의사를 던지지 않습니다
			el.querySelectorAll ( "* ,: x");
			rbuggyQSA.push ( ",. * :");
		});
	}

	if ((support.matchesSelector = rnative.test ((일치 = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector)))) {

		assert (함수 (el) {
			// matchSelector가 가능한지 확인
			// 연결이 끊긴 노드 (IE 9)
			support.disconnectedMatch = matches.call (el, "*");

			// 예외로 실패해야합니다.
			// Gecko는 오류가 아니며 대신 false를 반환합니다.
			matches.call (el, "[s! = ''] : x");
			rbuggyMatches.push ( "! =", pseudos);
		});
	}

	rbuggyQSA = rbuggyQSA.length && 새로운 RegExp (rbuggyQSA.join ( "|"));
	rbuggyMatches = rbuggyMatches.length && 새로운 RegExp (rbuggyMatches.join ( "|"));

	/ * 포함
	-------------------------------------------------- -------------------- * /
	hasCompare = rnative.test (docElem.compareDocumentPosition);

	// 요소가 다른 요소를 포함
	// 의도적으로 자체 배타적
	// 마찬가지로, 요소는 자체를 포함하지 않습니다
	포함 = hasCompare || rnative.test (docElem.contains)?
		함수 (a, b) {
			var adown = a.nodeType === 9? a.documentElement : a,
				bup = b && b.parentNode;
			a === bup ||를 반환 !! (bup && bup.nodeType === 1 && (
				adown.contains?
					adown.contains (bup)을 포함합니다 :
					a.compareDocumentPosition && a.compareDocumentPosition (bup) 및 16
			));
		} :
		함수 (a, b) {
			if (b) {
				while ((b = b.parentNode)) {
					if (b === a) {
						true를 반환;
					}
				}
			}
			거짓을 반환;
		};

	/ * 정렬
	-------------------------------------------------- -------------------- * /

	// 문서 순서 정렬
	sortOrder = hasCompare?
	함수 (a, b) {

		// 중복 제거를위한 플래그
		if (a === b) {
			hasDuplicate = true;
			리턴 0;
		}

		// 하나의 입력에만 compareDocumentPosition이있는 경우 메소드 존재에 정렬
		var compare =! a.compareDocumentPosition-! b.compareDocumentPosition;
		if (비교) {
			반품 비교;
		}

		// 두 입력이 모두 같은 문서에 속하는 경우 위치 계산
		비교 = (a.ownerDocument || a) === (b.ownerDocument || b)?
			a.compareDocumentPosition (b) :

			// 그렇지 않으면 연결이 끊어 졌음을 알 수 있습니다.
			1;

		// 연결이 끊어진 노드
		if (비교 & 1 ||
			(! support.sortDetached && b.compareDocumentPosition (a) === 비교)) {

			// 선호하는 문서와 관련된 첫 번째 요소를 선택
			if (a === document || a.ownerDocument === preferredDoc && contains (preferredDoc, a)) {
				리턴 -1;
			}
			if (b === document || b.ownerDocument === preferredDoc && contains (preferredDoc, b)) {
				리턴 1;
			}

			// 원래 주문 유지
			return sortInput?
				(indexOf (sortInput, a)-indexOf (sortInput, b)) :
				0;
		}

		리턴 비교 & 4? -1 : 1;
	} :
	함수 (a, b) {
		// 노드가 동일하면 일찍 종료
		if (a === b) {
			hasDuplicate = true;
			리턴 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [a],
			bp = [b];

		// 부모없는 노드는 문서이거나 연결이 끊어졌습니다.
		if (! aup ||! bup) {
			=== 문서를 반환합니까? -1 :
				b === 문서? 1 :
				aup? -1 :
				응? 1 :
				sortInput?
				(indexOf (sortInput, a)-indexOf (sortInput, b)) :
				0;

		// 노드가 형제 인 경우 빠른 검사를 수행 할 수 있습니다.
		} 그렇지 않으면 (aup === bup) {
			return siblingCheck (a, b);
		}

		// 그렇지 않으면 비교를 위해 조상의 전체 목록이 필요합니다.
		cur = a;
		while ((cur = cur.parentNode)) {
			ap. 언 시프트 (cur);
		}
		cur = b;
		while ((cur = cur.parentNode)) {
			bp. 언 시프트 (cur);
		}

		// 불일치를 찾기 위해 나무를 걸어
		while (ap [i] === bp [i]) {
			i ++;
		}

		내가 돌아와?
			// 노드에 공통 조상이 있는지 형제 확인
			siblingCheck (ap [i], bp [i]) :

			// 그렇지 않으면 문서의 노드가 먼저 정렬됩니다.
			ap [i] === preferredDoc? -1 :
			bp [i] === preferredDoc? 1 :
			0;
	};

	반품 서류;
};

Sizzle.matches = function (expr, elements) {
	Sizzle (expr, null, null, elements)를 반환합니다.
};

Sizzle.matchesSelector = 함수 (elem, expr) {
	// 필요한 경우 문서 변수 설정
	if ((elem.ownerDocument || elem)! == 문서) {
		setDocument (요소);
	}

	if (support.matchesSelector && documentIsHTML &&
		! nonnativeSelectorCache [expr + ""] &&
		(! rbuggyMatches ||! rbuggyMatches.test (expr)) &&
		(! rbuggyQSA ||! rbuggyQSA.test (expr))) {

		{
			var ret = matches.call (elem, expr);

			// 연결이 끊긴 노드에서 IE 9의 matchesSelector가 false를 반환합니다.
			if (ret || support.disconnectedMatch ||
					// 또한 연결이 끊어진 노드는 문서에 있다고합니다.
					// IE 9의 조각
					elem.document && elem.document.nodeType! == 11) {
				리트 윗을 반환;
			}
		} 잡기 (e) {
			nonnativeSelectorCache (expr, true);
		}
	}

	Sizzle (expr, document, null, [elem])를 반환합니다. length> 0;
};

Sizzle.contains = function (context, elem) {
	// 필요한 경우 문서 변수 설정
	if ((context.ownerDocument || 컨텍스트)! == 문서) {
		setDocument (컨텍스트);
	}
	return contains (문맥, 요소);
};

Sizzle.attr = 함수 (elem, name) {
	// 필요한 경우 문서 변수 설정
	if ((elem.ownerDocument || elem)! == 문서) {
		setDocument (요소);
	}

	var fn = Expr.attrHandle [name.toLowerCase ()],
		// Object.prototype 속성에 속지 마십시오 (jQuery # 13807)
		val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			fn (elem, name,! documentIsHTML) :
			정의되지 않은;

	반환 값! == undefined?
		val :
		support.attributes || ! documentIsHTML?
			elem.getAttribute (name) :
			(val = elem.getAttributeNode (name)) && val.specified?
				가치 :
				없는;
};

Sizzle.escape = 함수 (sel) {
	return (sel + "") .replace (rcssescape, fcssescape);
};

Sizzle.error = function (msg) {
	new Error ( "구문 오류, 인식 할 수없는 표현식 :"+ msg);
};

/ **
 * 문서 정렬 및 중복 제거
 * @param {ArrayLike} 결과
 * /
Sizzle.uniqueSort = 함수 (결과) {
	var elem,
		중복 = [],
		j = 0,
		i = 0;

	// 중복을 감지 할 수있는 * 알아보기 *가 아니라면 그 존재를 가정
	hasDuplicate =! support.detectDuplicates;
	sortInput =! support.sortStable && results.slice (0);
	results.sort (sortOrder);

	if (hasDuplicate) {
		while ((elem = results [i ++])) {
			if (elem === results [i]) {
				j = 복제물 .push (i);
			}
		}
		while (j--) {
			results.splice (중복 [j], 1);
		}
	}

	// 객체를 해제하기 위해 정렬 후 입력 지우기
	// https://github.com/jquery/sizzle/pull/225 참조
	sortInput = null;

	결과 반환;
};

/ **
 * DOM 노드 배열의 텍스트 값을 검색하기위한 유틸리티 기능
 * @param {Array | 요소} 요소
 * /
getText = Sizzle.getText = 함수 (elem) {
	var 노드,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if (! nodeType) {
		// nodeType이 없으면 배열이됩니다.
		while ((노드 = 요소 [i ++])) {
			// 주석 노드를 통과하지 않습니다
			ret + = getText (노드);
		}
	} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// 요소에 textContent 사용
		// 새 줄의 일관성을 위해 innerText 사용이 제거되었습니다 (jQuery # 11153).
		if (typeof elem.textContent === "string") {
			반환 elem.textContent;
		} else {
			// 자식 트래버스
			for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				ret + = getText (요소);
			}
		}
	} else if (nodeType === 3 || nodeType === 4) {
		반환 elem.nodeValue;
	}
	// 주석 또는 처리 명령 노드를 포함하지 않습니다

	리트 윗을 반환;
};

Expr = Sizzle.selectors = {

	// 사용자가 조정할 수 있습니다
	cacheLength : 50,

	의사 만들기 : markFunction,

	일치 : matchExpr,

	attrHandle : {},

	찾기 : {},

	상대 : {
		">": {dir : "parentNode", 먼저 : true},
		"": {dir : "parentNode"},
		"+": {dir : "previousSibling", 먼저 : true},
		"~": {디렉토리 : "previousSibling"}
	},

	사전 필터 : {
		"ATTR": 함수 (일치) {
			일치 [1] = 일치 [1] .replace (runescape, funescape);

			// 따옴표로 묶든 따옴표로 묶든 주어진 값을 일치하도록 이동 [3]
			match [3] = (match [3] || match [4] || match [5] || "") .replace (runescape, funescape);

			if (match [2] === "~ =") {
				match [3] = ""+ match [3] + "";
			}

			return match.slice (0, 4);
		},

		"CHILD": 함수 (일치) {
			/ * matchExpr [ "CHILD"]와 일치
				1 종 (만 | n 번째 | ...)
				2 무 (자식)
				세 개의 인수 (짝수 | odd | \ d * | \ d * n ([+-] \ d +)? | ...)
				xn + y 인수의 4 xn 성분 ([+-]? \ d * n |)
				xn 성분의 5 부호
				xn 성분의 6 x
				y 성분의 7 부호
				y 성분 8 y
			* /
			match [1] = match [1] .toLowerCase ();

			if (match [1] .slice (0, 3) === "nth") {
				// nth- *에는 인수가 필요합니다
				if (! match [3]) {
					Sizzle.error (match [0]);
				}

				// Expr.filter.CHILD의 숫자 x 및 y 매개 변수
				// false / true가 각각 0/1로 캐스트됨을 기억하십시오.
				match [4] = + (match [4]? match [5] + (match [6] || 1) : 2 * (match [3] === "even"|| match [3] === " 홀수 "));
				match [5] = + ((match [7] + match [8]) || match [3] === "odd");

			// 다른 유형은 인수를 금지합니다
			} else if (match [3]) {
				Sizzle.error (match [0]);
			}

			리턴 매치;
		},

		"PSEUDO": 함수 (일치) {
			var 과잉,
				인용 부호 없음 =! match [6] && match [2];

			if (matchExpr [ "CHILD"]. test (match [0])) {
				null을 돌려줍니다.
			}

			// 인용 된 인수를있는 그대로 수락
			if (match [3]) {
				일치 [2] = 일치 [4] || 시합 [5] || "";

			// 인용되지 않은 인수에서 초과 문자 제거
			} else if (따옴표없는 && rpseudo.test (quoted) &&
				// 토큰 화에서 초과 수익을 얻습니다
				(초과 = 토큰 화 (인용, 인용)) &&
				// 다음 닫는 괄호로 이동
				(초과 = unquoted.indexOf ( ")", unquoted.length-초과)-unquoted.length)) {

				// 초과는 음의 지수입니다
				일치 [0] = 일치 [0] .slice (0, 초과);
				일치 [2] = 인용 부호 없음. 슬라이스 (0, 초과);
			}

			// 의사 필터 메서드 (유형 및 인수)에 필요한 캡처 만 반환
			return match.slice (0, 3);
		}
	},

	필터 : {

		"TAG": 함수 (nodeNameSelector) {
			var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			return nodeNameSelector === "*"?
				function () {return true; } :
				함수 (elem) {
					반환 elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASS": function (className) {
			var pattern = classCache [className + ""];

			리턴 패턴 ||
				(패턴 = 새 RegExp ( "(^ |"+ 공백 + ")"+ className + "("+ 공백 + "| $)")) &&
				classCache (className, 함수 (elem) {
					return pattern.test (typeof elem.className === "string"&& elem.className || typeof elem.getAttribute! == "정의되지 않음"&& elem.getAttribute ( "class") || "");
				});
		},

		"ATTR": 기능 (이름, 연산자, 확인) {
			리턴 함수 (elem) {
				var result = Sizzle.attr (요소, 이름);

				if (result == null) {
					리턴 연산자 === "! =";
				}
				if (! operator) {
					true를 반환;
				}

				결과 + = "";

				리턴 연산자 === "="? 결과 === 확인 :
					연산자 === "! ="? 결과! == 확인 :
					연산자 === "^ ="? && result.indexOf (check) === 0 확인 :
					연산자 === "* ="? check && result.indexOf (check)> -1 :
					연산자 === "$ ="? check && result.slice (-check.length) === 점검 :
					연산자 === "~ ="? ( ""+ result.replace (rwhitespace, "") + "") .indexOf (check)> -1 :
					연산자 === "| ="? 결과 === 확인 || result.slice (0, check.length + 1) === check + "-":
					그릇된;
			};
		},

		"CHILD": function (type, what, argument, first, last) {
			var simple = type.slice (0, 3)! == "nth",
				앞으로 = type.slice (-4)! == "last",
				ofType = what === "유형";

			먼저 반환 === 1 && last === 0?

				// : nth-* (n) 바로 가기
				함수 (elem) {
					return !! elem.parentNode;
				} :

				함수 (elem, context, xml) {
					var 캐시, uniqueCache, outerCache, 노드, nodeIndex, 시작,
						dir = simple! == forward? "nextSibling": "이전 형",
						부모 = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase (),
						useCache =! xml &&! ofType,
						diff = 거짓;

					if (parent) {

						// :( 먼저 | 마지막)-(자식 | 유형)
						if (simple) {
							while (dir) {
								노드 = 요소;
								while ((node ​​= node [dir])) {
									if (ofType?
										node.nodeName.toLowerCase () === 이름 :
										node.nodeType === 1) {

										거짓을 반환;
									}
								}
								// : only- *의 반대 방향 (아직 그렇게하지 않은 경우)
								start = dir = type === "only"&&! start && "nextSibling";
							}
							true를 반환;
						}

						시작 = [앞으로? parent.firstChild : parent.lastChild];

						// non-xml : nth-child (...)는 캐시 데이터를`parent`에 저장합니다.
						if (forward && useCache) {

							// 이전에 캐시 된 인덱스에서`elem`을 찾습니다.

							// ... gzip 친화적 인 방식으로
							노드 = 부모;
							outerCache = 노드 [expando] || (노드 [expando] = {});

							// 지원 : IE <9 만 해당
							// 복제 된 특성에 대한 방어 (jQuery gh-1709)
							uniqueCache = outerCache [node.uniqueID] ||
								(outerCache [node.uniqueID] = {});

							캐시 = uniqueCache [유형] || [];
							nodeIndex = 캐시 [0] === 디렉토리 실행 && 캐시 [1];
							diff = nodeIndex && 캐시 [2];
							node = nodeIndex && parent.childNodes [nodeIndex];

							while ((노드 = ++ nodeIndex && 노드 && 노드 [dir] ||

								// 처음부터 '엘렘'을 찾는 것으로 대체
								(diff = nodeIndex = 0) || start.pop ())) {

								// 발견되면`parent`에 인덱스를 캐시하고 중단
								if (node.nodeType === 1 && ++ diff && node === elem) {
									uniqueCache [type] = [dirruns, nodeIndex, diff];
									단절;
								}
							}

						} else {
							// 가능한 경우 이전에 캐시 된 요소 색인을 사용하십시오.
							if (useCache) {
								// ... gzip 친화적 인 방식으로
								노드 = 요소;
								outerCache = 노드 [expando] || (노드 [expando] = {});

								// 지원 : IE <9 만 해당
								// 복제 된 특성에 대한 방어 (jQuery gh-1709)
								uniqueCache = outerCache [node.uniqueID] ||
									(outerCache [node.uniqueID] = {});

								캐시 = uniqueCache [유형] || [];
								nodeIndex = 캐시 [0] === 디렉토리 실행 && 캐시 [1];
								diff = nodeIndex;
							}

							// xml : nth-child (...)
							// 또는 : nth-last-child (...) 또는 : nth (-last)?-of-type (...)
							if (diff === false) {
								// 처음부터`elem`을 찾으려면 위와 동일한 루프를 사용하십시오.
								while ((노드 = ++ nodeIndex && 노드 && 노드 [dir] ||
									(diff = nodeIndex = 0) || start.pop ())) {

									if ((ofType?
										node.nodeName.toLowerCase () === 이름 :
										node.nodeType === 1) &&
										++ diff) {

										// 발견 된 각 요소의 색인을 캐시
										if (useCache) {
											outerCache = 노드 [expando] || (노드 [expando] = {});

											// 지원 : IE <9 만 해당
											// 복제 된 특성에 대한 방어 (jQuery gh-1709)
											uniqueCache = outerCache [node.uniqueID] ||
												(outerCache [node.uniqueID] = {});

											uniqueCache [type] = [dirruns, diff];
										}

										if (node ​​=== elem) {
											단절;
										}
									}
								}
							}
						}

						// 오프셋을 통합 한 후 사이클 크기를 확인
						diff-= 마지막;
						리턴 diff === 먼저 || (diff % first === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": 함수 (의사, 인수) {
			// 의사 클래스 이름은 대소 문자를 구분하지 않습니다.
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// 맞춤 의사가 대문자로 추가 된 경우 대 / 소문자 구분 우선 순위 지정
			// setFilters는 의사로부터 상속받습니다.
			var args,
				fn = Expr.pseudos [의사] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ( "지원되지 않는 의사 :"+ 의사);

			// 사용자는 createPseudo를 사용하여
			// 필터 함수를 생성하려면 인수가 필요합니다
			// Sizzle처럼
			if (fn [expando]) {
				return fn (argument);
			}

			//하지만 오래된 서명에 대한 지원은 유지
			if (fn.length> 1) {
				인수 = [의사, 의사, "", 인수];
				Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())를 반환합니까?
					markFunction (함수 (seed, matches) {
						var idx,
							일치 = fn (seed, argument),
							i = matched.length;
						while (i--) {
							idx = indexOf (시드, 일치 [i]);
							seed [idx] =! (matches [idx] = 일치 [i]);
						}
					}) :
					함수 (elem) {
						return fn (elem, 0, args);
					};
			}

			리턴 fn;
		}
	},

	의사 : {
		// 잠재적으로 복잡한 의사
		"not": markFunction (function (selector) {
			// 컴파일에 전달 된 선택기를 다듬습니다.
			// 선행 및 후행 치료를 피하기 위해
			// 조합 자로서의 공백
			var input = [],
				결과 = [],
				매처 = compile (selector.replace (rtrim, "$ 1"));

			리턴 매처 [expando]?
				markFunction (함수 (seed, match, context, xml) {
					var elem,
						일치하지 않음 = matcher (seed, null, xml, []),
						i = 시드 길이;

					//`matcher`와 일치하지 않는 요소 일치
					while (i--) {
						if ((elem = 불일치 [i])) {
							seed [i] =! (일치 [i] = 요소);
						}
					}
				}) :
				함수 (elem, context, xml) {
					입력 [0] = 요소;
					matcher (input, null, xml, results);
					// 요소를 유지하지 마십시오 (문제 # 299)
					입력 [0] = null;
					return! results.pop ();
				};
		}),

		"has": markFunction (function (selector) {
			리턴 함수 (elem) {
				Sizzle (selector, elem)를 반환합니다 .length> 0;
			};
		}),

		"포함": markFunction (function (text) {
			text = text.replace (runescape, funescape);
			리턴 함수 (elem) {
				return (elem.textContent || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "요소가 : lang () 선택 자로 표시되는지 여부
		// 요소의 언어 값만을 기반으로합니다.
		// 식별자 C와 같고
		// 또는 식별자 C로 시작하고 바로 뒤에 "-"가옵니다.
		// 요소의 언어 값에 대한 C의 일치는 대소 문자를 구분하지 않고 수행됩니다.
		// 식별자 C는 유효한 언어 이름 일 필요는 없습니다. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction (함수 (lang) {
			// lang 값은 유효한 식별자 여야합니다
			if (! ridentifier.test (lang || "")) {
				Sizzle.error ( "지원되지 않는 lang :"+ lang);
			}
			lang = lang.replace (runescape, funescape) .toLowerCase ();
			리턴 함수 (elem) {
				var elemLang;
				{
					if ((elemLang = documentIsHTML?
						elem.lang :
						elem.getAttribute ( "xml : lang") || elem.getAttribute ( "lang"))) {

						elemLang = elemLang.toLowerCase ();
						elemLang을 반환 === lang || elemLang.indexOf (lang + "-") === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				거짓을 반환;
			};
		}),

		// 기타
		"target": function (elem) {
			var hash = window.location && window.location.hash;
			해시 리턴 && hash.slice (1) === elem.id;
		},

		"root": function (elem) {
			리턴 elem === docElem;
		},

		"포커스": function (elem) {
			return elem === document.activeElement && (! document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// 부울 속성
		"enabled": createDisabledPseudo (false),
		"disabled": createDisabledPseudo (true),

		"checked": function (elem) {
			// CSS3에서 : checked는 선택된 요소와 선택된 요소를 모두 반환해야합니다.
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase ();
			return (nodeName === "입력"&& !! elem.checked) || (nodeName === "옵션"&& !! elem.selected);
		},

		"selected": function (elem) {
			//이 속성에 액세스하면 기본적으로 선택됩니다
			// Safari의 옵션이 제대로 작동
			if (elem.parentNode) {
				elem.parentNode.selectedIndex;
			}

			반환 elem.selected === true;
		},

		// 내용
		"비어 있음": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// : 빈은 요소 (1) 또는 컨텐츠 노드 (텍스트 : 3; cdata : 4; 엔티티 참조 : 5)에 의해 무시됩니다.
			// 타인이 아닌 (댓글 : 8; 처리 명령 : 7; 등)
			// attribute (2)가 자식으로 나타나지 않기 때문에 nodeType <6이 작동합니다.
			for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				if (elem.nodeType <6) {
					거짓을 반환;
				}
			}
			true를 반환;
		},

		"parent": function (elem) {
			return! Expr.pseudos [ "empty"] (elem);
		},

		// 요소 / 입력 유형
		"헤더": function (elem) {
			리턴 rheader.test (elem.nodeName);
		},

		"입력": function (elem) {
			리턴 rinputs.test (elem.nodeName);
		},

		"버튼": function (elem) {
			var name = elem.nodeName.toLowerCase ();
			반환 이름 === "입력"&& elem.type === "버튼"|| 이름 === "버튼";
		},

		"text": function (elem) {
			var attr;
			elem.nodeName.toLowerCase () === "input"&&을 리턴하십시오.
				elem.type === "텍스트"&&

				// 지원 : IE <8
				// 새로운 HTML5 속성 값 (예 : "search")이 elem.type === "text"와 함께 나타납니다.
				((attr = elem.getAttribute ( "type")) == null || attr.toLowerCase () === "text");
		},

		// 수집 위치
		"first": createPositionalPseudo (function () {
			반환 [0];
		}),

		"last": createPositionalPseudo (함수 (matchIndexes, 길이) {
			반환 [length-1];
		}),

		"eq": createPositionalPseudo (함수 (matchIndexes, 길이, 인수) {
			return [argument <0? 인수 + 길이 : 인수];
		}),

		"짝수": createPositionalPseudo (function (matchIndexes, length) {
			var i = 0;
			(; i <길이; i + = 2) {
				matchIndexes.push (i);
			}
			matchIndexes를 반환;
		}),

		"odd": createPositionalPseudo (함수 (matchIndexes, 길이) {
			var i = 1;
			(; i <길이; i + = 2) {
				matchIndexes.push (i);
			}
			matchIndexes를 반환;
		}),

		"lt": createPositionalPseudo (함수 (matchIndexes, 길이, 인수) {
			var i = argument <0?
				인수 + 길이 :
				인수> 길이?
					길이 :
					논의;
			(; --i> = 0;) {
				matchIndexes.push (i);
			}
			matchIndexes를 반환;
		}),

		"gt": createPositionalPseudo (함수 (matchIndexes, 길이, 인수) {
			var i = argument <0? 인수 + 길이 : 인수;
			for (; ++ i <length;) {
				matchIndexes.push (i);
			}
			matchIndexes를 반환;
		})
	}
};

Expr.pseudos [ "nth"] = Expr.pseudos [ "eq"];

// 버튼 / 입력 유형 의사 추가
for (i : {라디오 : true, 확인란 : true, 파일 : true, 비밀번호 : true, 이미지 : true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
for (i in {제출 : true, 재설정 : true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// 새로운 setFilter를 만들기위한 쉬운 API
함수 setFilters () {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = 새로운 setFilters ();

tokenize = Sizzle.tokenize = 함수 (선택자, parseOnly) {
	var matched, match, tokens, type,
		soFar, 그룹, 사전 필터,
		캐시 된 = tokenCache [선택기 + ""];

	if (캐시) {
		parseOnly를 반환합니까? 0 : cached.slice (0);
	}

	soFar = 선택기;
	그룹 = [];
	preFilters = Expr.preFilter;

	while (soFar) {

		// 쉼표와 첫 실행
		if (! matched || (match = rcomma.exec (soFar))) {
			if (match) {
				// 후행 쉼표를 유효한 것으로 사용하지 마십시오
				soFar = soFar.slice (일치 [0]. 길이) || 지금까지;
			}
			groups.push ((토큰 = []));
		}

		일치 = 거짓;

		// 조합기
		if ((match = rcombinators.exec (soFar))) {
			일치 = match.shift ();
			tokens.push ({
				값 : 일치하는
				// 자손 콤비 네이터를 우주로 캐스트
				유형 : match [0] .replace (rtrim, "")
			});
			soFar = soFar.slice (matched.length);
		}

		// 필터
		for (Expr.filter에 입력) {
			if ((match = matchExpr [type] .exec (soFar)) && (! preFilters [type] ||
				(match = preFilters [type] (match)))) {
				일치 = match.shift ();
				tokens.push ({
					값 : 일치하는
					유형 : 유형,
					성냥 : 성냥
				});
				soFar = soFar.slice (matched.length);
			}
		}

		if (! matched) {
			단절;
		}
	}

	// 유효하지 않은 초과분의 길이를 반환
	// 만약 우리가 단지 파싱한다면
	// 그렇지 않으면 오류가 발생하거나 토큰을 반환
	parseOnly를 반환합니까?
		soFar.length :
		지금까지 ?
			Sizzle.error (selector) :
			// 토큰을 캐시
			tokenCache (선택기, 그룹) .slice (0);
};

함수 toSelector (tokens) {
	var i = 0,
		len = tokens.length,
		선택기 = "";
	for (; i <len; i ++) {
		선택기 + = 토큰 [i] .value;
	}
	리턴 셀렉터;
}

addCombinator 함수 (매처, 콤비 네이터,베이스) {
	var dir = combinator.dir,
		건너 뛰기 = combinator.next,
		키 = 건너 뛰기 || dir,
		checkNonElements = 기본 && 키 === "parentNode",
		doneName = 완료 ++;

	return combinator.first?
		// 가장 가까운 조상 / 선행 요소를 확인
		함수 (elem, context, xml) {
			while ((elem = elem [dir])) {
				if (elem.nodeType === 1 || checkNonElements) {
					리턴 매처 (elem, context, xml);
				}
			}
			거짓을 반환;
		} :

		// 모든 조상 / 이전 요소를 검사
		함수 (elem, context, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [dirruns, doneName];

			// XML 노드에서 임의의 데이터를 설정할 수 없으므로 결합기 캐싱의 이점이 없습니다.
			if (xml) {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						if (matcher (elem, context, xml)) {
							true를 반환;
						}
					}
				}
			} else {
				while ((elem = elem [dir])) {
					if (elem.nodeType === 1 || checkNonElements) {
						outerCache = 요소 [expando] || (elem [expando] = {});

						// 지원 : IE <9 만 해당
						// 복제 된 특성에 대한 방어 (jQuery gh-1709)
						uniqueCache = outerCache [elem.uniqueID] || (outerCache [elem.uniqueID] = {});

						if (건너 뛰기 && 건너 뛰기 === elem.nodeName.toLowerCase ()) {
							elem = elem [dir] || 엘렘;
						} else if ((oldCache = uniqueCache [키]) &&
							oldCache [0] === dirruns && oldCache [1] === doneName) {

							// newCache에 할당하여 결과를 이전 요소로 다시 전파
							반환 (newCache [2] = oldCache [2]);
						} else {
							// newcache를 재사용하여 결과를 이전 요소로 다시 전파
							uniqueCache [키] = newCache;

							// 일치는 우리가 끝났다는 것을 의미합니다. 실패는 우리가 계속 점검해야한다는 것을 의미합니다
							if ((newCache [2] = matcher (elem, context, xml))) {
								true를 반환;
							}
						}
					}
				}
			}
			거짓을 반환;
		};
}

function elementMatcher (매처) {
	return matchers.length> 1?
		함수 (elem, context, xml) {
			var i = matchers.length;
			while (i--) {
				if (! matchers [i] (elem, context, xml)) {
					거짓을 반환;
				}
			}
			true를 반환;
		} :
		매처 [0];
}

함수 multipleContexts (선택자, 컨텍스트, 결과) {
	var i = 0,
		len = contexts.length;
	for (; i <len; i ++) {
		시즐 (셀렉터, 컨텍스트 [i], 결과);
	}
	결과 반환;
}

condense (unmatched, map, filter, context, xml) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = 일치하지 않는 길이,
		매핑 = 맵! = null;

	for (; i <len; i ++) {
		if ((elem = 불일치 [i])) {
			if (! filter || filter (elem, context, xml)) {
				newUnmatched.push (요소);
				if (매핑) {
					map.push (i);
				}
			}
		}
	}

	newUnmatched를 반환;
}

함수 setMatcher (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
	if (postFilter &&! postFilter [expando]) {
		postFilter = setMatcher (postFilter);
	}
	if (postFinder &&! postFinder [expando]) {
		postFinder = setMatcher (postFinder, postSelector);
	}
	반환 markFunction (함수 (시드, 결과, 컨텍스트, xml) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			기존 = results.length,

			// 시드 또는 컨텍스트에서 초기 요소 가져 오기
			elems = 씨 || multipleContexts (selector || "*", context.nodeType? [context] : context, []),

			// 시드 결과 동기화를위한 맵을 유지하면서 매처 입력을 얻기위한 프리 필터
			matcherIn = preFilter && (시드 ||! 선택기)?
				condense (elems, preMap, preFilter, context, xml) :
				느릅 나무,

			matcherOut = 매처?
				// postFinder, 필터링 된 시드 또는 시드가 아닌 postFilter 또는 기존 결과가있는 경우,
				postFinder || (seed? preFilter : 기존 || postFilter)?

					// ... 중간 처리가 필요합니다
					[] :

					// ... 그렇지 않으면 결과를 직접 사용
					결과 :
				matcherIn;

		// 기본 일치하는 항목 찾기
		if (매처) {
			matcher (matcherIn, matcherOut, 컨텍스트, xml);
		}

		// postFilter를 적용합니다
		if (postFilter) {
			t emp = condense (matcherOut, postMap);
			postFilter (temp, [], 컨텍스트, xml);

			// 실패한 요소를 다시 matcherIn로 이동하여 일치하지 않는 요소
			i = 온도 길이;
			while (i--) {
				if ((elem = temp [i])) {
					matcherOut [postMap [i]] =! (matcherIn [postMap [i]] = 요소);
				}
			}
		}

		if (seed) {
			if (postFinder || preFilter) {
				if (postFinder) {
					//이 중간체를 postFinder 컨텍스트로 압축하여 최종 matcherOut을 가져옵니다.
					온도 = [];
					i = matcherOut.length;
					while (i--) {
						if ((elem = matcherOut [i])) {
							// elem이 아직 마지막 경기가 아니기 때문에 matcherIn 복원
							temp.push ((matcherIn [i] = 요소));
						}
					}
					postFinder (null, (matcherOut = []), temp, xml);
				}

				// 일치하는 요소를 시드에서 결과로 이동하여 동기화 유지
				i = matcherOut.length;
				while (i--) {
					if ((elem = matcherOut [i]) &&
						(temp = postFinder? indexOf (seed, elem) : preMap [i])> -1) {

						seed [temp] =! (결과 [temp] = 요소);
					}
				}
			}

		// 정의 된 경우 postFinder를 통해 결과에 요소 추가
		} else {
			matcherOut = 응축수
				matcherOut === 결과?
					matcherOut.splice (기존, matcherOut.length) :
					matcherOut
			);
			if (postFinder) {
				postFinder (null, 결과, matcherOut, xml);
			} else {
				push.apply (결과, matcherOut);
			}
		}
	});
}

함수 matcherFromTokens (tokens) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative [토큰 [0] .type],
		implicitRelative = leadingRelative || Expr.relative [ ""],
		i = 선행 상대? 1 : 0,

		// 기초 매처는 최상위 컨텍스트에서 요소에 도달 할 수 있도록합니다.
		matchContext = addCombinator (함수 (요소) {
			반환 elem === checkContext;
		}, implicitRelative, true),
		matchAnyContext = addCombinator (함수 (elem) {
			return indexOf (checkContext, elem)> -1;
		}, implicitRelative, true),
		매처 = [function (elem, context, xml) {
			var ret = (! leadingRelative && (xml || context! == outermostContext)) || (
				(checkContext = context) .nodeType?
					matchContext (elem, context, xml) :
					matchAnyContext (요소, 컨텍스트, XML));
			// 요소에 매달리지 마십시오 (문제 # 299)
			checkContext = null;
			리트 윗을 반환;
		}];

	for (; i <len; i ++) {
		if ((매치 = Expr.relative [토큰 [i] .type])) {
			매처 = [addCombinator (elementMatcher (매처), 매처)];
		} else {
			matcher = Expr.filter [토큰 [i] .type] .apply (null, 토큰 [i] .matches);

			// 위치 매처를 볼 때 특별 반환
			if (matcher [expando]) {
				// 적절한 취급을위한 다음 상대 연산자 (있는 경우) 찾기
				j = ++ i;
				for (; j <len; j ++) {
					if (Expr.relative [토큰 [j] .type]) {
						단절;
					}
				}
				setMatcher를 반환합니다 (
					i> 1 && elementMatcher (매처),
					i> 1 && toSelector (
						// 앞의 토큰이 하위 컴비 네이터 인 경우 암시 적 any 요소`*`를 삽입하십시오.
						tokens.slice (0, i-1) .concat ({값 : tokens [i-2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					매처,
					i <j && matcherFromTokens (tokens.slice (i, j)),
					j <len && matcherFromTokens ((토큰 = tokens.slice (j))),
					j <len && toSelector (토큰)
				);
			}
			matchers.push (매처);
		}
	}

	return elementMatcher (매처);
}

함수 matcherFromGroupMatchers (elementMatchers, setMatchers) {
	var bySet = setMatchers.length> 0,
		byElement = elementMatchers.length> 0,
		superMatcher = 함수 (시드, 컨텍스트, XML, 결과, 가장 바깥 쪽) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				일치하지 않는 = seed && [],
				setMatched = [],
				contextBackup = 가장 바깥 쪽 컨텍스트,
				// 항상 시드 요소 또는 가장 바깥 쪽 컨텍스트가 있어야합니다.
				elems = 씨 || byElement && Expr.find [ "TAG"] ( "*", 가장 바깥 쪽),
				// 가장 바깥 쪽 매 처인 경우 정수 dirruns를 사용하십시오.
				dirrunsUnique = (dirruns + = contextBackup == null? 1 : Math.random () || 0.1),
				len = elems.length;

			if (가장 바깥 쪽) {
				outermostContext = 컨텍스트 === 문서 || 문맥 || 가장 바깥 쪽;
			}

			// elementMatchers를 결과에 직접 전달하는 요소 추가
			// 지원 : IE <9, Safari
			// ID별로 일치하는 요소를 허용하는 NodeList 속성 (IE : "length"; Safari : <number>)
			for (; i! == len && (elem = elems [i])! = null; i ++) {
				if (byElement && elem) {
					j = 0;
					if (! context && elem.ownerDocument! == document) {
						setDocument (요소);
						xml =! documentIsHTML;
					}
					while ((matcher = elementMatchers [j ++])) {
						if (matcher (elem, context || document, xml)) {
							results.push (elem);
							단절;
						}
					}
					if (가장 바깥 쪽) {
						dirruns = dirrunsUnique;
					}
				}

				// 설정된 필터에 대해 일치하지 않는 요소 추적
				if (bySet) {
					// 그들은 가능한 모든 성냥을 겪었을 것입니다
					if ((elem =! matcher && elem)) {
						matchedCount--;
					}

					// 일치 여부에 관계없이 모든 요소에 대해 배열을 길게
					if (seed) {
						unmatched.push (요소);
					}
				}
			}

			//`i`는 이제 위에서 방문한 요소의 개수이며`matchedCount`에 추가합니다.
			// 후자를 음이 아닌 것으로 만듭니다.
			matchedCount + = i;

			// 일치하지 않는 요소에 세트 필터 적용
			// 참고 : 일치하지 않는 요소가없는 경우 (예 :`matchedCount '
			// 우리는 위의 루프에서 _any_ 요소를 방문하지 않은 한,`i`)와 같습니다.
			// 요소 매처와 시드가 없습니다.
			// 초기 문자열 "0"을 증가 시키면`i`는`i`가 그 문자열에만 남아있게한다
			// 'i'와 다르지만 '00'`matchedCount`가되는 경우
			// 숫자가 0입니다.
			if (bySet && i! == matchedCount) {
				j = 0;
				while ((매치 = setMatchers [j ++])) {
					matcher (일치하지 않는, setMatched, 컨텍스트, xml);
				}

				if (seed) {
					// 정렬 할 필요가 없도록 요소 일치를 다시 통합
					if (matchedCount> 0) {
						while (i--) {
							if (! (unmatched [i] || setMatched [i])) {
								setMatched [i] = pop.call (결과);
							}
						}
					}

					// 인덱스 자리 표시 자 값을 삭제하여 실제 일치 항목 만 가져옵니다.
					setMatched = 응축 (setMatched);
				}

				// 결과에 일치 항목 추가
				push.apply (결과, setMatched);

				// 여러 개의 성공적인 매 처가 성공하는 시드없는 세트 일치가 정렬을 지정합니다.
				if (가장 바깥 쪽 &&! seed && setMatched.length> 0 &&
					(matchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (결과);
				}
			}

			// 중첩 된 매처에 의한 전역 조작 무시
			if (가장 바깥 쪽) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			일치하지 않는 반환;
		};

	by by 반환?
		markFunction (superMatcher) :
		수퍼 매처;
}

컴파일 = Sizzle.compile = 함수 (선택기, 일치 / * 내부 전용 * /) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		캐시 된 = compilerCache [선택기 + ""];

	if (! cached) {
		// 각 요소를 확인하는 데 사용할 수있는 재귀 함수의 함수를 생성합니다.
		if (! match) {
			일치 = tokenize (선택기);
		}
		i = match.length;
		while (i--) {
			캐시 됨 = matcherFromTokens (match [i]);
			if (캐시 된 [expando]) {
				setMatchers.push (캐시 됨);
			} else {
				elementMatchers.push (캐시 됨);
			}
		}

		// 컴파일 된 함수를 캐시
		캐시 = compilerCache (선택기, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// 선택기 및 토큰 화 저장
		cached.selector = 선택기;
	}
	캐시 된 반환;
};

/ **
 * Sizzle의 컴파일과 함께 작동하는 저수준 선택 기능
 * 선택기 기능
 * @param {String | Function} 선택기 선택기 또는 사전 컴파일 된
 * Sizzle.compile로 작성된 선택기 기능
 * @param {요소} 컨텍스트
 * @param {Array} [결과]
 * @param {Array} [seed] 비교할 요소 집합
 * /
select = Sizzle.select = function (선택자, 컨텍스트, 결과, 시드) {
	var i, 토큰, 토큰, 유형, 찾기,
		컴파일 된 = typeof 선택기 === "function"&& 선택기,
		match =! seed && tokenize ((선택기 = 컴파일 된 선택기 || 선택기));

	결과 = 결과 || [];

	// 목록에 선택기가 하나만 있고 시드가없는 경우 작업을 최소화하십시오.
	// (후자는 컨텍스트를 보장합니다)
	if (match.length === 1) {

		// 선행 복합 선택기가 ID 인 경우 컨텍스트를 줄입니다.
		토큰 = 일치 [0] = 일치 [0] .slice (0);
		if (tokens.length> 2 && (토큰 = tokens [0]). type === "ID"&&
				context.nodeType === 9 && documentIsHTML && Expr.relative [토큰 [1] .type]) {

			context = (Expr.find [ "ID"] (token.matches [0] .replace (runescape, funescape), context) || []) [0];
			if (! context) {
				결과 반환;

			// 사전 컴파일 된 매처는 여전히 조상을 확인하므로 레벨을 올립니다.
			} else if (컴파일 된) {
				문맥 = context.parentNode;
			}

			선택기 = selector.slice (tokens.shift (). value.length);
		}

		// 오른쪽에서 왼쪽으로 일치하는 시드 세트를 가져옵니다.
		i = matchExpr [ "needsContext"]. test (selector)? 0 : tokens.length;
		while (i--) {
			토큰 = 토큰 [i];

			// 콤비 네이터를 칠 경우 중단
			if (Expr.relative [(type = token.type)]) {
				단절;
			}
			if ((find = Expr.find [type])) {
				// 주요 형제 결합기의 컨텍스트를 검색하고 확장
				if ((시드 = 찾기 (
					token.matches [0] .replace (runescape, funescape),
					rsibling.test (tokens [0] .type) && testContext (context.parentNode) || 문맥
				))) {

					// 시드가 비어 있거나 토큰이 남아 있지 않으면 일찍 반환 할 수 있습니다.
					tokens.splice (i, 1);
					선택기 = seed.length && toSelector (토큰);
					if (! selector) {
						push.apply (결과, 시드);
						결과 반환;
					}

					단절;
				}
			}
		}
	}

	// 필터링 기능이 제공되지 않으면 컴파일 및 실행
	// 위의 선택기를 수정 한 경우 토큰 화를 피하기 위해`match`를 제공하십시오.
	(컴파일 된 || compile (selector, match)) (
		씨,
		문맥,
		! documentIsHTML,
		결과
		! 문맥 || rsibling.test (selector) && testContext (context.parentNode) || 문맥
	);
	결과 반환;
};

// 일회성 과제

// 정렬 안정성
support.sortStable = expando.split ( ""). sort (sortOrder) .join ( "") === expando;

// 지원 : Chrome 14-35 +
// 비교 함수에 전달되지 않으면 항상 중복으로 가정
support.detectDuplicates = !! hasDuplicate;

// 기본 문서로 초기화
setDocument ();

// 지원 : Webkit <537.32-Safari 6.0.3 / Chrome 25 (Chrome 27에서 수정 됨)
// 분리 된 노드는 혼란스럽게 * 각기 다른 *를 따릅니다
support.sortDetached = assert (function (el) {
	// 1을 반환해야하지만 4를 반환합니다 (다음).
	return el.compareDocumentPosition (document.createElement ( "fieldset")) & 1;
});

// 지원 : IE <8
// 속성 / 속성 "보간"방지
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if (! assert (function (el) {
	el.innerHTML = "<a href='#'> </a>";
	return el.firstChild.getAttribute ( "href") === "#";
})) {
	addHandle ( "type | href | height | width", function (요소, 이름, isXML) {
		if (! isXML) {
			return elem.getAttribute (name, name.toLowerCase () === "type"? 1 : 2);
		}
	});
}

// 지원 : IE <9
// getAttribute ( "value") 대신 defaultValue를 사용하십시오.
if (! support.attributes ||! assert (function (el) {
	el.innerHTML = "<입력 />";
	el.firstChild.setAttribute ( "value", "");
	return el.firstChild.getAttribute ( "value") === "";
})) {
	addHandle ( "value", function (요소, 이름, isXML) {
		if (! isXML && elem.nodeName.toLowerCase () === "input") {
			return elem.defaultValue;
		}
	});
}

// 지원 : IE <9
// getAttributeNode를 사용하여 getAttribute가있을 때 부울을 가져옵니다.
if (! assert (function (el) {
	return el.getAttribute ( "disabled") == null;
})) {
	addHandle (부울, 함수 (elem, 이름, isXML) {
		var val;
		if (! isXML) {
			return elem [name] === true? name.toLowerCase () :
					(val = elem.getAttributeNode (name)) && val.specified?
					가치 :
				없는;
		}
	});
}

스위 즐을 반환;

})( 창문 );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// 더 이상 사용되지 않음
jQuery.expr [ ":"] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function (elem, dir,까지) {
	var matched = [],
		자르기 =까지 ~ == 정의되지 않음;

	while ((elem = elem [dir]) && elem.nodeType! == 9) {
		if (elem.nodeType === 1) {
			if (잘라 내기 && jQuery (elem) .is (until)) {
				단절;
			}
			matched.push (요소);
		}
	}
	일치하는 리턴;
};


var 형제 = 함수 (n, elem) {
	var matched = [];

	for (; n; n = n.nextSibling) {
		if (n.nodeType === 1 && n! == elem) {
			matched.push (n);
		}
	}

	일치하는 리턴;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName (elem, name) {

  elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ()를 리턴하십시오.

};
var rsingleTag = (/ ^ <([az] [^ \ / \ 0> : \ x20 \ t \ r \ n \ f] *) [\ x20 \ t \ r \ n \ f] * \ /?> ( ? : <\ / \ 1> |) $ / i);



// 필터와 동일한 기능을 구현하고
함수 winnow (요소, 한정자) {
	if (isFunction (한정자)) {
		jQuery.grep (element, function (elem, i) {
			return !! qualifier.call (elem, i, elem)! == 아님;
		});
	}

	// 단일 요소
	if (qualifier.nodeType) {
		jQuery.grep (element, function (elem) {
			return (elem === 한정자)! == not;
		});
	}

	// 요소와 같은 배열 (jQuery, arguments, Array)
	if (typeof 한정자! == "string") {
		jQuery.grep (element, function (elem) {
			return (indexOf.call (한정자, elem)> -1)! == not;
		});
	}

	// 단순 및 복합 선택기 모두에 대해 직접 필터링
	jQuery.filter (한정자, 요소, 아닌)를 반환;
}

jQuery.filter = 함수 (expr, elems, not) {
	var elem = 엘렘 [0];

	if (not) {
		expr = ": not ("+ expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		jQuery.find.matchesSelector (elem, expr)를 반환합니까? [요소] : [];
	}

	jQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
		return elem.nodeType === 1;
	}));
};

jQuery.fn.extend ({
	찾기 : function (selector) {
		var i, ret,
			len = this.length,
			자기 = 이것;

		if (typeof selector! == "string") {
			this.pushStack (jQuery (selector) .filter (function () {
				for (i = 0; i <len; i ++) {
					if (jQuery.contains (self [i], this)) {
						true를 반환;
					}
				}
			}));
		}

		ret = this.pushStack ([]);

		for (i = 0; i <len; i ++) {
			jQuery.find (선택자, self [i], ret);
		}

		len> 1을 반환합니까? jQuery.uniqueSort (ret) : ret;
	},
	필터 : function (selector) {
		이것을 돌려줍니다. pushStack (winnow (this, selector || [], false));
	},
	아님 : function (selector) {
		이것을 돌려줍니다. pushStack (winnow (this, selector || [], true));
	},
	: function (selector) {
		귀국 !!
			이,

			// 위치 / 상대 선택자인 경우 반환 된 집합의 멤버 자격을 확인하십시오.
			// 따라서 $ ( "p : first"). is ( "p : last")는 "p"가 2 개인 문서에 대해서는 true를 반환하지 않습니다.
			typeof selector === "문자열"&& rneedsContext.test (selector)?
				jQuery (선택기) :
				선택기 || [],
			그릇된
		).길이;
	}
});


// jQuery 객체 초기화


// 루트 jQuery (문서)에 대한 중앙 참조
var rootjQuery,

	// HTML 문자열을 확인하는 간단한 방법
	// location.hash를 통해 XSS를 피하려면 <tag>보다 #id의 우선 순위를 지정하십시오 (# 9521).
	// 엄격한 HTML 인식 (# 11290 : <로 시작해야 함)
	// 속도에 대한 간단한 간단한 #id 사례
	rquickExpr = / ^ (? : \ s * (<[\ w \ W] +>) [^>] * | # ([\ w-] +)) $ /,

	init = jQuery.fn.init = 함수 (선택자, 컨텍스트, 루트) {
		var match, elem;

		// 핸들 : $ ( ""), $ (null), $ (undefined), $ (false)
		if (! selector) {
			이것을 돌려줍니다;
		}

		// 메소드 init ()는 대체 rootjQuery를 허용합니다.
		// 따라서 이주는 jQuery.sub (gh-2101)를 지원할 수 있습니다
		루트 = 루트 || rootjQuery;

		// HTML 문자열 처리
		if (typeof selector === "string") {
			if (선택기 [0] === "<"&&
				선택기 [selector.length-1] === ">"&&
				selector.length> = 3) {

				// <>로 시작하고 끝나는 문자열이 HTML이라고 가정하고 정규식 검사를 건너 뜁니다.
				match = [null, 선택기, null];

			} else {
				일치 = rquickExpr.exec (선택기);
			}

			// html과 일치하거나 #id에 컨텍스트가 지정되지 않았는지 확인
			if (match && (match [1] ||! context)) {

				// 핸들 : $ (html)-> $ (배열)
				if (match [1]) {
					컨텍스트 = jQuery의 컨텍스트 인스턴스? 문맥 [0] : 문맥;

					// 스크립트를 실행하는 옵션은 역 호환에 해당합니다.
					// parseHTML이 없으면 의도적으로 오류가 발생하도록합니다.
					jQuery.merge (this, jQuery.parseHTML (
						일치 [1],
						context && context.nodeType? context.ownerDocument || 문맥 : 문서,
						참된
					));

					// 핸들 : $ (html, props)
					if (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						for (문맥과 일치) {

							// 가능한 경우 컨텍스트 속성을 메소드로 호출
							if (isFunction (this [match])) {
								this [match] (context [match]);

							// ... 그렇지 않으면 속성으로 설정
							} else {
								this.attr (match, context [match]);
							}
						}
					}

					이것을 돌려줍니다;

				// 핸들 : $ (# id)
				} else {
					elem = document.getElementById (match [2]);

					if (elem) {

						// 요소를 jQuery 객체에 직접 삽입
						이것 [0] = 요소;
						this.length = 1;
					}
					이것을 돌려줍니다;
				}

			// 핸들 : $ (expr, $ (...))
			} else if (! context || context.jquery) {
				return (문맥 || 루트) .find (selector);

			// 핸들 : $ (expr, context)
			// ($ (context) .find (expr)와 동일합니다.
			} else {
				this.constructor (context) .find (selector)를 반환합니다.
			}

		// 핸들 : $ (DOMElement)
		} else if (selector.nodeType) {
			이것 [0] = 선택기;
			this.length = 1;
			이것을 돌려줍니다;

		// 핸들 : $ (function)
		// 문서 준비를위한 바로 가기
		} else if (isFunction (selector)) {
			return root.ready! == undefined?
				root.ready (selector) :

				// 준비가 없으면 즉시 실행
				선택기 (jQuery);
		}

		jQuery.makeArray (selector, this);를 반환합니다.
	};

// 나중에 인스턴스화하기 위해 init 함수에 jQuery 프로토 타입 제공
init.prototype = jQuery.fn;

// 중앙 참조 초기화
rootjQuery = jQuery (문서);


var rparentsprev = / ^ (?: parents | prev (? : Until | All)) /,

	// 고유 세트에서 시작할 때 고유 세트를 생성하도록 보장 된 메소드
	certifiedUnique = {
		아이들 :
		내용 : 참,
		다음 : 사실,
		이전 : 참
	};

jQuery.fn.extend ({
	기능 : target () {
		var targets = jQuery (target, this),
			l = 목표 길이;

		this.filter (function () {
			var i = 0;
			for (; i <l; i ++) {
				if (jQuery.contains (this, targets [i])) {
					true를 반환;
				}
			}
		});
	},

	가장 가까운 : function (selectors, context) {
		var cur,
			i = 0,
			l = this.length,
			일치 = [],
			targets = typeof selectors! == "string"&& jQuery (selectors);

		// _selection_ 컨텍스트가 없으므로 위치 선택기가 일치하지 않습니다.
		if (! rneedsContext.test (selectors)) {
			for (; i <l; i ++) {
				for (cur = this [i]; cur && cur! == context; cur = cur.parentNode) {

					// 항상 문서 조각을 건너 뜁니다.
					if (cur.nodeType <11 && (대상?
						targets.index (cur)> -1 :

						// Sizzle에 비 요소를 전달하지 마십시오
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector (cur, selectors))) {

						matched.push (cur);
						단절;
					}
				}
			}
		}

		이것을 돌려줍니다. pushStack (matched.length> 1? jQuery.uniqueSort (matched) : matched);
	},

	// 집합 내에서 요소의 위치를 ​​결정
	인덱스 : function (elem) {

		// 인수 없음, 부모의 인덱스 반환
		if (! elem) {
			return (this [0] && this [0] .parentNode)? this.first (). prevAll (). length : -1;
		}

		// 선택기의 색인
		if (typeof elem === "string") {
			return indexOf.call (jQuery (elem), this [0]);
		}

		// 원하는 요소의 위치를 ​​찾습니다
		indexOf.call (this,

			// jQuery 객체를 받으면 첫 번째 요소가 사용됩니다.
			elem.jquery? elem [0] : 엘렘
		);
	},

	추가 : function (selector, context) {
		이것을 돌려줍니다.
			jQuery.uniqueSort (
				jQuery.merge (this.get (), jQuery (선택자, 컨텍스트))
			)
		);
	},

	addBack : 함수 (선택기) {
		이것을 돌려줍니다. add (selector == null?
			this.prevObject : this.prevObject.filter (선택기)
		);
	}
});

함수 형제 (cur, dir) {
	while ((cur = cur [dir]) && cur.nodeType! == 1) {}
	귀환 치료;
}

jQuery.each ({
	부모 : function (elem) {
		var parent = elem.parentNode;
		반환 부모 && parent.nodeType! == 11? 부모 : null;
	},
	부모 : function (elem) {
		return dir (elem, "parentNode");
	},
	부모까지 : function (elem, i, until) {
		return dir (elem, "parentNode",까지);
	},
	다음 : function (elem) {
		리턴 형제 (elem, "nextSibling");
	},
	이전 : function (elem) {
		리턴 형제 (elem, "previousSibling");
	},
	nextAll : function (elem) {
		return dir (elem, "nextSibling");
	},
	prevAll : 함수 (요소) {
		return dir (elem, "previousSibling");
	},
	nextUntil : function (elem, i,까지) {
		return dir (elem, "nextSibling",까지);
	},
	prevUntil : 함수 (elem, i,까지) {
		return dir (elem, "previousSibling",까지);
	},
	형제 자매 : function (elem) {
		return 형제 ((elem.parentNode || {}) .firstChild, elem);
	},
	어린이 : function (elem) {
		리턴 형제 (elem.firstChild);
	},
	내용 : function (elem) {
		if (typeof elem.contentDocument! == "undefined") {
			return elem.contentDocument;
		}

		// 지원 : IE 9-11 만, iOS 7 만, Android 브라우저 <= 4.3 만
		// 브라우저에서 템플릿 요소를 일반 요소로 취급
		// 지원하지 않습니다.
		if (nodeName (elem, "template")) {
			elem = elem.content || 엘렘;
		}

		return jQuery.merge ([], elem.childNodes);
	}
}, 함수 (이름, fn) {
	jQuery.fn [name] = function (까지, 선택기) {
		var matched = jQuery.map (this, fn,까지);

		if (name.slice (-5)! == "Until") {
			선택기 =까지;
		}

		if (선택기 && typeof 선택기 === "string") {
			일치 = jQuery.filter (선택자, 일치);
		}

		if (this.length> 1) {

			// 중복 제거
			if (! guaranteedUnique [name]) {
				jQuery.uniqueSort (일치);
			}

			// 부모님과 이전 파생 상품의 역순
			if (rparentsprev.test (name)) {
				matched.reverse ();
			}
		}

		이것을 돌려줍니다. pushStack (matched);
	};
});
var rnothtmlwhite = (/ [^ \ x20 \ t \ r \ n \ f] + / g);



// 문자열 형식의 옵션을 개체 형식의 옵션으로 변환
함수 createOptions (옵션) {
	var object = {};
	jQuery.each (options.match (rnothtmlwhite) || [], 함수 (_, 플래그) {
		object [플래그] = true;
	});
	반환 객체;
}

/ *
 * 다음 매개 변수를 사용하여 콜백 목록을 작성하십시오.
 *
 * 옵션 : 공백으로 구분 된 옵션 목록 (옵션)
 * 콜백 목록의 동작 또는보다 전통적인 옵션 객체
 *
 * 기본적으로 콜백 목록은 이벤트 콜백 목록처럼 작동하며
 * 여러 번 "해고".
 *
 * 가능한 옵션 :
 *
 * once : 콜백 목록을 한 번만 실행할 수 있습니다 (지연된 것처럼).
 *
 * 메모리 : 이전 값을 추적하고 추가 된 콜백을 호출합니다.
 * 목록이 최신 "암기 된"상태로 바로 시작된 후
 * 값 (지연됨)
 *
 * 고유 : 콜백을 한 번만 추가 할 수 있습니다 (목록에 중복 없음)
 *
 stopOnFalse : 콜백이 false를 반환 할 때 호출을 중단합니다.
 *
 * /
jQuery.Callbacks = 함수 (옵션) {

	// 필요한 경우 옵션을 문자열 형식에서 개체 형식으로 변환
	// (캐시를 먼저 체크인합니다)
	옵션 = typeof 옵션 === "문자열"?
		createOptions (옵션) :
		jQuery.extend ({}, 옵션);

	var //리스트가 현재 실행 중인지 알기위한 플래그
		발사,

		// 잊을 수없는리스트의 마지막 발사 값
		기억,

		//리스트가 이미 실행되었는지 알기위한 플래그
		해고

		// 발사 방지 플래그
		잠겨

		// 실제 콜백 목록
		목록 = [],

		// 반복 가능한 목록에 대한 실행 데이터 큐
		대기열 = [],

		// 현재 발생하는 콜백 인덱스 (필요에 따라 추가 / 제거로 수정)
		firingIndex = -1,

		// 화재 콜백
		화재 = function () {

			// 단발 발사
			잠김 = 잠김 || options.once;

			// 보류중인 모든 실행에 대해 콜백을 실행합니다.
			// firingIndex 재정의 및 런타임 변경 존중
			해고 = 발사 = 참;
			for (; queue.length; firingIndex = -1) {
				메모리 = queue.shift ();
				while (++ firingIndex <list.length) {

					// 콜백을 실행하고 조기 종료 확인
					if (list [firingIndex] .apply (memory [0], memory [1]) === 거짓 &&
						options.stopOnFalse) {

						// 데이터를 끝내고 잊어 버리므로 .add가 다시 실행되지 않습니다.
						firingIndex = list.length;
						기억 = 거짓;
					}
				}
			}

			// 데이터가 끝나면 잊어 버리세요
			if (! options.memory) {
				기억 = 거짓;
			}

			발사 = 거짓;

			// 발사가 잘되면 정리
			if (잠금) {

				// 향후 추가 호출을위한 데이터가있는 경우 빈 목록을 유지
				if (memory) {
					리스트 = [];

				// 그렇지 않으면이 개체가 소비됩니다.
				} else {
					list = "";
				}
			}
		},

		// 실제 콜백 객체
		자기 = {

			// 콜백 또는 콜백 모음을 목록에 추가
			추가 : function () {
				if (list) {

					// 과거 실행에서 메모리가 있다면 추가 한 후 실행해야합니다.
					if (메모리 &&! firing) {
						firingIndex = list.length-1;
						queue.push (메모리);
					}

					(함수 add (args) {
						jQuery.each (args, 함수 (_, arg) {
							if (isFunction (arg)) {
								if (! options.unique ||! self.has (arg)) {
									list.push (arg);
								}
							} else if (arg && arg.length && toType (arg)! == "string") {

								// 재귀 적으로 검사
								추가 (arg);
							}
						});
					}) (인수);

					if (메모리 &&! firing) {
						불();
					}
				}
				이것을 돌려줍니다;
			},

			// 목록에서 콜백 제거
			제거 : function () {
				jQuery.each (인수, 함수 (_, arg) {
					var 인덱스;
					while ((index = jQuery.inArray (arg, list, index))> -1) {
						list.splice (인덱스, 1);

						// 발사 인덱스 처리
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				이것을 돌려줍니다;
			},

			// 주어진 콜백이 목록에 있는지 확인합니다.
			// 인수가 없으면 list에 콜백이 첨부되어 있는지 여부를 반환합니다.
			has : function (fn) {
				fn을 반환 하시겠습니까?
					jQuery.inArray (fn, list)> -1 :
					list.length> 0;
			},

			// 목록에서 모든 콜백 제거
			비어 있음 : function () {
				if (list) {
					리스트 = [];
				}
				이것을 돌려줍니다;
			},

			// .fire 및 .add 비활성화
			// 현재 / 보류중인 실행을 중단
			// 모든 콜백 및 값 지우기
			비활성화 : function () {
				잠김 = 대기열 = [];
				리스트 = 메모리 = "";
				이것을 돌려줍니다;
			},
			비활성화 됨 : function () {
				return! list;
			},

			// .fire 비활성화
			// 메모리가 없으면 .add를 비활성화합니다 (효과가 없으므로).
			// 보류중인 실행을 중단
			잠금 : function () {
				잠김 = 대기열 = [];
				if (! memory &&! firing) {
					리스트 = 메모리 = "";
				}
				이것을 돌려줍니다;
			},
			잠김 : function () {
				!! 잠금;
			},

			// 주어진 컨텍스트와 인수로 모든 콜백을 호출
			fireWith : 함수 (컨텍스트, args) {
				if (! locked) {
					인수 = 인수 || [];
					args = [문맥, args.slice? args.slice () : args];
					queue.push (args);
					if (! firing) {
						불();
					}
				}
				이것을 돌려줍니다;
			},

			// 주어진 인수로 모든 콜백을 호출
			화재 : function () {
				self.fireWith (this, arguments);
				이것을 돌려줍니다;
			},

			// 콜백이 이미 한 번 이상 호출되었는지 확인
			해고 : function () {
				귀환 !!
			}
		};

	자기를 반환;
};


함수 ID (v) {
	v를 반환;
}
함수 Thrower (ex) {
	전 던져;
}

함수 adoptValue (value, resolve, reject, noValue) {
	var 방법;

	{

		// 우선권 동기 동작에 대한 약속 측면 확인
		if (value && isFunction ((method = value.promise))) {
			method.call (value) .done (resolve) .fail (reject);

		// 다른 thenables
		} 그렇지 않으면 if (value && isFunction ((method = value.then))) {
			method.call (값, 확인, 거부);

		// 기타 불가시
		} else {

			// Array # slice로 boolean`noValue`를 정수로 캐스트하여`resolve` 인수를 제어합니다.
			// * false : [value] .slice (0) => resolve (value)
			// * true : [value] .slice (1) => resolve ()
			resolve.apply (정의되지 않음, [value] .slice (noValue));
		}

	// Promises / A +의 경우 예외를 거부로 변환
	// jQuery.when은 그 다음에 파일을 풀지 않기 때문에에 나타나는 추가 검사를 건너 뛸 수 있습니다.
	// Deferred # then 거부를 조건부로 억제합니다.
	} catch (value) {

		// 지원 : Android 4.0 만
		// .call / .apply없이 호출 된 엄격한 모드 함수는 전역 객체 컨텍스트를 얻습니다.
		reject.apply (정의되지 않음, [value]);
	}
}

jQuery.extend ({

	지연 : function (func) {
		var 튜플 = [

				// 액션, 리스너 추가, 콜백,
				// ... .then 핸들러, 인수 인덱스, [최종 상태]
				[ "알림", "진행", jQuery.Callbacks ( "memory"),
					jQuery.Callbacks ( "memory"), 2],
				[ "resolve", "done", jQuery.Callbacks ( "once memory"),
					jQuery.Callbacks ( "once memory"), 0, "resolved"],
				[ "거부", "실패", jQuery.Callbacks ( "once memory"),
					jQuery.Callbacks ( "once memory"), 1, "거부 됨"]
			],
			state = "보류 중",
			약속 = {
				상태 : function () {
					반환 상태;
				},
				항상 : function () {
					deferred.done (arguments) .fail (arguments);
					이것을 돌려줍니다;
				},
				"캐치": function (fn) {
					return promise.then (null, fn);
				},

				// 역 호환을위한 파이프 유지
				파이프 : function (/ * fnDone, fnFail, fnProgress * /) {
					var fns = 인수;

					jQuery.Deferred (function (newDefer) {
						jQuery.each (튜플, 함수 (i, 튜플) {

							// 튜플 (진행, 완료, 실패)을 인수 (완료, 실패, 진행)에 매핑
							var fn = isFunction (fns [튜플 [4]]) && fns [튜플 [4]];

							// deferred.progress (function () {newDefer 또는 newDefer.notify에 바인딩})
							// deferred.done (function () {newDefer 또는 newDefer.resolve}에 바인딩)
							// deferred.fail (function () {newDefer 또는 newDefer.reject에 바인딩})
							지연 [tuple [1]] (함수 ​​() {
								var 반환 = fn && fn.apply (this, arguments);
								if (return && isFunction (Returns.promise)) {
									Returns.promise ()
										.progress (newDefer.notify)
										.done (newDefer.resolve)
										.fail (newDefer.reject);
								} else {
									newDefer [튜플 [0] + "포함"] (
										이,
										fn? [반환] : 인수
									);
								}
							});
						});
						fns = null;
					}) .promise ();
				},
				then : function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					함수 resolve (depth, deferred, handler, special) {
						리턴 함수 () {
							var that = this,
								인수 = 인수,
								mightThrow = 함수 () {
									var가 돌아왔다.

									// 지원 : 약속 / A + 섹션 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// 이중 해결 시도 무시
									if (깊이 <maxDepth) {
										반환;
									}

									반환 = handler.apply (즉, 인수);

									// 지원 : 약속 / A + 섹션 2.3.1
									// https://promisesaplus.com/#point-48
									if (return === deferred.promise ()) {
										새로운 TypeError를 던지십시오 ( "Thenable self-resolution");
									}

									// 지원 : 약속 / A + 섹션 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									//`then`을 한 번만 검색
									그런 다음 = &

										// 지원 : 약속 / A + 섹션 2.3.4
										// https://promisesaplus.com/#point-64
										// 객체와 함수 만 확인 가능
										(typeof return === "개체"||
											typeof return === "함수") &&
										돌아온 후;

									// 반환 된 반환 가능 파일 처리
									if (isFunction (then)) {

										// 특수 프로세서 (알림)는 해결을 기다립니다.
										if (special) {
											then.call (
												반환
												resolve (maxDepth, deferred, Identity, special),
												resolve (maxDepth, 지연됨, Thrower, special)
											);

										// 일반 프로세서 (해결)도 진행됩니다
										} else {

											// ... 이전 해상도 값은 무시
											maxDepth ++;

											then.call (
												반환
												resolve (maxDepth, deferred, Identity, special),
												resolve (maxDepth, deferred, Thrower, special),
												resolve (maxDepth, 지연, 신원,
													deferred.notifyWith)
											);
										}

									// 다른 모든 반환 값 처리
									} else {

										// 대체 핸들러 만 컨텍스트를 전달합니다.
										// 여러 값 (비 사양 동작)
										if (handler! == Identity) {
											그 = 정의되지 않은;
											args = [반환];
										}

										// 값을 처리
										// 기본 프로세스는 해결
										(special || deferred.resolveWith) (저것, 인수);
									}
								},

								// 일반 프로세서 만 (해결) 예외를 포착하고 거부합니다.
								프로세스 = 특수?
									mightThrow :
									함수 () {
										{
											mightThrow ();
										} catch (e) {

											if (jQuery.Deferred.exceptionHook) {
												jQuery.Deferred.exceptionHook (e,
													process.stackTrace);
											}

											// 지원 : 약속 / A + 섹션 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// 해결 후 예외 무시
											if (깊이 + 1> = maxDepth) {

												// 대체 핸들러 만 컨텍스트를 전달합니다.
												// 여러 값 (비 사양 동작)
												if (핸들러! == Thrower) {
													그 = 정의되지 않은;
													인수 = [e];
												}

												deferred.rejectWith (that, args);
											}
										}
									};

							// 지원 : 약속 / A + 섹션 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// 잘못된 거부를 피하겠다는 약속을 즉시 다시 해결
							// 후속 오류
							if (깊이) {
								방법();
							} else {

								// 예외적 인 경우 스택을 기록하기 위해 선택적 후크를 호출
								// 실행이 비동기 화되면 그렇지 않으면 손실되므로
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook ();
								}
								window.setTimeout (프로세스);
							}
						};
					}

					jQuery.Deferred (function (newDefer) {

						// progress_handlers.add (...)
						튜플 [0] [3] .add (
							결의(
								0,
								newDefer,
								isFunction (onProgress)?
									onProgress :
									정체,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add (...)
						튜플 [1] [3] .add (
							결의(
								0,
								newDefer,
								isFunction (onFulfilled)?
									완료 됨 :
									정체
							)
						);

						// rejected_handlers.add (...)
						튜플 [2] [3] .add (
							결의(
								0,
								newDefer,
								isFunction (onRejected)?
									onRejected :
									던지는 사람
							)
						);
					}) .promise ();
				},

				//이 연기에 대한 약속을 얻으십시오
				// obj가 제공되면 약속 측면이 객체에 추가됩니다.
				약속 : function (obj) {
					return obj! = null? jQuery.extend (obj, promise) : promise;
				}
			},
			연기 된 = {};

		// 목록 별 메소드 추가
		jQuery.each (튜플, 함수 (i, 튜플) {
			var list = 튜플 [2],
				stateString = 튜플 [5];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise [tuple [1]] = list.add;

			// 핸들 상태
			if (stateString) {
				list.add (
					함수 () {

						// 상태 = "해결됨"(즉, 이행)
						// 상태 = "거부 됨"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					튜플 [3-i] [2]. 비활성화,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					튜플 [3-i] [3]. 비활성화,

					// progress_callbacks.lock
					튜플 [0] [2] .lock,

					// progress_handlers.lock
					튜플 [0] [3] .lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add (tuple [3] .fire);

			// deferred.notify = function () {deferred.notifyWith (...)}
			// deferred.resolve = function () {deferred.resolveWith (...)}
			// deferred.reject = function () {deferred.rejectWith (...)}
			지연 [tuple [0]] = 함수 () {
				deferred [tuple [0] + "With"] (this === 지연? 정의되지 않음 : this, arguments);
				이것을 돌려줍니다;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			지연 [tuple [0] + "With"] = list.fireWith;
		});

		// 유예 약속을
		promise.promise (deferred);

		// 주어진 함수를 호출합니다
		if (func) {
			func.call (지연, 지연);
		}

		// 다 끝났다!
		반품 지연;
	},

	// 연기 된 도우미
	언제 : function (singleValue) {
		var

			// 미완료 부하 수
			나머지 = arguments.length,

			// 처리되지 않은 인수의 개수
			나는 = 남음

			// 하위 이행 데이터
			resolveContexts = 배열 ​​(i),
			resolveValues ​​= slice.call (arguments),

			// 마스터 지연
			마스터 = jQuery.Deferred (),

			// 종속 콜백 팩토리
			updateFunc = 함수 (i) {
				리턴 함수 (value) {
					resolveContexts [i] = 이것;
					resolveValues ​​[i] = arguments.length> 1? slice.call (arguments) : 값;
					if (! (--remaining)) {
						master.resolveWith (resolveContexts, resolveValues);
					}
				};
			};

		// Promise.resolve와 같이 단일 및 빈 인수가 채택됩니다.
		if (잔여 <= 1) {
			adoptValue (singleValue, master.done (updateFunc (i)) .resolve, master.reject,
				! 남음);

			// .then ()을 사용하여 보조 thenables (w. 3000) 참조를 풉니 다.
			if (master.state () === "보류 중"||
				isFunction (resolveValues ​​[i] && resolveValues ​​[i] .then)) {

				return master.then ();
			}
		}

		// Promise.all 배열 요소와 같이 여러 인수가 집계됩니다.
		while (i--) {
			adoptValue (resolveValues ​​[i], updateFunc (i), master.reject);
		}

		return master.promise ();
	}
});


// 일반적으로 개발 중 프로그래머의 실수를 나타냅니다.
// 기본적으로 삼키지 않고 최대한 빨리 경고합니다.
var rerrorNames = / ^ (Eval | 내부 | 범위 | 참조 | 구문 | 종류 | URI) 오류 $ /;

jQuery.Deferred.exceptionHook = 함수 (오류, 스택) {

	// 지원 : IE 8-9 만
	// 개발 도구가 열려 있으면 언제든지 콘솔이 존재하며 언제든지 발생할 수 있습니다.
	if (window.console && window.console.warn && error && rerrorNames.test (error.name)) {
		window.console.warn ( "jQuery.Deferred 예외 :"+ error.message, error.stack, stack);
	}
};




jQuery.readyException = 함수 (오류) {
	window.setTimeout (함수 () {
		던지기 오류;
	});
};




// DOM에서 사용 된 지연 준비
var readyList = jQuery.Deferred ();

jQuery.fn.ready = 함수 (fn) {

	readyList
		.then (fn)

		// 조회 할 수 있도록 jQuery.readyException을 함수로 래핑
		// 콜백 대신 오류 처리시 발생
		// 등록.
		.catch (함수 (오류) {
			jQuery.readyException (오류);
		});

	이것을 돌려줍니다;
};

jQuery.extend ({

	// DOM을 사용할 준비가 되었습니까? 일단 발생하면 true로 설정하십시오.
	isReady : 거짓,

	// 얼마나 많은 항목을 기다리는 지 추적하는 카운터
	// 준비된 이벤트가 발생합니다. # 6781 참조
	readyWait : 1,

	// DOM이 준비되면 처리
	준비 : 함수 (대기) {

		// 보류중인 보류가 있거나 이미 준비된 경우 중단
		if (wait === true? --jQuery.readyWait : jQuery.isReady) {
			반환;
		}

		// DOM이 준비되었음을 기억
		jQuery.isReady = true;

		// 정상적인 DOM Ready 이벤트가 발생하면 감소하고 필요한 경우 기다립니다.
		if (wait! == true && --jQuery.readyWait> 0) {
			반환;
		}

		// 바인딩 된 함수가있는 경우 실행
		readyList.resolveWith (문서, [jQuery]);
	}
});

jQuery.ready.then = readyList.then;

// 준비된 이벤트 처리기 및 자체 정리 방법
함수 완료 () {
	document.removeEventListener ( "DOMContentLoaded", 완료);
	window.removeEventListener ( "로드", 완료);
	jQuery.ready ();
}

// $ (document) .ready ()가 호출되는 경우를 포착
// 브라우저 이벤트가 이미 발생한 후
// 지원 : IE <= 9-10 만
// 이전 IE는 때때로 "대화식"신호를 너무 빨리 보낸다
if (document.readyState === "완료"||
	(document.readyState! == "로드 중 & &! document.documentElement.doScroll)) {

	// 스크립트가 준비를 지연시킬 수 있도록 비동기 적으로 처리
	window.setTimeout (jQuery.ready);

} else {

	// 편리한 이벤트 콜백 사용
	document.addEventListener ( "DOMContentLoaded", 완료);

	// 항상 작동하는 window.onload로 대체
	window.addEventListener ( "로드", 완료);
}




// 컬렉션의 값을 가져오고 설정하는 다기능 메소드
// 함수 인 경우 선택적으로 값을 실행할 수 있습니다.
var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		벌크 = 키 == null;

	// 많은 값을 설정
	if (toType (key) === "object") {
		체인 가능 = true;
		for (i in key) {
			액세스 (elems, fn, i, key [i], true, emptyGet, raw);
		}

	// 하나의 값을 설정
	} else if (value! == undefined) {
		체인 가능 = true;

		if (! isFunction (value)) {
			raw = true;
		}

		if (bulk) {

			// 전체 작업에 대해 대량 작업이 실행됩니다.
			if (raw) {
				fn.call (요소, 값);
				fn = null;

			// ... 함수 값을 실행할 때 제외
			} else {
				벌크 = fn;
				fn = 함수 (elem, key, value) {
					반환 bulk.call (jQuery (elem), 값);
				};
			}
		}

		if (fn) {
			for (; i <len; i ++) {
				fn (
					elems [i], 키, 로우?
					가치 :
					value.call (elems [i], i, fn (elems [i], 키))
				);
			}
		}
	}

	if (chainable) {
		돌아 오는 느릅 나무;
	}

	// 가져옵니다
	if (bulk) {
		return fn.call (elems);
	}

	렌을 반환? fn (elems [0], key) : emptyGet;
};


// 낙타를위한 대시 문자열과 일치
var rmsPrefix = / ^-ms- /,
	rdashAlpha = /-([az]) / g;

// camelCase에서 replace ()에 대한 콜백으로 사용
함수 fcamelCase (all, letter) {
	반환 편지 .toUpperCase ();
}

// 대시를 camelCase로 변환; CSS 및 데이터 모듈에서 사용
// 지원 : IE <= 9-11, Edge 12-15
// Microsoft는 공급 업체 접두사를 곱하는 것을 잊었습니다 (# 9572).
camelCase (문자열) {
	return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
}
var acceptData = function (owner) {

	// 다음 만 허용합니다.
	//-노드
	//-Node.ELEMENT_NODE
	//-Node.DOCUMENT_NODE
	//-객체
	//-모두
	return owner.nodeType === 1 || owner.nodeType === 9 || ! (+ owner.nodeType);
};




함수 데이터 () {
	this.expando = jQuery.expando + Data.uid ++;
}

Data.uid = 1;

Data.prototype = {

	캐시 : function (owner) {

		// 소유자 객체에 이미 캐시가 있는지 확인
		var value = owner [this.expando];

		// 그렇지 않은 경우 하나를 만듭니다.
		if (! value) {
			값 = {};

			// 최신 브라우저에서 비 요소 노드에 대한 데이터를 수락 할 수 있습니다.
			//하지만 우리는 # 8335를 보지 말아야합니다.
			// 항상 빈 객체를 반환합니다.
			if (acceptData (owner)) {

				// 노드가 문자열 화되거나 반복 될 가능성이없는 경우
				// 일반 할당 사용
				if (owner.nodeType) {
					owner [this.expando] = 값;

				// 그렇지 않으면 열거 할 수없는 속성으로 보호
				// 속성을 허용하려면 구성 가능이 true 여야합니다.
				// 데이터가 제거되면 삭제
				} else {
					Object.defineProperty (소유자, this.expando, {
						값 : 값,
						구성 가능 : true
					});
				}
			}
		}

		반환 값;
	},
	설정 : function (owner, data, value) {
		var prop,
			캐시 = this.cache (소유자);

		// 핸들 : [owner, key, value] args
		// 항상 camelCase 키 (gh-2257)를 사용하십시오.
		if (typeof data === "string") {
			캐시 [camelCase (data)] = 값;

		// 처리 : [owner, {properties}] 인수
		} else {

			// 속성을 하나씩 캐시 객체에 복사
			for (prop in data) {
				캐시 [camelCase (prop)] = 데이터 [prop];
			}
		}
		캐시 반환;
	},
	get : function (소유자, 키) {
		리턴 키 === undefined?
			this.cache (owner) :

			// 항상 camelCase 키 (gh-2257)를 사용하십시오.
			소유자 [this.expando] && 소유자 [this.expando] [camelCase (키)];
	},
	액세스 : function (owner, key, value) {

		// 다음 중 하나 인 경우 :
		//
		// 1. 키가 지정되지 않았습니다
		// 2. 문자열 키가 지정되었지만 값이 제공되지 않았습니다.
		//
		// "읽기"경로를 가져 와서 get 메소드가 결정하도록 허용
		// 각각 반환 할 값 :
		//
		// 1. 전체 캐시 객체
		// 2. 키에 저장된 데이터
		//
		if (키 === 정의되지 않은 ||
				((키 && typeof 키 === "string") && value === undefined)) {

			this.get (owner, key);를 반환하십시오.
		}

		// 키가 문자열이 아니거나 키와 값 모두
		// 다음 중 하나를 사용하여 지정, 설정 또는 확장 (기존 객체)합니다.
		//
		// 1. 속성 객체
		// 2. 키와 가치
		//
		this.set (소유자, 키, 값);

		// "set"경로는 두 가지 가능한 진입 점을 가질 수 있으므로
		// 어떤 경로를 취했는지에 따라 예상 데이터를 반환합니다. [*]
		반환 값! == undefined? 값 : 키;
	},
	제거 : function (owner, key) {
		var i,
			캐시 = 소유자 [this.expando];

		if (cache === undefined) {
			반환;
		}

		if (key! == undefined) {

			// 배열 또는 공백으로 구분 된 키 문자열 지원
			if (Array.isArray (key)) {

				// 키가 키 배열 인 경우 ...
				// 항상 camelCase 키를 설정하므로 제거하십시오.
				키 = key.map (camelCase);
			} else {
				키 = camelCase (키);

				// 공백이있는 키가 있으면 사용하십시오.
				// 그렇지 않으면 공백이 아닌 문자를 일치시켜 배열을 만듭니다.
				키 = 캐시의 키?
					[키] :
					(key.match (rnothtmlwhite) || []);
			}

			i = key.length;

			while (i--) {
				캐시 삭제 [키 [i]];
			}
		}

		// 더 이상 데이터가 없으면 expando를 제거합니다
		if (key === undefined || jQuery.isEmptyObject (cache)) {

			// 지원 : Chrome <= 35-45
			// 속성을 삭제할 때 웹킷 및 깜박임 성능이 저하됨
			// DOM 노드에서 대신 undefined로 설정
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (버그 제한)
			if (owner.nodeType) {
				owner [this.expando] = 정의되지 않음;
			} else {
				소유자 삭제 [this.expando];
			}
		}
	},
	hasData : function (owner) {
		var cache = owner [this.expando];
		캐시 반환! == 정의되지 않음 &&! jQuery.isEmptyObject (cache);
	}
};
var dataPriv = 새 데이터 ();

var dataUser = 새 데이터 ();



// 구현 요약
//
// 1. 1.9.x 브랜치와 API 표면 및 의미 론적 호환성 강화
// 2. 스토리지를 줄임으로써 모듈의 유지 관리 성을 향상시킵니다.
// 단일 메커니즘으로의 경로.
// 3. "개인"및 "사용자"데이터를 지원하기 위해 동일한 단일 메커니즘을 사용하십시오.
// 4. _Never_ "비공개"데이터를 사용자 코드에 노출 (TODO : Drop _data, _removeData)
// 5. 사용자 객체 (예 : expando 속성)에 대한 구현 세부 정보 노출을 피하십시오
// 6. 2014 년에 WeakMap으로 구현 업그레이드를위한 명확한 경로 제공

var rbrace = / ^ (? : \ {[\ w \ W] * \} | \ [[\ w \ W] * \]) $ /,
	rmultiDash = / [AZ] / g;

getData (데이터) {
	if (data === "true") {
		true를 반환;
	}

	if (data === "false") {
		거짓을 반환;
	}

	if (data === "null") {
		null을 돌려줍니다.
	}

	// 문자열을 변경하지 않으면 숫자로만 변환
	if (data === + data + "") {
		리턴 + 데이터;
	}

	if (rbrace.test (data)) {
		JSON.parse (data)를 반환합니다.
	}

	데이터를 반환;
}

함수 dataAttr (elem, key, data) {
	var 이름;

	// 내부에서 발견 된 것이 없다면
	// HTML5 data- * 속성의 데이터
	if (data === undefined && elem.nodeType === 1) {
		이름 = "data-"+ key.replace (rmultiDash, "-$ &") .toLowerCase ();
		데이터 = elem.getAttribute (이름);

		if (typeof data === "string") {
			{
				data = getData (데이터);
			} catch (e) {}

			// 나중에 변경되지 않도록 데이터를 설정해야합니다.
			dataUser.set (요소, 키, 데이터);
		} else {
			데이터 = 정의되지 않음;
		}
	}
	데이터를 반환;
}

jQuery.extend ({
	hasData : 함수 (elem) {
		return dataUser.hasData (elem) || dataPriv.hasData (elem);
	},

	데이터 : 함수 (요소, 이름, 데이터) {
		return dataUser.access (요소, 이름, 데이터);
	},

	removeData : 함수 (요소, 이름) {
		dataUser.remove (요소, 이름);
	},

	// TODO : 이제 _data 및 _removeData에 대한 모든 호출이 교체되었습니다.
	// dataPriv 메소드를 직접 호출하면 더 이상 사용되지 않을 수 있습니다.
	_data : 함수 (요소, 이름, 데이터) {
		return dataPriv.access (요소, 이름, 데이터);
	},

	_removeData : function (요소, 이름) {
		dataPriv.remove (요소, 이름);
	}
});

jQuery.fn.extend ({
	데이터 : function (key, value) {
		var i, 이름, 데이터,
			elem = this [0],
			속성 = elem && elem.attributes;

		// 모든 값을 가져옵니다
		if (key === undefined) {
			if (this.length) {
				data = dataUser.get (요소);

				if (elem.nodeType === 1 &&! dataPriv.get (elem, "hasDataAttrs")) {
					i = attrs.length;
					while (i--) {

						// 지원 : IE 11 만
						// attrs 요소는 null 일 수 있습니다 (# 14894)
						if (attrs [i]) {
							이름 = attrs [i] .name;
							if (name.indexOf ( "data-") === 0) {
								이름 = camelCase (name.slice (5));
								dataAttr (요소, 이름, 데이터 [이름]);
							}
						}
					}
					dataPriv.set (요소, "hasDataAttrs", true);
				}
			}

			데이터를 반환;
		}

		// 여러 값을 설정
		if (typeof key === "object") {
			이것을 돌려줍니다 .each (function () {
				dataUser.set (this, key);
			});
		}

		액세스 리턴 (this, function (value) {
			var 데이터;

			// 호출하는 jQuery 객체 (요소 일치)가 비어 있지 않습니다
			// (그리고 이것에 요소가 나타납니다 [0])
			//`value` 매개 변수가 정의되지 않았습니다. 빈 jQuery 객체
			// elem = this [0]에 대해 'undefined'가됩니다.
			// 데이터 캐시를 읽으려고하면 예외가 발생합니다.
			if (elem && value === undefined) {

				// 캐시에서 데이터를 가져 오려고 시도
				// 키는 항상 카멜입니다.
				data = dataUser.get (요소, 키);
				if (data! == undefined) {
					데이터를 반환;
				}

				// 데이터를 "발견"
				// HTML5 맞춤 데이터-* attrs
				데이터 = dataAttr (요소, 키);
				if (data! == undefined) {
					데이터를 반환;
				}

				// 정말 노력했지만 데이터가 존재하지 않습니다.
				반환;
			}

			// 데이터 설정 ...
			this.each (function () {

				// 우리는 항상 camelCased 키를 저장합니다
				dataUser.set (this, key, value);
			});
		}, null, value, arguments.length> 1, null, true);
	},

	removeData : 함수 (키) {
		이것을 돌려줍니다 .each (function () {
			dataUser.remove (this, key);
		});
	}
});


jQuery.extend ({
	대기 행렬 : function (elem, type, data) {
		var queue;

		if (elem) {
			type = (type || "fx") + "queue";
			큐 = dataPriv.get (요소, 유형);

			// 이것이 단지 조회 일 경우 신속하게 빠져 나가서 대기열의 속도를 높입니다.
			if (data) {
				if (! queue || Array.isArray (data)) {
					큐 = dataPriv.access (요소, 유형, jQuery.makeArray (data));
				} else {
					queue.push (데이터);
				}
			}
			반품 대기열 || [];
		}
	},

	대기열에서 제외 : function (elem, type) {
		유형 = 유형 || "fx";

		var queue = jQuery.queue (elem, type),
			startLength = queue.length,
			fn = queue.shift (),
			hooks = jQuery._queueHooks (elem, type),
			다음 = function () {
				jQuery.dequeue (요소, 유형);
			};

		// FX 대기열이 대기열에 들어간 경우 항상 진행 센티넬을 제거하십시오.
		if (fn === "inprogress") {
			fn = queue.shift ();
			startLength--;
		}

		if (fn) {

			// FX 큐가 진행되지 않도록 진행 센티넬 추가
			// 자동 대기열에서 제외
			if (type === "fx") {
				queue.unshift ( "진행중");
			}

			// 마지막 대기열 중지 기능을 정리합니다
			hooks.stop을 삭제하십시오.
			fn.call (elem, next, hooks);
		}

		if (! startLength && hooks) {
			hooks.empty.fire ();
		}
	},

	// 공개 아님-queueHooks 객체 생성 또는 현재 객체 반환
	_queueHooks : 함수 (elem, type) {
		var key = 유형 + "queueHooks";
		return dataPriv.get (요소, 키) || dataPriv.access (요소, 키, {
			비어 있음 : jQuery.Callbacks ( "once memory") .add (function () {
				dataPriv.remove (요소, [유형 + "대기열", 키]);
			})
		});
	}
});

jQuery.fn.extend ({
	대기 행렬 : function (type, data) {
		var setter = 2;

		if (typeof type! == "string") {
			데이터 = 유형;
			유형 = "fx";
			세터--;
		}

		if (arguments.length <setter) {
			반환 jQuery.queue (this [0], type);
		}

		데이터 반환 === undefined?
			이 :
			this.each (function () {
				var queue = jQuery.queue (this, type, data);

				//이 큐에 대한 후크를 확인
				jQuery._queueHooks (this, type);

				if (type === "fx"&& queue [0]! == "inprogress") {
					jQuery.dequeue (this, type);
				}
			});
	},
	대기열에서 제외 : function (type) {
		이것을 돌려줍니다 .each (function () {
			jQuery.dequeue (this, type);
		});
	},
	clearQueue : 함수 (유형) {
		return this.queue (type || "fx", []);
	},

	// 특정 유형의 큐가 해결되면 약속을 얻습니다.
	// 비어 있습니다 (fx는 기본적으로 유형입니다)
	약속 : function (type, obj) {
		var tmp,
			카운트 = 1,
			지연 = jQuery.Deferred (),
			요소 = 이것,
			i = this.length,
			resolve = function () {
				if (! (--count)) {
					defer.resolveWith (요소, [요소]);
				}
			};

		if (typeof type! == "string") {
			obj = 유형;
			유형 = 정의되지 않음;
		}
		유형 = 유형 || "fx";

		while (i--) {
			tmp = dataPriv.get (elements [i], type + "queueHooks");
			if (tmp && tmp.empty) {
				카운트 ++;
				tmp.empty.add (resolve);
			}
		}
		결의();
		반환 defer.promise (obj);
	}
});
var pnum = (/ [+-]? (? : \ d * \. |) \ d + (? : [eE] [+-]? \ d + |) /) .source;

var rcssNum = 새로운 RegExp ( "^ (? : ([+-]) = |) ("+ pnum + ") ([az %] *) $", "i");


var cssExpand = [ "상단", "오른쪽", "하단", "왼쪽"];

var documentElement = document.documentElement;



	var isAttached = 함수 (elem) {
			return jQuery.contains (elem.ownerDocument, elem);
		},
		구성됨 = {구성됨 : true};

	// 지원 : IE 9-11+, Edge 12-18+, iOS 10.0-10.2 만
	// 가능한 경우 그림자 DOM 경계를 가로 지르는 첨부 파일 확인 (gh-3504)
	// 지원 : iOS 10.0-10.2 만
	// 초기 iOS 10 버전은`attachShadow`를 지원하지만`getRootNode`는 지원하지 않습니다.
	// 오류가 발생합니다. `getRootNode`를 확인해야합니다.
	if (documentElement.getRootNode) {
		isAttached = 함수 (elem) {
			jQuery.contains (elem.ownerDocument, elem)을 반환 ||
				elem.getRootNode (구성) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = 함수 (elem, el) {

		// jQuery # filter에서 isHiddenWithinTree를 호출 할 수 있습니다. function;
		//이 경우 요소는 두 번째 인수가됩니다.
		elem = 엘 || 엘렘;

		// 인라인 스타일이 모든 것을 능가합니다
		return elem.style.display === "없음"||
			elem.style.display === ""&&

			// 그렇지 않으면 계산 된 스타일을 확인하십시오.
			// 지원 : Firefox <= 43-45
			// 연결이 끊긴 요소는 디스플레이를 계산할 수 있습니다 : none, 먼저 elem이
			// 문서에서.
			isAttached (elem) &&

			jQuery.css (elem, "display") === "없음";
	};

var swap = function (요소, 옵션, 콜백, args) {
	var ret, name,
		이전 = {};

	// 이전 값을 기억하고 새 값을 삽입
	for (옵션의 이름) {
		이전 [이름] = elem.style [이름];
		elem.style [이름] = 옵션 [이름];
	}

	ret = callback.apply (요소, 인수 || []);

	// 이전 값을 되돌립니다
	for (옵션의 이름) {
		elem.style [이름] = 오래된 [이름];
	}

	리트 윗을 반환;
};




adjustCSS 함수 (elem, prop, valueParts, tween) {
	var 조정, 스케일,
		maxIterations = 20,
		currentValue = 트윈?
			함수 () {
				return tween.cur ();
			} :
			함수 () {
				return jQuery.css (elem, prop, "");
			},
		초기 = currentValue (),
		단위 = valueParts && valueParts [3] || (jQuery.cssNumber [prop]? "": "px"),

		// 잠재적 인 단위 불일치에 대한 시작 값 계산이 필요합니다.
		initialInUnit = elem.nodeType &&
			(jQuery.cssNumber [prop] || unit! == "px"&& + initial) &&
			rcssNum.exec (jQuery.css (elem, prop));

	if (initialInUnit && initialInUnit [3]! == 단위) {

		// 지원 : Firefox <= 54
		// CSS 상한으로부터의 간섭을 방지하기 위해 반복 대상 값을 절반으로 줄입니다 (gh-2144)
		초기 = 초기 / 2;

		// jQuery.css에 의해보고 된 신뢰 단위
		단위 = 단위 || initialInUnit [3];

		// 0이 아닌 시작점에서 반복적으로 근사
		initialInUnit = + 초기 || 1;

		while (maxIterations--) {

			// 최선의 추측을 평가하고 업데이트합니다 (0을 두 배로 추측).
			// 스케일이 1과 같거나 교차하는 경우 완료합니다 (이전 * 신제품은 양수가 아님).
			jQuery.style (요소, 소품, initialInUnit + 단위);
			if ((1-scale) * (1-(scale = currentValue () / initial || 0.5)) <= 0) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / 스케일;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style (요소, 소품, initialInUnit + 단위);

		// 나중에 트윈 속성을 업데이트해야합니다.
		valueParts = valueParts || [];
	}

	if (valueParts) {
		initialInUnit = + initialInUnit || + 초기 || 0;

		// 지정된 경우 상대 오프셋 (+ = /-=) 적용
		조정 됨 = valueParts [1]?
			initialInUnit + (valueParts [1] + 1) * valueParts [2] :
			+ valueParts [2];
		if (트윈) {
			트윈 단위 = 단위;
			tween.start = initialInUnit;
			트윈 엔드 = 조정;
		}
	}
	반품 조정;
}


var defaultDisplayMap = {};

getDefaultDisplay (elem) 함수 {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap [nodeName];

	if (display) {
		리턴 디스플레이;
	}

	temp = doc.body.appendChild (doc.createElement (nodeName));
	display = jQuery.css (임시, "디스플레이");

	temp.parentNode.removeChild (temp);

	if (display === "none") {
		디스플레이 = "블록";
	}
	defaultDisplayMap [nodeName] = 표시;

	리턴 디스플레이;
}

함수 showHide (elements, show) {
	var 디스플레이, elem,
		값 = [],
		인덱스 = 0,
		길이 = elements.length;

	// 변경해야하는 요소의 새로운 표시 값 결정
	for (; index <length; index ++) {
		요소 = 요소 [색인];
		if (! elem.style) {
			잇다;
		}

		디스플레이 = elem.style.display;
		if (show) {

			// 캐스케이드 숨겨진 요소에 대한 가시성을 강제하기 때문에 즉각적이고 느리다
			// 비어 있지 않은 디스플레이 값이 없다면이 첫 번째 루프에서 점검이 필요합니다.
			// 인라인 또는 복원 예정)
			if (display === "none") {
				값 [index] = dataPriv.get (요소, "디스플레이") || 없는;
				if (! values ​​[index]) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === ""&& isHiddenWithinTree (elem)) {
				값 [index] = getDefaultDisplay (elem);
			}
		} else {
			if (display! == "none") {
				값 [index] = "없음";

				// 덮어 쓰는 내용 기억
				dataPriv.set (요소, "디스플레이", 디스플레이);
			}
		}
	}

	// 지속적인 리플 로우를 피하기 위해 두 번째 루프에서 요소 표시를 설정
	for (인덱스 = 0; 인덱스 <길이; 인덱스 ++) {
		if (values ​​[index]! = null) {
			요소 [index] .style.display = 값 [index];
		}
	}

	반환 요소;
}

jQuery.fn.extend ({
	표시 : function () {
		showHide (this, true)를 반환합니다.
	},
	숨기기 : function () {
		showHide (this)를 반환합니다.
	},
	토글 : function (state) {
		if (typeof state === "boolean") {
			상태를 반환? this.show () : this.hide ();
		}

		이것을 돌려줍니다 .each (function () {
			if (isHiddenWithinTree (this)) {
				jQuery (this) .show ();
			} else {
				jQuery (this) .hide ();
			}
		});
	}
});
var rcheckableType = (/ ^ (?: checkbox | radio) $ / i);

var rtagName = (/ <([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) / i);

var rscriptType = (/ ^ $ | ^ module $ | \ / (?: java | ecma) script / i);



// XHTML을 지원하려면이 태그를 닫아야합니다 (# 13200).
var wrapMap = {

	// 지원 : IE <= 9 만
	옵션 : [1, "<복수 선택 ''다중 '>", "</ select>"],

	// XHTML 파서는 마술처럼 요소를 삽입하지 않습니다
	// 태그 수프 파서와 같은 방식입니다. 그래서 우리는 단축 할 수 없습니다
	// <tbody> 또는 다른 필수 요소를 생략하여이를 수행합니다.
	thead : [1, "<table>", "</ table>"],
	col : [2, "<table> <colgroup>", "</ colgroup> </ table>"],
	tr : [2, "<table> <tbody>", "</ tbody> </ table>"],
	td : [3, "<table> <tbody> <tr>", "</ tr> </ tbody> </ table>"],

	_default : [0, "", ""]
};

// 지원 : IE <= 9 만
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


getAll (컨텍스트, 태그) 함수 {

	// 지원 : IE <= 9-11 만
	// 호스트 객체에서 인수가없는 메소드 호출을 피하려면 typeof를 사용하십시오 (# 15151).
	var ret;

	if (typeof context.getElementsByTagName! == "undefined") {
		ret = context.getElementsByTagName (tag || "*");

	} else if (typeof context.querySelectorAll! == "undefined") {
		ret = context.querySelectorAll (tag || "*");

	} else {
		ret = [];
	}

	if (tag === undefined || tag && nodeName (컨텍스트, 태그)) {
		return jQuery.merge ([context], ret);
	}

	리트 윗을 반환;
}


// 스크립트가 이미 평가 된 것으로 표시
함수 setGlobalEval (elems, refElements) {
	var i = 0,
		l = elems.length;

	for (; i <l; i ++) {
		dataPriv.set (
			느릅 나무 [i],
			"globalEval",
			! refElements || dataPriv.get (refElements [i], "globalEval")
		);
	}
}


var rhtml = / <| & #? \ w +; /;

함수 buildFragment (요소, 컨텍스트, 스크립트, 선택, 무시) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment (),
		노드 = [],
		i = 0,
		l = elems.length;

	for (; i <l; i ++) {
		엘렘 = 엘렘 [i];

		if (elem || elem === 0) {

			// 노드를 직접 추가
			if (toType (elem) === "object") {

				// 지원 : Android <= 4.0 만, PhantomJS 1 만
				// 고대 WebKit에서 push.apply (_, arraylike)가 발생합니다.
				jQuery.merge (노드, elem.nodeType? [elem] : elem);

			// HTML이 아닌 텍스트를 텍스트 노드로 변환
			} 그렇지 않으면 if (! rhtml.test (elem)) {
				nodes.push (context.createTextNode (elem));

			// HTML을 DOM 노드로 변환
			} else {
				tmp = tmp || fragment.appendChild (context.createElement ( "div"));

				// 표준 표현을 역 직렬화
				tag = (rtagName.exec (elem) || [ "", ""]) [1] .toLowerCase ();
				랩 = 랩 맵 [태그] || wrapMap._default;
				tmp.innerHTML = wrap [1] + jQuery.htmlPrefilter (elem) + wrap [2];

				// 래퍼를 통해 올바른 콘텐츠로 내림차순
				j = 랩 [0];
				while (j--) {
					tmp = tmp.lastChild;
				}

				// 지원 : Android <= 4.0 만, PhantomJS 1 만
				// 고대 WebKit에서 push.apply (_, arraylike)가 발생합니다.
				jQuery.merge (노드, tmp.childNodes);

				// 최상위 컨테이너를 기억
				tmp = fragment.firstChild;

				// 생성 된 노드가 분리되었는지 확인 (# 12392)
				tmp.textContent = "";
			}
		}
	}

	// 조각에서 래퍼 제거
	fragment.textContent = "";

	i = 0;
	while ((elem = 노드 [i ++])) {

		// 컨텍스트 컬렉션에 이미있는 요소를 건너 뜁니다 (trac-4087).
		if (selection && jQuery.inArray (elem, selection)> -1) {
			if (무시) ​​{
				ignore.push (elem);
			}
			잇다;
		}

		첨부 = isAttached (요소);

		// 조각에 추가
		tmp = getAll (fragment.appendChild (elem), "script");

		// 스크립트 평가 기록 유지
		if (첨부 된) {
			setGlobalEval (tmp);
		}

		// 실행 파일 캡처
		if (스크립트) {
			j = 0;
			while ((elem = tmp [j ++])) {
				if (rscriptType.test (elem.type || "")) {
					scripts.push (elem);
				}
			}
		}
	}

	반환 조각;
}


(함수 () {
	var fragment = document.createDocumentFragment (),
		div = fragment.appendChild (document.createElement ( "div")),
		입력 = document.createElement ( "input");

	// 지원 : Android 4.0-4.3 만
	// 이름이 설정되면 상태가 손실되었는지 확인 (# 11217)
	// 지원 : Windows 웹 앱 (WWA)
	//`name`과`type`은 WWA에 .setAttribute를 사용해야합니다 (# 14901)
	input.setAttribute ( "type", "radio");
	input.setAttribute ( "checked", "checked");
	input.setAttribute ( "name", "t");

	div.appendChild (입력);

	// 지원 : Android <= 4.1 만
	// 이전 WebKit은 조각에서 확인 된 상태를 올바르게 복제하지 않습니다.
	support.checkClone = div.cloneNode (true) .cloneNode (true) .lastChild.checked;

	// 지원 : IE <= 11 만
	// 텍스트 영역 (및 확인란) defaultValue가 올바르게 복제되었는지 확인
	div.innerHTML = "<textarea> x </ textarea>";
	support.noCloneChecked = !! div.cloneNode (true) .lastChild.defaultValue;
}) ();


var
	rkeyEvent = / ^ key /,
	rmouseEvent = / ^ (?: mouse | 포인터 | 컨텍스트 메뉴 | 드래그 | 드롭) | 클릭 /,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

함수 returnTrue () {
	true를 반환;
}

함수 returnFalse () {
	거짓을 반환;
}

// 지원 : IE <= 9-11+
// focus () 및 blur ()는 동작하지 않는 경우를 제외하고 비동기식입니다.
// 요소가 이미 활성화 된 경우 초점이 동기화 될 것으로 예상합니다.
// 요소가 아직 활성화되지 않은 경우 동기식으로 흐리게 처리합니다.
// (포커스와 블러는 항상 지원되는 다른 브라우저에서 동기화됩니다.
// 이것은 우리가 언제 그것을 믿을 수 있는지를 정의합니다).
함수 expectSync (elem, type) {
	return ( elem === safeActiveElement ()) === (type === "focus");
}

// 지원 : IE <= 9 만
// document.activeElement에 액세스하면 예기치 않게 던질 수 있습니다.
// https://bugs.jquery.com/ticket/13393
safesafeElement () 함수 {
	{
		반환 document.activeElement;
	} catch (err) {}
}

기능 켜기 (요소, 유형, 선택기, 데이터, fn, one) {
	var origFn, 타입;

	// 타입은 타입 / 핸들러의 맵일 수 있습니다
	if (typeof types === "object") {

		// (유형-객체, 선택기, 데이터)
		if (typeof selector! == "string") {

			// (types-Object, data)
			데이터 = 데이터 || 선택자;
			선택기 = 정의되지 않음;
		}
		for (유형) {
			on (elem, type, selector, data, types [type], one);
		}
		귀환 엘렘;
	}

	if (data == null && fn == null) {

		// (유형, fn)
		fn = 선택기;
		데이터 = 선택기 = 정의되지 않음;
	} 그렇지 않으면 (fn == null) {
		if (typeof selector === "string") {

			// (유형, 선택기, fn)
			fn = 데이터;
			데이터 = 정의되지 않음;
		} else {

			// (유형, 데이터, fn)
			fn = 데이터;
			데이터 = 선택기;
			선택기 = 정의되지 않음;
		}
	}
	if (fn === false) {
		fn = returnFalse;
	} else if (! fn) {
		귀환 엘렘;
	}

	if (one === 1) {
		origFn = fn;
		fn = 함수 (이벤트) {

			// 이벤트에 정보가 포함되어 있으므로 빈 세트를 사용할 수 있습니다
			jQuery (). off (이벤트);
			origFn.apply (this, arguments)를 반환합니다.
		};

		// 호출자가 origFn을 사용하여 제거 할 수 있도록 동일한 guid를 사용하십시오.
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid ++);
	}
	반환 elem.each (함수 () {
		jQuery.event.add (this, types, fn, data, selector);
	});
}

/ *
 * 공용 인터페이스의 일부가 아닌 이벤트 관리를위한 도우미 기능.
 * 많은 아이디어를위한 Dean Edwards의 addEvent 라이브러리에 대한 제안.
 * /
jQuery.event = {

	글로벌 : {},

	추가 : function (elem, types, handler, data, selector) {

		var handleObjIn, eventHandle, tmp,
			이벤트, t, handleObj,
			특수 처리기, 유형, 네임 스페이스, origType,
			elemData = dataPriv.get (elem);

		// noData 또는 text / comment 노드에 이벤트를 첨부하지 않습니다 (그러나 일반 객체는 허용)
		if (! elemData) {
			반환;
		}

		// 호출자는 핸들러 대신 사용자 정의 데이터 객체를 전달할 수 있습니다.
		if (handler.handler) {
			handleObjIn = 핸들러;
			핸들러 = handleObjIn.handler;
			선택기 = handleObjIn.selector;
		}

		// 연결시 잘못된 선택자가 예외를 throw하는지 확인
		// elem이 요소가 아닌 노드 (예 : 문서) 인 경우 documentElement에 대해 평가
		if (선택기) {
			jQuery.find.matchesSelector (documentElement, selector);
		}

		// 핸들러에 고유 한 ID가 있는지 확인하고 나중에 찾거나 제거하는 데 사용합니다.
		if (! handler.guid) {
			handler.guid = jQuery.guid ++;
		}

		// 요소의 이벤트 구조와 기본 처리기를 초기화합니다 (처음 처리 된 경우).
		if (! (events = elemData.events)) {
			events = elemData.events = {};
		}
		if (! (eventHandle = elemData.handle)) {
			eventHandle = elemData.handle = 함수 (e) {

				// jQuery.event.trigger ()의 두 번째 이벤트를 버리고
				// 페이지가 언로드 된 후 이벤트가 호출 될 때
				jQuery의 리턴 타입! == "정의되지 않음"&& jQuery.event.triggered! == e.type?
					jQuery.event.dispatch.apply (elem, arguments) : 정의되지 않음;
			};
		}

		// 공백으로 구분 된 여러 이벤트 처리
		types = (유형 || "") .match (rnothtmlwhite) || [ ""];
		t = 유형. 길이;
		while (t--) {
			tmp = rtypenamespace.exec (유형 [t]) || [];
			유형 = origType = tmp [1];
			네임 스페이스 = (tmp [2] || "") .split ( ".") .sort ();

			// 타입이 있어야하고, 네임 스페이스 전용 핸들러가 없어야합니다.
			if (! type) {
				잇다;
			}

			// 이벤트 유형이 변경되면 변경된 유형에 대한 특수 이벤트 핸들러를 사용하십시오.
			special = jQuery.event.special [유형] || {};

			// 선택자가 정의 된 경우 특수 이벤트 API 유형을 결정하고, 그렇지 않으면 지정된 유형을 결정하십시오.
			type = (선택기? special.delegateType : special.bindType) || 유형;

			// 새로 재설정 된 유형에 따라 특별 업데이트
			special = jQuery.event.special [유형] || {};

			// handleObj가 모든 이벤트 핸들러로 전달됩니다.
			handleObj = jQuery.extend ({
				유형 : 유형,
				origType : origType,
				데이터 : 데이터,
				핸들러 : 핸들러,
				guid : handler.guid,
				선택기 : 선택기,
				needsContext : 선택기 && jQuery.expr.match.needsContext.test (selector),
				네임 스페이스 : namespaces.join ( ".")
			}, handleObjIn);

			// 첫 번째 이벤트 핸들러 큐를 초기화합니다.
			if (! (handlers = events [type])) {
				핸들러 = events [type] = [];
				handlers.delegateCount = 0;

				// 특수 이벤트 핸들러가 false를 반환하는 경우에만 addEventListener를 사용하십시오.
				if (! special.setup ||
					special.setup.call (요소, 데이터, 네임 스페이스, eventHandle) === false) {

					if (elem.addEventListener) {
						elem.addEventListener (type, eventHandle);
					}
				}
			}

			if (special.add) {
				special.add.call (elem, handleObj);

				if (! handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// 앞에있는 델리게이트의 요소 처리기 목록에 추가
			if (선택기) {
				handlers.splice (handlers.delegateCount ++, 0, handleObj);
			} else {
				handlers.push (handleObj);
			}

			// 이벤트 최적화를 위해 사용 된 이벤트를 추적
			jQuery.event.global [type] = true;
		}

	},

	// 요소에서 이벤트 또는 이벤트 세트를 분리
	제거 : 함수 (요소, 유형, 핸들러, 선택기, 맵핑 된 유형) {

		var j, origCount, tmp,
			이벤트, t, handleObj,
			특수 처리기, 유형, 네임 스페이스, origType,
			elemData = dataPriv.hasData (elem) && dataPriv.get (elem);

		if (! elemData ||! (events = elemData.events)) {
			반환;
		}

		// 각 유형마다 한 번씩. 유형은 생략 될 수 있습니다
		types = (유형 || "") .match (rnothtmlwhite) || [ ""];
		t = 유형. 길이;
		while (t--) {
			tmp = rtypenamespace.exec (유형 [t]) || [];
			유형 = origType = tmp [1];
			네임 스페이스 = (tmp [2] || "") .split ( ".") .sort ();

			// 요소에 대한 모든 이벤트 (제공된 경우이 네임 스페이스에서)를 바인드 해제
			if (! type) {
				for (이벤트 유형) {
					jQuery.event.remove (요소, 유형 + 유형 [t], 핸들러, 선택기, true);
				}
				잇다;
			}

			special = jQuery.event.special [유형] || {};
			type = (선택기? special.delegateType : special.bindType) || 유형;
			핸들러 = events [type] || [];
			tmp = tmp [2] &&
				새로운 RegExp ( "(^ | \\.)"+ namespaces.join ( "\\. (? :. * \\. |)") + "(\\. | $)");

			// 일치하는 이벤트 제거
			origCount = j = 핸들러. 길이;
			while (j--) {
				handleObj = 핸들러 [j];

				if ((MappingTypes || origType === handleObj.origType) &&
					(! handler || handler.guid === handleObj.guid) &&
					(! tmp || tmp.test (handleObj.namespace)) &&
					(! selector || selector === handleObj.selector ||
						선택기 === "**"&& handleObj.selector)) {
					handlers.splice (j, 1);

					if (handleObj.selector) {
						handlers.delegateCount--;
					}
					if (special.remove) {
						special.remove.call (elem, handleObj);
					}
				}
			}

			// 무언가를 제거하고 더 이상 핸들러가없는 경우 일반 이벤트 핸들러를 제거합니다.
			// (특별한 이벤트 처리기를 제거하는 동안 끝없는 재귀 가능성을 피하십시오)
			if (origCount &&! handlers.length) {
				if (! special.teardown ||
					special.teardown.call (elem, 네임 스페이스, elemData.handle) === false) {

					jQuery.removeEvent (elem, type, elemData.handle);
				}

				이벤트 삭제 [type];
			}
		}

		// 더 이상 사용되지 않는 데이터 및 확장을 제거합니다.
		if (jQuery.isEmptyObject (events)) {
			dataPriv.remove (요소, "핸들 이벤트");
		}
	},

	디스패치 : function (nativeEvent) {

		// 네이티브 이벤트 객체에서 쓰기 가능한 jQuery.Event를 만듭니다.
		var event = jQuery.event.fix (nativeEvent);

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array (arguments.length),
			처리기 = (dataPriv.get (this, "events") || {}) [event.type] || [],
			special = jQuery.event.special [event.type] || {};

		// (읽기 전용) 기본 이벤트 대신 수정 된 jQuery.Event를 사용하십시오.
		인수 [0] = 이벤트;

		for (i = 1; i <arguments.length; i ++) {
			인수 [i] = 인수 [i];
		}

		event.delegateTarget = 이것;

		// 매핑 된 유형에 대해 preDispatch 훅을 호출하고 원하는 경우 구제합니다.
		if (special.preDispatch && special.preDispatch.call (this, event) === false) {
			반환;
		}

		// 핸들러 결정
		handlerQueue = jQuery.event.handlers.call (this, event, handlers);

		// 델리게이트를 먼저 실행합니다. 그들은 우리 아래에서 전파를 멈추고 싶을 수도 있습니다.
		i = 0;
		while ((matched = handlerQueue [i ++]) &&! event.isPropagationStopped ()) {
			event.currentTarget = matched.elem;

			j = 0;
			while ((handleObj = matched.handlers [j ++]) &&
				! event.isImmediatePropagationStopped ()) {

				// 이벤트가 네임 스페이스 인 경우 각 핸들러는 다음과 같은 경우에만 호출됩니다.
				// 특별히 보편적이거나 네임 스페이스는 이벤트의 상위 집합입니다.
				if (! event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test (handleObj.namespace)) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ((jQuery.event.special [handleObj.origType] || {}) .handle ||
						handleObj.handler) .apply (matched.elem, args);

					if (ret! == undefined) {
						if ((event.result = ret) === false) {
							event.preventDefault ();
							event.stopPropagation ();
						}
					}
				}
			}
		}

		// 매핑 된 유형에 대해 postDispatch 후크를 호출합니다.
		if (special.postDispatch) {
			special.postDispatch.call (this, event);
		}

		return event.result;
	},

	핸들러 : function (event, handlers) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// 델리게이트 핸들러 찾기
		if (delegateCount &&

			// 지원 : IE <= 9
			// 블랙홀 SVG <사용> 인스턴스 트리 (trac-13180)
			cur.nodeType &&

			// 지원 : Firefox <= 42
			// 기본이 아닌 포인터 버튼을 나타내는 사양 위반 클릭 억제 (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// 지원 : IE 11 만
			// ... 단추 키는 라디오 입력을 "클릭"하지 않으며`button` -1 (gh-2343)을 가질 수 있습니다
			! (event.type === "클릭"&& event.button> = 1)) {

			for (; cur! == this; cur = cur.parentNode || this) {

				// 비 요소를 확인하지 않음 (# 13208)
				// 비활성화 된 요소에 대한 클릭을 처리하지 않습니다 (# 6911, # 8165, # 11382, # 11764)
				if (cur.nodeType === 1 &&! (event.type === "click"&& cur.disabled === true)) {
					matchedHandlers = [];
					matchedSelectors = {};
					for (i = 0; i <delegateCount; i ++) {
						handleObj = 핸들러 [i];

						// Object.prototype 속성과 충돌하지 않습니다 (# 13203)
						sel = handleObj.selector + "";

						if (matchedSelectors [sel] === undefined) {
							matchedSelectors [sel] = handleObj.needsContext?
								jQuery (sel, this) .index (cur)> -1 :
								jQuery.find (sel, this, null, [cur]) .length;
						}
						if (matchedSelectors [sel]) {
							matchedHandlers.push (handleObj);
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push ({요소 : cur, 핸들러 : matchedHandlers});
					}
				}
			}
		}

		// 나머지 (직접 바인딩 된) 핸들러 추가
		cur = 이것;
		if (delegateCount <handlers.length) {
			handlerQueue.push ({요소 : cur, 핸들러 : handlers.slice (delegateCount)});
		}

		return handlerQueue;
	},

	addProp : 함수 (이름, 후크) {
		Object.defineProperty (jQuery.Event.prototype, 이름, {
			열거 가능 : true,
			구성 가능 : true,

			get : isFunction (후크)?
				함수 () {
					if (this.originalEvent) {
							리턴 훅 (this.originalEvent);
					}
				} :
				함수 () {
					if (this.originalEvent) {
							이것을 돌려줍니다 .originalEvent [name];
					}
				},

			설정 : function (value) {
				Object.defineProperty (this, name, {
					열거 가능 : true,
					구성 가능 : true,
					쓰기 가능 : true,
					값 : 값
				});
			}
		});
	},

	수정 : function (originalEvent) {
		originalEvent [jQuery.expando]를 반환 하시겠습니까?
			originalEvent :
			새로운 jQuery.Event (originalEvent);
	},

	특별 : {
		로드 : {

			// 트리거 된 image.load 이벤트가 버블 링되지 않도록합니다.
			거품 : 참
		},
		클릭 : {

			// 확인 가능한 입력의 올바른 상태를 보장하기 위해 기본 이벤트 활용
			설정 : 기능 (데이터) {

				// _default와의 상호 압축성을 위해`this` 액세스를 로컬 var로 바꿉니다.
				//`|| 데이터는 최소화를 통해 변수를 보존하기위한 데드 코드입니다.
				var el = this || 데이터;

				// 첫 번째 핸들러 주장
				if (rcheckableType.test (el.type) &&
					el.click && nodeName (el, "input")) {

					// dataPriv.set (el, "클릭", ...)
					leverNative (el, "click", returnTrue);
				}

				// 호출자의 정상적인 처리를 허용하려면 false를 반환합니다.
				거짓을 반환;
			},
			트리거 : function (data) {

				// _default와의 상호 압축성을 위해`this` 액세스를 로컬 var로 바꿉니다.
				//`|| 데이터는 최소화를 통해 변수를 보존하기위한 데드 코드입니다.
				var el = this || 데이터;

				// 클릭을 트리거하기 전에 강제 설정
				if (rcheckableType.test (el.type) &&
					el.click && nodeName (el, "input")) {

					leverNative (el, "click");
				}

				// 정상적인 이벤트 경로 전파를 허용하기 위해 false가 아닌 값을 반환
				true를 반환;
			},

			// 브라우저 간 일관성을 유지하려면 링크에서 기본 .click ()을 억제하십시오.
			// 현재 활용되는 기본 이벤트 스택 내에있는 경우에도이를 방지합니다.
			_default : 함수 (이벤트) {
				var target = event.target;
				rcheckableType.test (target.type) && 리턴
					target.click && nodeName (target, "input") &&을 클릭하십시오.
					dataPriv.get (대상, "클릭") ||
					nodeName (대상, "a");
			}
		},

		beforeunload : {
			postDispatch : 함수 (이벤트) {

				// 지원 : Firefox 20 이상
				// returnValue 필드가 설정되어 있지 않으면 Firefox는 경고하지 않습니다.
				if (event.result! == undefined && event.originalEvent) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// 수동 트리거를 처리하는 이벤트 리스너가 있는지 확인
// 다음에 대한 응답으로 다시 호출 될 때까지 진행을 중단하여 합성 이벤트
// * native * 이벤트가 직접 발생하여 상태 변경이
// 다른 리스너가 호출되기 전에 이미 발생했습니다.
함수 leverNative (el, type, expectSync) {

	// expectSync가 없으면 jQuery.event.add를 통해 강제로 설정해야하는 트리거 호출을 나타냅니다.
	if (! expectSync) {
		if (dataPriv.get (el, type) === undefined) {
			jQuery.event.add (el, type, returnTrue);
		}
		반환;
	}

	// 모든 이벤트 네임 스페이스에 대한 컨트롤러를 특수 범용 핸들러로 등록
	dataPriv.set (el, type, false);
	jQuery.event.add (엘, 타입, {
		네임 스페이스 : false,
		핸들러 : function (event) {
			var notAsync, 결과,
				saved = dataPriv.get (this, type);

			if ((event.isTrigger & 1) && this [type]) {

				// 외부 합성 .trigger () ed 이벤트의 인터럽트 처리
				// 이러한 경우 저장된 데이터는 거짓이어야하지만 남은 캡처 개체 일 수 있습니다.
				// 비동기 네이티브 핸들러 (gh-4350)
				if (! saved.length) {

					// 내부 네이티브 이벤트를 처리 할 때 사용할 인수를 저장합니다.
					// 항상 하나 이상의 인수 (이벤트 객체)가 있으므로이 배열
					// 남은 캡처 객체와 혼동되지 않습니다.
					saved = slice.call (arguments);
					dataPriv.set (this, type, saved);

					// 기본 이벤트를 트리거하고 결과를 캡처합니다.
					// 지원 : IE <= 9-11+
					// focus ()와 blur ()는 비동기입니다
					notAsync = expectSync (this, type);
					이 유형 ]();
					결과 = dataPriv.get (this, type);
					if (saved! == result || notAsync) {
						dataPriv.set (this, type, false);
					} else {
						결과 = {};
					}
					if (saved! == result) {

						// 외부 합성 이벤트 취소
						event.stopImmediatePropagation ();
						event.preventDefault ();
						결과 반환. 값;
					}

				// 버블 링 대리가있는 이벤트의 내부 합성 이벤트 인 경우
				// (초점 또는 흐림), 대리자가 이미
				// 네이티브 이벤트이며 여기에서 다시 발생하지 않습니다.
				// 이것은 기술적으로`.trigger ()`에 잘못된 wrt 순서를 얻습니다.
				// 버블 링 대리가 버블 링이 아닌베이스를 * after * 전파합니다.)
				// 복제보다 나쁘지 않습니다.
				} else if ((jQuery.event.special [type] || {}) .delegateType) {
					event.stopPropagation ();
				}

			// 위에서 발생한 기본 이벤트 인 경우 모든 것이 순서대로 진행됩니다.
			// 원래 인수로 내부 합성 이벤트를 시작합니다.
			} else if (saved.length) {

				// ... 결과를 캡처
				dataPriv.set (this, type, {
					값 : jQuery.event.trigger (

						// 지원 : IE <= 9-11+
						// 위의 stopImmediatePropagation ()을 재설정하기 위해 프로토 타입으로 확장
						jQuery.extend (saved [0], jQuery.Event.prototype),
						saved.slice (1),
						이
					)
				});

				// 네이티브 이벤트 처리 중단
				event.stopImmediatePropagation ();
			}
		}
	});
}

jQuery.removeEvent = 함수 (요소, 유형, 핸들) {

	//이 "if"는 일반 객체에 필요합니다
	if (elem.removeEventListener) {
		elem.removeEventListener (type, handle);
	}
};

jQuery.Event = 함수 (src, props) {

	// 'new'키워드없이 인스턴스화 허용
	if (! (이 인스턴스는 jQuery.Event)) {
		새로운 jQuery.Event (src, props);
	}

	// 이벤트 객체
	if (src && src.type) {
		this.originalEvent = src;
		this.type = src.type;

		// 문서를 버블 링하는 이벤트가 방지 됨으로 표시되었을 수 있습니다.
		// 처리기에 의해 트리 아래로 내려 가기; 올바른 값을 반영하십시오.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === 정의되지 않은 &&

				// 지원 : Android <= 2.3 만
				src.returnValue === 거짓?
			returnTrue :
			returnFalse;

		// 대상 속성 만들기
		// 지원 : Safari <= 6-7 만
		// 대상은 텍스트 노드가 아니어야합니다 (# 504, # 13143)
		this.target = (src.target && src.target.nodeType === 3)?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// 이벤트 유형
	} else {
		this.type = src;
	}

	// 명시 적으로 제공된 속성을 이벤트 객체에 넣습니다.
	if (props) {
		jQuery.extend (this, props);
	}

	// 들어오는 이벤트에 타임 스탬프가 없으면 타임 스탬프를 만듭니다.
	this.timeStamp = src && src.timeStamp || Date.now ();

	// 고정 된 것으로 표시
	this [jQuery.expando] = true;
};

// jQuery.Event는 ECMAScript 언어 바인딩에 지정된 DOM3 이벤트를 기반으로합니다.
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	생성자 : jQuery.Event,
	isDefaultPrevented : returnFalse,
	isPropagationStopped : returnFalse,
	isImmediatePropagationStopped : returnFalse,
	isSimulated : 거짓,

	preventDefault : 함수 () {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if (e &&! this.isSimulated) {
			e.preventDefault ();
		}
	},
	stopPropagation : 함수 () {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopPropagation ();
		}
	},
	stopImmediatePropagation : 함수 () {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if (e &&! this.isSimulated) {
			e.stopImmediatePropagation ();
		}

		this.stopPropagation ();
	}
};

// KeyEvent 및 MouseEvent 관련 소품을 포함한 모든 일반적인 이벤트 소품을 포함합니다.
jQuery.each ({
	altKey : true,
	거품 : 사실,
	취소 가능 : true,
	changedTouches : true,
	ctrlKey : true,
	세부 사항 : true,
	eventPhase : true,
	메타 키 : true,
	pageX : true,
	pageY : 참,
	shiftKey : true,
	보기 : 사실,
	"char": 사실입니다.
	코드 : true,
	charCode : true,
	키 : 참,
	키 코드 : true,
	버튼 : true,
	버튼 : true,
	clientX : 참,
	clientY : 그렇습니다
	offsetX : 참,
	오프셋 Y : true,
	pointerId : true,
	pointerType : true,
	screenX : 참,
	screenY : 참,
	targetTouches : true,
	toElement : true,
	접촉 : 사실,

	함수 : event () {
		var button = event.button;

		// 주요 이벤트를위한 추가
		if (event.which == null && rkeyEvent.test (event.type)) {
			return event.charCode! = null? event.charCode : event.keyCode;
		}

		// 클릭 할 항목 추가 : 1 === left; 2 === 중간; 3 === 맞다
		if (! event.which && button! == undefined && rmouseEvent.test (event.type)) {
			if (버튼 & 1) {
				리턴 1;
			}

			if (버튼 & 2) {
				리턴 3;
			}

			if (버튼 & 4) {
				리턴 2;
			}

			리턴 0;
		}

		이벤트 반환.
	}
}, jQuery.event.addProp);

jQuery.each ({focus : "focusin", blur : "focusout"}, function (type, delegateType) {
	jQuery.event.special [type] = {

		// 가능한 경우 기본 이벤트를 사용하므로 흐림 / 포커스 시퀀스가 ​​정확합니다.
		설정 : function () {

			// 첫 번째 핸들러 주장
			// dataPriv.set (this, "focus", ...)
			// dataPriv.set (this, "blur", ...)
			leverNative (this, type, expectSync);

			// 호출자의 정상적인 처리를 허용하려면 false를 반환합니다.
			거짓을 반환;
		},
		트리거 : function () {

			// 트리거 전에 강제 설정
			leverNative (this, type);

			// 정상적인 이벤트 경로 전파를 허용하기 위해 false가 아닌 값을 반환
			true를 반환;
		},

		delegateType : delegateType
	};
});

// mouseover / out 및 이벤트 시간 확인을 사용하여 mouseenter / leave 이벤트 생성
// 이벤트 위임이 jQuery에서 작동하도록합니다.
// pointerenter / pointerleave 및 pointerover / pointerout에 대해서도 동일하게 수행하십시오.
//
// 지원 : Safari 7 만
// Safari는 마우스를 너무 자주 보냅니다. 만나다:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// 버그에 대한 설명은 이전 Chrome 버전에도 존재합니다.
jQuery.each ({
	mouseenter : "마우스 오버",
	mouseleave : "마우스 아웃",
	pointerenter : "포인터 오버",
	pointerleave : "포인터 아웃"
}, 함수 (orig, fix) {
	jQuery.event.special [orig] = {
		delegateType : 수정,
		bindType : 수정,

		핸들 : function (event) {
			var ret,
				목표 = 이것,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// mouseenter / leave의 경우 관련이 대상 외부에 있으면 핸들러를 호출하십시오.
			// NB : 마우스가 브라우저 창을 떠났거나 입력 한 경우 관련 대상 없음
			if (! related || (related! == target &&! jQuery.contains (target, related))) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply (this, arguments);
				event.type = 수정;
			}
			리트 윗을 반환;
		}
	};
});

jQuery.fn.extend ({

	켜기 : 기능 (유형, 선택기, 데이터, fn) {
		return on (this, 유형, 선택기, 데이터, fn);
	},
	하나 : function (유형, 선택기, 데이터, fn) {
		return on (this, 유형, 선택기, 데이터, fn, 1);
	},
	꺼짐 : 기능 (유형, 선택기, fn) {
		var handleObj, 타입;
		if (types && types.preventDefault && types.handleObj) {

			// (이벤트)가 jQuery.Event를 전달했습니다.
			handleObj = 유형 .handleObj;
			jQuery (types.delegateTarget) .off (
				handleObj.namespace?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			이것을 돌려줍니다;
		}
		if (typeof types === "object") {

			// (types-object [, selector])
			for (유형) {
				this.off (유형, 선택기, 유형 [유형]);
			}
			이것을 돌려줍니다;
		}
		if (selector === false || typeof selector === "function") {

			// (유형 [, fn])
			fn = 선택기;
			선택기 = 정의되지 않음;
		}
		if (fn === false) {
			fn = returnFalse;
		}
		이것을 돌려줍니다 .each (function () {
			jQuery.event.remove (this, types, fn, selector);
		});
	}
});


var

	/ * eslint-disable max-len * /

	// https://github.com/eslint/eslint/issues/3229 참조
	rxhtmlTag = / <(?! area | br | col | embed | hr | img | input | link | meta | param) (([az] [^ \ / \ 0> \ x20 \ t \ r \ n \ f] *) [^>] *) \ /> / gi,

	/ * eslint 활성화 * /

	// 지원 : IE <= 10-11, Edge 12-13 만
	// 정규식 그룹을 사용하는 IE / Edge에서는 심각한 속도 저하가 발생합니다.
	// https://connect.microsoft.com/IE/feedback/details/1736512/ 참조
	rnoInnerhtml = / <스크립트 | <스타일 | <링크 / i,

	// checked = "checked"또는 checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = / ^ \ s * <! (? : \ [CDATA \ [|-) | (? : \] \] |-)> \ s * $ / g;

// 새 행을 포함하기 위해 상위 테이블보다 tbody를 선호합니다.
함수 조작 Target (elem, content) {
	if (nodeName (elem, "table") &&
		nodeName (content.nodeType! == 11? content : content.firstChild, "tr")) {

		jQuery (elem) .children ( "tbody") [0] ||를 반환합니다. 엘렘;
	}

	귀환 엘렘;
}

// 안전한 DOM 조작을 위해 스크립트 요소의 type 속성 바꾸기 / 복원
기능 disableScript (elem) {
	elem.type = (elem.getAttribute ( "type")! == null) + "/"+ elem.type;
	귀환 엘렘;
}
기능 restoreScript (elem) {
	if ((elem.type || "") .slice (0, 5) === "true /") {
		elem.type = elem.type.slice (5);
	} else {
		elem.removeAttribute ( "type");
	}

	귀환 엘렘;
}

함수 cloneCopyEvent (src, dest) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, 이벤트;

	if (dest.nodeType! == 1) {
		반환;
	}

	// 1. 개인 데이터 복사 : 이벤트, 핸들러 등
	if (dataPriv.hasData (src)) {
		pdataOld = dataPriv.access (src);
		pdataCur = dataPriv.set (대상, pdataOld);
		events = pdataOld.events;

		if (events) {
			pdataCur.handle을 삭제하십시오.
			pdataCur.events = {};

			for (이벤트 유형) {
				for (i = 0, l = events [type] .length; i <l; i ++) {
					jQuery.event.add (대상, 유형, 이벤트 [type] [i]);
				}
			}
		}
	}

	// 2. 사용자 데이터 복사
	if (dataUser.hasData (src)) {
		udataOld = dataUser.access (src);
		udataCur = jQuery.extend ({}, udataOld);

		dataUser.set (dest, udataCur);
	}
}

// IE 버그 수정, 지원 테스트 참조
함수 fixInput (src, dest) {
	var nodeName = dest.nodeName.toLowerCase ();

	// 복제 된 확인란 또는 라디오 버튼의 확인 된 상태를 유지하지 못합니다.
	if (nodeName === "input"&& rcheckableType.test (src.type)) {
		dest.checked = src.checked;

	// 옵션 복제시 선택한 옵션을 기본 선택된 상태로 되 돌리지 못함
	} else if (nodeName === "입력"|| nodeName === "textarea") {
		dest.defaultValue = src.defaultValue;
	}
}

함수 domManip (수집, 인수, 콜백, 무시 됨) {

	// 중첩 배열을 병합
	args = concat.apply ([], args);

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l-1,
		값 = args [0],
		valueIsFunction = isFunction (값);

	// WebKit에서 checked가 포함 된 노드 조각을 복제 할 수 없습니다
	if (valueIsFunction ||
			(l> 1 && typeof value === "문자열"&&
				! support.checkClone && rchecked.test (value))) {
		return collection.each (함수 (인덱스) {
			var self = collection.eq (index);
			if (valueIsFunction) {
				args [0] = value.call (this, index, self.html ());
			}
			domManip (자체, 인수, 콜백, 무시 됨);
		});
	}

	if (l) {
		fragment = buildFragment (args, collection [0] .ownerDocument, false, 수집, 무시 됨);
		first = fragment.firstChild;

		if (fragment.childNodes.length === 1) {
			조각 = 첫 번째;
		}

		// 콜백을 호출하려면 새로운 내용 또는 무시 된 요소에 대한 관심이 필요합니다.
		if (first || ignore) {
			스크립트 = jQuery.map (getAll (fragment, "script"), disableScript);
			hasScripts = scripts.length;

			// 마지막 항목에 원래 조각 사용
			// 결국 첫 번째 대신
			// 특정 상황에서 잘못 비워짐 (# 8070).
			for (; i <l; i ++) {
				노드 = 조각;

				if (i! == iNoClone) {
					node = jQuery.clone (노드, true, true);

					// 나중에 복원 할 수 있도록 복제 된 스크립트에 대한 참조 유지
					if (hasScripts) {

						// 지원 : Android <= 4.0 만, PhantomJS 1 만
						// 고대 WebKit에서 push.apply (_, arraylike)가 발생합니다.
						jQuery.merge (스크립트, getAll (노드, "스크립트"));
					}
				}

				callback.call (collection [i], node, i);
			}

			if (hasScripts) {
				doc = scripts [scripts.length-1] .ownerDocument;

				// 스크립트 재 활성화
				jQuery.map (스크립트, restoreScript);

				// 첫 번째 문서 삽입시 실행 가능한 스크립트 평가
				for (i = 0; i <hasScripts; i ++) {
					노드 = 스크립트 [i];
					if (rscriptType.test (node.type || "") &&
						! dataPriv.access (노드, "globalEval") &&
						jQuery.contains (doc, node)) {

						if (node.src && (node.type || "") .toLowerCase ()! == "module") {

							// 선택적 AJAX 종속성이지만 존재하지 않으면 스크립트를 실행하지 않습니다.
							if (jQuery._evalUrl &&! node.noModule) {
								jQuery._evalUrl (node.src, {
									nonce : node.nonce || node.getAttribute ( "nonce")
								});
							}
						} else {
							DOMEval (node.textContent.replace (rcleanScript, ""), node, doc);
						}
					}
				}
			}
		}
	}

	반품 회수;
}

함수 remove (elem, selector, keepData) {
	var 노드,
		노드 = 선택기? jQuery.filter (selector, elem) : elem,
		i = 0;

	for (; (node ​​= nodes [i])! = null; i ++) {
		if (! keepData && node.nodeType === 1) {
			jQuery.cleanData (getAll (node));
		}

		if (node.parentNode) {
			if (keepData && isAttached (node)) {
				setGlobalEval (getAll (node, "script"));
			}
			node.parentNode.removeChild (노드);
		}
	}

	귀환 엘렘;
}

jQuery.extend ({
	htmlPrefilter : function (html) {
		return html.replace (rxhtmlTag, "<$ 1> </ $ 2>");
	},

	복제 : function (elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode (true),
			inPage = isAttached (요소);

		// IE 복제 문제 해결
		if (! support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
				! jQuery.isXMLDoc (elem) {

			// 성능상의 이유로 Sizzle를 피하십시오 : https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll (클론);
			srcElements = getAll (요소);

			for (i = 0, l = srcElements.length; i <l; i ++) {
				fixInput (srcElements [i], destElements [i]);
			}
		}

		// 원본에서 복제본으로 이벤트를 복사
		if (dataAndEvents) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll (요소);
				destElements = destElements || getAll (클론);

				for (i = 0, l = srcElements.length; i <l; i ++) {
					cloneCopyEvent (srcElements [i], destElements [i]);
				}
			} else {
				cloneCopyEvent (요소, 복제);
			}
		}

		// 스크립트 평가 기록 유지
		destElements = getAll (클론, "스크립트");
		if (destElements.length> 0) {
			setGlobalEval (destElements,! inPage && getAll (elem, "script"));
		}

		// 복제 된 세트를 반환
		리턴 클론;
	},

	cleanData : 함수 (요소) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for (; (elem = elems [i])! == undefined; i ++) {
			if (acceptData (elem)) {
				if ((data = elem [dataPriv.expando])) {
					if (data.events) {
						for (data.events 유형) {
							if (special [type]) {
								jQuery.event.remove (요소, 유형);

							// jQuery.event.remove의 오버 헤드를 피하기위한 바로 가기입니다.
							} else {
								jQuery.removeEvent (요소, 유형, data.handle);
							}
						}
					}

					// 지원 : Chrome <= 35-45+
					// delete를 사용하는 대신 undefined를 지정합니다. Data # remove를 참조하십시오.
					elem [dataPriv.expando] = 정의되지 않음;
				}
				if (elem [dataUser.expando]) {

					// 지원 : Chrome <= 35-45+
					// delete를 사용하는 대신 undefined를 지정합니다. Data # remove를 참조하십시오.
					elem [dataUser.expando] = 정의되지 않음;
				}
			}
		}
	}
});

jQuery.fn.extend ({
	분리 : 기능 (선택기) {
		return remove (this, selector, true);
	},

	제거 : function (selector) {
		return remove (this, selector);
	},

	텍스트 : function (value) {
		액세스 리턴 (this, function (value) {
			반환 값 === undefined?
				jQuery.text (this) :
				this.empty (). each (function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = 값;
					}
				});
		}, null, 값, arguments.length);
	},

	추가 : function () {
		return domManip (this, arguments, function (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = 조작 대상 (this, elem);
				target.appendChild (elem);
			}
		});
	},

	접두사 : function () {
		return domManip (this, arguments, function (elem) {
			if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				var target = 조작 대상 (this, elem);
				target.insertBefore (elem, target.firstChild);
			}
		});
	},

	이전 : function () {
		return domManip (this, arguments, function (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this);
			}
		});
	},

	이후 : function () {
		return domManip (this, arguments, function (elem) {
			if (this.parentNode) {
				this.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	비어 있음 : function () {
		var elem,
			i = 0;

		for (; (elem = this [i])! = null; i ++) {
			if (elem.nodeType === 1) {

				// 메모리 누수 방지
				jQuery.cleanData (getAll (elem, false));

				// 나머지 노드를 제거
				elem.textContent = "";
			}
		}

		이것을 돌려줍니다;
	},

	복제 : function (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null입니까? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null입니까? dataAndEvents : deepDataAndEvents;

		this.map (함수 ()를 반환 {
			jQuery.clone (this, dataAndEvents, deepDataAndEvents)을 반환합니다.
		});
	},

	html : 함수 (값) {
		액세스 리턴 (this, function (value) {
			var elem = this [0] || {},
				i = 0,
				l = this.length;

			if (value === undefined && elem.nodeType === 1) {
				elem.innerHTML을 반환;
			}

			// 바로 가기를 사용할 수 있고 innerHTML 만 사용할 수 있는지 확인
			if (typeof value === "string"&&! rnoInnerhtml.test (value) &&
				! wrapMap [(rtagName.exec (value) || [ "", ""]) [1] .toLowerCase ()]) {

				value = jQuery.htmlPrefilter (value);

				{
					for (; i <l; i ++) {
						elem = this [i] || {};

						// 요소 노드를 제거하고 메모리 누수 방지
						if (elem.nodeType === 1) {
							jQuery.cleanData (getAll (elem, false));
							elem.innerHTML = 값;
						}
					}

					요소 = 0;

				// innerHTML을 사용하여 예외가 발생하면 대체 방법을 사용합니다.
				} catch (e) {}
			}

			if (elem) {
				this.empty (). append (value);
			}
		}, null, 값, arguments.length);
	},

	replaceWith : 함수 () {
		var 무시 = [];

		// 무시되지 않은 각 컨텍스트 요소를 새 컨텐츠로 대체하여 변경하십시오.
		return domManip (this, arguments, function (elem) {
			var parent = this.parentNode;

			if (jQuery.inArray (this, ignore) <0) {
				jQuery.cleanData (getAll (this));
				if (parent) {
					parent.replaceChild (elem, this);
				}
			}

		// 강제 콜백 호출
		}, 무시);
	}
});

jQuery.each ({
	appendTo : "추가",
	prependTo : "prepend",
	insertBefore : "전에 ",
	insertAfter : "후",
	replaceAll : "replaceWith"
}, 함수 (이름, 원본) {
	jQuery.fn [이름] = 함수 (선택기) {
		var elems,
			ret = [],
			insert = jQuery (selector),
			마지막 = insert.length-1,
			i = 0;

		for (; i <= last; i ++) {
			elems = i === 마지막? this : this.clone (true);
			jQuery (삽입 [i]) [원본] (요소);

			// 지원 : Android <= 4.0 만, PhantomJS 1 만
			// push.apply (_, arraylike)가 고대 WebKit에서 발생하기 때문에 .get ()
			push.apply (ret, elems.get ());
		}

		이것을 돌려줍니다. pushStack (ret);
	};
});
var rnumnonpx = 새로운 RegExp ( "^ ("+ pnum + ") (?! px) [az %] + $", "i");

var getStyles = 함수 (elem) {

		// 지원 : IE <= 11 만, Firefox <= 30 (# 15098, # 14150)
		// IE는 팝업에서 생성 된 요소를 던집니다.
		// FF는 "defaultView.getComputedStyle"을 통해 프레임 요소를 던집니다.
		var view = elem.ownerDocument.defaultView;

		if (! view ||! view.opener) {
			보기 = 창;
		}

		return view.getComputedStyle (elem);
	};

var rboxStyle = new RegExp (cssExpand.join ( "|"), "i");



(함수 () {

	// pixelPosition과 boxSizingReliable 테스트를 모두 실행하려면 레이아웃이 하나만 필요합니다.
	// 두 번째 계산을 저장하기 위해 동시에 실행됩니다.
	함수 computeStyleTests () {

		// 싱글 톤이므로 한 번만 실행하면됩니다.
		if (! div) {
			반환;
		}

		container.style.cssText = "position : absolute; left : -11111px; width : 60px;" +
			"margin-top : 1px; padding : 0; border : 0";
		div.style.cssText =
			"position : relative; display : block; box-sizing : border-box; overflow : scroll;" +
			"여백 : 자동; 테두리 : 1px; 패딩 : 1px;" +
			"너비 : 60 %; 상단 : 1 %";
		documentElement.appendChild (컨테이너) .appendChild (div);

		var divStyle = window.getComputedStyle (div);
		pixelPositionVal = divStyle.top! == "1 %";

		// 지원 : Android 4.0-4.3 만, Firefox <= 3-44
		trustedMarginLeftVal = roundPixelMeasures (divStyle.marginLeft) === 12;

		// 지원 : Android 4.0-4.3 만, Safari <= 9.1-10.1, iOS <= 7.0-9.3
		// 일부 스타일은 그렇지 않아도 백분율 값으로 돌아옵니다.
		div.style.right = "60 %";
		pixelBoxStylesVal = roundPixelMeasures (divStyle.right) === 36;

		// 지원 : IE 9-11 만
		// box-sizing : border-box 요소의 내용 크기에 대한 오보를 탐지합니다.
		boxSizingReliableVal = roundPixelMeasures (divStyle.width) === 36;

		// 지원 : IE 9 만
		// 오버플로 감지 : 스크롤 스크류 (gh-3699)
		// 지원 : Chrome <= 64
		// 확대 / 축소가 offsetWidth (gh-4029)에 영향을 줄 때 속지 마십시오
		div.style.position = "절대";
		scrollboxSizeVal = roundPixelMeasures (div.offsetWidth / 3) === 12;

		documentElement.removeChild (컨테이너);

		// 메모리에 저장되지 않도록 div를 무효화하고
		// 이미 수행 한 확인 표시이기도합니다.
		div = 널;
	}

	함수 roundPixelMeasures (measure) {
		반환 Math.round (parseFloat (measure));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		신뢰할 수있는 MarginLeftVal,
		container = document.createElement ( "div"),
		div = document.createElement ( "div");

	// 브라우저가 아닌 제한된 환경에서 일찍 완료
	if (! div.style) {
		반환;
	}

	// 지원 : IE <= 9-11 만
	// 복제 된 요소 스타일이 복제 된 소스 요소에 영향을줍니다 (# 8908)
	div.style.backgroundClip = "컨텐츠 박스";
	div.cloneNode (true) .style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "컨텐츠 박스";

	jQuery.extend (지원, {
		boxSizingReliable : 함수 () {
			computeStyleTests ();
			반환 상자 SizingReliableVal;
		},
		pixelBoxStyles : 함수 () {
			computeStyleTests ();
			pixelBoxStylesVal을 반환합니다.
		},
		pixelPosition : 함수 () {
			computeStyleTests ();
			pixelPositionVal을 반환합니다.
		},
		trustedMarginLeft : 함수 () {
			computeStyleTests ();
			신뢰할 수있는 반환 MarginLeftVal;
		},
		scrollboxSize : 함수 () {
			computeStyleTests ();
			return scrollboxSizeVal;
		}
	});
}) ();


curCSS 함수 (요소, 이름, 계산 된) {
	var width, minWidth, maxWidth, ret,

		// 지원 : Firefox 51 이상
		// 어떻게 든 계산하기 전에 스타일 검색
		// 잘못된 값을 얻는 문제 수정
		// 분리 된 요소
		스타일 = elem.style;

	계산 = 계산 || getStyles (elem);

	// getPropertyValue가 필요합니다 :
	// .css ( 'filter') (IE 9 만 해당, # 12537)
	// .css ( '-customProperty) (# 3144)
	if (계산 된) {
		ret = computed.getPropertyValue (name) || 계산 [이름];

		if (ret === ""&&! isAttached (elem)) {
			ret = jQuery.style (요소, 이름);
		}

		// "Dean Edwards의 멋진 해킹"에 대한 찬사
		// Android 브라우저는 일부 값에 대한 백분율을 반환합니다.
		// 너비는 확실히 픽셀 인 것 같습니다.
		// 이것은 CSSOM 초안 사양에 위배됩니다.
		// https://drafts.csswg.org/cssom/#resolved-values
		if (! support.pixelBoxStyles () && rnumnonpx.test (ret) && rboxStyle.test (name)) {

			// 원래 값을 기억
			너비 = style.width;
			minWidth = style.minWidth;
			maxWidth = 스타일 .maxWidth;

			// 계산 된 값을 얻기 위해 새로운 값을 넣습니다.
			style.minWidth = style.maxWidth = style.width = ret;
			ret = 계산 된 폭;

			// 변경된 값 되돌리기
			style.width = 너비;
			style.minWidth = 최소 너비;
			style.maxWidth = maxWidth;
		}
	}

	return ret! == undefined?

		// 지원 : IE <= 9-11 만
		// IE는 zIndex 값을 정수로 반환합니다.
		ret + "":
		리트;
}


addGetHookIf (conditionFn, hookFn) 함수 {

	// 후크를 정의합니다. 첫 실행이 실제로 필요한지 확인합니다.
	{
		get : function () {
			if (conditionFn ()) {

				// 후크가 필요하지 않습니다 (또는 기한이 지남에 따라 사용할 수 없습니다)
				// 종속성이없는 경우 제거하십시오.
				this.get을 삭제하십시오.
				반환;
			}

			// 후크가 필요합니다. 지원 테스트가 다시 실행되지 않도록 재정의하십시오.
			return (this.get = hookFn) .apply (this, arguments);
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms"],
	emptyStyle = document.createElement ( "div") .style,
	vendorProps = {};

// 공급 업체 접두사 속성 또는 정의되지 않은 속성 반환
함수 vendorPropName (name) {

	// 공급 업체 접두사 이름 확인
	var capName = name [0] .toUpperCase () + name.slice (1),
		i = cssPrefixes.length;

	while (i--) {
		이름 = cssPrefixes [i] + capName;
		if (emptyStyle의 이름) {
			반환 이름;
		}
	}
}

// 잠재적으로 매핑 된 jQuery.cssProps 또는 공급 업체 접두사 속성을 반환
finalPropName (이름) {
	var final = jQuery.cssProps [이름] || vendorProps [이름];

	if (final) {
		최종 반환;
	}
	if (emptyStyle의 이름) {
		반환 이름;
	}
	return vendorProps [name] = vendorPropName (이름) || 이름;
}


var

	// 디스플레이가 없거나 테이블로 시작하면 스왑 가능
	// "table", "table-cell"또는 "table-caption"제외
	// 표시 값은 여기를 참조하십시오 : https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = / ^ (없음 | 테이블 (?!-c [ea]). +) /,
	rcustomProp = / ^-/,
	cssShow = {위치 : "절대", 가시성 : "숨김", 표시 : "블록"},
	cssNormalTransform = {
		letterSpacing : "0",
		fontWeight : "400"
	};

함수 setPositiveNumber (요소, 값, 빼기) {

	// 모든 상대 (+/-) 값은 이미
	//이 시점에서 정규화
	var match = rcssNum.exec (value);
	리턴 매치?

		// 예를 들어 cssHooks에서 사용될 때 정의되지 않은 "빼기"로부터 보호
		Math.max (0, matches [2]-(빼기 || 0)) + (matches [3] || "px") :
		값;
}

function boxModelAdjustment (요소, 차원, 상자, isBorderBox, 스타일, computedVal) {
	var i = dimension === "width"? 1 : 0,
		추가 = 0,
		델타 = 0;

	// 조정이 필요하지 않을 수 있습니다
	if (box === (isBorderBox? "border": "content")) {
		리턴 0;
	}

	(; i <4; i + = 2) {

		// 두 박스 모델 모두 마진을 제외
		if (box === "margin") {
			델타 + = jQuery.css (elem, box + cssExpand [i], true, styles);
		}

		// 컨텐츠 박스를 가지고 오면 "패딩"또는 "테두리"또는 "여백"을 찾고 있습니다
		if (! isBorderBox) {

			// 패딩 추가
			델타 + = jQuery.css (elem, "padding"+ cssExpand [i], true, styles);

			// "테두리"또는 "여백"에 테두리를 추가합니다
			if (box! == "padding") {
				델타 + = jQuery.css (elem, "border"+ cssExpand [i] + "Width", true, styles);

			// 그러나 그렇지 않으면 여전히 추적
			} else {
				추가 + = jQuery.css (요소, "테두리"+ cssExpand [i] + "너비", 참, 스타일);
			}

		// 테두리 상자 (콘텐츠 + 패딩 + 테두리)로 도착하면 "콘텐츠"또는
		// "패딩"또는 "여백"
		} else {

			// "content"의 경우 패딩 빼기
			if (box === "content") {
				델타-= jQuery.css (elem, "padding"+ cssExpand [i], true, 스타일);
			}

			// "콘텐츠"또는 "패딩"의 경우 테두리 빼기
			if (box! == "margin") {
				델타-= jQuery.css (elem, "테두리"+ cssExpand [i] + "너비", true, 스타일);
			}
		}
	}

	// computedVal을 제공하여 요청시 긍정적 인 컨텐츠 상자 스크롤 거터를 설명
	if (! isBorderBox && computedVal> = 0) {

		// offsetWidth / offsetHeight는 반올림 된 콘텐츠, 패딩, 스크롤 여백 및 테두리의 합입니다.
		// 정수 스크롤 거터를 가정하고 나머지를 빼고 내림
		델타 + = Math.max (0, Math.ceil (
			elem [ "offset"+ 차원 [0] .toUpperCase () + dimension.slice (1)]-
			computedVal-
			델타-
			여분의-
			0.5

		// offsetWidth / offsetHeight를 알 수 없으면 콘텐츠 상자 스크롤 거터를 확인할 수 없습니다
		// NaN을 피하려면 명시 적 0을 사용하십시오 (gh-3964)
		)) || 0;
	}

	리턴 델타;
}

getWidthOrHeight (elem, dimension, extra) {

	// 계산 된 스타일로 시작
	var styles = getStyles (elem),

		// 리플 로우를 피하기 위해 필요한 경우 boxSizing 만 가져옵니다 (gh-4322).
		// 진정한 가치를 알 필요가있을 때까지 콘텐츠 상자를 가짜로 만듭니다.
		boxSizingNeeded =! support.boxSizingReliable () || 특별한,
		isBorderBox = boxSizingNeeded &&
			jQuery.css (elem, "boxSizing", false, styles) === "테두리 상자",
		valueIsBorderBox = isBorderBox,

		val = curCSS (요소, 치수, 스타일),
		offsetProp = "오프셋"+ 치수 [0] .toUpperCase () + dimension.slice (1);

	// 지원 : Firefox <= 54
	// 적절하지 않은 혼란스러운 픽셀이 아닌 값 또는 무시 무시한 값을 반환합니다.
	if (rnumnonpx.test (val)) {
		if (! extra) {
			리턴 값;
		}
		val = "자동";
	}


	// 값이 "auto"인 경우 offsetWidth / offsetHeight로 폴백
	// 명시적인 설정이없는 인라인 요소에서 발생합니다 (gh-3571).
	// 지원 : Android <= 4.1-4.3 만
	// 잘못보고 된 인라인 차원에 대해서는 offsetWidth / offsetHeight를 사용하십시오 (gh-3602).
	// 지원 : IE 9-11 만
	// 상자 크기를 신뢰할 수없는 경우 offsetWidth / offsetHeight도 사용합니다.
	// getClientRects ()를 사용하여 숨겨진 / 연결이 끊어 졌는지 확인합니다.
	//이 경우 계산 된 값을 경계 상자로 신뢰할 수 있습니다
	if ((! support.boxSizingReliable () && isBorderBox ||
		val === "auto"||
		! parseFloat (val) && jQuery.css (elem, "display", false, styles) === "inline") &&
		elem.getClientRects (). length) {

		isBorderBox = jQuery.css (elem, "boxSizing", false, 스타일) === "테두리 박스";

		// 가능한 경우 offsetWidth / offsetHeight는 대략적인 경계 상자 크기입니다.
		// 사용할 수없는 경우 (예 : SVG) 신뢰할 수없는 상자 크기를 가정하고
		// 컨텐츠 상자 차원으로 값을 검색했습니다.
		valueIsBorderBox = elem의 offsetProp;
		if (valueIsBorderBox) {
			val = elem [오프셋 프롭];
		}
	}

	// ""및 자동 표준화
	val = parseFloat (val) || 0;

	// 요소의 상자 모델에 맞게 조정
	리턴 (val +
		boxModelAdjustment (
			엘렘,
			치수,
			추가 || (isBorderBox? "border": "content"),
			valueIsBorderBox,
			스타일,

			// 스크롤 거터 계산을 요청하기 위해 현재 계산 된 크기를 제공합니다 (gh-3589).
			발
		)
	) + "px";
}

jQuery.extend ({

	// 기본값을 재정의하기위한 스타일 속성 후크 추가
	// 스타일 속성을 가져오고 설정하는 동작
	cssHooks : {
		불투명도 : {
			get : function (elem, computed) {
				if (계산 된) {

					// 항상 불투명도에서 숫자를 가져와야합니다.
					var ret = curCSS (요소, "불투명도");
					return ret === ""? "1": ret;
				}
			}
		}
	},

	// 단위가없는 이러한 속성에 "px"를 자동으로 추가하지 않습니다
	cssNumber : {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": ​​true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"불투명도": true,
		"순서": true,
		"고아": 사실,
		"과부": 사실,
		"zIndex": true,
		"줌": true
	},

	// 이전에 이름을 수정하려는 속성에 추가
	// 값 설정 또는 가져 오기
	cssProps : {},

	// DOM 노드에서 스타일 속성 가져 오기 및 설정
	스타일 : function (elem, name, value, extra) {

		// 텍스트 및 주석 노드에 스타일을 설정하지 않습니다
		if (! elem || elem.nodeType === 3 || elem.nodeType === 8 ||! elem.style) {
			반환;
		}

		// 올바른 이름으로 작업하고 있는지 확인
		var ret, type, hooks,
			origName = camelCase (이름),
			isCustomProp = rcustomProp.test (이름),
			스타일 = elem.style;

		// 올바른 이름으로 작업하고 있는지 확인하십시오. 우리는하지 않습니다
		// CSS 사용자 정의 특성 인 경우 값을 조회하려고합니다.
		// 사용자 정의되어 있기 때문입니다.
		if (! isCustomProp) {
			이름 = finalPropName (origName);
		}

		// 접두사 버전에 대한 후크를 가져온 다음 접두사없는 버전을 가져옵니다.
		훅 = jQuery.cssHooks [이름] || jQuery.cssHooks [origName];

		// 값을 설정하고 있는지 확인
		if (value! == undefined) {
			유형 = 가치 유형;

			// "+ ="또는 "-="를 상대 숫자로 변환합니다 (# 7345)
			if (type === "string"&& (ret = rcssNum.exec (value)) && ret [1]) {
				값 = adjustCSS (요소, 이름, ret);

				// 버그 # 9237 수정
				유형 = "숫자";
			}

			// null 및 NaN 값이 설정되지 않았는지 확인 (# 7116)
			if (value == null || value! == value) {
				반환;
			}

			// 숫자가 전달 된 경우 단위를 추가합니다 (특정 CSS 속성 제외).
			// 자동 추가 만하면 jQuery 4.0에서 isCustomProp 검사를 제거 할 수 있습니다.
			// 몇 개의 하드 코딩 된 값으로 "px".
			if (type === "number"&&! isCustomProp) {
				값 + = ret && ret [3] || (jQuery.cssNumber [origName]? "": "px");
			}

			// background- * props는 원본 클론의 값에 영향을 미칩니다
			if (! support.clearCloneStyle && value === ""&& name.indexOf ( "background") === 0) {
				style [name] = "상속";
			}

			// 후크가 제공된 경우 해당 값을 사용하고, 그렇지 않으면 지정된 값을 설정하십시오.
			if (! hooks ||! (후크에서 "set") ||
				(value = hooks.set (elem, value, extra))! == undefined) {

				if (isCustomProp) {
					style.setProperty (이름, 값);
				} else {
					스타일 [이름] = 값;
				}
			}

		} else {

			// 후크가 제공된 경우 계산되지 않은 값을 가져옵니다.
			if (후크 && "get"후크 &&
				(ret = hooks.get (elem, false, extra))! == undefined) {

				리트 윗을 반환;
			}

			// 그렇지 않으면 스타일 객체에서 값을 가져옵니다.
			스타일 반환 [name];
		}
	},

	CSS : 함수 (요소, 이름, 추가, 스타일) {
		var val, num, hooks,
			origName = camelCase (이름),
			isCustomProp = rcustomProp.test (이름);

		// 올바른 이름으로 작업하고 있는지 확인하십시오. 우리는하지 않습니다
		// CSS 사용자 정의 특성 인 경우 값을 수정하려고합니다.
		// 사용자 정의되어 있기 때문입니다.
		if (! isCustomProp) {
			이름 = finalPropName (origName);
		}

		// 접두사가 붙은 이름 뒤에 접두사가없는 이름을 입력하십시오
		훅 = jQuery.cssHooks [이름] || jQuery.cssHooks [origName];

		// 후크가 제공된 경우 계산 된 값을 가져옵니다.
		if (후크 && "get"후크) {
			val = hooks.get (elem, true, extra);
		}

		// 그렇지 않으면 계산 된 값을 얻는 방법이 있으면
		if (val === undefined) {
			val = curCSS (요소, 이름, 스타일);
		}

		// "normal"을 계산 된 값으로 변환
		if (val === "normal"&& name in cssNormalTransform) {
			val = cssNormalTransform [이름];
		}

		// 강제 또는 한정자가 제공되고 숫자가 숫자 인 경우 숫자로 표시
		if (extra === ""|| extra) {
			숫자 = parseFloat (val);
			여분의 반환 === true || isFinite (num)? num || 0 : 발;
		}

		리턴 값;
	}
});

jQuery.each ([ "height", "width"], function (i, dimension) {
	jQuery.cssHooks [차원] = {
		get : 함수 (요소, 계산, 추가) {
			if (계산 된) {

				// 보이지 않는 요소를 표시하면 특정 요소에 치수 정보가있을 수 있습니다.
				// 그러나 현재 디스플레이 스타일이 있어야합니다.
				리턴 rdisplayswap.test (jQuery.css (elem, "display")) &&

					// 지원 : Safari 8 이상
					// Safari의 테이블 열에는 0이 아닌 오프셋이 있습니다.
					// 표시가 변경되지 않으면 getBoundingClientRect (). width.
					// 지원 : IE <= 11 만
					// 연결이 끊어진 노드에서 getBoundingClientRect 실행
					// IE에서 오류가 발생합니다.
					(! elem.getClientRects (). length ||! elem.getBoundingClientRect (). width)?
						swap (엘렘, cssShow, 함수 () {
							getWidthOrHeight (elem, dimension, extra)를 반환합니다.
						}) :
						getWidthOrHeight (요소, 차원, 추가);
			}
		},

		설정 : function (elem, value, extra) {
			var는
				스타일 = getStyles (elem),

				// 테스트가 실패 할 경우에만 styles.position을 읽습니다.
				// 리플 로우를 피하기 위해.
				scrollboxSizeBuggy =! support.scrollboxSize () &&
					styles.position === "절대",

				// 리플 로우를 강제하지 않으려면 필요한 경우 boxSizing 만 가져옵니다 (gh-3991).
				boxSizingNeeded = scrollboxSizeBuggy || 특별한,
				isBorderBox = boxSizingNeeded &&
					jQuery.css (elem, "boxSizing", false, styles) === "테두리 상자",
				빼기 = 추가?
					boxModelAdjustment (
						엘렘,
						치수,
						특별한,
						isBorderBox,
						스타일
					) :
					0;

			// 오프셋 *을 계산 된 값과 비교하여 신뢰할 수없는 경계 상자 차원을 설명합니다.
			// 테두리와 패딩을 얻기 위해 콘텐츠 상자를 가짜로 만드는 것 (gh-3699)
			if (isBorderBox && scrollboxSizeBuggy) {
				빼기-= Math.ceil (
					elem [ "offset"+ 차원 [0] .toUpperCase () + dimension.slice (1)]-
					parseFloat (styles [dimension])-
					boxModelAdjustment (요소, 차원, "테두리", 거짓, 스타일)-
					0.5
				);
			}

			// 값 조정이 필요한 경우 픽셀로 변환
			if (빼기 && (일치하는 = rcssNum.exec (value)) &&
				(match [3] || "px")! == "px") {

				elem.style [치수] = 값;
				값 = jQuery.css (요소, 차원);
			}

			return setPositiveNumber (요소, 값, 빼기);
		}
	};
});

jQuery.cssHooks.marginLeft = addGetHookIf (support.reliableMarginLeft,
	함수 (elem, computed) {
		if (계산 된) {
			return (parseFloat (curCSS (elem, "marginLeft")) ||
				elem.getBoundingClientRect (). left-
					swap (요소, {marginLeft : 0}, 함수 () {
						반환 elem.getBoundingClientRect (). left;
					})
				) + "px";
		}
	}
);

//이 후크는 애니메이션에서 속성을 확장하는 데 사용됩니다.
jQuery.each ({
	여백 : "",
	패딩 : "",
	국경 : "폭"
}, 함수 (접두사, 접미사) {
	jQuery.cssHooks [접두사 + 접미사] = {
		확장 : function (value) {
			var i = 0,
				확장 = {},

				// 문자열이 아닌 경우 단일 숫자를 가정
				부분 = typeof 값 === "문자열"? value.split ( "") : [값];

			for (; i <4; i ++) {
				확장 [접두사 + cssExpand [i] + 접미사] =
					부품 [i] || 부품 [i-2] || 부분 [0];
			}

			반품 확대;
		}
	};

	if (접두사! == "margin") {
		jQuery.cssHooks [접두사 + 접미사] .set = setPositiveNumber;
	}
});

jQuery.fn.extend ({
	CSS : 함수 (이름, 값) {
		액세스 리턴 (this, function (elem, name, value) {
			var 스타일, len,
				map = {},
				i = 0;

			if (Array.isArray (name)) {
				스타일 = getStyles (elem);
				len = name.length;

				for (; i <len; i ++) {
					map [name [i]] = jQuery.css (요소, 이름 [i], false, 스타일);
				}

				반환지도;
			}

			반환 값! == undefined?
				jQuery.style (요소, 이름, 값) :
				jQuery.css (요소, 이름);
		}, 이름, 값, arguments.length> 1);
	}
});


Tween 함수 (요소, 옵션, 소품, 끝, 여유) {
	새로운 Tween.prototype.init (elem, options, prop, end, easing);
}
jQuery.Tween = 트윈;

Tween.prototype = {
	생성자 : 트윈,
	초기화 : 기능 (요소, 옵션, 소품, 끝, 여유, 단위) {
		this.elem = elem;
		this.prop = 소품;
		this.easing = 완화 || jQuery.easing._default;
		this.options = 옵션;
		this.start = this.now = this.cur ();
		this.end = 끝;
		this.unit = 단위 || (jQuery.cssNumber [prop]? "": "px");
	},
	cur : 함수 () {
		var hooks = Tween.propHooks [this.prop];

		리턴 후크 && hooks.get?
			hooks.get (this) :
			Tween.propHooks._default.get (this);
	},
	실행 : function (percent) {
		var easeed,
			후크 = Tween.propHooks [this.prop];

		if (this.options.duration) {
			this.pos = eased = jQuery.easing [this.easing] (
				퍼센트, this.options.duration * 퍼센트, 0, 1, this.options.duration
			);
		} else {
			this.pos = 완화 = 퍼센트;
		}
		this.now = (this.end-this.start) * easeed + this.start;

		if (this.options.step) {
			this.options.step.call (this.elem, this.now, this);
		}

		if (hooks && hooks.set) {
			hooks.set (this);
		} else {
			Tween.propHooks._default.set (this);
		}
		이것을 돌려줍니다;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default : {
		get : function (트윈) {
			var 결과;

			// DOM 요소가 아닌 경우 요소의 속성을 직접 사용합니다.
			// 또는 일치하는 스타일 속성이없는 경우
			if (tween.elem.nodeType! == 1 ||
				tween.elem [tween.prop]! = null && tween.elem.style [tween.prop] == null) {
				return tween.elem [tween.prop];
			}

			// 빈 문자열을 3 번째 매개 변수로 .css에 전달하면 자동으로
			// 구문 분석이 실패하면 parseFloat를 시도하고 문자열로 폴백합니다.
			// "10px"와 같은 간단한 값은 Float로 구문 분석됩니다.
			// "rotate (1rad)"와 같은 복잡한 값은 그대로 반환됩니다.
			결과 = jQuery.css (tween.elem, tween.prop, "");

			// 빈 문자열, null, undefined 및 "auto"는 0으로 변환됩니다.
			return! result || 결과 === "자동"? 0 : 결과;
		},
		설정 : function (tween) {

			// 역 호환에는 스텝 후크를 사용하십시오.
			// cssHook이 있으면 사용합니다.
			// 가능한 경우 .style을 사용하고 가능한 경우 일반 속성을 사용하십시오.
			if (jQuery.fx.step [tween.prop]) {
				jQuery.fx.step [tween.prop] (트윈);
			} else if (tween.elem.nodeType === 1 && (
					jQuery.cssHooks [tween.prop] ||
					tween.elem.style [finalPropName (tween.prop)]! = null)) {
				jQuery.style (tween.elem, tween.prop, tween.now + tween.unit);
			} else {
				tween.elem [tween.prop] = 트윈. 지금;
			}
		}
	}
};

// 지원 : IE <= 9 만
// 연결이 끊어진 노드에서 설정하는 패닉 기반 접근
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	설정 : function (tween) {
		if (tween.elem.nodeType && tween.elem.parentNode) {
			tween.elem [tween.prop] = 트윈. 지금;
		}
	}
};

jQuery.easing = {
	선형 : 함수 (p) {
		리턴 p;
	},
	스윙 : 함수 (p) {
		반환 0.5-Math.cos (p * Math.PI) / 2;
	},
	_default : "스윙"
};

jQuery.fx = Tween.prototype.init;

// 역 호환성 <1.8 확장 점
jQuery.fx.step = {};




var
	fxNow, 진행중,
	rfxtypes = / ^ (?: toggle | show | hide) $ /,
	rrun = / queueHooks $ /;

함수 스케줄 () {
	if (inProgress) {
		if (document.hidden === false && window.requestAnimationFrame) {
			window.requestAnimationFrame (일정);
		} else {
			window.setTimeout (일정, jQuery.fx.interval);
		}

		jQuery.fx.tick ();
	}
}

// 동 기적으로 생성 된 애니메이션은 동 기적으로 실행됩니다
함수 createFxNow () {
	window.setTimeout (함수 () {
		fxNow = 정의되지 않음;
	});
	return (fxNow = Date.now ());
}

// 표준 애니메이션을 만들기위한 매개 변수 생성
genFx 함수 (type, includeWidth) {
	var,
		i = 0,
		attrs = {높이 : 유형};

	// 너비를 포함하면 모든 cssExpand 값을 수행하기 위해 step 값은 1입니다.
	// 그렇지 않으면 단계 값이 2로 왼쪽과 오른쪽을 건너 뜁니다.
	includeWidth = includeWidth? 1 : 0;
	for (; i <4; i + = 2-includeWidth) {
		어느 = cssExpand [i];
		attrs [ "margin"+ which] = attrs [ "패딩"+ which] = 유형;
	}

	if (includeWidth) {
		attrs.opacity = attrs.width = 유형;
	}

	귀환 attrs;
}

함수 createTween (value, prop, animation) {
	var 트윈,
		collection = (Animation.tweeners [prop] || []) .concat (Animation.tweeners [ "*"]),
		인덱스 = 0,
		길이 = collection.length;
	for (; index <length; index ++) {
		if ((트윈 = 모음 [인덱스] .call (애니메이션, 소품, 값))) {

			//이 속성으로 끝났습니다
			리턴 트윈;
		}
	}
}

함수 defaultPrefilter (elem, props, opts) {
	var prop, value, toggle, hooks, oldfire, propTween, restore 디스플레이, 디스플레이,
		소품의 isBox = "너비"|| 소품의 "높이"
		애님 = 이것,
		orig = {},
		스타일 = elem.style,
		숨겨진 = elem.nodeType && isHiddenWithinTree (elem),
		dataShow = dataPriv.get (요소, "fxshow");

	// 큐 건너 뛰기 애니메이션이 fx 훅을 납치합니다.
	if (! opts.queue) {
		훅 = jQuery._queueHooks (elem, "fx");
		if (hooks.unqueued == null) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = 함수 () {
				if (! hooks.unqueued) {
					oldfire ();
				}
			};
		}
		hooks.unqueued ++;

		anim.always (function () {

			// 완료되기 전에 완료 핸들러가 호출되는지 확인하십시오.
			anim.always (function () {
				대기열에 넣지 않음-;
				if (! jQuery.queue (elem, "fx") .length) {
					hooks.empty.fire ();
				}
			});
		});
	}

	// 애니메이션 표시 / 숨기기 감지
	for (소품 소품) {
		값 = 소품 [prop];
		if (rfxtypes.test (value)) {
			소품 삭제 [prop];
			토글 = 토글 || 값 === "토글";
			if (value === (숨김? "hide": "show")) {

				// "쇼"인 경우 숨겨져있는 척
				// 중지 된 표시 / 숨기기에서 여전히 데이터가 있습니다.
				if (value === "show"&& dataShow && dataShow [prop]! == undefined) {
					숨겨진 = 참;

				// 다른 모든 no-op 표시 / 숨기기 데이터 무시
				} else {
					잇다;
				}
			}
			orig [prop] = dataShow && dataShow [소품] || jQuery.style (요소, 소품);
		}
	}

	// .hide (). hide ()와 같은 no-op이면 실패
	propTween =! jQuery.isEmptyObject (props);
	if (! propTween && jQuery.isEmptyObject (orig)) {
		반환;
	}

	// 상자 애니메이션 중 "오버플로"및 "디스플레이"스타일 제한
	if (isBox && elem.nodeType === 1) {

		// 지원 : IE <= 9-11, Edge 12-15
		// IE가 속기를 유추하지 않기 때문에 3 개의 오버 플로우 속성을 모두 기록
		// 동일한 값의 overflowX 및 overflowY 및 Edge에서 미러링
		// 거기에 overflowX 값.
		opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// CSS 캐스케이드보다 오래된 표시 / 숨기기 데이터를 선호하는 표시 유형 식별
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get (요소, "디스플레이");
		}
		display = jQuery.css (요소, "디스플레이");
		if (display === "none") {
			if (restoreDisplay) {
				디스플레이 = restoreDisplay;
			} else {

				// 일시적으로 가시성을 강요하여 비어 있지 않은 값을 얻습니다.
				showHide ([elem], true);
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css (요소, "디스플레이");
				showHide ([elem]);
			}
		}

		// 인라인 요소를 인라인 블록으로 애니메이션
		if (display === "inline"|| display === "인라인 블록"&& restoreDisplay! = null) {
			if (jQuery.css (elem, "float") === "none") {

				// 순수한 표시 / 숨기기 애니메이션의 끝에서 원래 표시 값을 복원
				if (! propTween) {
					anim.done (function () {
						style.display = restoreDisplay;
					});
					if (restoreDisplay == null) {
						디스플레이 = style.display;
						restoreDisplay = 표시 === "없음"? "": 표시;
					}
				}
				style.display = "인라인 블록";
			}
		}
	}

	if (opts.overflow) {
		style.overflow = "숨김";
		anim.always (function () {
			style.overflow = opts.overflow [0];
			style.overflowX = opts.overflow [1];
			style.overflowY = opts.overflow [2];
		});
	}

	// 애니메이션 표시 / 숨기기 구현
	propTween = 거짓;
	for (작은 소품) {

		//이 요소 애니메이션의 일반 표시 / 숨기기 설정
		if (! propTween) {
			if (dataShow) {
				if (dataShow에서 "숨겨 짐") {
					숨겨진 = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access (요소, "fxshow", {표시 : restoreDisplay});
			}

			// 토글을 위해 숨겨 지거나 보이도록 저장합니다.`.stop (). toggle ()`
			if (토글) {
				dataShow.hidden =! hidden;
			}

			// 요소를 애니메이션화하기 전에 표시
			if (hidden) {
				showHide ([elem], true);
			}

			/ * eslint를 사용하지 않는 no-loop-func * /

			anim.done (function () {

			/ * eslint-no-loop-func 활성화 * /

				// "숨기기"애니메이션의 마지막 단계는 실제로 요소를 숨기는 것입니다
				if (! hidden) {
					showHide ([elem]);
				}
				dataPriv.remove (요소, "fxshow");
				for (작은 소품) {
					jQuery.style (elem, prop, orig [prop]);
				}
			});
		}

		// 속성 별 설정
		propTween = createTween (숨김? dataShow [prop] : 0, prop, anim);
		if (! (dataShow의 prop)) {
			dataShow [prop] = propTween.start;
			if (hidden) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

propFilter 함수 (props, specialEasing) {
	var 인덱스, 이름, 여유, 가치, 갈고리;

	// camelCase, specialEasing 및 확장 CSS 훅 패스
	for (소품의 색인) {
		이름 = camelCase (index);
		여유 = specialEasing [이름];
		가치 = 소품 [index];
		if (Array.isArray (value)) {
			여유 = 값 [1];
			value = props [index] = 값 [0];
		}

		if (index! == name) {
			props [name] = 값;
			소품 삭제 [index];
		}

		후크 = jQuery.cssHooks [이름];
		if (후크에서 후크 && "확장") {
			value = hooks.expand (값);
			소품 삭제 [name];

			// $ .extend는 아니지만 기존 키를 덮어 쓰지 않습니다.
			// 올바른 "이름"이 있으므로 '인덱스'재사용
			for (인덱스 값) {
				if (! (props in index)) {
					props [index] = 값 [index];
					specialEasing [인덱스] = 여유;
				}
			}
		} else {
			specialEasing [이름] = 여유;
		}
	}
}

함수 애니메이션 (요소, 속성, 옵션) {
	var 결과,
		중지
		인덱스 = 0,
		길이 = Animation.prefilters.length,
		연기 된 = jQuery.Deferred (). always (function () {

			// : animated 선택기에서 elem과 일치하지 않습니다
			tick.elem을 삭제;
		}),
		틱 = 함수 () {
			if (stop) {
				거짓을 반환;
			}
			var currentTime = fxNow || createFxNow (),
				나머지 = Math.max (0, animation.startTime + animation.duration-currentTime),

				// 지원 : Android 2.3 만
				// Archaic crash 버그로`1-(0.5 || 0)`을 사용할 수 없습니다 (# 12497)
				온도 = 남음 / 애니메이션 지속 시간 || 0,
				퍼센트 = 1-온도,
				인덱스 = 0,
				길이 = animation.tweens.length;

			for (; index <length; index ++) {
				animation.tweens [index] .run (퍼센트);
			}

			deferred.notifyWith (요소, [애니메이션, 퍼센트, 남음]);

			// 할 일이 더 있다면
			if (퍼센트 <1 && 길이) {
				남은 수익;
			}

			// 빈 애니메이션 인 경우 최종 진행 알림을 합성합니다.
			if (! length) {
				deferred.notifyWith (elem, [animation, 1, 0]);
			}

			// 애니메이션 해결 및 결론보고
			deferred.resolveWith (요소, [애니메이션]);
			거짓을 반환;
		},
		애니메이션 = deferred.promise ({
			elem : elem,
			소품 : jQuery.extend ({}, properties),
			opts : jQuery.extend (true, {
				specialEasing : {},
				여유 : jQuery.easing._default
			}, 옵션),
			originalProperties : 속성,
			originalOptions : 옵션,
			startTime : fxNow || createFxNow (),
			기간 : options.duration,
			트윈 : [],
			createTween : function (prop, end) {
				var tween = jQuery.Tween (elem, animation.opts, prop, end,
						animation.opts.specialEasing [prop] || animation.opts.easing);
				animation.tweens.push (트윈);
				리턴 트윈;
			},
			중지 : function (gotoEnd) {
				var 인덱스 = 0,

					// 끝까지 가면 모든 트윈을 실행하려고합니다.
					// 그렇지 않으면이 부분을 건너 뜁니다.
					길이 = gotoEnd? animation.tweens.length : 0;
				if (stop) {
					이것을 돌려줍니다;
				}
				중지 = 참;
				for (; index <length; index ++) {
					animation.tweens [index] .run (1);
				}

				// 마지막 프레임을 재생할 때 해결합니다. 그렇지 않으면 거부
				if (gotoEnd) {
					deferred.notifyWith (elem, [animation, 1, 0]);
					deferred.resolveWith (elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith (elem, [animation, gotoEnd]);
				}
				이것을 돌려줍니다;
			}
		}),
		소품 = animation.props;

	propFilter (소품, animation.opts.specialEasing);

	for (; index <length; index ++) {
		result = Animation.prefilters [index] .call (animation, elem, props, animation.opts);
		if (결과) {
			if (isFunction (result.stop)) {
				jQuery._queueHooks (animation.elem, animation.opts.queue) .stop =
					result.stop.bind (결과);
			}
			결과 반환;
		}
	}

	jQuery.map (소품, createTween, 애니메이션);

	if (isFunction (animation.opts.start)) {
		animation.opts.start.call (요소, 애니메이션);
	}

	// 옵션에서 콜백 첨부
	생기
		.progress (animation.opts.progress)
		.done (animation.opts.done, animation.opts.complete)
		.fail (animation.opts.fail)
		.always (animation.opts.always);

	jQuery.fx.timer (
		jQuery.extend (틱, {
			elem : elem,
			애니메이션 : 애니메이션,
			대기열 : animation.opts.queue
		})
	);

	애니메이션 반환;
}

jQuery.Animation = jQuery.extend (애니메이션, {

	트위너 : {
		"*": [함수 (소품, 값) {
			var tween = this.createTween (prop, value);
			adjustCSS (tween.elem, prop, rcssNum.exec (value), 트윈);
			리턴 트윈;
		}]
	},

	트위너 : function (props, callback) {
		if (isFunction (props)) {
			콜백 = 소품;
			소품 = [ "*"];
		} else {
			소품 = props.match (rnothtmlwhite);
		}

		var prop,
			인덱스 = 0,
			길이 = props.length;

		for (; index <length; index ++) {
			소품 = 소품 [index];
			Animation.tweeners [prop] = Animation.tweeners [소품] || [];
			Animation.tweeners [prop] .unshift (콜백);
		}
	},

	사전 필터 : [defaultPrefilter],

	프리 필터 : function (callback, prepend) {
		if (prepend) {
			Animation.prefilters.unshift (콜백);
		} else {
			Animation.prefilters.push (콜백);
		}
	}
});

jQuery.speed = 함수 (속도, 여유, fn) {
	var opt = speed && typeof speed === "객체"? jQuery.extend ({}, speed) : {
		완료 : fn || ! fn && easing ||
			isFunction (속도) && 속도,
		지속 시간 : 속도,
		완화 : fn && easing || easing &&! isFunction (easing) && easing
	};

	// fx가 꺼져 있으면 종료 상태로 이동
	if (jQuery.fx.off) {
		선택 기간 = 0;

	} else {
		if (typeof opt.duration! == "number") {
			if (jQuery.fx.speeds의 opt.duration) {
				opt.duration = jQuery.fx.speeds [opt.duration];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// opt.queue 정규화-true / undefined / null-> "fx"
	if (opt.queue == null || opt.queue === true) {
		opt.queue = "fx";
	}

	// 큐잉
	opt.old = opt.complete;

	opt.complete = 함수 () {
		if (isFunction (opt.old)) {
			opt.old.call (this);
		}

		if (opt.queue) {
			jQuery.dequeue (this, opt.queue);
		}
	};

	opt를 반환;
};

jQuery.fn.extend ({
	fadeTo : function (속도, 종료, 완화, 콜백) {

		// 불투명도를 0으로 설정 한 후 숨겨진 요소 표시
		이것을 돌려줍니다. filter (isHiddenWithinTree) .css ( "opacity", 0) .show ()

			// 지정된 값으로 애니메이션
			.end (). animate ({불투명도 : ~}, 속도, 여유, 콜백);
	},
	애니메이션 : function (prop, speed, easing, callback) {
		var empty = jQuery.isEmptyObject (prop),
			optall = jQuery.speed (속도, 여유, 콜백),
			doAnimation = 함수 () {

				// 소품 사본을 조작하여 속성 별 여유를 잃지 않습니다.
				var anim = 애니메이션 (this, jQuery.extend ({}, prop), optall);

				// 빈 애니메이션 또는 마무리가 즉시 해결됩니다.
				if (비어있는 || dataPriv.get (this, "finish")) {
					anim.stop (true);
				}
			};
			doAnimation.finish = doAnimation;

		빈 반환 || optall.queue === 거짓?
			this.each (doAnimation) :
			this.queue (optall.queue, doAnimation);
	},
	중지 : function (type, clearQueue, gotoEnd) {
		var stopQueue = 함수 (후크) {
			var stop = hooks.stop;
			hooks.stop을 삭제하십시오.
			중지 (gotoEnd);
		};

		if (typeof type! == "string") {
			gotoEnd = clearQueue;
			clearQueue = 유형;
			유형 = 정의되지 않음;
		}
		if (clearQueue && type! == false) {
			this.queue (type || "fx", []);
		}

		이것을 돌려줍니다 .each (function () {
			var dequeue = true,
				index = type! = null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get (this);

			if (index) {
				if (data [index] && data [index] .stop) {
					stopQueue (data [index]);
				}
			} else {
				for (데이터 색인) {
					if (data [index] && data [index] .stop && rrun.test (index)) {
						stopQueue (data [index]);
					}
				}
			}

			for (index = timers.length; index--;) {
				if (timers [index] .elem === this &&
					(type == null || timers [index] .queue === type)) {

					타이머 [index] .anim.stop (gotoEnd);
					dequeue = 거짓;
					timers.splice (인덱스, 1);
				}
			}

			// 마지막 단계를 수행하지 않은 경우 다음 단계를 큐에서 시작하십시오.
			// 타이머는 현재 완전한 콜백을 호출합니다.
			// gotoEnd 인 경우에만 대기열에서 제외됩니다.
			if (dequeue ||! gotoEnd) {
				jQuery.dequeue (this, type);
			}
		});
	},
	마무리 : 기능 (유형) {
		if (type! == false) {
			유형 = 유형 || "fx";
		}
		이것을 돌려줍니다 .each (function () {
			var 인덱스,
				data = dataPriv.get (this),
				대기열 = 데이터 [유형 + "대기열"],
				후크 = 데이터 [유형 + "queueHooks"],
				timers = jQuery.timers,
				길이 = 대기열? queue.length : 0;

			// 개인 데이터에 마무리 플래그 사용
			data.finish = true;

			// 대기열을 먼저 비 웁니다.
			jQuery.queue (this, type, []);

			if (후크 && hooks.stop) {
				hooks.stop.call (this, true);
			}

			// 활성화 된 애니메이션을 찾아서 마무리합니다
			for (index = timers.length; index--;) {
				if (timers [index] .elem === this && timers [index] .queue === type) {
					타이머 [index] .anim.stop (true);
					timers.splice (인덱스, 1);
				}
			}

			// 이전 대기열에서 애니메이션을 찾아서 마무리합니다.
			for (인덱스 = 0; 인덱스 <길이; 인덱스 ++) {
				if (queue [index] && queue [index] .finish) {
					대기 행렬 [index] .finish.call (this);
				}
			}

			// 마무리 플래그를 끕니다.
			data.finish를 삭제하십시오.
		});
	}
});

jQuery.each ([ "토글", "show", "hide"], function (i, name) {
	var cssFn = jQuery.fn [이름];
	jQuery.fn [name] = 함수 (속도, 여유, 콜백) {
		반환 속도 == null || typeof speed === "부울"?
			cssFn.apply (this, arguments) :
			this.animate (genFx (이름, true), 속도, 여유, 콜백);
	};
});

// 커스텀 애니메이션 바로 가기 생성
jQuery.each ({
	slideDown : genFx ( "show"),
	slideUp : genFx ( "hide"),
	slideToggle : genFx ( "toggle"),
	fadeIn : {불투명도 : "show"},
	fadeOut : {불투명도 : "숨기기"},
	fadeToggle : {불투명도 : "토글"}
}, 함수 (이름, 소품) {
	jQuery.fn [name] = 함수 (속도, 여유, 콜백) {
		this.animate (props, speed, easing, callback)를 반환하십시오.
	};
});

jQuery.timers = [];
jQuery.fx.tick = 함수 () {
	var 타이머,
		i = 0,
		타이머 = jQuery.timers;

	fxNow = Date.now ();

	for (; i <timers.length; i ++) {
		타이머 = 타이머 [i];

		// 타이머를 실행하고 완료되면 안전하게 제거합니다 (외부 제거 허용).
		if (! timer () && timers [i] === timer) {
			timers.splice (i--, 1);
		}
	}

	if (! timers.length) {
		jQuery.fx.stop ();
	}
	fxNow = 정의되지 않음;
};

jQuery.fx.timer = 함수 (타이머) {
	jQuery.timers.push (타이머);
	jQuery.fx.start ();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function () {
	if (inProgress) {
		반환;
	}

	진행중 = true;
	시간표();
};

jQuery.fx.stop = 함수 () {
	inProgress = null;
};

jQuery.fx.speeds = {
	둔화 : 600,
	빠름 : 200,

	// 기본 속도
	_default : 400
};


// Clint Helfers의 플러그인을 기반으로합니다.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = 함수 (시간, 유형) {
	시간 = jQuery.fx? jQuery.fx.speeds [시간] || 시간 : 시간;
	유형 = 유형 || "fx";

	this.queue (type, function (next, hooks) {
		var timeout = window.setTimeout (next, time);
		hooks.stop = 함수 () {
			window.clearTimeout (타임 아웃);
		};
	});
};


(함수 () {
	var input = document.createElement ( "input"),
		select = document.createElement ( "select"),
		opt = select.appendChild (document.createElement ( "option"));

	input.type = "확인란";

	// 지원 : Android <= 4.3 만
	// 확인란의 기본값은 "on"이어야합니다.
	support.checkOn = input.value! == "";

	// 지원 : IE <= 11 만
	// 기본 옵션을 선택하려면 selectedIndex에 액세스해야합니다.
	support.optSelected = opt.selected;

	// 지원 : IE <= 11 만
	// 라디오가 된 후 입력 값이 손실 됨
	입력 = document.createElement ( "input");
	input.value = "t";
	input.type = "라디오";
	support.radioValue = input.value === "t";
}) ();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend ({
	속성 : 함수 (이름, 값) {
		액세스 반환 (this, jQuery.attr, 이름, 값, arguments.length> 1);
	},

	removeAttr : 함수 (이름) {
		이것을 돌려줍니다 .each (function () {
			jQuery.removeAttr (this, name);
		});
	}
});

jQuery.extend ({
	속성 : 기능 (요소, 이름, 값) {
		var ret, 훅,
			nType = elem.nodeType;

		// 텍스트, 주석 및 속성 노드에서 속성을 가져 오거나 설정하지 않습니다
		if (nType === 3 || nType === 8 || nType === 2) {
			반환;
		}

		// 속성이 지원되지 않을 때 prop로 대체
		if (typeof elem.getAttribute === "undefined") {
			반환 jQuery.prop (요소, 이름, 값);
		}

		// 속성 후크는 소문자 버전에 의해 결정됩니다.
		// 필요한 후크가 정의되어 있으면 가져옵니다.
		if (nType! == 1 ||! jQuery.isXMLDoc (elem)) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );