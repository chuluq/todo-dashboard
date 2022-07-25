// pages
import HomePage from "pages/home";
import GoalsPage from "pages/goals";
import CalendarPage from "pages/calendar";

// icons
import { ReactComponent as HomeIcon } from "assets/Home.svg";
import { ReactComponent as HomeActiveIcon } from "assets/HomeActive.svg";
import { ReactComponent as GoalsIcon } from "assets/Goals.svg";
import { ReactComponent as GoalsActiveIcon } from "assets/GoalsActive.svg";
import { ReactComponent as CalendarIcon } from "assets/Calendar.svg";
import { ReactComponent as CalendarActiveIcon } from "assets/CalendarActive.svg";

export const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
    element: <HomePage />,
    icon: <HomeIcon />,
    activeIcon: <HomeActiveIcon />,
  },
  {
    id: 2,
    name: "Goals",
    url: "/goals",
    element: <GoalsPage />,
    icon: <GoalsIcon />,
    activeIcon: <GoalsActiveIcon />,
  },
  {
    id: 3,
    name: "Calendar",
    url: "/calendar",
    element: <CalendarPage />,
    icon: <CalendarIcon />,
    activeIcon: <CalendarActiveIcon />,
  },
];
