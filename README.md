## 🧸 라이즈 채팅 시뮬레이터
https://chat-riize.vercel.app/

RIIZE 멤버들과 감정선 기반 대화를 나눠보는 시뮬레이터입니다.  
선택에 따라 다른 반응과 결말을 볼 수 있어요! 💬

## 🖼️ 시뮬레이터 미리보기 👇
<!-- 첫 번째 이미지 -->
<!-- <div align="center" style="margin-bottom: 30px;">
  <img src="https://raw.githubusercontent.com/leeje0506/chatRIIZE/main/chat-simulator/public/images/readme/1.png" width="750" />
</div> -->

<!-- 두 번째~네 번째 이미지 -->
<div align="center">
  <img src="https://raw.githubusercontent.com/leeje0506/chatRIIZE/main/chat-simulator/public/images/readme/2.png" width="250" />
  <img src="https://raw.githubusercontent.com/leeje0506/chatRIIZE/main/chat-simulator/public/images/readme/3.png" width="250" />
  <img src="https://raw.githubusercontent.com/leeje0506/chatRIIZE/main/chat-simulator/public/images/readme/4.png" width="250" />
</div>

### 🔁 다시 시작도 가능!

선택에 따라 다양한 결말을 볼 수 있고,  
마지막엔 따로 준비한 엔딩 이미지도 확인할 수 있어요.


---

## 🛠 사용 기술 및 배포 환경

| 구분        | 내용                                 |
|-------------|--------------------------------------|
| **언어**     | JavaScript                           |
| **라이브러리** | React, React Router DOM             |
| **스타일링**  | CSS (inline style), emoji 활용       |
| **사운드**  | [mixkit](https://mixkit.co/free-sound-effects/discover/message/) 활용       |
| **배포**     | [Vercel](https://vercel.com/)        |
| **기타**     | GitHub Pages 프리뷰 이미지 / 리다이렉트 없음 |



### 📁 디렉터리 구조 (간략)


```
chatRIIZE/
├── public/
│   └── images/
│       ├── endings/             // 엔딩 이미지 저장
│       └── readme/              // README용 미리보기 이미지
├── src/
│   ├── components/
│   │   ├── ChatRoom.jsx         // 메인 채팅 컴포넌트
│   │   ├── MessageBubble.jsx    // 말풍선 컴포넌트
│   │   └── ChoiceButtons.jsx    // 선택지 버튼 컴포넌트
│   └── data/
│       ├── scenario-sc.json     // 성찬 시나리오
│       ├── scenario-es.json     // 은석 시나리오
│       └── scenario-at.json     // 앤톤 시나리오
├── App.jsx                      // 라우팅 및 전체 구조
└── index.jsx                    // 렌더링 엔트리 포인트
```
---

### ✨ 기타

- 시나리오는 JSON 기반 분기형 구조로 설계
- 결말마다 다른 이미지 출력
- 로딩 애니메이션(…) 처리 및 선택지 기반 진행
- 말풍선 및 프로필 스타일링 커스터마이징
