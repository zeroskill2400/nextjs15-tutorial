# Next.js Dashboard Application

이 프로젝트는 Next.js를 사용하여 구축된 현대적인 대시보드 애플리케이션입니다. Next.js의 공식 학습 커리큘럼을 따라 단계별로 구현되며, 실무에서 바로 활용할 수 있는 다양한 기능들을 포함하고 있습니다.

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
