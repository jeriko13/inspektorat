import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Beranda = lazy(() => import('./Beranda'));
const Beranda2 = lazy(() => import('./Beranda2'));
const PembinaanPengawasan = lazy(() => import('./PembinaanPengawasan'));
const Reformasi = lazy(() => import('./Reformasi'));
const PenegakanIntegritas = lazy(() => import('./PenegakanIntegritas'));
const PelayananPublik = lazy(() => import('./PelayananPublik'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const Navbar = lazy(() => import('./Navbar'));
const Login = lazy(() => import('./Login'));
const Profil = lazy(() => import('./Profil'));
const Berita = lazy(() => import('./Berita'));
const LayananKonsultasi = lazy(() => import('./LayananKonsultasi'));




function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda2" element={<Beranda2 />} />
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
