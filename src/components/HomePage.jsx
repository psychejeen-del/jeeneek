export default function HomePage({ onStart, onSaved, savedCount }) {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="home-badge">공공기관 실무 도구</div>
        <h1 className="home-title">
          민원 응대 문장<br />
          <span className="home-title-accent">자동 생성기</span>
        </h1>
        <p className="home-desc">
          민원 유형·응답 목적·말투를 선택하고 핵심 내용을 입력하면<br />
          상황에 맞는 정중하고 자연스러운 응대 문장을 즉시 생성합니다.
        </p>
        <div className="home-actions">
          <button className="btn btn-primary btn-lg" onClick={onStart}>
            <span>✏️</span> 문장 생성 시작하기
          </button>
          <button className="btn btn-outline btn-lg" onClick={onSaved}>
            <span>⭐</span> 저장된 문장
            {savedCount > 0 && <span className="badge">{savedCount}</span>}
          </button>
        </div>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <div className="feature-icon">📋</div>
          <h3>9가지 민원 유형</h3>
          <p>서류 보완, 처리 지연, 신청 불가 등 자주 쓰는 상황을 모두 커버</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>3가지 출력 형식</h3>
          <p>문자용·전화용·공식 안내문 스타일로 상황에 맞게 바로 활용</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>30초 이내 생성</h3>
          <p>선택 몇 번으로 완성된 응대 문장을 즉시 복사해 사용</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💾</div>
          <h3>즐겨찾기 저장</h3>
          <p>자주 쓰는 문장을 저장해두고 언제든 불러오기</p>
        </div>
      </div>

      <div className="home-example">
        <div className="home-example-label">출력 예시</div>
        <div className="home-example-box">
          <p className="home-example-text">
            "안녕하세요. 신청하신 건을 검토한 결과, 주민등록등본 및 소득확인서류의 추가 제출이 필요하여 안내드립니다.
            해당 서류를 준비하시어 제출해 주시면 신속히 처리하겠습니다. 감사합니다."
          </p>
        </div>
      </div>
    </div>
  )
}
