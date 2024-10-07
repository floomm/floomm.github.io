import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Welcome from './pages/Welcome'
import NotFound from './pages/NotFound'
import Whoami from "./pages/Whoami.tsx";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/whoami' element={<Whoami />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
