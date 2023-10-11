import React from 'react'
import InfiSlider from './HomePage/InfiSlider'
import Slider from './HomePage/Slider'
import { Link } from 'react-router-dom'

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
                <div class="carousel-inner image-home1-div">
                    <div class="carousel-item active image-home1-div">
                        <img className='image-home1' src="https://cdn.igp.com/f_auto,q_auto,t_pnopt14prodlp/banners/flowers_d_igp_banner_20230626.jpg" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img className='image-home1' src="https://cdn.igp.com/f_auto,q_auto,t_pnopt14prodlp/banners/birthday_d_igp_banner_20230626.jpg" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img className='image-home1' src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/anniversary_d_igp_banner_20230626.jpg" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item ">
                                <img className='image-home1' src="https://cdn.igp.com/f_auto,q_auto,t_pnopt14prodlp/banners/cakes_d_igp_banner_20230626.jpg" alt="IPhone" height="500px"/>
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
                        <br/>
                        <br/>
                        <br/>
                        <img src='https://cdn.igp.com/f_auto,q_auto,t_pnopt34prodlp/banners/footer_sale_banner_20230601.jpg' alt=''/>
     <br/>
<div class="hero-container" id="hero-sec">
  <div class="container-fluid ">
  <div class="row d-flex">
    <div class="col align-middle">
      <div class="px-2 py-2">
      <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=900&t=st=1667037491~exp=1667038091~hmac=7c71ea8afc8f3cc8065c5ccc05d105e3c8a7b76f0133016cb210a7882dc19611" class="img-fluid" alt="..."/>
      </div>
    </div>
    <div class="col">
      <div class="px-5 py-5 mt-5">
        <div class="px-2 py-2 align-middle">
        <h4>Get all your needs Here</h4>
        <p> An online Gift and customized designing place with over 4000+ gifts and lakhs of customer. </p>
        </div>
        <div class="px-2 py-2">
          <Link to='/products'><button type="button" class="btn btn-outline-primary">Checkout Our Produts </button></Link>
        </div>
      </div>
    </div>
</div>
</div>

{/*   Card container   */}
{/* <div class="card-container bg-black" id="team">
  <div class="container-fluid px-3 py-3">
    <div class="row center mx-4 my-4 text-white">
      <h2>Meet Our Expert</h2>
      <p>Highly professional team</p>
    </div>
    <div class="row mb-5">
      <div class="col">
        <div class="card" >
  <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1474.jpg?w=740&t=st=1667038053~exp=1667038653~hmac=7f51a4d7c9f7dc9e0e3a6d53d45f381fc455e5424bcc36a0bedca65db24487e7" class="card-img-top" Style="height:300px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Martina doena</h5>
    <p class="card-text">Highly proficient in Web3 and AI and professional in Designing Websites with tools of Web3.0.</p>
    <a href="#" class="btn org-btn">Learn More.</a>
  </div>
</div>
      </div>
           <div class="col">
        <div class="card" >
  <img src="https://img.freepik.com/free-vector/work-time-concept-illustration_114360-1074.jpg" class="card-img-top" Style="height:300px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Zaid S.</h5>
    <p class="card-text">A professional web designer with a wealth of knowledge about the web Development and Software Development. </p>
    <a href="#" class="btn org-btn">Go somewhere</a>
  </div>
</div>
      </div>
           <div class="col">
        <div class="card" >
  <img src="https://img.freepik.com/free-vector/teaching-concept-illustration_114360-1708.jpg?w=740&t=st=1667038099~exp=1667038699~hmac=d144ede4a891a4bfcb57b109cc26614850ed35f5260bbf32541845325c476dbb" class="card-img-top" Style="height:300px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Jhon Doe</h5>
    <p class="card-text">Expert in all aspects of coding and knowledgeable about a wide range of coding languages</p>
    <a href="#" class="btn org-btn">Go somewhere</a>
  </div>
</div>
      </div>
    </div>
</div>
</div> */}
  
{/* <!--  banner container  --> */}
 <div class="banner-container mt-5 mb-5" id="featured">
  <div class="container-fluid px-4 py-4">
  <div class="card bg-black text-white shadow-lg ">
  <h5 class="card-header">Featured Collections</h5>
  <div class="card-body">
    <div class="conatiner">
    <div class="row d-flex justify-content-around">
      <div class="col">
         <div class="card text-black move-up mb-3" >
  <div class="card-header">Clothing</div>
  <div class="card-body">
    <h5 class="card-title">WESTERN + TRADITIONAL</h5>
    <p class="card-text">Life's a party, dress like it. Discover the perfect outfit for every occasion.

Fashion is the armor to survive the reality of everyday life. Step out in confidence with our customize dresses</p>
  </div>
</div>
      </div>
      <div class="col">
        <div class="card text-black move-up mb-3" >
  <div class="card-header">Gifts</div>
  <div class="card-body">
    <h5 class="card-title">GIFT CARDS</h5>
    <p class="card-text">Distance may separate us, but our hearts are always connected. Thinking of you and sending warm wishes</p>
  </div>
</div>
      </div>
      <div class="col">
        <div class="card text-black move-up mb-3" >
  <div class="card-header">Books</div>
  <div class="card-body">
    <h5 class="card-title">BEGINNER'S READING</h5>
    <p class="card-text">Books open your mind, broaden your mind, and strengthen you as nothing else can. – William Feather</p>
  </div>
</div>
      </div>
        <div class="col">
        <div class="card text-black move-up mb-3" >
  <div class="card-header">Shoes</div>
  <div class="card-body">
    <h5 class="card-title">WALKING WITH GRACE</h5>
    <p class="card-text">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes</p>
  </div>
</div>
      </div>
   </div>
    </div> 
  </div>
    </div>
</div>
</div>
</div>
                        <InfiSlider/>
                       
                    </div>
                    
                    )
}
export default Home;




 