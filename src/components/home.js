import About from "./about"
import Book from "./book"
import Footer from "./footer"
import ImageSlider from "./gallery"
import Pricing from "./room"

function Home(){
    return(
        <>
            <div className="home" id="home">
                <Book/>
                <About/>
                <Pricing/>
                <ImageSlider/>
                <Footer/>
            </div>
        </>
    )
}

export default Home