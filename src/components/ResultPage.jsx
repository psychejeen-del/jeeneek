import { useState } from 'react'

const TABS = [
  { key: 'sms', icon: '💬', label: '문자용' },
  { key: 'phone', icon: '📞', label: '전화용' },
  { key: 'official', icon: '📄', label: '공식 안내문' },
]

export default function ResultPage({ result, formData, onBack, onReset, onSave, isSaved }) {
  const [activeTab, setActiveTab] = useState('sms')
  const [copiedKey, setCopiedKey] = useState(null)

  async function handleCopy(key) {
    await navigator.clipboard.writeText(result[key])
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const text = result[activeTab]

  return (
    <div className="result-page">
      <div className="page-header">
        <button className="btn-back" onClick={onBack}>← 수정하기</button>
        <h2 className="page-title">생성 결과</h2>
      </div>

      <div className="result-meta">
        <span className="meta-chip">{formData.complaintType}</span>
        <span className="meta-chip">{formData.purpose}</span>
        <span className="meta-chip">{formData.tone}</span>
      </div>

      <div className="result-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`result-tab ${activeTab === tab.key ? 'result-tab-active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="result-box">
        <p className="result-text">{text}</p>
        <button
          className={`copy-btn ${copiedKey === activeTab ? 'copy-btn-done' : ''}`}
          onClick={() => handleCopy(activeTab)}
        >
          {copiedKey === activeTab ? '✓ 복사됨' : '📋 복사'}
        </button>
      </div>

      <div className="result-all">
        <h3 className="result-all-title">전체 버전 비교</h3>
        {TABS.map((tab) => (
          <div key={tab.key} className="result-all-item">
            <div className="result-all-header">
              <span className="result-all-type">{tab.icon} {tab.label}</span>
              <button
                className={`copy-btn-sm ${copiedKey === tab.key ? 'copy-btn-done' : ''}`}
                onClick={() => handleCopy(tab.key)}
              >
                {copiedKey === tab.key ? '✓ 복사됨' : '복사'}
              </button>
            </div>
            <p className="result-all-text">{result[tab.key]}</p>
          </div>
        ))}
      </div>

      <div className="result-actions">
        <button
          className={`btn ${isSaved ? 'btn-saved' : 'btn-outline'}`}
          onClick={onSave}
          disabled={isSaved}
        >
          {isSaved ? '⭐ 저장됨' : '☆ 즐겨찾기 저장'}
        </button>
        <button className="btn btn-primary" onClick={onReset}>
          + 새 문장 생성
        </button>
      </div>
    </div>
  )
}
