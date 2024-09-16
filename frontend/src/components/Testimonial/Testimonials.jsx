import React from 'react'
import Slider from "react-slick"
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings ={
        dots:true,
        infinte:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
  return (
    <Slider { ...settings}>
        <div className="testimonial py-4 px-3">
            <p>I recently booked a trip through this tour booking website, and I couldn't be happier! From the moment I landed in Paris, everything was perfectly organized. My guide, Lucas, was knowledgeable and made the history of the city come alive. He took us to hidden gems that I would have never found on my own. The weather was a concern, but the site provided accurate forecasts, so we packed accordingly. Each day was filled with unforgettable memories, delicious food, and beautiful sights. I can't wait to book my next adventure with them!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2"alt=''/>
                <div>
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>Last month, I used this website to plan a family trip to Italy, and it exceeded our expectations! The customization feature allowed us to create an itinerary that suited everyone's interests, from art lovers to foodies. Our tour guide, Maria, was fantastic! She was warm, engaging, and shared stories that made each location special. Plus, the weather calculations were spot-on, helping us pack wisely. We enjoyed every moment, from the Colosseum to the charming streets of Florence. This site made our family bonding time truly memorable.</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2"alt=''/>
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p> I can't recommend this tour booking website enough! As a solo traveler, I was a bit anxious, but their services made everything so easy. I booked a customized tour in Thailand, and it was a dream come true. My guide, Somchai, was exceptional—he introduced me to the local culture and cuisine that I would have missed otherwise. The site's weather forecasts were incredibly helpful, allowing me to plan my outfits. I felt safe and supported throughout my journey. I returned home with a full heart and unforgettable memories. I'll definitely be back for more adventures!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2"alt=''/>
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p> Our recent family vacation to Japan was spectacular, thanks to this tour booking website! The ease of planning was refreshing, and the customer service team was always available to answer my questions. The weather reports helped us pack appropriately for our adventures in Tokyo and Kyoto. Our guide, Hiro, was amazing! He was friendly, patient with our kids, and shared insights that made the culture come alive. Every moment was magical, and I loved how customizable the tours were. We can't wait to book our next trip with them!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2"alt=''/>
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p> Using this platform was one of the best decisions I've made! I was planning a surprise trip for my girlfriend, and they helped me every step of the way. The customization options allowed me to include her favorite activities, like hiking and wine tasting. Our guide, Elena, was not only knowledgeable but also incredibly fun!. The weather updates were accurate, ensuring we enjoyed sunny days exploring. The whole experience felt personal and special. My girlfriend was thrilled, and we created beautiful memories together. I'm grateful for this service!</p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2"alt=''/>
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials