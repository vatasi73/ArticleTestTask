import { Route, Routes } from "react-router-dom";

import ArticleDetail from "./components/ArticleDetail";
import ArticleList from "./components/ArticleList";
import ChangePassword from "./components/ChangePassword";
import Login from "./components/Login";

import RequireAuth from "./hoc/RequireAuth";
import Layout from "./components/Layout";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        paddingBottom: "40px",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route path="/" element={<ArticleList />} />

          <Route path="articles/:id" element={<ArticleDetail />} />
          <Route path="changePassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
