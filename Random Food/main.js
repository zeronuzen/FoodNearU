// ====== 메뉴 데이터 ======
const MENU_DATA = {
    korean: {
        "25": [
            // 1 잔치국수 - 미아리우동집
            { 
                name: "잔치국수", 
                image: "images/images_1.png", 
                description: "속을 편안하게 달래주는 따뜻한 잔치국수.",
                restaurantTag: "miari_udong"
            },
            // 2 김밥 - 오공김밥
            { 
                name: "김밥", 
                image: "images/images_2.png", 
                description: "가볍게 먹기 좋은 한 줄 김밥!",
                restaurantTag: "ogong_gimbap"
            },
            // 3 칼국수 - 해성소바
            { 
                name: "칼국수", 
                image: "images/images_3.png", 
                description: "부드러운 면발과 국물이 일품인 칼국수.",
                restaurantTag: "haeseong_soba"
            },
            // 4 떡국 - 봉평메밀막국수
            { 
                name: "떡국", 
                image: "images/images_4.png", 
                description: "기분을 차분하게 해주는 따뜻한 국물과 쫄깃한 떡.",
                restaurantTag: "bongpyeong_makguksu"
            }
        ],
        "50": [
            // 5 비빔밥 - 대가락
            { 
                name: "비빔밥", 
                image: "images/images_5.png", 
                description: "여러 가지 나물을 쓱쓱 비벼 먹는 비빔밥!",
                restaurantTag: "daegarak"
            },
            // 6 된장찌개 - 안미정밥
            { 
                name: "된장찌개", 
                image: "images/images_6.png", 
                description: "구수한 된장찌개에 밥 한 공기면 든든!",
                restaurantTag: "anmi_jeongbap"
            },
            // 7 김치찌개 - 따뜻한 밥상
            { 
                name: "김치찌개", 
                image: "images/images_7.png", 
                description: "칼칼한 김치찌개로 기분 전환 ><",
                restaurantTag: "ttatteuthan_bapsang"
            },
            // 8 제육볶음 - 바우식당
            { 
                name: "제육볶음", 
                image: "images/images_8.png", 
                description: "매콤달콤한 제육볶음은 언제 먹어도 실패 불가.",
                restaurantTag: "bau_sikdang"
            }
        ],
        "75": [
            // 9 치킨마요덮밥 - 신혼부부
            { 
                name: "치킨마요덮밥", 
                image: "images/images_9.png", 
                description: "간편하면서도 든든한 치킨마요덮밥 한 그릇.",
                restaurantTag: "shinhon_bubu"
            },
            // 10 불고기덮밥 - 불백
            { 
                name: "불고기덮밥", 
                image: "images/images_10.png", 
                description: "달달한 불고기와 밥의 조합은 최고의 조합",
                restaurantTag: "bulbaek"
            },
            // 11 순두부찌개 - 고향두부촌
            { 
                name: "순두부찌개", 
                image: "images/images_11.png", 
                description: "부드러운 순두부와 얼큰한 국물이 찰떡궁합.",
                restaurantTag: "gohyang_dubu"
            },
            // 12 오징어볶음 - 조가네갑오징어
            { 
                name: "오징어볶음", 
                image: "images/images_12.png", 
                description: "살짝 매콤하게 입맛을 확 살려주는 메뉴.",
                restaurantTag: "jogane_gabojingeo"
            }
        ],
        "100": [
            // 13 삼겹살 - 삼겹살마니아
            { 
                name: "삼겹살", 
                image: "images/images_13.png", 
                description: "기분 최고! 노릇노릇 구운 삼겹살.",
                restaurantTag: "samgyeopsal_mania"
            },
            // 14 닭갈비 - 서기네 닭갈비
            { 
                name: "닭갈비", 
                image: "images/images_14.png", 
                description: "화끈하게 볶아 먹는 닭갈비로 스트레스도 날리기.",
                restaurantTag: "seogine_dakgalbi"
            },
            // 15 치킨 - 가장맛있는치킨
            { 
                name: "치킨", 
                image: "images/images_15.png", 
                description: "역시 치킨은 진리! 바삭함과 육즙을 동시에.",
                restaurantTag: "gajang_chicken"
            },
            // 16 곱창전골 - 원조황소곱창구이
            { 
                name: "곱창전골", 
                image: "images/images_16.png", 
                description: "특별한 날, 뜨끈한 곱창전골로 기분을 더 업!",
                restaurantTag: "hwangso_gopchang"
            }
        ]
    },
    western: {
        "25": [
            // 17 토마토 스프 - 카페디
            { 
                name: "토마토 스프", 
                image: "images/images_17.png", 
                description: "부드러운 토마토 스프로 속을 따뜻하게.",
                restaurantTag: "cafedi"
            },
            // 18 그릭 요거트 - 또릭요거트
            { 
                name: "그릭 요거트", 
                image: "images/images_18.png", 
                description: "가볍게 먹기 좋은 그릭 요거트와 과일.",
                restaurantTag: "ttorik_yogurt"
            },
            // 19 시저 샐러드 - 리아지노
            { 
                name: "시저 샐러드", 
                image: "images/images_19.png", 
                description: "부담 없이 샐러드로 가볍게 시작!",
                restaurantTag: "liagino"
            },
            // 20 치아바타 샌드위치 - 서곡리
            { 
                name: "치아바타 샌드위치", 
                image: "images/images_20.png", 
                description: "간단하면서도 든든한 샌드위치 한 입.",
                restaurantTag: "seogokri"
            }
        ],
        "50": [
            // 21 파스타 - 제이스22
            { 
                name: "파스타", 
                image: "images/images_21.png", 
                description: "크림 또는 토마토 파스타로 적당히 든든하게.",
                restaurantTag: "jace22"
            },
            // 22 리조또 - 살롱드림
            { 
                name: "리조또", 
                image: "images/images_22.png", 
                description: "부드러운 식감이 매력적인 리조또.",
                restaurantTag: "salonde_dream"
            },
            // 23 피자 한 판 - 르매지
            { 
                name: "피자 한 판", 
                image: "images/images_23.png", 
                description: "오늘은 친구들과 피자 먹기!",
                restaurantTag: "remaji"
            },
            // 24 라자냐 - 비터&스위트
            { 
                name: "라자냐", 
                image: "images/images_24.png", 
                description: "치즈와 소스가 층층이 쌓인 라자냐.",
                restaurantTag: "bitter_sweet"
            }
        ],
        "75": [
            // 25 버거 세트 - 롯데리아
            { 
                name: "버거 세트", 
                image: "images/images_25.png", 
                description: "프렌치프라이까지 포함된 버거 세트로 든든하게.",
                restaurantTag: "lotteria"
            },
            // 26 스테이크 - 쏘딜리셔스
            { 
                name: "스테이크", 
                image: "images/images_26.png", 
                description: "조금 특별하게, 스테이크로 기분 업!",
                restaurantTag: "sodelicious"
            },
            // 27 감바스 - 프로스트
            { 
                name: "감바스", 
                image: "images/images_27.png", 
                description: "올리브오일에 풍미 가득, 바게트와 함께.",
                restaurantTag: "frost"
            },
            // 28 크림 파스타 - 욜크
            { 
                name: "크림 파스타", 
                image: "images/images_28.png", 
                description: "진한 크림 파스타로 포만감도 채워봐요.",
                restaurantTag: "yolk"
            }
        ],
        "100": [
            // 29 더블 치즈버거 - 팻보이버거
            { 
                name: "더블 치즈버거", 
                image: "images/images_29.png", 
                description: "치즈 가득한 더블 버거로 제대로 한 끼!",
                restaurantTag: "fatboy_burger"
            },
            // 30 폭립 - 틴토
            { 
                name: "폭립", 
                image: "images/images_30.png", 
                description: "달콤 짭조름한 폭립으로 파티 분위기 내기.",
                restaurantTag: "tinto"
            },
            // 31 콤보 피자 - 제이스22
            { 
                name: "콤보 피자", 
                image: "images/images_31.png", 
                description: "토핑 잔뜩 얹은 콤보 피자 한 판!",
                restaurantTag: "jace22"
            },
            // 32 오일 파스타 + 샐러드 세트 - 르매지
            { 
                name: "오일 파스타 + 샐러드 세트", 
                image: "images/images_32.png", 
                description: "풍성한 양식 세트로 오늘 기분을 만끽해봐요.",
                restaurantTag: "remaji"
            }
        ]
    },
    japanese: {
        "25": [
            // 33 우동 - 느루카메
            { 
                name: "우동", 
                image: "images/images_33.png", 
                description: "담백한 국물이 일품인 따뜻한 우동.",
                restaurantTag: "nurukame"
            },
            // 34 미니 초밥 세트 - 김호권의청년어부 초밥
            { 
                name: "미니 초밥 세트", 
                image: "images/images_34.png", 
                description: "가볍게 초밥 몇 피스만 먹고 싶을 때.",
                restaurantTag: "cheongnyeon_eobu"
            },
            // 35 오니기리 - 히바나
            { 
                name: "오니기리", 
                image: "images/images_35.png", 
                description: "주먹밥으로 간단하게 한 끼 해결!",
                restaurantTag: "hibana"
            },
            // 36 가츠동 - 카쿠레가
            { 
                name: "가츠동", 
                image: "images/images_36.png", 
                description: "맛있는 가츠동.",
                restaurantTag: "kakurega"
            }
        ],
        "50": [
            // 37 규동 - 이치규
            { 
                name: "규동", 
                image: "images/images_37.png", 
                description: "달달한 소고기 덮밥으로 적당히 든든하게.",
                restaurantTag: "ichigyu"
            },
            // 38 연어 덮밥 - 핵밥
            { 
                name: "연어 덮밥", 
                image: "images/images_38.png", 
                description: "연어가 듬뿍 올라간 연어 덮밥.",
                restaurantTag: "haekbap"
            },
            // 39 돈코츠 라멘 - 멘야하코
            { 
                name: "돈코츠 라멘", 
                image: "images/images_39.png", 
                description: "진한 국물이 생각날 때 라멘 한 그릇.",
                restaurantTag: "menya_hako"
            },
            // 40 에비동 - 모리
            { 
                name: "에비동", 
                image: "images/images_40.png", 
                description: "바삭한 새우튀김이 올라간 덮밥.",
                restaurantTag: "mori"
            }
        ],
        "75": [
            // 41 모듬 초밥 세트 - 스시수
            { 
                name: "모듬 초밥 세트", 
                image: "images/images_41.png", 
                description: "다양한 초밥을 한 번에 즐기는 기분 좋은 세트.",
                restaurantTag: "sushisu"
            },
            // 42 가라아게 정식 - 핵밥
            { 
                name: "가라아게 정식", 
                image: "images/images_42.png", 
                description: "바삭한 가라아게와 밥, 미소시루까지 든든하게.",
                restaurantTag: "haekbap"
            },
            // 43 오므라이스 - 뜰
            { 
                name: "오므라이스", 
                image: "images/images_43.png", 
                description: "폭신한 계란 아래 숨겨진 케찹 볶음밥.",
                restaurantTag: "ddeul"
            },
            // 44 카레 라이스 - 카쿠레가
            { 
                name: "카레 라이스", 
                image: "images/images_44.png", 
                description: "부드러운 일본식 카레라이스 한 접시.",
                restaurantTag: "kakurega"
            }
        ],
        "100": [
            // 45 모듬 사시미 - 스미카라
            { 
                name: "모듬 사시미", 
                image: "images/images_45.png", 
                description: "오늘 기분 최고! 신선한 사시미로 럭셔리하게.",
                restaurantTag: "sumikara"
            },
            // 46 스페셜 초밥 세트 - 스시남
            { 
                name: "스페셜 초밥 세트", 
                image: "images/images_46.png", 
                description: "다양한 네타가 가득한 스페셜 초밥.",
                restaurantTag: "sushinam"
            },
            // 47 텐동 - 카쿠레가
            { 
                name: "텐동", 
                image: "images/images_47.png", 
                description: "바삭한 튀김이 듬뿍 올라간 텐동.",
                restaurantTag: "kakurega"
            },
            // 48 규카츠 - 이치규
            { 
                name: "규카츠", 
                image: "images/images_48.png", 
                description: "겉은 바삭, 속은 촉촉한 규카츠 정식.",
                restaurantTag: "ichigyu"
            }
        ]
    },
    chinese: {
        "25": [
            // 49 짬뽕 국물 - 와룡관
            { 
                name: "짬뽕 국물", 
                image: "images/images_49.png", 
                description: "속이 허할 땐 칼칼한 국물로만 살짝.",
                restaurantTag: "waryonggwan"
            },
            // 50 군만두 - 와룡관
            { 
                name: "군만두", 
                image: "images/images_50.png", 
                description: "배는 살짝 고픈데, 튀긴 만두 몇 개로 가볍게.",
                restaurantTag: "waryonggwan"
            },
            // 51 계란볶음밥 - 복만가마라탕
            { 
                name: "계란볶음밥", 
                image: "images/images_51.png", 
                description: "부담 없는 기본 계란볶음밥.",
                restaurantTag: "bokman_malatang"
            },
            // 52 탕수육(소) - 와룡관
            { 
                name: "탕수육(소)", 
                image: "images/images_52.png", 
                description: "소 사이즈 탕수육으로 가볍게 맛만 보기.",
                restaurantTag: "waryonggwan"
            }
        ],
        "50": [
            // 53 짜장면 - 만홍반점 원주점
            { 
                name: "짜장면", 
                image: "images/images_53.png", 
                description: "클래식은 역시 짜장면! 골고루 비벼서 한 입씩.",
                restaurantTag: "manhong_banjeom"
            },
            // 54 짬뽕 - 짬뽕맛집짬뽕타운본점
            { 
                name: "짬뽕", 
                image: "images/images_54.png", 
                description: "얼큰한 짬뽕으로 속까지 시원하게.",
                restaurantTag: "jjamppong_town"
            },
            // 55 볶음밥 + 짜장 소스 - 짬뽕마왕
            { 
                name: "볶음밥 + 짜장 소스", 
                image: "images/images_55.png", 
                description: "볶음밥과 짜장 소스의 완벽한 조합.",
                restaurantTag: "jjamppong_mawang"
            },
            // 56 마파두부 덮밥 - 대명부양꼬치 무실점
            { 
                name: "마파두부 덮밥", 
                image: "images/images_56.png", 
                description: "부드러운 두부와 매콤한 소스가 조화로운 메뉴.",
                restaurantTag: "daemyeong_buyang"
            }
        ],
        "75": [
            // 57 탕수육(중) - 중화문
            { 
                name: "탕수육(중)", 
                image: "images/images_57.png", 
                description: "친구와 함께 나눠 먹기 좋은 탕수육 중 사이즈.",
                restaurantTag: "junghwa_mun"
            },
            // 58 깐풍기 - 자스민
            { 
                name: "깐풍기", 
                image: "images/images_58.png", 
                description: "바삭한 닭에 매콤한 소스가 어우러진 깐풍기.",
                restaurantTag: "jasmine"
            },
            // 59 팔보채 - 백리향
            { 
                name: "팔보채", 
                image: "images/images_59.png", 
                description: "해산물과 채소가 듬뿍 들어간 팔보채.",
                restaurantTag: "baekrihyang"
            },
            // 60 유린기 - 한성중화요리친동생 무실점
            { 
                name: "유린기", 
                image: "images/images_60.png", 
                description: "새콤짭짤한 소스가 특징인 유린기.",
                restaurantTag: "hanseong_chinese"
            }
        ],
        "100": [
            // 61 코스 요리 - 티엔
            { 
                name: "코스 요리", 
                image: "images/images_61.png", 
                description: "오늘은 제대로 먹는다! 중식 코스 요리.",
                restaurantTag: "tien"
            },
            // 62 양장피 - 한성중화요리친동생 무실점
            { 
                name: "양장피", 
                image: "images/images_62.png", 
                description: "다양한 재료가 어우러진 양장피로 파티 분위기.",
                restaurantTag: "hanseong_chinese"
            },
            // 63 고추잡채 + 꽃빵 - 팔선
            { 
                name: "고추잡채 + 꽃빵", 
                image: "images/images_63.png", 
                description: "고추잡채를 폭신한 꽃빵에 싸서 먹는 즐거움.",
                restaurantTag: "palseon"
            },
            // 64 대왕 탕수육 - 원주뚝배기짬뽕본점
            { 
                name: "대왕 탕수육", 
                image: "images/images_64.png", 
                description: "푸짐한 양의 탕수육으로 기분 100% 채우기!",
                restaurantTag: "wonju_ttukbaegi"
            }
        ]
    }
};
// ↑ 여기까지가 MENU_DATA 전체, 마지막에 ;까지 포함된 상태!

/* ================================
   2) 맛집 데이터 (음식별 세분화)
================================ */

const RESTAURANT_DATA = {
    // 1 잔치국수 - 미아리우동집
    miari_udong: [
        {
            name: "미아리우동집",
            description: "잔치국수가 유명한 집 · 강원 원주시 북원로 2235-4 상가동 110호"
        }
    ],

    // 2 김밥 - 오공김밥
    ogong_gimbap: [
        {
            name: "오공김밥",
            description: "김밥으로 인기 많은 분식집 · 강원 원주시 능라동길 47 1층 109호"
        }
    ],

    // 3 칼국수 - 해성소바
    haeseong_soba: [
        {
            name: "해성소바",
            description: "칼국수와 메밀요리가 유명한 집 · 강원 원주시 만대공원길 8-10 1층 107,108호"
        }
    ],

    // 4 떡국 - 봉평메밀막국수
    bongpyeong_makguksu: [
        {
            name: "봉평메밀막국수",
            description: "떡국과 메밀막국수를 즐길 수 있는 곳 · 강원 원주시 중앙시장길 35-1"
        }
    ],

    // 5 비빔밥 - 대가락
    daegarak: [
        {
            name: "대가락",
            description: "비빔밥 등 한식 메뉴 전문 · 강원 원주시 만대로 92 102호"
        }
    ],

    // 6 된장찌개 - 안미정밥
    anmi_jeongbap: [
        {
            name: "안미정밥",
            description: "된장찌개와 집밥 느낌의 한식당 · 강원 원주시 판부면 매봉길 36-15 1층"
        }
    ],

    // 7 김치찌개 - 따뜻한 밥상
    ttatteuthan_bapsang: [
        {
            name: "따뜻한 밥상",
            description: "김치찌개가 인기인 집밥 식당 · 강원 원주시 매봉길 10-14 1층"
        }
    ],

    // 8 제육볶음 - 바우식당
    bau_sikdang: [
        {
            name: "바우식당",
            description: "제육볶음으로 유명한 식당 · 강원 원주시 남원로 53"
        }
    ],

    // 9 치킨마요덮밥 - 신혼부부
    shinhon_bubu: [
        {
            name: "신혼부부",
            description: "덮밥 메뉴가 인기인 식당 · 강원 원주시 중앙시장길 11 자유상가 지하 2-2"
        }
    ],

    // 10 불고기덮밥 - 불백
    bulbaek: [
        {
            name: "불백",
            description: "불고기덮밥 전문점 · 강원 원주시 무실동본길 32 1층"
        }
    ],

    // 11 순두부찌개 - 고향두부촌
    gohyang_dubu: [
        {
            name: "고향두부촌",
            description: "순두부찌개와 두부 요리 전문 · 강원 원주시 단관길 129 1층"
        }
    ],

    // 12 오징어볶음 - 조가네갑오징어
    jogane_gabojingeo: [
        {
            name: "조가네갑오징어 원주점",
            description: "오징어볶음이 맛있는 곳 · 강원 원주시 판부면 내남송길 98-7"
        }
    ],

    // 13 삼겹살 - 삼겹살마니아
    samgyeopsal_mania: [
        {
            name: "삼겹살마니아",
            description: "삼겹살 전문 고기집 · 강원 원주시 흥업면 세동길 10-31"
        }
    ],

    // 14 닭갈비 - 서기네 닭갈비
    seogine_dakgalbi: [
        {
            name: "서기네 닭갈비",
            description: "닭갈비가 대표 메뉴인 집 · 강원 원주시 만대공원길 10 102호"
        }
    ],

    // 15 치킨 - 가장맛있는치킨
    gajang_chicken: [
        {
            name: "가장맛있는치킨",
            description: "치킨 전문점 · 강원 원주시 흥업면 북원로 1416 1층"
        }
    ],

    // 16 곱창전골 - 원조황소곱창구이
    hwangso_gopchang: [
        {
            name: "원조황소곱창구이",
            description: "곱창전골과 곱창구이가 인기인 곳 · 강원 원주시 봉바위길 36"
        }
    ],

    // 17 토마토 스프 - 카페디
    cafedi: [
        {
            name: "카페디",
            description: "토마토 스프 등 브런치 카페 · 강원 원주시 단구동 1585-1"
        }
    ],

    // 18 그릭 요거트 - 또릭요거트
    ttorik_yogurt: [
        {
            name: "또릭요거트",
            description: "그릭 요거트 전문 카페 · 강원 원주시 흥업면 세동길 22 1층"
        }
    ],

    // 19 시저샐러드 - 리아지노
    liagino: [
        {
            name: "리아지노",
            description: "시저샐러드 등 샐러드 메뉴 · 강원 원주시 혁신로 53 1층 105호"
        }
    ],

    // 20 치아바타 샌드위치 - 서곡리
    seogokri: [
        {
            name: "서곡리",
            description: "치아바타 샌드위치 등을 파는 카페 · 강원 원주시 판부면 매봉길 16-15 1층"
        }
    ],

    // 21,31 파스타/콤보피자 - 제이스22
    jace22: [
        {
            name: "제이스22",
            description: "파스타와 피자 메뉴가 인기인 곳 · 강원 원주시 흥업면 매남동길 2-8"
        }
    ],

    // 22 리조또 - 살롱드림
    salonde_dream: [
        {
            name: "살롱드림",
            description: "리조또와 양식 메뉴 · 강원 원주시 능라동길 26 메인스퀘어 205호"
        }
    ],

    // 23,32 피자/오일파스타 - 르매지
    remaji: [
        {
            name: "르매지",
            description: "피자와 파스타를 즐길 수 있는 곳 · 강원 원주시 흥업면 북원로 1412-5"
        }
    ],

    // 24 라자냐 - 비터&스위트
    bitter_sweet: [
        {
            name: "비터&스위트",
            description: "라자냐가 인기인 카페 · 강원 원주시 은행정길 85 1층"
        }
    ],

    // 25 버거 세트 - 롯데리아
    lotteria: [
        {
            name: "롯데리아",
            description: "버거 세트로 간단히 한 끼 · 강원 원주시 흥업면 남원로 52-5"
        }
    ],

    // 26 스테이크 - 쏘딜리셔스
    sodelicious: [
        {
            name: "쏘딜리셔스",
            description: "스테이크와 다양한 요리를 즐길 수 있는 곳 · 강원 원주시 만대로 196-9"
        }
    ],

    // 27 감바스 - 프로스트
    frost: [
        {
            name: "프로스트",
            description: "감바스가 인기인 다이닝 펍 · 강원 원주시 감영길 28 1층"
        }
    ],

    // 28 크림파스타 - 욜크
    yolk: [
        {
            name: "욜크",
            description: "크림파스타 등 브런치·파스타 카페 · 강원 원주시 만대공원길 50 1층"
        }
    ],

    // 29 더블치즈버거 - 팻보이버거
    fatboy_burger: [
        {
            name: "팻보이버거",
            description: "수제 더블치즈버거 전문 · 강원 원주시 서원대로 383 1층 110호"
        }
    ],

    // 30 폭립 - 틴토
    tinto: [
        {
            name: "틴토",
            description: "폭립과 와인이 유명한 곳 · 강원 원주시 능라동길 51 1층 132호"
        }
    ],

    // 33 우동 - 느루카메
    nurukame: [
        {
            name: "느루카메",
            description: "우동과 일본식 면요리 전문 · 강원 원주시 웅비3길 26 1층"
        }
    ],

    // 34 미니 초밥 세트 - 김호권의청년어부 초밥
    cheongnyeon_eobu: [
        {
            name: "김호권의청년어부 초밥",
            description: "초밥이 인기인 초밥집 · 강원 원주시 서원대로 392 1층 110호"
        }
    ],

    // 35 오니기리 - 히바나
    hibana: [
        {
            name: "히바나",
            description: "오니기리와 일본 가정식 · 강원 원주시 토지길 31-29 101호"
        }
    ],

    // 39 돈코츠라멘 - 멘야하코
    menya_hako: [
        {
            name: "멘야하코",
            description: "돈코츠 라멘 전문 라멘집 · 강원 원주시 능라동길 37 1층 106호"
        }
    ],

    // 40. 에비동 - 모리
    mori: [
        {
            name: "모리",
            description: "에비동이 유명한 식당 · 강원 원주시 버들만이길 12-1 1층"
        }
    ],

    // 41. 모듬 초밥 세트 - 스시수
    sushisu: [
        {
            name: "스시수",
            description: "모듬 초밥 세트가 인기인 초밥집 · 강원 원주시 토지길 59-2"
        }
    ],

    // 42. 가라아게 정식 - 핵밥
    haekbap: [
        {
            name: "핵밥",
            description: "가라아게 정식과 덮밥이 인기인 식당 · 강원 원주시 섬밭들1길 34 1층"
        }
    ],

    // 43. 오므라이스 - 뜰
    ddeul: [
        {
            name: "뜰",
            description: "오므라이스를 즐길 수 있는 식당 · 강원 원주시 봉대길 41-1 1층"
        }
    ],

    // 44, 47. 카레라이스 / 텐동 - 카쿠레가
    kakurega: [
        {
            name: "카쿠레가",
            description: "가츠동, 카레, 텐동 등 일본 가정식 메뉴 · 강원 원주시 능라동길 37 1층 102호"
        }
    ],

    // 45. 모듬 사시미 - 스미카라
    sumikara: [
        {
            name: "스미카라",
            description: "모듬 사시미를 즐길 수 있는 이자카야 · 강원 원주시 지정면 신지정로 169-1 1층"
        }
    ],

    // 46. 스페셜 초밥 세트 - 스시남
    sushinam: [
        {
            name: "스시남",
            description: "스페셜 초밥 세트가 인기인 초밥집 · 강원 원주시 서원대로 121-12 1층"
        }
    ],

    // 48. 규카츠 - 이치규
    ichigyu: [
        {
            name: "이치규",
            description: "규카츠와 규동 전문점 · 강원 원주시 능라동길 51 135호, 136호"
        }
    ],

    // 49,50,52. 짬뽕 국물 / 군만두 / 탕수육(소) - 와룡관
    waryonggwan: [
        {
            name: "와룡관",
            description: "짬뽕, 군만두, 탕수육 등 중식 메뉴 · 강원 원주시 흥업면 세동길 10-24 1층"
        }
    ],

    // 51. 계란볶음밥 - 복만가마라탕
    bokman_malatang: [
        {
            name: "복만가마라탕",
            description: "계란볶음밥과 마라탕을 즐길 수 있는 곳 · 강원 원주시 영랑길 20-1 상가 121동 1층 103호"
        }
    ],

    // 53. 짜장면 - 만홍반점 원주점
    manhong_banjeom: [
        {
            name: "만홍반점 원주점",
            description: "짜장면이 인기인 중식당 · 강원 원주시 천매봉길 65 1층"
        }
    ],

    // 54. 짬뽕 - 짬뽕맛집짬뽕타운본점
    jjamppong_town: [
        {
            name: "짬뽕맛집짬뽕타운본점",
            description: "짬뽕 전문 중식당 · 강원 원주시 흥업면 흥업밤골길 4-4"
        }
    ],

    // 55. 볶음밥+짜장소스 - 짬뽕마왕
    jjamppong_mawang: [
        {
            name: "짬뽕마왕",
            description: "볶음밥과 짬뽕, 짜장 소스로 유명한 곳 · 강원 원주시 흥업면 사제로 7-1 1층"
        }
    ],

    // 56. 마파두부 덮밥 - 대명부양꼬치 무실점
    daemyeong_buyang: [
        {
            name: "대명부양꼬치 무실점",
            description: "마파두부와 꼬치 요리 전문 · 강원 원주시 봉바위길 5-1"
        }
    ],

    // 57. 탕수육(중) - 중화문
    junghwa_mun: [
        {
            name: "중화문",
            description: "탕수육이 맛있는 중식당 · 강원 원주시 로아노크로 8"
        }
    ],

    // 58. 깐풍기 - 자스민
    jasmine: [
        {
            name: "자스민",
            description: "깐풍기와 다양한 중식 요리 · 강원 원주시 섬밭들2길 20-1"
        }
    ],

    // 59. 팔보채 - 백리향
    baekrihyang: [
        {
            name: "백리향",
            description: "팔보채 등 해산물 중식요리 · 강원 원주시 나비허리길 122 101호"
        }
    ],

    // 60,62. 유린기/양장피 - 한성중화요리친동생 무실점
    hanseong_chinese: [
        {
            name: "한성중화요리친동생 무실점",
            description: "유린기와 양장피 등 다양한 중식 요리 · 강원 원주시 능라동길 47 204호"
        }
    ],

    // 61. 코스 요리 - 티엔
    tien: [
        {
            name: "티엔",
            description: "코스 요리로 즐기는 중식당 · 강원 원주시 한지공원길 25-7"
        }
    ],

    // 63. 고추잡채+꽃빵 - 팔선
    palseon: [
        {
            name: "팔선",
            description: "고추잡채와 꽃빵이 유명한 중식당 · 강원 원주시 봉바위길 8"
        }
    ],

    // 64. 대왕 탕수육 - 원주뚝배기짬뽕본점
    wonju_ttukbaegi: [
        {
            name: "원주뚝배기짬뽕본점",
            description: "대왕 탕수육과 짬뽕 전문 · 강원 원주시 봉바위길 41 1층"
        }
    ]
};


/* ================================
     3) 화면 로딩별 기능 처리
================================ */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- index.html (start) ---------- */
    const startBtn = document.querySelector('[data-role="start-btn"]');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            window.location.href = "choose.html";
        });
    }

    /* ---------- choose.html ---------- */
    const cuisineBtns = document.querySelectorAll('[data-cuisine]');
    if (cuisineBtns.length > 0) {
        cuisineBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const type = this.dataset.cuisine;
                localStorage.setItem("selectedCuisine", type);
                window.location.href = "mood.html";
            });
        });
    }

    /* ---------- mood.html ---------- */
    const moodSegments = document.querySelectorAll('.mood-segment');
    const moodSubmit = document.querySelector('[data-role="mood-submit"]');

    if (moodSegments.length > 0 && moodSubmit) {
        const segments = Array.from(moodSegments);

        segments.forEach(seg => {
            seg.addEventListener("click", function () {
                const idx = segments.indexOf(this);

                segments.forEach((s, i) => {
                    if (i <= idx) s.classList.add("filled");
                    else s.classList.remove("filled");
                });

                localStorage.setItem("selectedMood", this.dataset.mood);
            });
        });

        moodSubmit.addEventListener("click", function () {
            const cuisine = localStorage.getItem("selectedCuisine");
            const mood = localStorage.getItem("selectedMood");

            if (!cuisine || !mood) {
                alert("음식 종류와 기분을 모두 선택해주세요!");
                return;
            }

            const list = MENU_DATA[cuisine] && MENU_DATA[cuisine][mood];
            if (!list || list.length === 0) {
                alert("해당 조건에 맞는 메뉴가 없어요 ㅠㅠ");
                return;
            }

            const randomIndex = Math.floor(Math.random() * list.length);
            const chosen = list[randomIndex];

            localStorage.setItem("selectedMenu", JSON.stringify(chosen));
            window.location.href = "result.html";
        });
    }

    /* ---------- result.html ---------- */
    const resultImage = document.querySelector('[data-role="result-image"]');
    const resultName = document.querySelector('[data-role="result-name"]');
    const resultDesc = document.querySelector('[data-role="result-desc"]');
    const restartBtn = document.querySelector('[data-role="restart-btn"]');
    const restaurantBtn = document.querySelector('[data-role="restaurant-btn"]');

    if (resultImage && resultName && resultDesc) {
        const storedMenu = localStorage.getItem("selectedMenu");

        if (storedMenu) {
            const menu = JSON.parse(storedMenu);
            resultImage.src = menu.image;
            resultName.textContent = menu.name;
            resultDesc.textContent = menu.description;
        }
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            localStorage.removeItem("selectedCuisine");
            localStorage.removeItem("selectedMood");
            localStorage.removeItem("selectedMenu");
            window.location.href = "index.html";
        });
    }

    if (restaurantBtn) {
        restaurantBtn.addEventListener('click', () => {
            window.location.href = "restaurant.html";
        });
    }

    /* ---------- restaurant.html ---------- */
    const restaurantList = document.querySelector('[data-role="restaurant-list"]');
    const selectedMenuName = document.querySelector('[data-role="selected-menu-name"]');
    const restaurantBackBtn = document.querySelector('[data-role="restaurant-back-result"]');
    const restaurantRestartBtn = document.querySelector('[data-role="restaurant-restart"]');

    if (restaurantList && selectedMenuName) {
        const storedMenu = localStorage.getItem("selectedMenu");

        if (!storedMenu) {
            alert("메뉴 정보가 없습니다.");
            window.location.href = "index.html";
            return;
        }

        const menu = JSON.parse(storedMenu);
        selectedMenuName.textContent = menu.name;

        const tag = menu.restaurantTag;
        const list = RESTAURANT_DATA[tag] || [];

        restaurantList.innerHTML = "";

        if (list.length === 0) {
            restaurantList.innerHTML = "<li>해당 메뉴와 연결된 맛집 정보가 없어요 😢</li>";
        } else {
            list.forEach(r => {
                const li = document.createElement("li");
                li.className = "restaurant-item";

                // 🔗 구글 지도 검색용 URL 만들기
                const query = encodeURIComponent(r.name + " 원주");
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

                li.innerHTML = `
                    <div class="restaurant-name">${r.name}</div>
                    <div class="restaurant-desc">${r.description}</div>
                    <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="restaurant-map-link">
                        구글 지도에서 위치 보기
                    </a>
                `;
                restaurantList.appendChild(li);
            });
        }
    }

    if (restaurantBackBtn) {
        restaurantBackBtn.addEventListener('click', () => {
            window.location.href = "result.html";
        });
    }

    if (restaurantRestartBtn) {
        restaurantRestartBtn.addEventListener('click', () => {
            localStorage.removeItem("selectedCuisine");
            localStorage.removeItem("selectedMood");
            localStorage.removeItem("selectedMenu");
            window.location.href = "index.html";
        });
    }

});
