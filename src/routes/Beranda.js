import React, {useState, useEffect} from 'react'
import CanvasTitle from "../layouts/CanvasTitle";
import Footer from "../layouts/Footer";
import NavBarStatic from "../layouts/NavBarStatic";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination,Autoplay,A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
  // import styles bundle
  import 'swiper/css/bundle';
  import {API2_URL} from '../config/config'
  import Axios from 'axios'

  SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);
  
export default function Beranda() {

    // const [swiperContent, setSwiperContent] = useState([])
    // const [info, setInfo] = useState({
    //     ikm: "...",
    //     ipp: "...",
    //     irb: "...",
    //     kod: "...",
    //     sakip: "..."
    // })
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      function imgUrl() {
        const id = rand(1, 200);
        return `https://picsum.photos/id/${id}/1920/1080`;
      }
      
      function createSlide() {
        return (
          <SwiperSlide>
            <img className="img" src={imgUrl()} alt="" />
            style={{width: "50%", height: "50%"}}
            
          </SwiperSlide>
        );
      }
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
    >
      {createSlide()}
      {createSlide()}
      {createSlide()}
      {createSlide()}
    </Swiper>
    
    

    return (
        
    <>
        <NavBarStatic/>
        <CanvasTitle judul="" deskripsi=""/>

       

 {/* <div className="w-full flex items-center justify-center" style={{height: '17%'}}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={{ 
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop
                    className="mb-10 h-full w-11/12 lg:w-8/12 mx-auto"
                >
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Kepuasan Masyarakat (IKM)</p>
                            <p className="font-semibold text-lg text-center">{info.ikm}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)</p>
                            <p className="font-semibold text-lg text-center">{info.sakip}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Reformasi Birokrasi (IRB)</p>
                            <p className="font-semibold text-lg text-center">{info.irb}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Indeks Pelayanan Publik (IPP)</p>
                            <p className="font-semibold text-lg text-center">{info.ipp}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                        <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                            <p className="text-sm font-light text-center">Kematangan Organisasi Daerah (KOD)</p>
                            <p className="font-semibold text-lg text-center">{info.kod}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
      */}
      
        <Footer/>
    </>
    )
    
}

