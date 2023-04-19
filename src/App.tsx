import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import Nav from "./components/nav";
import Loading from "./components/Loading";

const LazyLoading = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <>
      <Nav />
      <div className="   flex justify-center items-center w-full ">
        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyLoading />
              </React.Suspense>
            }
          />
          <Route path="users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
