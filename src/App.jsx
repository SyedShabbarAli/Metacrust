import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import LoadingComponent from "./components/layouts/LoadingComponent";

import { lazy, Suspense, useEffect } from "react";
import ErrorPage from "./components/layouts/ErrorPage";

import emailJs from "@emailjs/browser";
import Contact from "./pages/Contact";
import Platform from "./pages/Platform";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Services = lazy(() => import("./pages/Services"));
const PUBLIC_KEY = "85U7tBOFPBUYN41ve";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <LoadingComponent>
            <Home />
          </LoadingComponent>
        ),
      },
      {
        path: "about",
        element: (
          <LoadingComponent>
            <AboutUs />
          </LoadingComponent>
        ),
      },
      {
        path: "applications",
        element: (
          <LoadingComponent>
            <Services />
          </LoadingComponent>
        ),
      },
      {
        path: "platform",
        element: (
          <LoadingComponent>
            <Platform />
          </LoadingComponent>
        ),
      },
      {
        path: "faqs",
        element: (
          <LoadingComponent>
            <FAQs />
          </LoadingComponent>
        ),
      },
      {
        path: "connect",
        element: (
          <LoadingComponent>
            <Contact />
          </LoadingComponent>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  useEffect(() => {
    emailJs.init(PUBLIC_KEY);
  }, []);
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
