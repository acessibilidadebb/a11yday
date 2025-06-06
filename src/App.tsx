import { HashRouter as Router } from 'react-router-dom'
import GlobalContextProvider from './contexts/globalContext'
import './App.scss'
import App2024 from './editions/App2024/App2024'

export default function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <App2024/>
      </Router>
    </GlobalContextProvider>
  )
}
