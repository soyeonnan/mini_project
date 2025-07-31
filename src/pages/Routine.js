export const routineTime = [
{
  level: '초보자',
  frequency: '주 3회 (월,수,금)',
  description: '전신 운동 (풀 바디)',
  sets: 3, // 모든 운동 공통
  schedule: [
    {
      day: '월',
      part: '전신',
      restTimeBetweenSets: 60,  // 모든 운동 공통 휴식시간 (초)
      sets: 3, //세트
      exercises: [ 
        {
          name: '스쿼트',
          reps: 12, //횟수
          workTime: 36,   //운동시간        
          note: '하체, 맨몸'
        },
        {
          name: '푸쉬업(무릎 가능)',
          reps: 12,
          workTime: 30,
          note: '가슴/팔'
        },
        {
          name: '플랭크',
          duration: 20,    //20초       
          workTime: 20,
          note: '복부 코어'
        },
        {
          name: '런지',
          reps: 10,
          workTime: 60,
          note: '전신 안정화'
        }],
      
      workTime: 20,              // 운동 1세트 기준 평균 수행 시간 (초)
      restTimeBetweenSets: 60,   // 세트 사이 휴식 시간 (초)
      note: '맨몸 위주, 천천히 정확하게 수행'
    },

    {
  day: '수',
  part: '전신',
  restTimeBetweenSets: 60,   // 공통 휴식 시간 (초)
  note: '균형감과 코어 자극에 집중',
  exercises: [
    {
      name: '런지',
      reps: 20,              // 양쪽 각 10회
      workTime: 60,          // 3초 × 20회 (양쪽 합산)
      note: '균형감각'
    },
    {
      name: '슈퍼맨 자세',
      reps: 12,
      workTime: 36,          // 3초 × 12회
      note: '척추 기립근 강화'
    },
    {
      name: '버드독',
      reps: 20,              // 좌우 각 10회
      workTime: 60,          // 3초 × 20회
      note: '코어 + 균형'
    },
    {
      name: '사이드 플랭크',
      duration: 30,          // 한 쪽당 15초
      workTime: 30,          // 총 30초 (양쪽 합산)
      note: '측면 복부 강화'
    }
    
  ] },

   {
  day: '금',
  part: '전신',
  restTimeBetweenSets: 60,   // 공통 휴식 시간 (초)
  note: '운동 후 스트레칭 필수, 유산소처럼 움직이기',
  exercises: [
    {
      name: '브릿지',
      reps: 12,               // 평균 10~15회 기준
      workTime: 36,           // 3초 × 12회
      note: '엉덩이 및 햄스트링 자극'
    },
    {
      name: '스텝업',
      reps: 12,               // 평균
      workTime: 72,           // 3초 × 12회 × 양쪽
      note: '하체 + 균형'
    },
    {
      name: '마운틴 클라이머',
      reps: 20,               // 빠르게 20회 기준
      workTime: 40,           // 2초 × 20회
      note: '코어 + 유산소 자극'
    },
    {
      name: '벽 푸쉬업',
      reps: 15,               // 맨몸 고정
      workTime: 45,           // 3초 × 15회
      note: '상체 기초 근력 강화'
    }
  ]
}
  ]
},


{
  level: '중급자',
  frequency: '주 4~5회',
  description: '분할 운동 (상체/하체)',
  sets: 4, // 모든 운동 공통
  restTimeBetweenSets: 90, // 초 단위 공통
  schedule: [
    {
      day: '월',
      part: '상체 (가슴, 등)',
      note: '중간 무게, 폼 집중',
      exercises: [
        {
          name: '벤치프레스',
          reps: 9,
          workTime: 36,
          note: '가슴 근육 강화'
        },
        {
          name: '랫풀다운',
          reps: 9,
          workTime: 36,
          note: '광배근 자극'
        },
        {
          name: '덤벨 플라이',
          reps: 9,
          workTime: 36,
          note: '가슴 안쪽 자극'
        },
        {
          name: '바벨로우',
          reps: 9,
          workTime: 36,
          note: '등 상부 자극'
        }
      ]
    },
    {
      day: '화',
      part: '하체',
      note: '근력과 근지구력 함께 강화',
      exercises: [
        {
          name: '스쿼트',
          reps: 9,
          workTime: 36,
          note: '하체 전반 자극'
        },
        {
          name: '레그프레스',
          reps: 9,
          workTime: 36,
          note: '허벅지 근육 집중'
        },
        {
          name: '루마니안 데드리프트',
          reps: 9,
          workTime: 36,
          note: '햄스트링 강화'
        },
        {
          name: '런지',
          reps: 9,
          workTime: 54,
          note: '균형 및 하체 집중 (양 다리 포함)'
        }
      ]
    },
    {
      day: '수',
      part: '휴식 또는 유산소',
      note: '회복 및 심폐 강화',
      exercises: [
        {
          name: '걷기',
          duration: 1200, // 20분
          note: '저강도 회복 운동'
        },
        {
          name: '사이클',
          duration: 1200, // 20분
          note: '유산소 강화'
        }
      ]
    },
    {
      day: '목',
      part: '상체 (어깨, 팔)',
      note: '자세와 범위에 집중',
      exercises: [
        {
          name: '숄더프레스',
          reps: 9,
          workTime: 36,
          note: '어깨 전면 강화'
        },
        {
          name: '사이드 레터럴 레이즈',
          reps: 9,
          workTime: 36,
          note: '측면 어깨 자극'
        },
        {
          name: '바벨컬',
          reps: 9,
          workTime: 36,
          note: '이두근 강화'
        },
        {
          name: '트라이셉스 익스텐션',
          reps: 9,
          workTime: 36,
          note: '삼두근 강화'
        }
      ]
    },
    {
      day: '금',
      part: '하체 + 코어',
      note: '코어 강화 및 하체 보완',
      exercises: [
        {
          name: '레그 컬',
          reps: 9,
          workTime: 36,
          note: '햄스트링 분리 운동'
        },
        {
          name: '힙 쓰러스트',
          reps: 9,
          workTime: 36,
          note: '둔근 집중'
        },
        {
          name: '플랭크',
          duration: 30,
          note: '코어 고정 강화'
        },
        {
          name: '러시안 트위스트',
          duration: 30,
          note: '코어 회전 자극'
        }
      ]
    }
  ]
},

{
  level: '고급자',
  frequency: '주 5~6회',
  description: '고강도 분할 운동 + 유산소 혼합',
  sets: 5, // 공통 세트 수
  restTimeBetweenSets: 90, // 초 (고강도라 짧게)
  schedule: [
    {
      day: '월',
      part: '가슴 + 삼두',
      note: '고중량, 휴식 60~90초',
      exercises: [
        { name: '벤치프레스', reps: 7, workTime: 35, note: '가슴 전면 고중량' },
        { name: '인클라인 벤치프레스', reps: 7, workTime: 35, note: '상부 가슴 집중' },
        { name: '딥스', reps: 7, workTime: 35, note: '체중 부하 삼두/가슴' },
        { name: '트라이셉스 푸쉬다운', reps: 7, workTime: 35, note: '삼두근 고립' }
      ]
    },
    {
      day: '화',
      part: '등 + 이두',
      note: '중량 점진적 증가',
      exercises: [
        { name: '데드리프트', reps: 7, workTime: 42, note: '전신 힘 및 등 하부' },
        { name: '바벨로우', reps: 7, workTime: 35, note: '등 두께 강화' },
        { name: '랫풀다운', reps: 7, workTime: 35, note: '광배근 집중' },
        { name: '바벨컬', reps: 7, workTime: 35, note: '이두근 집중' },
        { name: '해머컬', reps: 7, workTime: 35, note: '팔뚝 및 이두 강화' }
      ]
    },
    {
      day: '수',
      part: '하체 + 코어',
      note: '코어 운동 집중',
      exercises: [
        { name: '스쿼트', reps: 7, workTime: 42, note: '하체 전반 고중량' },
        { name: '레그프레스', reps: 7, workTime: 35, note: '대퇴사두 집중' },
        { name: '루마니안 데드리프트', reps: 7, workTime: 35, note: '햄스트링 & 둔근' },
        { name: '플랭크', duration: 45, note: '코어 안정화' },
        { name: '러시안 트위스트', duration: 30, note: '코어 회전 자극' }
      ]
    },
    {
      day: '목',
      part: '어깨 + 유산소',
      note: '유산소 포함, 심폐 강화',
      exercises: [
        { name: '밀리터리 프레스', reps: 7, workTime: 35, note: '전면 어깨 고중량' },
        { name: '사이드 레터럴 레이즈', reps: 7, workTime: 35, note: '측면 어깨 분리' },
        { name: '페이스 풀', reps: 7, workTime: 35, note: '후면 어깨 및 자세 개선' },
        { name: '러닝 또는 HIIT', duration: 1200, note: '20분 고강도 유산소' }
      ]
    },
    {
      day: '금',
      part: '전신 서킷 트레이닝',
      note: '최대한 빠른 템포, 심폐 집중',
      sets: 5, // 서킷은 별도로 명시
      restTimeBetweenSets: 15, // 짧은 휴식
      exercises: [
        { name: '버피', duration: 30, note: '전신 심폐 강화' },
        { name: '케틀벨 스윙', duration: 30, note: '하체 및 코어' },
        { name: '점핑 런지', duration: 30, note: '하체 폭발력' },
        { name: '마운틴 클라이머', duration: 30, note: '코어 및 유산소' },
        { name: '푸쉬업', duration: 30, note: '상체 및 체중운동' }
      ]
    },
    {
      day: '토',
      part: '회복',
      sets: null,
      restTimeBetweenSets: null,
      note: '가벼운 회복 운동 또는 휴식',
      exercises: [
        { name: '스트레칭', duration: 600, note: '근육 이완' },
        { name: '요가', duration: 900, note: '유연성 향상' }
      ]
    },
    {
      day: '일',
      part: '자유 운동 / 휴식',
      sets: null,
      restTimeBetweenSets: null,
      note: '유연성 및 회복 중심',
      exercises: [
        { name: '자유 운동', duration: null, note: '자가 선택 루틴' }
      ]
    }
  ]
}
]