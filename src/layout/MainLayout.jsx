import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="max-w-7xl mx-auto w-full flex-1 px-4 py-8 pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
           
    </>
  )
}

export default MainLayout