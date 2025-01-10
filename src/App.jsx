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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/my work" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
