import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description:
            "chance to grab your favorite items at half the price. Whether you're shopping for fashion, gadgets, or home essentials, we've got everything you need at unbeatable prices",
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description:
            "sale is your gateway to premium quality at half the cost. From trendy apparel to must-have accessories, we’ve got something for everyone. Browse through our wide range of products",
    },
    {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description:
            "Act fast—these incredible discounts are only available for a limited time! Once the sale ends, prices go back up, and you wouldn’t want to miss out on this amazing opportunity.",
    },
];

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };


    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* Background Pattern */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">
            


            </div>
            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                         <div>
                         <div className="grid grid-cols-1 sm:grid-cols-2">
                             {/* text content section */}
                             <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                 <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                 <p className="text-sm"> {data.description}</p>
                                 <div>
                                     <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                                         Order Now
                                     </button>
                                 </div>
                             </div>
                             {/*Image section */}
                             <div className="order-1 sm:order-2">
                                 <div className="relative z-10">
                                     <img src={data.img} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"/>
                                 </div>
                             </div>
     
                         </div>
                     </div>
                    ))}           
                </Slider>    
            </div>
        </div>
    );
};

export default Hero
