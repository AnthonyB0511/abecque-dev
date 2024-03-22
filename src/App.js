import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./App.module.scss";
import { Suspense } from "react";
function App() {
  return (
    <body className={`${styles.app}`}>
      <Header />
      <Suspense>
        <main className={`${styles.containerApp}`}>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </body>
  );
}

export default App;
