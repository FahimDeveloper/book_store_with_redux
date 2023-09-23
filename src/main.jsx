import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Pages/Home/Home.jsx';
import AddBook from './Pages/AddBook/AddBook.jsx';
import EditBook from './Pages/EditBook/EditBook.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add-book", element: <AddBook /> },
      { path: "/edit-book/:bookId", element: <EditBook /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
