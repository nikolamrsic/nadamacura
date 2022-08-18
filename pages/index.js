import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/navbar";
import { motion } from "framer-motion";
import { Fragment } from "react";
export default function Home() {
  const transition = { type: "spring", stiffness: 100 };

  const [scrollY,setScrollY]=React.useState(1)

  const updateScrollY=()=>{
    console.log(window.scrollY)
  }

  return (
    <>
      {/**Hero Sekcija */}
      <motion.section
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        style={styles}
        id="hero"
        className="  max-w-[2000px]  main flex  bg-main  items-start md:items-center  justify-start w-full   mx-auto relative bg-right  md:min-h-[850px]  bg-cover   bg-no-repeat  bg-[url('/zena-hue.png')]  "
      >
        {/**Text */}

        <div className="w-11/12 md:w-10/12 lg:w-5/12 lg:mx-[15%]    translate-y-28 md:translate-y-0  flex flex-col gap-8 mx-auto">
          <motion.h1
            transition={transition}
            whileHover={{ color: "#12a4c3", cursor: "pointer" }}
            className="md:text-5xl xxl:text-8xl  text-3xl text-white"
          >
            Lorem Ipsum has <br /> been the Industry&apos;s.
            <span className="w-2  h-[10px] ml-3  p-[2px]  bg-main-ciyan"></span>
          </motion.h1>

          <p className="text-md text-white font-thin leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s
          </p>

          <motion.button
            transition={transition}
            whileHover={{
              background: "transparent",
              borderColor: "#12a4c3",
              cursor: "pointer",
            }}
            className="py-4 px-12 w-full md:w-fit border border-transparent bg-main-ciyan text-white "
          >
            Tell me more
          </motion.button>
        </div>
        <img
          src="/copr-sivi-mali.png"
          className="object-fit absolute right-0 hidden lg:block lg:bottom-0  z-50 w-2/12 max-w-[150px] bac"
        />
      </motion.section>

      {/**Hero Sekcija 2 */}

      <section className="  mt-48 max-w-[2000px] flex  flex-col gap-16 relative justify-start relative items-center  bg-main   w-full   mx-auto p-5">
        <img
          src="/prasina.png"
          className="absolute w-full  -top-[320px] xl:-top-[100%] pointer-events-none"
          alt="stars"
        />

        <div className="mb-16 md:w-9/12 w-11/12 max-w-5xl flex flex-col gap-5 text-center   bg-main">
          <h1 className="text-5xl lg:text-6xl font-thin text-white">
            Train your train
          </h1>
          <p className="text-white/80  md:w-9/12 mx-auto font-thin leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s
          </p>
        </div>

        {/**Kartice */}

        <div className="md:w-10/12  bg-main relative z-50 w-11/12 grid-cols-2 md:grid-cols-5 grid   ">
          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center   col-span-1     py-5  md:border-r md:border-b border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Handball.png" />
            <span className="text-white">handball</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center justify-center   col-span-1   py-5   md:border-r md:border-b border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Soccer.png" />
            <span className="text-white">vootball</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center justify-center  col-span-1     py-5  md:border-r  md:border-b border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Volleyball.png" />
            <span className="text-white">volleyball</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center  col-span-1    py-5   md:border-r md:border-b border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/basket.png" />
            <span className="text-white">basketBall</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center  col-span-1    py-5    md:border-b border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Shooting.png" />
            <span className="text-white">shooting</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center justify-center   col-span-1   py-5   md:border-r  border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Judo.png" />
            <span className="text-white">judo</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center justify-center   col-span-1    py-5  md:border-r  border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/karate.png" />
            <span className="text-white">karate</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center   col-span-1    py-5  md:border-r  border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Tennis.png" />
            <span className="text-white">tennis</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center    col-span-1   py-5  md:border-r  border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Atletika.png" />
            <span className="text-white">athletics</span>
          </motion.div>

          <motion.div
            initial={{ background: "transparent", opacity: 0 }}
            whileHover={{
              borderColor: "transparent",
              background: "cyan",
              scale: 1.3,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center  col-span-1     py-5   border-white/10 gap-3"
          >
            <img className="h-12 w-12" src="/Biathlon.png" />
            <span className="text-white">biathlon</span>
          </motion.div>
        </div>
      </section>

      {/**Sekciaja 3 Kartice */}

      <section className=" max-w-[2000px]  bg-main flex flex-col items-center w-full bg-[url('/prasina.png')]  bg-contain md:bg-cover bg-no-repeat mt-[250px] relative   mx-auto  ">
        <motion.img
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          src="/golman.svg"
          className="absolute hidden md:block -top-24 right-0 shadow h-[350px] lg:h-auto   pointer-events-none"
          alt="Goalkeeper"
        />

        <img
          src="/crop-beli-mali.png"
          className="absolute hidden xl:block left-0 shadow lg:-top-[246px]  z-0  pointer-events-none"
          alt="stars"
        />

        {/**Kontent */}
        <div className=" w-11/12 md:w-8/12 mx-auto">
          <h1 className="text-white text-4xl w-full lg:w-6/12 font-thin mb-24 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          {/**Kartice */}
          <div className="md:10/12 w-full  mx-auto grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-2 gap-9">
            <motion.article
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2 md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3">This is Heading</h1>
              <p1 className="text-sm text-white/80">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>

            <motion.article
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2 md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3">This is Heading</h1>
              <p1 className="text-sm text-white/80">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>

            <motion.article
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2  md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3">This is Heading</h1>
              <p1 className="text-sm text-white/80">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>

            <motion.article
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2 md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3">This is Heading</h1>
              <p1 className="text-sm text-white/80">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>
            <motion.article
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2 md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3">This is Heading</h1>
              <p1 className="text-sm text-white/80">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>
            <motion.article
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2 md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3">This is Heading</h1>
              <p1 className="text-sm text-white/80">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>
            <motion.article
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2 md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3">This is Heading</h1>
              <p1 className="text-sm text-white/80">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>
            <motion.article
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.975, scale: { delay: 0 } }}
              className=" col-span-2 md:col-span-1 bg-main drop-shadow-xl p-4 hover:drop-shadow-2xl"
            >
              <h1 className="text-3xl text-white mb-3 pointer-events-none">
                This is Heading
              </h1>
              <p1 className="text-sm text-white/80 pointer-events-none">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p1>
            </motion.article>
          </div>
        </div>

        <motion.button
            transition={transition}
            whileHover={{
              background: "transparent",
              borderColor: "#12a4c3",
              cursor: "pointer",
            }}
            className="py-4 mt-16  px-12 w-11/12 mx-auto md:w-fit border border-transparent bg-main-ciyan text-white "
          >
            All servicese
          </motion.button>
      </section>

      {/**Sekcija 4 */}

      <section className=" max-w-[2000px]  w-full mt-[250px] bg-[url('/prasina.png')] bg-cover bg-no-repeat relative   mx-auto">
       
     
       
        <img
          className=" senka-beli-veliki  trougao:top-[14%] trougao:w-[33%] 2xl:top-[5%]  absolute right-0 z-0 w-3/12 md:w-[28%] top-[35%] md:top-[calc(32.333%)] 2xl:top-[10%]  "
          src="/trougao-veliki-beli.svg "
        />

<img className='absolute z-[0] pointer-events-none scale-[0.8] -top-[25%]  md:-top-[50%] left-0' src="/trofej.png"/>

        <div className=" mx-auto  border-t-main-ciyan border-transparent border-b-main-ciyan backdrop-blur-xl  border backdrop-brightness-100  hover:bg-black/5 transition-all relative z-50  w-8/12 md:w-8/12 lg:w-6/12 bg-main-ciyan text-white  py-12 px-8">
        
          <h1 className=" relative  z-50 text-xl md:text-2xl italic text-center selection:bg-main-ciyan selection:text-black">
          &apos;Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s&apos; -Jack Wlech
          </h1>
        </div>

        {/**Reference */}
        <div className=" w-full lg:w-8/12 my-44 mx-auto flex flex-col-reverse xl:flex-row justify-center items-center">
          {/**Content */}

          {/**Text */}

          <div className="flex-1  p-5 ">
            <div className="w-full relative   hover:text-main-ciyan  p-2">
              <svg
                className="absolute md:top-0 -top-8 lg:-left-16 md:-top-20 fill-main-ciyan h-6 w-6 md:h-8 md:h-8 lg:h-16 lg:w-16"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.135 0H5.135L3 5.607H0L2.135 0ZM7.135 0H10.135L8 5.607H5L7.135 0Z"
                  fill=""
                />
              </svg>

              <svg
                className="absolute bottom-0 md:right-18 lg:-right-12 right-0 fill-main-ciyan h-6 w-6 lg:h-16 lg:w-16"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.135 0H5.135L3 5.607H0L2.135 0ZM7.135 0H10.135L8 5.607H5L7.135 0Z"
                  fill=""
                />
              </svg>

              <h1 className="text-4xl text-white    hover:text-main-ciyan mb-7">References</h1>
              <p className="text-white font-thin italic mb-5   selection:bg-main-ciyan selection:text-black  hover:text-main-ciyan">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <span className="text-2xl text-white    hover:text-main-ciyan selection:bg-main-ciyan selection:text-black ">-Jonh Doe</span>
              <p className="text-white    hover:text-main-ciyan selection:bg-main-ciyan selection:text-black">Proffesor at University of Novi Sad</p>
            </div>
            <motion.button
            transition={transition}
            whileHover={{
              background: "transparent",
              borderColor: "#12a4c3",
              cursor: "pointer",
            }}
            className="py-4 mt-5 px-12 w-full md:w-fit border border-transparent bg-main-ciyan text-white "
          >
            All services
          </motion.button>
          </div>

          {/*Image */}

          <div className="flex-1 p-5 flex items-center  justify-center ">
            <motion.div
              style={{
                clipPath: " polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
              className="w-[330px] h-[330px] md:w-[480px] md:h-[480px] border drop-shadow-2xl"
            >
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwc3VpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></img>
            </motion.div>
          </div>
        </div>
        <div></div>
      </section>

      {/**Skecija 5 */}

      <section
      
      
      className= "  max-w-[2000px] flex items-center justify-center  w-full mt-16    bg-no-repeat relative   mx-auto">

     
        <div className=" w-full z-10 lg:w-8/12 my-44 mx-auto flex flex-col-reverse xl:flex-row-reverse justify-center items-center">
        
          {/**Content */}

          {/**Text */}

          <div className="flex-1  z-50  p-5 relative">
            <h1 className="text-4xl text-white mb-7 pr-4 border-r w-fit border-r-2 border-r-main-ciyan">
              About Me
            </h1>
            <p className="text-white font-thin  mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <motion.button
            transition={transition}
            whileHover={{
              background: "transparent",
              borderColor: "#12a4c3",
              cursor: "pointer",
            }}
            className="py-4 mt-5 px-12 w-full md:w-fit border border-transparent bg-main-ciyan text-white "
          >
            Get to know me
          </motion.button>
          </div>

          {/*Image */}

          <div 
         
          
          className="flex-1 relative z-30 2xl:-translate-x-12  p-5 flex items-center  justify-center ">
            <motion.div
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
              className="w-[330px] h-[330px] md:w-[480px] md:h-[480px]  border drop-shadow-2xl"
            >
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              ></img>
            </motion.div>
          </div>
        </div>
        <div></div>


        <img
            className="absolute w-full z-0 -top-48 pointer-events-none"
            src="/prasina.png"
          />
        <img className="absolute left-0 z-0   -translate-y-[60px]  top-[calc(50%-(463px))] ]  md:-translate-y-[110px] md:w-[400px]   xl:w-[500px] top-[50%-250px] xl:-translate-y-[60px]" src="/trougao-veliki-plavi.svg"></img>   
       
      </section>
   
      {/**Trofej */}
      <h1 className="text-center text-3xl lg:text-5xl mb-[120px] text-white font-thin">Latest from the Blog</h1>
     
     
     
      {/**BLog seckija */}
      <section className="w-full overflow-hidden mx-auto max-w-[2000px] relative bg-main">

      <svg className="absolute z-0 left-0 top-[calc(50%-150px)]" width="2883" height="300" viewBox="0 0 2883 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="2883" height="300" fill="#D9D9D9"/>
</svg>
     

      
        <div
          className="min-h-[500px] grid grid-cols-2 w-11/12 grid-cols-1 gap-y-4 lg:grid-cols-2 md:w-10/12 lg:w-8/12 justify-between  mx-auto  gap-x-3
      "
        >
          <div className=" ">
            <article className=" flex items-end relative h-full overflow-hidden ">
              <div className="w-full h-[30%] absolute bottom-0 left-0 bg-gradient-to-t z-10 from-blue-500 "></div>
              <motion.img
                whileHover={{scale:1.2,filter:'grayscale(1)'}}
                className="absolute w-full h-full top-0 left-0 object-cover"
                src="https://images.unsplash.com/photo-1562771379-eafdca7a02f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              ></motion.img>
              <div className="w-full relative z-20 pb-3 pt-8 px-5 text-white  ">
                <div>03.10.2019</div>
                <h1 className="text-xl">
                  Align your mind and body with the demanding.
                </h1>
              </div>
            </article>
          </div>

          <div className=" flex   flex-col gap-3  overflow-hidden ">
            <article className="w-full flex-1 min-w-full  overflow-hidden  flex items-end relative h-full  h-1/2">
             
              <div className="w-full h-[30%] absolute bottom-0 left-0 bg-gradient-to-t z-10 from-blue-500"></div>
              
              <motion.img
                whileHover={{scale:1.2,filter:'grayscale(1)'}}
                className="absolute w-full h-full top-0 left-0 object-cover"
                src="https://images.unsplash.com/photo-1625151936268-e1ffba534f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ></motion.img>
              <div className="w-full relative z-20 pb-3 pt-8 px-5 text-white  ">
                <div>03.10.2019</div>
                <h1 className="text-xl">
                  Align your mind and body with the demanding.
                </h1>
              </div>
            </article>

            <div className="w-full flex-1 flex gap-3 h-1/2">
              <article className="w-full overflow-hidden flex w-6/12 items-end relative h-full bg-blue-800">
                <div className="w-full h-[30%] absolute bottom-0 left-0 bg-gradient-to-t z-10 from-blue-500"></div>
                <motion.img
                whileHover={{scale:1.2,filter:'grayscale(1)'}}
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                ></motion.img>
                <div className="w-full relative z-20 pb-3 pt-8 px-5 text-white  ">
                  <div>03.10.2019</div>
                  <h1 className="text-xl w-8/12 truncate  text-ellipsis ">
                    Align your mind and body with the demanding.
                  </h1>
                </div>
              </article>
              <article className=" overflow-hidden w-full flex  w-6/12 items-end relative h-full bg-blue-800">
                <div className="w-full h-[30%] absolute bottom-0 left-0 bg-gradient-to-t z-10 from-blue-500"></div>
                <motion.img
                whileHover={{scale:1.2,filter:'grayscale(1)'}}
                  className="absolute w-full h-full top-0 left-0 object-cover"
                  src="https://images.unsplash.com/photo-1542720046-1e772598ea39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnQlMjB3aW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                ></motion.img>
                <div className="w-full relative z-20 pb-3 pt-8 px-5 text-white  ">
                  <div>03.10.2019</div>
                  <h1 className="text-xl   w-8/12 truncate  text-ellipsis overflow-hidden  ">
                    Align your mind and body with the demanding.
                  </h1>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

    {/**Lopta sekcija */}
   <section className="w-full flex  items-center justify-center  max-w-[2000px] min-h-[400px] lg:min-h-[800px] mx-auto bg-[url('/hlopta.png')] bg-cover  bg-no-repeat bg-top  bt-top">
     <div className="w-11/12 lg:w-6/12 m-auto  text-center ">
     
       <h1 className=" text-3xl lg:text-4xl text-white">NADA MACURA , a Latin Proffesor</h1>
       <motion.button
            transition={transition}
            whileHover={{
              background: "transparent",
              borderColor: "#12a4c3",
              cursor: "pointer",
            }}
            className="py-4 mt-5 px-12 w-full md:w-fit border border-transparent bg-main-ciyan text-white "
          >
            Contact Me
          </motion.button>
     </div>
   </section>

    </>
  );
}
