import './app.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/authentication/Login';
import Error from './pages/error/Error';
import RootLayout from './components/layouts/RootLayout';


export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider
    router={router}
  />
  )
}
