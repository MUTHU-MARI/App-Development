import React from 'react'
import '../../assets/HomeAll/InfiSlider.css';
export const InfiSlider = () => {
  return (
    <div>
        <div className="logos">
        <h2 style={{marginLeft:"45%"}}>Our Clients</h2>     
    <div className="logos-slide">
      <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" />
      <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" />
      <img src="https://media.designrush.com/inspiration_images/345908/conversions/walmart_1-preview.jpg" />
      <img src="data:image/jpeg;base64,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" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAMMROm-VJHuzCHqG3T9_vUAinjq9sEUEZPLO7GuI&s" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMf9NYeWfNG5tAud_1fFJt7Y3HgdoYH8uUJOwu_5eW&s" />
      <img src="https://thrivemyway.com/wp-content/uploads/2022/03/Adidas-Logo-Shoe-Brands.png" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS5PI_f0dgxc2a7aLIIamya0XAXSttCfM5UJxGe5U&s" />
    </div>
  </div>
    </div>
  )
}
export default InfiSlider