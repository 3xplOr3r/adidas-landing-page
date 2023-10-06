import Hero from './components/Hero'
import Nav from './components/Nav'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav />
        <Routes>
          <Route path="/men" Component={<about />} />
          <Route path="/women" Component={<about />} />
          <Route path="/kids" Component={<about />} />
          <Route path="/school" Component={<about />} />
        </Routes>
        < Hero />
    </div>
  )
}

export default App