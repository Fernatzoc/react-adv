import { Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import logo from '../logo.svg'

import {routes} from "./routes";
import {LazyPage1} from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={ logo } alt="React Logo" />
            <ul>

              {
                routes.map( ({ path, name }) => (
                  <li key={ path } >
                    <NavLink
                      className={({ isActive }) => isActive ? 'nav-active' : '' }
                      to={ path }
                      end>{ name }</NavLink>
                  </li>
                ))
              }

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>

            {
              routes.map( ({ path, component:Component }) => (
                <Route
                  key={ path  }
                  path={ path }
                  element={  <Component /> }
                />
              ))
            }

            <Route path="*" element={<LazyPage1 />} />

          </Routes>
        </div>
      </Router>
    </Suspense>

  );
}