import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Examp from "./components/examp/Examp";
import Home from './pages/home/Home'
import Hotel from "./pages/hotel/Hotel";
import TesHotel from "./pages/hotel/TesHotel";
import List from "./pages/list/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/hotels",
    element: <List/>,
  },
  {
    path: "/hotels/:id",
    element: <Hotel/>,
  },
  {
    path: "/tes/:id",
    element: <TesHotel/>,
  },
  {
    path: "/examp",
    element: <Examp/>,
  },
]);

function App() {
  return (
    <div className="font-opensans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
