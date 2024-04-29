import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loading from "../components/Loading"

const AppLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <>
      <Navbar/>

      <main>
        {isPageLoading ? <Loading/> : <Outlet/>}
      </main>

      <Footer/>
    </>
  )
}

export default AppLayout