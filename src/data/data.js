const data = [
  {
    "movieName" : '파묘',
    "age" : "15",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"10:45","end":"12:09","nowSeat" : "109","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"12:45","end":"14:09","nowSeat" : "99","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"16:45","end":"19:09","nowSeat" : "149","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '듄:파트2',
    "age" : "12",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"15:45","end":"17:09","nowSeat" : "125","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"18:15","end":"20:09","nowSeat" : "78","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"22:45","end":"24:15","nowSeat" : "99","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '랜드 오브 배드',
    "age" : "15",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"10:45","end":"12:45","nowSeat" : "5","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"17:25","end":"19:25","nowSeat" : "48","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"22:45","end":"24:45","nowSeat" : "232","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '밥 말리:원 러브',
    "age" : "15",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"19:45","end":"21:09","nowSeat" : "99","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"21:45","end":"23:09","nowSeat" : "149","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '메이 디셈버',
    "age" : "18",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"10:45","end":"13:09","nowSeat" : "200","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '레미제라블',
    "age" : "12",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"08:45","end":"10:15","nowSeat" : "09","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"10:45","end":"2:15","nowSeat" : "49","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '극장판 스파이 패밀리 코드 : 화이트',
    "age" : "12",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"17:45","end":"20:09","nowSeat" : "0","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"20:45","end":"23:09","nowSeat" : "210","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '가여운 것들',
    "age" : "18",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"10:45","end":"12:09","nowSeat" : "109","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"12:45","end":"14:09","nowSeat" : "99","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"16:45","end":"19:09","nowSeat" : "149","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '패스트 라이브즈',
    "age" : "12",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"10:45","end":"12:09","nowSeat" : "109","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"12:45","end":"14:09","nowSeat" : "99","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"16:45","end":"19:09","nowSeat" : "149","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '대결! 애니메이션',
    "age" : "12",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"10:45","end":"12:09","nowSeat" : "109","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"12:45","end":"14:09","nowSeat" : "99","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"16:45","end":"19:09","nowSeat" : "149","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  },
  {
    "movieName" : '웡카',
    "age" : "all",
    "imgSrc" : "abcd",
    "screen" : [
      {"start":"10:45","end":"12:09","nowSeat" : "109","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"12:45","end":"14:09","nowSeat" : "99","allSeat" : ":235","option" : "2D","theater" : "강남","hall" : '3관'},
      {"start":"16:45","end":"19:09","nowSeat" : "149","allSeat" : ":235","option" : "2D(자막)","theater" : "강남","hall" : '6관'}
    ],
  }
]

export default data

/*
  내 생각에 data를 몇개로 해야할지 잘 모르겠음.
  1안 데이터 3개
  영화데이터 []
  {
    영화명 string, 
    영어영화명 srting, 
    좋아요 number, 
    평점 number, 
    예매율 number, 
    누적관객수 number,
    포스터 이미지 string,
    명대사 srting,
    간략스토리 srting,
    상영타입(2D,2D ATOMS, 디지털가치봄) srting,
    감독,장르(장르/영화길이(number분)),등급(string 'xxx이상' 관람가),개봉일(yyyy.mm.dd),
    출연진 srting,
    관람평 - 글쓴이, 글쓴이썸네일, 평점, 관람포인트 - 관람평, 관람평등록일, 공감number
    무비포스트(사진올린 관람평느낌) // 안해도될듯이건
  }
  예매데이터 []
  {
    상영날 : string yyyy.mm.dd,
    영화이름 : string,
    등급 : string = x세 이상,
    상영타입 : string,
    극장 : string = 강남,
    관 : string = x관,
    포스터 : string = 이미지주소,
    시작시간 : string = hh:mm,
    끝나는시간 : string = hh:mm,
    남은자리수 : number,
    총자리수 : number,
    좌석데이터? : [{row : 1, column : 1, status : 'common'}]
  }
  극장데이터 []
  {
    city : string = 서울
    theater : []
  }

*/