import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";

const Presentation = lazy(() => import("./pages/Presentation"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Presentation />
        }, {
            path: "/projets",
            element: <Projects />
        },
        {
            path: "/a-propos",
            element: <About />
        }, {
            path: "/contact",
            element: <Contact />
        }]
    }
]);