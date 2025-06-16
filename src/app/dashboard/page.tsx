export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="header">대시보드</h1>
      
      {/* 대시보드 컨텐츠 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="stats-card">
          <h2 className="subheader">주간 통계</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-secondary">방문자 수</span>
              <span className="font-semibold text-primary">1,234</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary">신규 가입자</span>
              <span className="font-semibold text-primary">56</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary">활성 사용자</span>
              <span className="font-semibold text-primary">789</span>
            </div>
          </div>
        </div>

        <div className="stats-card">
          <h2 className="subheader">시스템 상태</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-secondary">서버 상태</span>
              <span className="text-green-600 font-semibold">정상</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary">데이터베이스</span>
              <span className="text-green-600 font-semibold">정상</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary">API 응답 시간</span>
              <span className="font-semibold text-primary">120ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 