import Navbar from "../components/Navbar/Navbar"
import Header from "../containers/Header/Header"
import LoginModal from "../components/Core/Modal/LoginModal"
import Features from "../containers/Features/Features"
import Needs from "../containers/Needs/Needs"
import { Faq } from "../containers/Faq/Faq"
import Footer1 from "../containers/Footer1/Footer1"
import DrawerRight from "../components/Navbar/DrawerRight"
import { useAppStateContext } from "../context/contextProvider"

const Home = () => {
  // @ts-ignore
  const { isScreenLoading, setIsScreenLoading } = useAppStateContext()

  return (
    <>
      <DrawerRight />
      <LoginModal />
      <Navbar />
      <Header />
      {/* <Features /> */}
      {/* <Needs /> */}
      {/* <Faq /> */}
      <Footer1 />
    </>
  )
}

export default Home
