// pages
import HomePage from "pages/home";
import GoalsPage from "pages/goals";
import CalendarPage from "pages/calendar";

// icons
// icons
import { ReactComponent as HomeIcon } from "assets/Home.svg";
import { ReactComponent as GoalsIcon } from "assets/Goals.svg";
import { ReactComponent as CalendarIcon } from "assets/Calendar.svg";

export const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
    element: <HomePage />,
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Goals",
    url: "/goals",
    element: <GoalsPage />,
    icon: <GoalsIcon />,
  },
  {
    id: 3,
    name: "Calendar",
    url: "/calendar",
    element: <CalendarPage />,
    icon: <CalendarIcon />,
  },
];
