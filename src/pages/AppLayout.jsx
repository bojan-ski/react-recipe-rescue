import { Outlet, useNavigation } from "react-router-dom"
import { AppProvider } from "../context"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loading from "../components/Loading"

const AppLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <AppProvider>
      <>
        <Navbar />

        <main>
          {isPageLoading ? <Loading /> : <Outlet />}
        </main>

        <Footer />
      </>
    </AppProvider>
  )
}

export default AppLayout