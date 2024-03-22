
import HeroSection from "../../Components/HeroSection/HeroSection"
import HomePageProductCard from "../../Components/HomePageProductCard/HomePageproductCart"
import Layout from "../../Components/Layout/Layout"
import Testimonial from "../../Components/Testimonial/Testimonial"
import Category from "../../Components/category/Category"
import Loader from "../../Components/loader/Loader"
import Track from "../../Components/track/Track"



const HomePage = () => {

 
  return (
    <div>
        <Layout>
      <HeroSection />
      <Category />
    
      <HomePageProductCard />
      <Track />
      <Testimonial />
      <Loader />
     
      </Layout>
   
    </div>
  )
}

export default HomePage
