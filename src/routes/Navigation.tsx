import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import {
  DynamicFormPage,
  FormikAbstractPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from "../03-forms/pages";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/register"
                end
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-basic"
                end
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-yup"
                end
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-components"
                end
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-abstract"
                end
              >
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-register"
                end
              >
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-dynamic"
                end
              >
                Dynamic Form
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/users"
                end
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/formik-dynamic" element={<DynamicFormPage />} />
          <Route path="/formik-register" element={<RegisterFormikPage />} />
          <Route path="/formik-abstract" element={<FormikAbstractPage />} />
          <Route path="/formik-components" element={<FormikComponentsPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
};
