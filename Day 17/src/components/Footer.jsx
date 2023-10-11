import React from 'react'
import { Link } from 'react-router-dom'
// import '../assets/Footer.css'
import 'font-awesome/css/font-awesome.min.css';
const Footer = () => {
  return (
    <div>
<footer class="text-center text-lg-start bg-white text-muted">
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a  className="me-4 link-secondary">
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a class="me-4 link-secondary">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a class="me-4 link-secondary">
        <i class="fa fa-google" aria-hidden="true"></i>
      </a>
      <a class="me-4 link-secondary">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a class="me-4 link-secondary">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a class="me-4 link-secondary">
        <i class="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
  
  </section>
  

 
  <section class="">
    <div class="container text-center text-md-start mt-5">
    
      <div class="row mt-3">
      
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fa fa-gem me-3 "></i>GIFTLY
          </h6>
          <p>
            It is a place to customize everything that you want.Customize it and enjoy it!!
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a  class="text-reset">Accessories</a>
          </p>
          <p>
            <a  class="text-reset">Home Decor</a>
          </p>
          <p>
            <a  class="text-reset">Clothing</a>
          </p>
          <p>
            <a  class="text-reset">Footwear</a>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
          <Link to='/privacy'  class="text-reset">Privacy Policy</Link>
          </p>
          <p>
          <Link to='/terms' class="text-reset">Terms & Conditions</Link>
          </p>
          <p>
          <Link to='/faq'  class="text-reset">FAQ</Link>
          </p>
          <p>
            <Link to='/feedback'  class="text-reset">Feedback</Link>
          </p>
        </div>
       

       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fa fa-home me-3 text-secondary"></i> Coimbatore, TN</p>
          <p>
            <i class="fa fa-envelope me-3 text-secondary"></i>
            egifts@gmail.com
          </p>
          <p><i class="fa fa-phone me-3 text-secondary"></i> + 91 6323 456 788</p>
          <p><i class="fa fa-print me-3 text-secondary"></i> + 91 4523 456 789</p>
        </div>
        
      </div>
     
    </div>
  </section>
  <div class="text-center p-4" Style="background-color: rgba(0, 0, 0, 0.025);">
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/"> E-GIFTS@INC</a>
  </div>
 
</footer>

</div>
    )
  }
  export default Footer


  // <div className='footer'>
  //     <div className='footer-container'>
  //         <div className='footer-l'>
  //             Copyright 2023 @CustoGifts Inc
  //             <div className='content'>
  //             <ul>
  //             <li>AbeBooks : Books,arts & collectibles </li>  
  //             <li>Shopbop : Designer,Fashion Brands</li>      
  //             </ul>
  //             </div>
  //         </div>
  //         <div className='footer-r'>
  //           <ul>
  //             <li><Link to='/privacy'>Privacy Policy</Link></li>
  //             <li><Link to='/terms'>Terms & Conditions</Link></li>
  //             <li><Link to='/faq'>FAQ</Link></li>
  //             <li><Link to='/feedback' className='feedback-link'>Feedback</Link></li>
  //             </ul>
  //         </div>
  //     </div>

  // </div>