import { useState, useEffect } from 'react'
import HomePage from './components/HomePage.jsx'
import GeneratorPage from './components/GeneratorPage.jsx'
import ResultPage from './components/ResultPage.jsx'
import SavedPage from './components/SavedPage.jsx'
import { generateSentences } from './utils/generator.js'

const STORAGE_KEY = 'complaint_saved_items'

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export default function App() {
  const [page, setPage] = useState('home')
  const [formData, setFormData] = useState(null)
  const [result, setResult] = useState(null)
  const [savedItems, setSavedItems] = useState(loadSaved)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems))
  }, [savedItems])

  function handleGenerate(data) {
    const sentences = generateSentences(
      data.complaintType,
      data.purpose,
      data.tone,
      data.content,
      data.department,
      data.contact,
    )
    setFormData(data)
    setResult(sentences)
    setIsSaved(false)
    setPage('result')
  }

  function handleSave() {
    if (isSaved) return
    const newItem = {
      id: Date.now().toString(),
      formData,
      result,
      savedAt: new Date().toISOString(),
    }
    setSavedItems((prev) => [newItem, ...prev])
    setIsSaved(true)
  }

  function handleDelete(id) {
    setSavedItems((prev) => prev.filter((item) => item.id !== id))
  }

  function handleUseFromSaved(data) {
    setFormData(data)
    setPage('generator')
  }

  function handleReset() {
    setFormData(null)
    setResult(null)
    setIsSaved(false)
    setPage('generator')
  }

  return (
    <div className="app">
      <header className="app-header">
        <button className="app-logo" onClick={() => setPage('home')}>
          <span className="app-logo-icon">🏛️</span>
          <span className="app-logo-text">민원 응대 생성기</span>
        </button>
        <nav className="app-nav">
          <button
            className={`nav-btn ${page === 'generator' || page === 'result' ? 'nav-btn-active' : ''}`}
            onClick={() => setPage('generator')}
          >
            ✏️ 문장 생성
          </button>
          <button
            className={`nav-btn ${page === 'saved' ? 'nav-btn-active' : ''}`}
            onClick={() => setPage('saved')}
          >
            ⭐ 저장된 문장
            {savedItems.length > 0 && (
              <span className="nav-badge">{savedItems.length}</span>
            )}
          </button>
        </nav>
      </header>

      <main className="app-main">
        {page === 'home' && (
          <HomePage
            onStart={() => setPage('generator')}
            onSaved={() => setPage('saved')}
            savedCount={savedItems.length}
          />
        )}
        {page === 'generator' && (
          <GeneratorPage
            onGenerate={handleGenerate}
            onBack={() => setPage('home')}
            initialData={formData}
          />
        )}
        {page === 'result' && result && (
          <ResultPage
            result={result}
            formData={formData}
            onBack={() => setPage('generator')}
            onReset={handleReset}
            onSave={handleSave}
            isSaved={isSaved}
          />
        )}
        {page === 'saved' && (
          <SavedPage
            savedItems={savedItems}
            onDelete={handleDelete}
            onBack={() => setPage('home')}
            onUse={handleUseFromSaved}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>민원 응대 문장 자동 생성기 — 공공기관 실무자를 위한 도구</p>
      </footer>
    </div>
  )
}
