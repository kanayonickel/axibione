import React from 'react'
import css from './Hero.module.css'
import {BsArrowRight} from 'react-icons/bs'
import {RiShoppingBagFill} from 'react-icons/ri'
import HeroImg from '../../assets/hero.png'
import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {duration: 3, type: "spring"}

  return (
<div className={css.container}>
    {/* left side */}
    <div className={css.h_sides}>
        <span className={css.text1}>Skin protection Cream</span>
        <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>{" "}Every thing you need this Summer is right here.</span>
        </div>
    </div>
      {/* middle side */}
    <div className={css.wrapper}>
        {/* blue circle animation */}
      <motion.div initial={{bottom:"4rem"}} whileInView={{bottom: "0.25rem"}} transition={transition} className={css.blueCircle}></motion.div>
      
      {/* hero image */}
        <motion.img 
        transition={transition}
        initial={{ bottom: "-4rem" }}
        whileInView={{ bottom: "0rem" }}
        src={HeroImg} alt="" width={600}/>



        <motion.div transition={transition} initial={{right: "2%"}} whileInView={{right: "-8%"}} className={css.cart2}>
            <RiShoppingBagFill />
            <div className={css.signup}>
                <span>Best Signup Offers</span>
                <div>
                    <BsArrowRight/>
                </div>
            </div>
        </motion.div>
    </div>

{/* Right side */}
<div className={css.h_sides}>
    <div className={css.traffic}>
        <span>65k</span>
        <span>Monthly Traffic</span>
    </div>

    <div className={css.customers}>
        <span>115k</span>
        <span>Happy Customers</span>
    </div>
</div>

</div>
  )
}

export default Hero