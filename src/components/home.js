import About from "./about/about"
import Book from "./book/book"
import Footer from "./footer/footer"
import ImageSlider from "./gallery/gallery"
import Pricing from "./room/room"

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