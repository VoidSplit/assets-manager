import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Faq from './Faq.jsx'
import NotFound from './NotFound.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Changelogs from './Changelogs.jsx'

const router = createBrowserRouter([
  { path: "/", Component: App, },
  { path: "/faq", Component: Faq, },
  { path: "/changelogs", Component: Changelogs, },
  { path: "/*", Component: NotFound, },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <RouterProvider router={router} />,
)
