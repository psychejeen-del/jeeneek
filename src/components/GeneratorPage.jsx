import { useState } from 'react'
import { COMPLAINT_TYPES, PURPOSES, TONES } from '../data/options.js'

export default function GeneratorPage({ onGenerate, onBack, initialData }) {
  const [form, setForm] = useState(initialData || {
    complaintType: '',
    purpose: '',
    tone: '',
    content: '',
    department: '',
    contact: '',
  })

  const isValid = form.complaintType && form.purpose && form.tone && form.content.trim()

  function handleSubmit(e) {
    e.preventDefault()
    if (isValid) onGenerate(form)
  }

  function set(field) {
    return (value) => setForm((prev) => ({ ...prev, [field]: value }))
  }

  const steps = [
    { num: 1, label: '민원 유형' },
    { num: 2, label: '응답 목적' },
    { num: 3, label: '말투' },
    { num: 4, label: '핵심 내용' },
  ]

  const completedSteps = [
    form.complaintType,
    form.purpose,
    form.tone,
    form.content.trim(),
  ].filter(Boolean).length

  return (
    <div className="generator-page">
      <div className="page-header">
        <button className="btn-back" onClick={onBack}>← 돌아가기</button>
        <h2 className="page-title">문장 생성</h2>
      </div>

      <div className="step-bar">
        {steps.map((s) => (
          <div
            key={s.num}
            className={`step-item ${s.num <= completedSteps ? 'step-done' : ''} ${s.num === completedSteps + 1 ? 'step-active' : ''}`}
          >
            <div className="step-num">{s.num <= completedSteps ? '✓' : s.num}</div>
            <span className="step-label">{s.label}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="generator-form">
        {/* Step 1: 민원 유형 */}
        <div className="form-section">
          <label className="form-label">
            <span className="step-tag">1</span>
            민원 유형 <span className="required">*</span>
          </label>
          <select
            className="form-select"
            value={form.complaintType}
            onChange={(e) => set('complaintType')(e.target.value)}
          >
            <option value="">민원 유형을 선택하세요</option>
            {COMPLAINT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Step 2: 응답 목적 */}
        <div className="form-section">
          <label className="form-label">
            <span className="step-tag">2</span>
            응답 목적 <span className="required">*</span>
          </label>
          <div className="chip-group">
            {PURPOSES.map((p) => (
              <button
                key={p}
                type="button"
                className={`chip ${form.purpose === p ? 'chip-active' : ''}`}
                onClick={() => set('purpose')(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: 말투 */}
        <div className="form-section">
          <label className="form-label">
            <span className="step-tag">3</span>
            말투 수준 <span className="required">*</span>
          </label>
          <div className="tone-group">
            {TONES.map((t) => (
              <button
                key={t.label}
                type="button"
                className={`tone-card ${form.tone === t.label ? 'tone-card-active' : ''}`}
                onClick={() => set('tone')(t.label)}
              >
                <span className="tone-label">{t.label}</span>
                <span className="tone-desc">{t.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: 핵심 내용 */}
        <div className="form-section">
          <label className="form-label">
            <span className="step-tag">4</span>
            핵심 내용 <span className="required">*</span>
          </label>
          <textarea
            className="form-textarea"
            placeholder="예: 주민등록등본과 소득확인서류"
            value={form.content}
            onChange={(e) => set('content')(e.target.value)}
            rows={3}
          />
          <p className="form-hint">문장에 들어갈 핵심 단어·내용만 입력하세요. (예: 서류명, 불가 사유, 지연 이유 등)</p>
        </div>

        {/* 선택 입력 */}
        <div className="form-section form-section-optional">
          <label className="form-label">
            선택 정보 <span className="optional-tag">선택</span>
          </label>
          <div className="optional-fields">
            <div className="optional-field">
              <label className="sub-label">담당 부서명</label>
              <input
                type="text"
                className="form-input"
                placeholder="예: 주민복지과"
                value={form.department}
                onChange={(e) => set('department')(e.target.value)}
              />
            </div>
            <div className="optional-field">
              <label className="sub-label">문의처 연락처</label>
              <input
                type="text"
                className="form-input"
                placeholder="예: 02-1234-5678"
                value={form.contact}
                onChange={(e) => set('contact')(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`btn btn-primary btn-lg btn-full ${!isValid ? 'btn-disabled' : ''}`}
          disabled={!isValid}
        >
          ✨ 문장 생성하기
        </button>
      </form>
    </div>
  )
}
