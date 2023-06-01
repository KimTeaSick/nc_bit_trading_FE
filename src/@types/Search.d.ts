export type NAME_LIST_TYPE = {
  Price: "가격";
  TransactionAmount: "가격 대금";
  MASP: "이평선 비교";
  Trend: "추세";
  Disparity: "이격도";
  MACD: "MACD";
  [key: string];
};

export type BTN_EVENT_TYPE = {
  registerCondition: () => void;
  editCondition: () => void;
  useCondition: () => void;
  deleteCondition: () => void;
  [key: string];
};

export type COIN_NAME_LIST_TYPE = {
  BTC: "비트코인";
  ETH: "이더리움";
  ETC: "이더리움 클래식";
  XRP: "리플";
  BCH: "비트코인 캐시";
  QTUM: "퀀텀";
  BTG: "비트코인 골드";
  EOS: "이오스";
  ICX: "아이콘";
  TRX: "트론";
  ELF: "엘프";
  KNC: "카이버 네트워크";
  GLM: "골렘";
  ZIL: "질리카";
  WAXP: "왁스";
  POWR: "파워렛저";
  LRC: "루프링";
  STEEM: "스팀";
  STRAX: "스트라티스";
  ZRX: "제로엑스";
  REP: "어거";
  SNT: "스테이터스네트워크토큰";
  ADA: "에이다";
  CTXC: "코르텍스";
  BAT: "베이직어텐션토큰";
  THETA: "쎄타토큰";
  LOOM: "룸네트워크";
  WAVES: "웨이브";
  LINK: "체인링크";
  ENJ: "엔진코인";
  VET: "비체인";
  MTL: "메탈";
  IOST: "이오스트";
  QKC: "쿼크체인";
  ATOLO: "라이즌";
  AMO: "아모코인";
  BSV: "비트코인에스브이";
  ORBS: "오브스";
  TFUEL: "쎄타퓨엘";
  VALOR: "밸러토큰";
  CON: "코넌";
  ANKR: "앵커";
  MIX: "믹스마블";
  CRO: "크로노스";
  FX: "펑션엑스";
  CHR: "크로미아";
  MBL: "무비블록";
  MXC: "머신익스체인지코인";
  FCT2: "피르마체인";
  TRV: "트러스트버스";
  WOM: "왐토큰";
  BOA: "보아";
  MEV: "미버스";
  SXP: "솔라";
  COS: "콘텐토스";
  EL: "엘리시아";
  HIVE: "하이브";
  XPR: "프로톤";
  VRA: "베라시티";
  FIT: "300피트 네트워크";
  EGG: "네스트리";
  BORA: "보라";
  ARPA: "알파";
  CTC: "크레딧코인";
  APM: "에이피엠 코인";
  CKB: "너보스";
  AERGO: "아르고";
  EVZ: "이브이지";
  QTCON: "퀴즈톡";
  UNI: "유니스왑";
  YFI: "연파이낸스";
  UMA: "우마";
  AAVE: "에이브";
  COMP: "컴파운드";
  REN: "렌";
  BAL: "밸런서";
  RSR: "리저브라이트";
  NMR: "뉴메레르";
  RLC: "아이젝";
  UOS: "울트라";
  SAND: "샌드박스";
  STPT: "에스티피";
  GOM2: "고머니2";
  BEL: "벨라프로토콜";
  OBSR: "옵저버";
  ORC: "오르빗 체인";
  POLA: "폴라리스 쉐어";
  ADP: "어댑터 토큰";
  DVI: "디비전";
  GHX: "게이머코인";
  MVC: "마일벌스";
  BLY: "블로서리";
  WOZX: "이포스";
  ANV: "애니버스";
  GRT: "더그래프";
  BIOT: "바이오패스포트";
  SNX: "신세틱스";
  SOFI: "라이파이낸스";
  GRACY: "그레이시";
  OXT: "오키드";
  LINA: "리니어파이낸스";
  MAP: "맵프로토콜";
  AQT: "알파쿼크";
  PLA: "플레이댑";
  WIKEN: "위드";
  CTSI: "카르테시";
  MANA: "디센트럴랜드";
  LPT: "라이브피어";
  MKR: "메이커";
  SUSHI: "스시스왑";
  ASM: "어셈블프로토콜";
  PUNDIX: "펀디엑스";
  CELR: "셀러네트워크";
  ARW: "아로와나토큰";
  FRONT: "프론티어";
  RLY: "랠리";
  OCEAN: "오션프로토콜";
  BFC: "바이프로스트";
  ALICE: "마이네이버앨리스";
  OGN: "오리진프로토콜";
  COTI: "코티";
  CAKE: "팬케이크스왑";
  BNT: "뱅코르";
  XVS: "비너스";
  SWAP: "트러스트스왑";
  CHZ: "칠리즈";
  AXS: "엑시인피니티";
  DAO: "다오메이커";
  SIX: "식스";
  DAI: "다이";
  SHIB: "시바이누";
  MATIC: "폴리곤";
  WOO: "우네트워크";
  ACH: "알케미페이";
  VELO: "벨로프로토콜";
  XLM: "스텔라루멘";
  WICC: "웨이키체인";
  ONT: "온톨로지";
  META: "메타디움";
  KLAY: "클레이튼";
  ONG: "온톨로지가스";
  ALGO: "알고랜드";
  JST: "저스트";
  XTZ: "테조스";
  MLK: "밀크";
  DOT: "폴카닷";
  ATOM: "코스모스";
  SSX: "썸씽";
  TEMCO: "템코";
  KSP: "클레이스왑";
  DOGE: "도지코인";
  KSM: "쿠사마";
  CTK: "셴투";
  XYM: "심볼";
  BNB: "바이낸스코인";
  NFT: "에이피이앤에프티";
  SUN: "썬";
  XEC: "이캐시";
  SOL: "솔라나";
  LN: "링크";
  EGLD: "멀티버스엑스";
  GO: "고체인";
  DFA: "디파인";
  C98: "코인98";
  MED: "메디블록";
  "1INCH": "1인치";
  BOBA: "보바토큰";
  DYDX: "디와이디엑스";
  FLOW: "플로우";
  GALA: "갈라";
  BTT: "비트토렌트";
  EFI: "이피니티토큰";
  JASMY: "재스미코인";
  TITAN: "타이탄스왑";
  REQ: "리퀘스트";
  CSPR: "캐스퍼";
  AVAX: "아발란체";
  TDROP: "티드랍";
  FANC: "팬시";
  NPT: "네오핀";
  REI: "레이";
  T: "쓰레스홀드";
  MBX: "마브렉스";
  GMT: "스테픈";
  TAVA: "알타바";
  DAR: "마인즈 오브 달라니아";
  ALT: "아치루트";
  XCN: "오닉스코인";
  GXA: "갤럭시아";
  TALK: "톡큰";
  AZIT: "아지트";
  FLR: "플레어";
  SFP: "세이프팔";
  FITFI: "스텝앱";
  STAT: "스탯";
  CRTS: "크라토스";
  VIX: "빅스코";
  LBL: "레이블";
  FLZ: "펠라즈";
  BERRY: "베리";
  LM: "레저메타";
  GRND: "슈퍼워크";
  APT: "앱토스";
  BLUR: "블러";
  NEWS: "퍼블리시";
  DICE: "클레이다이스";
  OAS: "오아시스";
  HOOK: "훅트 프로토콜";
  ENTC: "엔터버튼";
  ONIT: "온버프";
  OP: "옵티미즘";
  ROA: "로아코어";
  ORB: "오브시티";
  EVER: "에버스케일";
  GMX: "지엠엑스";
  STX: "스택스";
  XPLA: "엑스플라";
  REAP: "립체인";
  AHT: "아하토큰";
  ARB: "아비트럼";
  INJ: "인젝티브";
  RPL: "로켓풀";
  GPT: "크립토지피티";
  CFX: "콘플럭스";
  LDO: "리도다오";
  SUI: "수이";
  FLOKI: "플로키";
  PEPE: "페페";
  [key: string];
};
