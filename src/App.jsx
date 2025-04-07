import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import RootLayout from "./layout/RootLayout";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./pages/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
