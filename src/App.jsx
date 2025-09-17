import { Header } from "./components/menu/Header"
import { Menu } from "./components/menu/Menu"
import { Outlet, useLocation } from "react-router"
import { Footer } from "./components/menu/Footer"


function App() {
  const local = useLocation() || "/about";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pl-3 pr-3 pt-3">
      <Header />
      <Menu local={local} />
      <main className="flex flex-row flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
