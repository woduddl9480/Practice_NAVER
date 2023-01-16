// 세로방향 슬라이드
let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true, // 슬라이드 반복 여부
  freeMode: true, // 슬라이드 넘길 때 위치 고정 여부
  autoHeight: true, // 현재 활성 슬라이드높이 맞게 높이조정
});

// var array = [
//   {
//     "girl": {
//       "name": "손예진",
//       "birthday": "1982.01.11"
//     },
//     "boy": {
//       "name": "현빈",
//       "birthday": "1982.09.25"
//     }
//   },
//   {
//     "girl": {
//       "name": "정호연",
//       "birthday": "1982.06.23"
//     },
//     "boy": {
//       "name": "이동휘",
//       "birthday": "1985.07.22"
//     }
//   },
//   {
//     "girl": {
//       "name": "나경은",
//       "birthday": "1981.06.04"
//     },
//     "boy": {
//       "name": "유재석",
//       "birthday": "1972.08.14"
//     }
//   },
//   {
//     "girl": {
//       "name": "김태희",
//       "birthday": "1980.03.29"
//     },
//     "boy": {
//       "name": "비",
//       "birthday": "1982.06.25"
//     }
//   },
//   {
//     "girl": {
//       "name": "이정재",
//       "birthday": "1972.12.15"
//     },
//     "boy": {
//       "name": "정우성",
//       "birthday": "1973.04.22"
//     }
//   },
//   {
//     "girl": {
//       "name": "혜리",
//       "birthday": "1994.06.09"
//     },
//     "boy": {
//       "name": "류준열",
//       "birthday": "1986.09.25"
//     }
//   },
//   {
//     "girl": {
//       "name": "진아름",
//       "birthday": "1989.11.09"
//     },
//     "boy": {
//       "name": "남궁민",
//       "birthday": "1978.03.12"
//     }
//   },
//   {
//     "girl": {
//       "name": "신민아",
//       "birthday": "1984.04.05"
//     },
//     "boy": {
//       "name": "김우빈",
//       "birthday": "1989.07.16"
//     }
//   },
//   {
//     "girl": {
//       "name": "수영",
//       "birthday": "1990.02.10"
//     },
//     "boy": {
//       "name": "정경호",
//       "birthday": "1983.08.31"
//     }
//   },
//   {
//     "girl": {
//       "name": "백진희",
//       "birthday": "1990.02.08"
//     },
//     "boy": {
//       "name": "윤현민",
//       "birthday": "1985.04.15"
//     }
//   }
// ]

//   console.log(array[7].boy)
