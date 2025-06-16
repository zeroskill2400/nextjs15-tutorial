# Next.js A-Z 완전 학습 프로젝트

이 프로젝트는 Next.js 공식 튜토리얼을 기반으로 한 포괄적인 학습 여정입니다. 기초부터 고급 기술까지 단계별로 구현하며, 실무에서 바로 활용할 수 있는 완전한 풀스택 애플리케이션을 구축합니다.

## 🎯 학습 목표
- Next.js 15의 모든 핵심 기능 마스터
- 현대적인 풀스택 웹 개발 기술 습득
- 실무 레벨의 프로젝트 구축 경험

## 📋 학습 로드맵

### **Phase 1: 기초 및 레이아웃** ✅ 완료
- [x] **Chapter 1**: 프로젝트 초기 설정
- [x] **Chapter 2**: Tailwind CSS 스타일링
- [x] **Chapter 3**: App Router 기본 라우팅
- [x] **Chapter 4**: 기본 레이아웃 및 네비게이션

### **Phase 2: 최적화 및 사용자 경험**
- [ ] **Chapter 5**: 폰트 및 이미지 최적화
- [ ] **Chapter 6**: 공유 레이아웃 및 중첩 라우팅
- [ ] **Chapter 7**: Link 컴포넌트와 페이지 네비게이션
- [ ] **Chapter 8**: 로딩 상태 및 에러 처리

### **Phase 3: 데이터 및 상태 관리**
- [ ] **Chapter 9**: 데이터베이스 설정 (PostgreSQL + Prisma)
- [ ] **Chapter 10**: Server Components vs Client Components
- [ ] **Chapter 11**: 데이터 페칭 (SSG, SSR, ISR)
- [ ] **Chapter 12**: API Routes 구현

### **Phase 4: 고급 렌더링 기법**
- [ ] **Chapter 13**: Static vs Dynamic 렌더링
- [ ] **Chapter 14**: Streaming 및 Suspense
- [ ] **Chapter 15**: Partial Prerendering (PPR)
- [ ] **Chapter 16**: 캐싱 전략

### **Phase 5: 검색 및 상호작용**
- [ ] **Chapter 17**: 검색 기능 구현
- [ ] **Chapter 18**: 페이지네이션
- [ ] **Chapter 19**: Server Actions
- [ ] **Chapter 20**: Optimistic Updates

### **Phase 6: 사용자 인증 및 보안**
- [ ] **Chapter 21**: NextAuth.js 설정
- [ ] **Chapter 22**: 소셜 로그인 (Google, GitHub)
- [ ] **Chapter 23**: 사용자 권한 관리
- [ ] **Chapter 24**: 미들웨어 및 보안

### **Phase 7: 실시간 기능**
- [ ] **Chapter 25**: WebSocket 실시간 채팅
- [ ] **Chapter 26**: 실시간 알림 시스템
- [ ] **Chapter 27**: 실시간 협업 기능
- [ ] **Chapter 28**: Socket.io 고급 활용

### **Phase 8: 결제 시스템**
- [ ] **Chapter 29**: Stripe 결제 통합
- [ ] **Chapter 30**: 구독 관리 시스템
- [ ] **Chapter 31**: 결제 내역 및 영수증
- [ ] **Chapter 32**: 결제 보안

### **Phase 9: 고급 기능**
- [ ] **Chapter 33**: 파일 업로드 (AWS S3)
- [ ] **Chapter 34**: 이메일 시스템 (Resend/Nodemailer)
- [ ] **Chapter 35**: 다국어 지원 (i18n)
- [ ] **Chapter 36**: PWA 구현

### **Phase 10: 성능 및 모니터링**
- [ ] **Chapter 37**: 성능 최적화
- [ ] **Chapter 38**: SEO 최적화
- [ ] **Chapter 39**: 분석 및 모니터링
- [ ] **Chapter 40**: 에러 추적 (Sentry)

### **Phase 11: 테스팅 및 품질**
- [ ] **Chapter 41**: 단위 테스트 (Jest)
- [ ] **Chapter 42**: 통합 테스트 (Playwright)
- [ ] **Chapter 43**: E2E 테스트
- [ ] **Chapter 44**: 코드 품질 (ESLint, Prettier)

### **Phase 12: 배포 및 운영**
- [ ] **Chapter 45**: Vercel 배포
- [ ] **Chapter 46**: Docker 컨테이너화
- [ ] **Chapter 47**: CI/CD 파이프라인
- [ ] **Chapter 48**: 모니터링 및 로깅

## 🛠 기술 스택

### **Core**
- **프레임워크**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **상태관리**: Zustand / React Query

### **백엔드**
- **데이터베이스**: PostgreSQL
- **ORM**: Prisma
- **인증**: NextAuth.js
- **결제**: Stripe

### **실시간**
- **WebSocket**: Socket.io
- **실시간 DB**: Supabase Realtime

### **인프라**
- **배포**: Vercel
- **스토리지**: AWS S3
- **이메일**: Resend
- **모니터링**: Vercel Analytics + Sentry

## 🚀 현재 진행 상황

### ✅ 완료된 기능
- 기본 프로젝트 구조
- Tailwind CSS 설정
- App Router 라우팅
- 기본 레이아웃 (사이드바, 메인 콘텐츠)
- 대시보드 홈페이지

### 🎯 다음 단계: Chapter 5 - 폰트 및 이미지 최적화
Next.js의 built-in 최적화 기능을 활용하여 성능을 향상시킵니다.

## 📁 프로젝트 구조
```
src/
├── app/                 # App Router
│   ├── (auth)/         # 인증 그룹 라우트
│   ├── (dashboard)/    # 대시보드 그룹 라우트
│   ├── api/           # API 라우트
│   ├── chat/          # 채팅 기능
│   ├── payments/      # 결제 기능
│   └── globals.css    # 전역 스타일
├── components/         # 재사용 컴포넌트
│   ├── ui/            # 기본 UI 컴포넌트
│   ├── forms/         # 폼 컴포넌트
│   └── layout/        # 레이아웃 컴포넌트
├── lib/               # 유틸리티 및 설정
│   ├── auth.ts        # 인증 설정
│   ├── db.ts          # 데이터베이스 설정
│   └── utils.ts       # 유틸리티 함수
└── types/             # TypeScript 타입 정의
```

## 🎓 학습 방법

1. **단계별 학습**: 각 Chapter를 순서대로 완료
2. **실습 중심**: 코드를 직접 작성하며 학습
3. **문서화**: 각 단계별 학습 내용 기록
4. **테스트**: 구현한 기능을 직접 테스트
5. **복습**: 이전 단계 내용을 정기적으로 복습

## 🔄 다음 진행할 단계

### Chapter 5: 폰트 및 이미지 최적화
- Next.js Image 컴포넌트 활용
- Google Fonts 최적화
- 이미지 lazy loading
- 성능 측정 및 개선

진행할 준비가 되시면 말씀해 주세요! 🚀

## 주요 기능

- 📊 대시보드 및 데이터 시각화
- 🔐 사용자 인증 및 권한 관리
- 📱 반응형 디자인
- 🎨 Tailwind CSS를 활용한 모던한 UI
- ⚡ Next.js 14의 최신 기능 활용

## 기술 스택

- **프레임워크**: Next.js 14
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **인증**: NextAuth.js
- **데이터베이스**: PostgreSQL
- **ORM**: Prisma

## 시작하기

### 필수 조건

- Node.js 18.17.0 이상
- npm 또는 yarn
- PostgreSQL 데이터베이스

### 설치

1. 저장소를 클론합니다:
```bash
git clone [repository-url]
cd next15-exam
```

2. 의존성을 설치합니다:
```bash
npm install
# 또는
yarn install
```

3. 환경 변수를 설정합니다:
```bash
cp .env.example .env.local
```
`.env.local` 파일을 열어 필요한 환경 변수들을 설정합니다.

4. 개발 서버를 실행합니다:
```bash
npm run dev
# 또는
yarn dev
```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

## 프로젝트 구조

```
src/
├── app/                 # App Router 구조
│   ├── (auth)/         # 인증 관련 페이지
│   ├── dashboard/      # 대시보드 페이지
│   ├── api/           # API 라우트
│   └── layout.tsx     # 루트 레이아웃
├── components/         # 재사용 가능한 컴포넌트
├── lib/               # 유틸리티 함수 및 설정
└── styles/            # 전역 스타일
```

## 학습 커리큘럼

1. **기초 설정 및 라우팅**
   - App Router 구조 이해
   - 페이지와 레이아웃 구성
   - 동적 라우팅

2. **스타일링**
   - Tailwind CSS 활용
   - CSS 모듈
   - 글로벌 스타일링

3. **데이터 페칭**
   - Server Components
   - Client Components
   - API 라우트

4. **상태 관리**
   - React Context
   - Server State 관리
   - Client State 관리

5. **인증 및 보안**
   - NextAuth.js 설정
   - 미들웨어 구현
   - 보안 설정

6. **성능 최적화**
   - 이미지 최적화
   - 폰트 최적화
   - 캐싱 전략

7. **배포**
   - Vercel 배포
   - 환경 변수 설정
   - 프로덕션 빌드

## 기여하기

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 연락처

프로젝트에 대한 질문이나 제안이 있으시다면 이슈를 생성해 주세요.
