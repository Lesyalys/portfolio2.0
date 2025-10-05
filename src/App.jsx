import { Header } from "./components/menu/Header"
import { Menu } from "./components/menu/Menu"
import { Outlet, useLocation } from "react-router"
import { Footer } from "./components/menu/Footer"
import { Block } from "./components/ui/blobk"


function App() {
  // const local = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white pl-3 pr-3 pt-3">
      <Header />
      {/* <Menu /> */}
      <main className="flex flex-row m-2 justify-around">
        <img src="https://sun9-17.userapi.com/s/v1/ig2/lmLwAMOfGB0pQ4XtbtGbtNLNBHzDy7X2sW0roWM_U07WyM8Azj4PllmYJ8wEj4OGfTYrHJp7sCrLynIterNiw_C6.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,832x832&from=bu&cs=832x0"
          width="15%" className="rounded-[50%] border-3 " />
        <Block />
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
