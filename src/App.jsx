import './App.css';
import MainPage from './pages/Main/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card from "./components/Card/Card";
import DailyLog from "./pages/DailyLog/DailyLog";
import SecondhandMarket from "./pages/SecondhandMarket/SecondhandMarket";
import SignIn from "./pages/SignIn/SignIn";


// 라우터 객체 생성
const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/main", element: <MainPage /> },
  { path: "/test", element:<Card /> },
  { path: "/DailyLog", element:<DailyLog /> },
  { path: "/SecondHandMarket", element:<SecondhandMarket /> },
  { path: "/SignIn", element:<SignIn /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
