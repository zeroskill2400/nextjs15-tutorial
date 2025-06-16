export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">데이터 분석</h1>
      
      {/* 분석 컨텐츠 */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">사용자 행동 분석</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>평균 체류 시간</span>
              <span className="font-semibold">8분 32초</span>
            </div>
            <div className="flex justify-between items-center">
              <span>페이지 뷰</span>
              <span className="font-semibold">3.2회/세션</span>
            </div>
            <div className="flex justify-between items-center">
              <span>이탈률</span>
              <span className="font-semibold">32%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">트래픽 분석</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>직접 방문</span>
              <span className="font-semibold">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>검색 엔진</span>
              <span className="font-semibold">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>소셜 미디어</span>
              <span className="font-semibold">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 