import { Outlet } from "react-router-dom"
import SimpleBottomNavigation from "./SimpleBottomNavigation"
const Layout = () => {
  return (
    <div>
        <header>Header</header>
        <SimpleBottomNavigation />
        <main><Outlet /></main>
        <footer>Footer</footer>
    </div>
  )
}

export default Layout