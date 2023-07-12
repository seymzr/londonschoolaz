import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import carlsberg from '../img/carlsberg.png';
import unibank from '../img/unibank.png';
import socarpolymer from '../img/socarpolymer.png';
import cocacola from '../img/cocacola.png';
import socarmidstream from '../img/socarmidstream.png';
import mazarina from '../img/mazarina.png';
import azersun from '../img/azersun.png';
import portofbaku from '../img/portofbaku.png';
import azercosmos from '../img/azercosmos.png';
import butasigorta from '../img/butasigorta.png';
import akkord from '../img/akkord.png';
import kapital from '../img/kapital.png';
import bankrespublika from '../img/bankrespublika.png';
import satgroup from '../img/satgroup.png';
import motorscrystal from '../img/motorscrystal.png';
import porsche from '../img/porsche.png';
import veyseloglu from '../img/veyseloglu.png';
import kontakthome from '../img/kontakthome.png';
import cacs from '../img/cacs.png';
import engin from '../img/engin.png';
import zqan from '../img/zqan.png';
import azerfon from '../img/azerfon.png';
import pasha from '../img/pasha.png';
import nobeloil from '../img/nobeloil.png';
import sgc from '../img/sgc.png';
import agrodairy from '../img/agrodairy.png';
import pdl from '../img/pdl.png';
import bankofazerbaijan from '../img/bankofazerbaijan.png';
import { Component } from "react";

// Add more photo imports as needed


 

  const partners = [
    { id: 1, src: carlsberg, alt: 'Partner 1' },
    { id: 2, src: unibank, alt: 'Partner 2' },
    { id: 3, src: socarpolymer, alt: 'Partner 3' },
    { id: 4, src: cocacola, alt: 'Partner 4' },
    { id: 5, src: socarmidstream, alt: 'Partner 5' },
    { id: 6, src: mazarina, alt: 'Partner 6' },
    { id: 7, src: azersun, alt: 'Partner 7' },
    { id: 8, src: portofbaku, alt: 'Partner 8' },
    { id: 9, src: azercosmos, alt: 'Partner 9' },
    { id: 10, src: butasigorta, alt: 'Partner 10' },
    { id: 11, src: akkord, alt: 'Partner 11' },
    { id: 12, src: kapital, alt: 'Partner 8' },
    { id: 13, src: bankrespublika, alt: 'Partner 8' },
    { id: 14, src: satgroup, alt: 'Partner 8' },
    { id: 15, src: motorscrystal, alt: 'Partner 8' },
    { id: 16, src: porsche, alt: 'Partner 8' },
    { id: 17, src: veyseloglu, alt: 'Partner 8' },
    { id: 18, src: kontakthome, alt: 'Partner 8' },
    { id: 19, src: cacs, alt: 'Partner 8' },
    { id: 20, src: engin, alt: 'Partner 8' },
    { id: 21, src: zqan, alt: 'Partner 8' },
    { id: 22, src: azerfon, alt: 'Partner 8' },
    { id: 23, src: pasha, alt: 'Partner 8' },
    { id: 24, src: nobeloil, alt: 'Partner 8' },
    { id: 25, src: sgc, alt: 'Partner 8' },
    { id: 26, src: agrodairy, alt: 'Partner 8' },
    { id: 27, src: pdl, alt: 'Partner 8' },
    { id: 28, src: bankofazerbaijan, alt: 'Partner 8' },
    // Add more partner objects as needed
  ];


  
  export default class Partners extends Component {
    
    constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
    }
    play() {
      this.slider.slickPlay();
    }
    pause() {
      this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
      
    
      return (

        <section id="partners">
          <Slider className="w-sm-75 w-md-75 container-md my-5" {...settings}>
          {partners.map((item) => (
            <img
              key={item.id}
              id="logos"
              src={item.src}
              alt={item.alt}
            />
          ))}
        </Slider>
        </section>
      );
    }
  }
