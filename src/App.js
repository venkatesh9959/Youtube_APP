import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContaner from "./Pages/Main/VideoContainer";
import WatchPage from "./Pages/WatchPage/VideoWatchPage";
import store from "./store/store";
import LiveChat from "./Pages/LiveChat/LiveChat";
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContaner />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },

  {
    path: "/LiveChannel",
    element: <LiveChat />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={AppRouter} />
      </Provider>
    </div>
  );
};

export default App;
