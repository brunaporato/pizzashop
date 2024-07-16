import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/signin'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/signin', element: <SignIn /> },
])
