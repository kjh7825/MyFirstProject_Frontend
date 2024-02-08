import './App.css';
import MainPage from './pages/Main/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card from "./components/Card/Card";
import DailyLog from "./pages/DailyLog/DailyLog";
import SecondhandMarket from "./pages/SecondhandMarket/SecondhandMarket";


// 라우터 객체 생성
const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/main", element: <MainPage /> },
  { path: "/test", element:<Card /> },
  { path: "/DailyLog", element:<DailyLog /> },
  { path: "/SecondHandMarket", element:<SecondhandMarket /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
