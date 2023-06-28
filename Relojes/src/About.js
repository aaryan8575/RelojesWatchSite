import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

  const data = {
    name: "Relojes",
    desc : "Relojes is an online watch store that offers a wide range of high-quality watches for both men and women. The store features a diverse collection of watches from various renowned brands, including luxury and designer brands, as well as more affordable options.Customers can choose from a variety of styles, including sporty, casual, classic, and elegant designs, to match their personal preferences and needs. The watches come in different materials such as stainless steel, leather, and rubber, and they feature different functions such as chronographs, alarms, and timers.Relojes is committed to providing its customers with a seamless online shopping experience. The website is user-friendly, and customers can easily search and filter their choices based on brand, price, style, or features. The store also offers fast and reliable shipping, easy returns, and a secure payment system.In addition to its exceptional product selection and services, Relojes is dedicated to delivering outstanding customer service. The store's knowledgeable and friendly team is always available to assist customers with any questions or concerns they may have. Overall, Relojes is the ideal online destination for watch enthusiasts looking for quality, variety, and excellent service"
  }
  return (
    <>
      <HeroSection myData={data}/>
    </>
  );
}



export default About
