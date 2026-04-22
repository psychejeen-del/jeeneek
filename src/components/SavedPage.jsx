import { useState } from 'react'

export default function SavedPage({ savedItems, onDelete, onBack, onUse }) {
  const [expandedId, setExpandedId] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  async function handleCopy(text, id) {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  function toggleExpand(id) {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  if (savedItems.length === 0) {
    return (
      <div className="saved-page">
        <div className="page-header">
          <button className="btn-back" onClick={onBack}>← 돌아가기</button>
          <h2 className="page-title">저장된 문장</h2>
        </div>
        <div className="empty-state">
          <div className="empty-icon">⭐</div>
          <h3>저장된 문장이 없습니다</h3>
          <p>문장을 생성한 후 즐겨찾기에 저장해보세요.</p>
          <button className="btn btn-primary" onClick={onBack}>문장 생성하러 가기</button>
        </div>
      </div>
    )
  }

  return (
    <div className="saved-page">
      <div className="page-header">
        <button className="btn-back" onClick={onBack}>← 돌아가기</button>
        <h2 className="page-title">저장된 문장 <span className="saved-count">{savedItems.length}개</span></h2>
      </div>

      <div className="saved-list">
        {savedItems.map((item) => (
          <div key={item.id} className="saved-card">
            <div className="saved-card-header" onClick={() => toggleExpand(item.id)}>
              <div className="saved-card-meta">
                <span className="meta-chip meta-chip-sm">{item.formData.complaintType}</span>
                <span className="meta-chip meta-chip-sm">{item.formData.purpose}</span>
                <span className="meta-chip meta-chip-sm">{item.formData.tone}</span>
              </div>
              <div className="saved-card-actions">
                <span className="saved-card-toggle">{expandedId === item.id ? '▲' : '▼'}</span>
              </div>
            </div>

            <p className="saved-card-preview">{item.result.sms}</p>

            {expandedId === item.id && (
              <div className="saved-card-detail">
                <div className="saved-detail-item">
                  <span className="saved-detail-label">💬 문자용</span>
                  <p>{item.result.sms}</p>
                </div>
                <div className="saved-detail-item">
                  <span className="saved-detail-label">📞 전화용</span>
                  <p>{item.result.phone}</p>
                </div>
                <div className="saved-detail-item">
                  <span className="saved-detail-label">📄 공식 안내문</span>
                  <p>{item.result.official}</p>
                </div>
              </div>
            )}

            <div className="saved-card-footer">
              <span className="saved-date">{new Date(item.savedAt).toLocaleDateString('ko-KR')}</span>
              <div className="saved-footer-btns">
                <button
                  className={`copy-btn-sm ${copiedId === item.id ? 'copy-btn-done' : ''}`}
                  onClick={() => handleCopy(item.result.sms, item.id)}
                >
                  {copiedId === item.id ? '✓ 복사됨' : '복사'}
                </button>
                <button
                  className="btn-use"
                  onClick={() => onUse(item.formData)}
                >
                  다시 사용
                </button>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(item.id)}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
