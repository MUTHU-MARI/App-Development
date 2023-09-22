import React from 'react'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://egiftsportal.com/_next/image?url=https%3A%2F%2Fegiftsportal.com%2Fadminapi%2Fuploads%2Fslider%2F2023-07-25T07-14-52.061Z1690269292061Grey%20White%20Cream%20Minimalist%20Simple%20Jewelry%20Exhibition%20Banner%20Landscape-PhotoRoom%20(2).webp&w=1920&q=75" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/Jwellery-Banner-desk.webp" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://giftcart.com/cdn/shop/files/Uniquely_yours_Banner.webp?v=1686218662&width=2000" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://cdn.shopify.com/s/files/1/1305/2183/files/Group_237838_3cfd1767-c8d8-49c8-8cbb-75b861a04e00.png?v=1695113216" alt="IPhone" height="500px"/>
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
                        <Product/>
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