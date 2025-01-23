<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a>
    <img src="src/assets/icons/logo_black.svg" alt="Logo" width="100" height="170">
  </a>

  <h3 align="center">coedu</h3>

  <p align="center">
    실시간 소통 참여형 교육 WEB IDE 플랫폼
  </p>
</div>
<br />

<!-- ABOUT THE PROJECT -->

## About The Project
### Frontend Developer
|한채연</br>[@imi21123](https://github.com/imi21123)|정윤석</br>[@yundol777](https://github.com/yundol777)|한승우</br>[@seungwoohan12](https://github.com/seungwoohan12)|유지희</br>[@jiHeeFlee](https://github.com/jiHeeFlee)|
|:---:|:---:|:---:|:---:|
|<img src = "https://github.com/imi21123.png" width ="250">|<img src = "https://github.com/yundol777.png" width ="250">|<img src = "https://github.com/seungwoohan12.png" width ="250">|<img src = "https://github.com/jiHeeFlee.png" width ="250">|
|`프로젝트 세팅` `로그인` `회원가입` `마이페이지`|`채팅`|`게시판` `게시글` `네비게이션 바`|`IDE`|
</br>

### Built With

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) JavaScript에 정적 타입을 추가하여 코드의 안정성을 높이고 유지보수를 용이하게 하기 위해 선택
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 컴포넌트 기반의 UI 라이브러리로, 복잡한 사용자 인터페이스를 효율적으로 구축하기에 적합하여 선택
- ![Emotion](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white) 번들 크기를 줄여 빠른 빌드 환경을 제공하고, 컴포넌트 단위로 동적 스타일 적용이 가능한 CSS-in-JS 라이브러리로 선택
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 빠른 개발 환경과 빌드 속도를 제공하여 개발자 경험(DX)을 향상시키기 위해 선택
- ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) 서버 상태 관리 및 데이터 페칭 로직을 단순화하기 위해 선택
- ![Jotai](https://img.shields.io/badge/jotai-%23593d88.svg?style=for-the-badge&logo=jotai&logoColor=white) 간결하고 직관적인 상태 관리 솔루션을 제공하며, 프로젝트의 복잡성을 줄이기 위해 선택

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Foldering Strategy
```
├─ ...
├─ public
├─ src
│  ├─ assets/		   // 정적 Asset 파일 (이미지, 폰트, 기타 등)
│     ├─ icons/		 // 아이콘 파일 (svg로 저장)
│     ├─ fonts/		 // 폰트 파일
│  ├─ apis/		     // API 함수
│  ├─ components/	 // 재사용 컴포넌트
│  ├─ constants/	 // 상수 (API Key, Dump Data 등)
│  ├─ hooks/		   // 커스텀 리액트 훅
│  ├─ models/		   // 추가적으로 필요한 타입 선언
│  ├─ stores/		   // jotai
│  ├─ utils/		   // Util 함수
│  ├─ pages/       // 연결 페이지
├─ types/          // TypeScript 부가 설정 (가능한 건들이지 않는 폴더)
├─ ...
```
</br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
