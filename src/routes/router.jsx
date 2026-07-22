import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogoPage from "../Logopage.jsx";
import Home from "../pages/Homepage/Home.jsx"
import Script from "../pages/ScriptPage/Script.jsx";
import Calendar from "../pages/CalendarPage/calendar.jsx";
import Diaries from "../pages/DiariesPage/Diaries/Diaries.jsx";
import Setting from "../pages/SettingPage/setting.jsx"
import YearlyPage from "../pages/DiariesPage/YearlyPage/YearlyPage.jsx";
import MonthlyPage from "../pages/DiariesPage/MonthlyPage/MonthlyPage.jsx";
import WeeklyPage from "../pages/DiariesPage/WeeklyPage/WeeklyPage.jsx";
import DailyPage from "../pages/DiariesPage/DailyPage/DailyPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LogoPage />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/script",
    element: <Script />
  },
  {
    path: "/diaries",
    children: [
      {
        path: "",
        element: <Diaries />,
      },
      {
        path: "yearly",
        element: <YearlyPage />,
      },
      {
        path: "monthly",
        element: <MonthlyPage />,
      },
      {
        path: "weekly",
        element: <WeeklyPage />,
      },
      {
        path: "daily",
        element: <DailyPage />,
      }
    ],
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "/setting",
    element: <Setting />
  }
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;