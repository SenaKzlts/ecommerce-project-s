
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageContent>

      <Footer />
    </BrowserRouter>
  )
}

export default App