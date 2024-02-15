import React from 'react'
import styles from './Hero.module.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";


function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.contain}>
        <div className={styles.hero_con}>
            <div className={styles.hero_info}>
                <p className={styles.text1}>Hello</p>
                <h3 className={styles.text2}>Pathapol Jom</h3>
                <p className={styles.text3}>
                    I'm Full Stack Dev
                    </p>
                <p className={styles.text4}>
                    asdadafsdfdf
                </p>
                <ul>
                    <li><a href="#"><FaSquareFacebook /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><HiOutlineMail /></a></li>
                    <li><a href="#"><FaGithub /></a></li>
                </ul>

            </div>
            <div className={styles.hero_image}>

            </div>
        
        </div>

      </div>

    </div>
  )
}

export default Hero


