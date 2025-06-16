import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="header">대시보드에 오신 것을 환영합니다</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 통계 카드 */}
        <div className="stats-card">
          <h2 className="subheader">총 사용자</h2>
          <p className="text-3xl font-bold text-primary">1,234</p>
          <p className="text-sm text-secondary">지난달 대비 +12%</p>
        </div>
        
        <div className="stats-card">
          <h2 className="subheader">매출</h2>
          <p className="text-3xl font-bold text-primary">₩12,345,000</p>
          <p className="text-sm text-secondary">지난달 대비 +8%</p>
        </div>
        
        <div className="stats-card">
          <h2 className="subheader">진행중인 프로젝트</h2>
          <p className="text-3xl font-bold text-primary">42</p>
          <p className="text-sm text-secondary">지난달 대비 +5%</p>
        </div>
      </div>
      
      {/* 최근 활동 */}
      <div className="card">
        <h2 className="subheader">최근 활동</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-primary">새로운 사용자 등록</p>
              <p className="text-sm text-secondary">홍길동님이 가입하셨습니다</p>
            </div>
            <span className="text-sm text-secondary">2시간 전</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-primary">프로젝트 업데이트</p>
              <p className="text-sm text-secondary">프로젝트 X가 75% 완료되었습니다</p>
            </div>
            <span className="text-sm text-secondary">5시간 전</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-primary">새로운 거래</p>
              <p className="text-sm text-secondary">프리미엄 구독 판매</p>
            </div>
            <span className="text-sm text-secondary">1일 전</span>
          </div>
        </div>
      </div>
    </main>
  );
}
