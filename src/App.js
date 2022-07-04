import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Beranda = lazy(() => import('./routes/Beranda'));
const PembinaanPengawasan = lazy(() => import('./routes/PembinaanPengawasan'));
const Reformasi = lazy(() => import('./routes/Reformasi'));
const PenegakanIntegritas = lazy(() => import('./routes/PenegakanIntegritas'));
const PelayananPublik = lazy(() => import('./routes/PelayananPublik'));
const Product = lazy(() => import('./routes/Product'));
const Features = lazy(() => import('./routes/Features'));
const Navbar = lazy(() => import('./routes/Navbar'));
const Login = lazy(() => import('./routes/Login'));
const Profil = lazy(() => import('./routes/Profil'));
const Swiper = lazy(() => import('./routes/Swiper'));
const Berita = lazy(() => import('./routes/Berita'));
const LayananKonsultasi = lazy(() => import('./routes/LayananKonsultasi'));




function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/Beranda" element={<Beranda />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Berita" element={<Berita />} />
          <Route path="/Berita/:params" element={<Berita />} />
          <Route path="/PembinaanPengawasan" element={<PembinaanPengawasan />} />
          <Route path="/Reformasi" element={<Reformasi />} />
          <Route path="/PenegakanIntegritas" element={<PenegakanIntegritas />} />
          <Route path="/PelayananPublik" element={<PelayananPublik />} />
          <Route path="/LayananKonsultasi" element={<LayananKonsultasi />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Swiper" element={<Swiper />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
