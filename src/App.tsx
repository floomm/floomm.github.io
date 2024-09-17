import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Welcome from './pages/Welcome'
import NotFound from './pages/NotFound'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
