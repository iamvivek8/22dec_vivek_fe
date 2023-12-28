import * as React from 'react'
import 'react-bootstrap'
import { Routes, Route, NavLink } from 'react-router-dom'
import NoPage from './components/NoPage'
const Home = React.lazy(() => import('./components/Home'))
const Product = React.lazy(() => import('./components/prudcut'))
const App = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">React Lazy Loading Routes Example</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/prudcut">Product</NavLink>
      </nav>
      <Routes>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="prudcut"
          element={
            <React.Suspense fallback={<>...</>}>
              <Product />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
}
export default App