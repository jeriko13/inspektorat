import React, {useState, useEffect} from "react";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/NavBar";
import Axios from 'axios';
import {API_URL} from '../config/config';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
export default function Berita__() {
  let { params } = useParams();
  const [keywords, setKeywords] = useState((params) ? params : '');
    const [dataInformasi,setDataInformasi] = useState([]);
    const [startPage,setStartPage] = useState(1);
    const [totalRecordCount,setTotalRecordCount] = useState(0);
    // const [dataPromosi,setDataPromosi] = useState([]);
    // let limit = 3;
  
    
  
    useEffect(() => {
      checkInfo();
      // checkPromo();
    } );
  

  
    const checkInfo = () => {
      try {
        Axios.get(`${API_URL}/list/t_berita?cmd=search&t=t_berita&x_kategori_berita_id=${keywords}`)
          .then(res => {
          console.log(res.data);
            const data = res.data;
           setTotalRecordCount(data.totalRecordCount);
            setDataInformasi(data.t_berita);
            console.log(data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } catch (error) {
        console.log(error);
      }
    }
  
    // const handlePagination = (btn) => { 
    //   if (btn == "next") {
    //     try {
    //       Axios.get(`${API_URL}/list/t_berita?cmd=search&t=t_berita&x_kategori_berita_id=${limit}`)
        
    //         .then(res => {
    //           const data = res.data.t_berita;
    //           console.log(data);
    //           setDataInformasi(data);
    //           setStartPage(startPage + 7 );
  
    //         })
    //         .catch(function (error) {
    //           // handle error
    //           console.log(error);
    //         })
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   } else {
    //     try {
    //       Axios.get(`${API_URL}/list/t_berita?_page=1&_limit=${limit}`)
    //         .then(res => {
    //           const data = res.data.t_berita;
    //           console.log(data);
    //           setDataInformasi(data);
    //           setStartPage(startPage - 7 );
    //         })
    //         .catch(function (error) {
    //           // handle error
    //           console.log(error);
    //         })
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
     
    // }
  
   
    return (
    <>
        <NavBar transparent/>
        <div className="relative bg-transparent">
            <div className="max-w-7xl mx-auto bg-indigo-800 bg-blend-multiply" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" }}>
                <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:bg-white">
                    <svg
                        className="hidden lg:block absolute right-0 inset-y-0 h-full w-40 text-slate-50 transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <main className="mx-auto pt-24 max-w-7xl px-4 sm:px-6 lg:pt-24 lg:px-8 xl:pt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block text-slate-300 lg:text-slate-800">Penyedia solusi</span> {' '}
                                <span className="block text-slate-50 lg:text-blue-800">e-Government</span>
                            </h1>
                            <p className="mt-3 text-base text-slate-300 lg:text-slate-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Penyediaan solusi Teknologi Informasi bagi pemerintah daerah dan pusat
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                    href="/about"
                                    className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-8"
                                    >
                                    About Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-indigo-800 bg-blend-multiply"  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" }}></div>
            </div>
        </div>

        <div className="w-full bg-slate-50 py-6 mb-10" style={{ backgroundImage: "" }}>
            <div className="max-w-7xl mx-auto">
      
            </div>
        </div>

        <div className="relative w-full mx-auto mb-10 py-6">
        
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="w-full mb-10 md:flex-1 flex justify-center flex-col sm:flex-row items-center sm:items-stretch">
                       
                        <div className="w-full sm:w-6/12 text-center sm:text-left p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                        
                           
                        </div>
                    </div>
                    <div className="w-full mb-10 md:flex-1 flex items-center sm:items-stretch justify-center flex-col sm:flex-row-reverse">
                       
                        <div className="w-full sm:w-6/12 text-center sm:text-right p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                           
                            
                        </div>
                    </div>
                    <div className="w-full mb-10 md:flex-1 flex items-center sm:items-stretch justify-center flex-col sm:flex-row">
                     
                        <div className="w-full sm:w-6/12 text-center sm:text-left p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                            
                        
                        </div>
                    </div>
                    <div className="w-full mb-10 md:flex-1 flex items-center sm:items-stretch justify-center flex-col sm:flex-row-reverse">
                       
                        <div className="w-full sm:w-6/12 text-center sm:text-right p-4 sm:p-6 flex flex-col justify-center bg-slate-100">
                           
                        </div>
                    </div>
                    <h2 className="text-center font-semibold text-2xl text-blue-800 mb-16 underline underline-offset-8">Halaman Berita</h2>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>
  
          <section className="pb-20 bg-blueGray-200 -mt-24">
      
            
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
   
                
              </div>
  
              <div className="flex flex-wrap items-center mt-32">
         
              {dataInformasi.map( hasil => {
                        return(

                  <a href={`/berita2/${hasil.berita_id}`} className="w-full md:w-4/12 px-2 mr-auto ml-auto" type="button"
               
                  >    
            
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-cyan-500">
                  
                        <img
                      alt=""
                      // src={`https://inf.co.id/inf_backoffice/images/${hasil.gambar.name}`}
                      // src={`https://drive.google.com/uc?export=view&id=1YPFTA05H6ArsIINEBQGWOvHLxsmVFG_K`}
                      src={`${hasil.gambar}`}
                      
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-cyan-500 fill-current"
                        ></polygon>
                      </svg>

                  
                      <h4 className="text-xl font-bold text-white">
      
                          
                          {/* <p> {hasil.isi} </p> */}
                          <p> {hasil.judul}  </p>
                          <p> {hasil.tanggal} </p>
                      
                     </h4>  
                  
                      <p className="text-md font-light mt-2 text-white">
                        
                       {hasil.berita}
                      </p>
                  
                    </blockquote>
                  </div>
                   </a>

                )
                })}
   
                
                {/* {
                  (totalRecordCount - startPage < 6) ? <button onClick={() => handlePagination('prev')} className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button">Prev</button> : ""
                } */}
              {/* {
                  (startPage == 1) ? <button onClick={() => handlePagination('next')} className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button" >Next</button> : ""
                } */}
              
              </div>
            </div>
          </section>
  
          <section className="relative py-20">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-white fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
  
       

            </div>
            </div>
        
        <Footer/>
    </>
    )
}