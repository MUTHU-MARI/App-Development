import React from 'react'
import Product from './Product'
import Footer from './Footer'
import InfiSlider from './HomePage/InfiSlider'
import Slider from './HomePage/Slider'

const Home = () => {
    return (
        <div>
            <img src='https://confettigifts.in/cdn/shop/files/Copy_of_IMG_1939_ae9157e4-1569-4921-a759-18e338d35d3d.jpg?v=1688386308&width=900'/>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt14prodlp/banners/flowers_d_igp_banner_20230626.jpg" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt14prodlp/banners/birthday_d_igp_banner_20230626.jpg" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt34prodlp/banners/goodness_hampers_d_igp_illustration_20220920.jpg" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt14prodlp/banners/cakes_d_igp_banner_20230626.jpg" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Slider/>
                        
                        
                        {/* <InfiSlider/> */}
                        <Footer/>
                    </div>
                    )
}
export default Home




// import React from 'react'

// export const Home = () => {
//   return (
//     <div className='=hero'>
// <div class="card bg-dark text-white border-0">
//   <img src="https://theshopcircuit.com/cdn/shop/products/4_5b559dd1-3323-4036-b6aa-076a32ae7f51.jpg?v=1607356291" class="card-img" alt="Background" height="550px"/>
//   <div class="card-img-overlay d-flex flex-column justify-content-center">
//     <h5 class="card-title display-3 fw-bolder mb-0">New season Arrivals</h5>
//     <p class="card-text lead fs-2">
//         Check all the Trends
//     </p>
//   </div>
// </div>
//     </div>
//   )
// }
// export default Home;