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
                        <img src="https://theshopcircuit.com/cdn/shop/products/4_5b559dd1-3323-4036-b6aa-076a32ae7f51.jpg?v=1607356291" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6aHnD_YF_0MMOqZY5u2oW99IJxrk6b8mJQ&usqp=CAU" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="data:image/jpeg;base64,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" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BVY0y4HBhZBesDYhokUoF6RhM6bDclyAJA&usqp=CAU" class="d-block w-100" alt="IPhone" height="500px"/>
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