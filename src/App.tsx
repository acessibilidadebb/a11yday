import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App2024 from './editions/App2024/App2024'
import App2025 from './editions/App2025/App2025'
import HomeNew2025 from './editions/New2025'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/edicao-2024/*" element={<App2024 />} />
        <Route path="/new2025/*" element={<HomeNew2025 />} />
        <Route path="/*" element={<App2025 />} />
      </Routes>
    </HashRouter>
  )
}
