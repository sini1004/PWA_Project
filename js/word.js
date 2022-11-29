const $word = [
  {
    eng : "resolve",
    kor : "해결하다, 다짐하다",
  },
  {
    eng : "regularity",
    kor : "정기적임, 규칙적임",
  },
  {
    eng : "landscape",
    kor : "풍경, 풍경화",
  },
  {
    eng : "conquer",
    kor : "정복하다, 극복하다, 이겨내다",
  },
  {
    eng : "contemporary",
    kor : "현대의, 동시대의, 동시대 사람",
  },
  {
    eng : "marine",
    kor : "바다의, 해양의",
  },
  {
    eng : "diverse",
    kor : "다양한",
  },
  {
    eng : "abundance",
    kor : "풍부, 다수, 다량, 부유함",
  },
  {
    eng : "citation",
    kor : "표창, 인용, 인용문",
  },
  {
    eng : "counterproductive",
    kor : "역효과를 내는",
  },
  {
    eng : "prohibition",
    kor : "(특히 법에 의한) 금지",
  },
  {
    eng : "paradox",
    kor : "역설, 역설적인 것",
  },
  {
    eng : "flexible",
    kor : "신축성 있는",
  },
  {
    eng : "fragile",
    kor : "깨지기 쉬운",
  },
  {
    eng : "functioning",
    kor : "기능",
  },
  {
    eng : "lineage",
    kor : "혈통, 계통",
  },
  {
    eng : "neural",
    kor : "신경의",
  },
  {
    eng : "occasion",
    kor : "경우, 행사",
  },
  {
    eng : "occur",
    kor : "일어나다",
  },
  {
    eng : "outcome",
    kor : "결과",
  },
  {
    eng : "pacific",
    kor : "태평양의",
  },
  {
    eng : "promote",
    kor : "고취하다, 촉진하다",
  },
  {
    eng : "require",
    kor : "요구하다",
  },
  {
    eng : "slavery",
    kor : "노예 제도",
  },
  {
    eng : "standpoint",
    kor : "관점",
  },
  {
    eng : "tend",
    kor : "~하는 경향이 있다",
  },
  {
    eng : "upright",
    kor : "강직한, 올곧은",
  },
  {
    eng : "will",
    kor : "의지",
  },
  {
    eng : "work ethic",
    kor : "직업 윤리",
  },
  {
    eng : "xenophobia",
    kor : "외국인 공포증",
  },
]

const $eng = document.querySelector('.word span:first-child');
const $kor = document.querySelector('.word span:last-child');

// console.log($word[30-1]); //마지막 단어
// console.log($word[Math.round(Math.random() * $word.length)]);

const $todayWord = $word[Math.round(Math.random() * $word.length)]

$eng.innerText = $todayWord.eng;
$kor.innerText = $todayWord.kor;