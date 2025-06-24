import BoxesFooter from "../components/common/BoxesFooter"
import BannerLanding from "../components/home/BannerLanding"
import DistinctiveItalianDesign from "../components/home/DistinctiveItalianDesign"
import Landing from "../components/home/Landing"
import News from "../components/home/News"
import UniqueCollections from "../components/home/UniqueCollections"

const Home = () => {
  return (
    <div>
      <Landing />
      <BannerLanding />
      <DistinctiveItalianDesign />
      <News />
      <UniqueCollections />
      <BoxesFooter />
    </div>
  )
}

export default Home