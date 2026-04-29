import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Hobbies from './pages/Hobbies'
import Origin from './pages/Origin'
import Career from './pages/Career'
import PersonProfile from './pages/PersonProfile'
import Personality from './pages/Personality'
import './App.css'

function Home() {
  return (
    <section id="home">
      <div className="avatar">
        <div className="avatar-circle">👤</div>
      </div>
      <h1>だれかの名前</h1>
      <p className="tagline">ここに一言キャッチコピーを入れます</p>
      <div className="home-links">
        <NavLink to="/hobbies" className="home-card">
          <span className="home-card-icon">🎮</span>
          <span>趣味</span>
        </NavLink>
        <NavLink to="/origin" className="home-card">
          <span className="home-card-icon">🏠</span>
          <span>出身</span>
        </NavLink>
        <NavLink to="/career" className="home-card">
          <span className="home-card-icon">💼</span>
          <span>経歴</span>
        </NavLink>
        <NavLink to="/person-profile" className="home-card">
          <span className="home-card-icon">🙋</span>
          <span>人物像</span>
        </NavLink>
        <NavLink to="/personality" className="home-card">
          <span className="home-card-icon">✨</span>
          <span>性格</span>
        </NavLink>
      </div>
    </section>
  )
}

function Layout() {
  return (
    <>
      <header id="site-header">
        <NavLink to="/" className="site-title">だれかのサイト</NavLink>
        <nav>
          <NavLink to="/hobbies">趣味</NavLink>
          <NavLink to="/origin">出身</NavLink>
          <NavLink to="/career">経歴</NavLink>
          <NavLink to="/person-profile">人物像</NavLink>
          <NavLink to="/personality">性格</NavLink>
        </nav>
      </header>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/origin" element={<Origin />} />
          <Route path="/career" element={<Career />} />
          <Route path="/person-profile" element={<PersonProfile />} />
          <Route path="/personality" element={<Personality />} />
        </Routes>
      </main>
      <footer id="site-footer">
        <p>© 2024 だれかの名前</p>
      </footer>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
