import './App.css';
import MainPage from './pages/Main/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 라우터 객체 생성
const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/main", element: <MainPage /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
