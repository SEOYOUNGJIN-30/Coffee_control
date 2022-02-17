/*
lobster_uganda = 0
brazil_cerrado = 1
brazil_kenya = 2
ethiopia_sidamo = 3
colombia_supremo = 4
guatemala = 5
ethiopia_yirgacheffe = 6
kenya_AA = 7
indonesia_java = 8
indonesia_mandeling = 9
indonesia_bali_kantamani =10
indonesia_go_mountain = 11
indonesia__toraja =12
india_monsund_maliva =13
colombia_excelso =14
guatemala_SHB =15
nicaragua_SHB =16
mexico_altura_SHB =17
elsalvador_pensi_SHB =18
costa_rica_SHB =19
panama_SHB =20
Dominica_AA =21
brazil_santos =22
brazil_santos_decaffeinated =23
honduras_SHG =24
peru_HB_GRADE1 =25
ethiopia_yirgachev =26
mocha_sidamo =27
rwanda_AB+ =28
malawi_AAA+ =29
zimbabwe_AA+ =30
tanzania_AA =31
*/

const qnaList = [
  {
    q: '1. 선호하는 바디감을 선택해 주세요',
    a: [
      { answer: 'a. 1단계', type: [21] },
      { answer: 'b. 2단계', type: [17, 18, 19, 22, 23] },
      { answer: 'c. 3단계', type: [10, 11, 14, 16, 20, 24] },
      { answer: 'd. 4단계', type: [0, 1, 2, 3, 4, 6, 7, 8, 9, 12, 13, 15, 25, 26, 27, 28, 29, 30, 31] },
      { answer: 'e. 5단계', type: [5] }
    ]
  },
  {
    q: '2. 산도의 단계를 선택해 주세요 ',
    a: [
      { answer: 'a. 1단계', type: [] },
      { answer: 'b. 2단계', type: [0, 1, 2, 4, 8, 9, 10] },
      { answer: 'c. 3단계', type: [5, 17, 18, 19, 22, 23, 28, 29] },
      { answer: 'd. 4단계', type: [11, 13, 15, 16, 20, 21, 24, 25] },
      { answer: 'e. 5단계', type: [3, 6, 7, 12, 14, 26, 27, 30, 31] }
    ]
  },
  {
    q: '3. 단맛의 정도를 선택해 주세요',
    a: [
      { answer: 'a. 1단계', type: [] },
      { answer: 'b. 2단계', type: [3, 7, 24] },
      { answer: 'c. 3단계', type: [0, 1, 2, 4, 6, 8, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 26, 27, 28, 29, 30, 31] },
      { answer: 'd. 4단계', type: [13, 19, 25] },
      { answer: 'e. 5단계', type: [5, 9] }
    ]
  },
  {
    q: '4. 향미의 정도를 선택해 주세요',
    a: [
      { answer: 'a. 1단계', type: [] },
      { answer: 'b. 2단계', type: [21, 28] },
      { answer: 'c. 3단계', type: [0, 16, 19, 24] },
      { answer: 'd. 4단계', type: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 18, 22, 23, 26, 27, 30 ,31] },
      { answer: 'e. 5단계', type: [13, 14, 15, 20, 25, 29] }
    ]
  },
    {
    q: '5. 쓴맛의 정도를 선택해 주세요',
    a: [
      { answer: 'a. 1단계', type: [3] },
      { answer: 'b. 2단계', type: [4, 8, 9, 10, 11, 12, 14, 17, 18, 21, 22, 23, 24] },
      { answer: 'c. 3단계', type: [1, 2, 5, 6, 7, 13, 15, 16, 19, 25, 26, 27, 28, 30, 31] },
      { answer: 'd. 4단계', type: [0, 20, 29] },
      { answer: 'e. 5단계', type: [] }
    ]
  }
]

const infoList = [
  {
    name: '#카카오향 #구수함 <로브스타 우간다>',
    desc: '진하고 풍부하게 퍼지는 카카오향과 구수함, 섬세함, 달콤함이 잘 어우러진 커피!'
  },
  {
    name: '#부드러움 #밸런스 <브라질 세하도>',
    desc: '블렌딩의 베이스로 많이 쓰이는 원두. 구수하고 자극적이지 않은 가장 기본적인 커피!'
  },
  {
    name: '#부드러움 #산뜻함 <블렌딩>',
    desc: '상급 원두만을 적절히 배합하여 만든 하이드로 더치의 커피. 부드러운 바디감과 산뜻한 향!'
  },
  {
    name: '산뜻한 과일향 <시다모>',
    desc: '달콤한 과일향이 입안 가득 느껴지는 산뜻한 산미, 달콤함이 매력적인 커피!'
  },
  {
    name: '#호두향 #구수함 <콜롬비아 수프리모>',
    desc: '달콤하고 부드러운 맛이 포근한 느낌을 주며 감미로운 호두향이 코끝을 자극하는 커피입니다!'
  },
  {
    name: '#진한스모키감 <과테말라>',
    desc: '진한 스모키향과 풍부한 바디감이 느껴지는 매력적인 커피!'
  },
    {
    name: '#꽃향 가득 <콜롬비아 예가체프>',
    desc: '달콤한 맛과 특유의 산미, 꽃향기와 베리류의 과일향을 가지고 있는 매력적인 커피!'
  },
  {
    name: '#쌉쌀함 #산미 <케냐AA>',
    desc: '쌉쌀한 맛으로 유럽지역에서 인기가 높은 커피. 커피의 신맛을 즐기는 분들에게 추천!'
  },
  {
    name: ' <인도네시아 자바>',
    desc: ''
  },
  {
    name: ' <인도네시아 만델링>',
    desc: ''
  },
  {
    name: ' <인도네시아 발리 칸타마니>',
    desc: ''
  },
  {
    name: ' <인도네시아 가요 마운틴>',
    desc: ''
  },
  {
    name: ' <인도네시아 토라자>',
    desc: ''
  },
  {
    name: ' <인도네시아 문순드 말리바>',
    desc: ''
  },
  {
    name: ' <콜롬비아 엑셀소 디카페인>',
    desc: ''
  },
  {
    name: ' <과테말라 SHB>',
    desc: ''
  },
  {
    name: ' <니카라과 SHB>',
    desc: ''
  },
  {
    name: ' <멕시코 알투라SHB>',
    desc: ''
  },
  {
    name: ' <엘살바도르 펜시SHB>',
    desc: ''
  },
  {
    name: ' <코스타리카 SHB>',
    desc: ''
  },
  {
    name: ' <파나마 SHB>',
    desc: ''
  },
  {
    name: ' <도미니카 AA>',
    desc: ''
  },
  {
    name: ' <브라질 산토스>',
    desc: ''
  },
  {
    name: ' <브라질 산토스 디카페인>',
    desc: ''
  },
  {
    name: ' <온두라스 SHG>',
    desc: ''
  },
  {
    name: ' <페루 HB GRADE1>',
    desc: ''
  },
  {
    name: ' <에티오피아 예가체프>',
    desc: ''
  },
  {
    name: ' <모카 시다모>',
    desc: ''
  },
  {
    name: ' <르완다 AB+>',
    desc: ''
  },
  {
    name: ' <말라위 AAA+>',
    desc: ''
  },
  {
    name: ' <짐바브웨 AA+>',
    desc: ''
  },
  {
    name: ' <탄자니아 AA>',
    desc: ''
  }
]
