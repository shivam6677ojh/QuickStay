// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Home from './Pages/Home';
// import Footer from './components/Footer';
// import HotelRoom from './Pages/HotelRoom';
// import RoomDetails from './Pages/RoomDetails';

// const App = () => {

//   const isOwnerPath = useLocation().pathname.includes("owner");

//   return (
//     <div>
//       {!isOwnerPath && <Navbar />}

//       <div className='min-h-[70vh]'>
//         <Routes >
//           <Route path='/' element={<Home />} />
//           <Route path='/rooms' element={<HotelRoom />} />
//           <Route path='/rooms/:id' element={<RoomDetails />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>

//   )
// }

// export default App


import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import HotelRoom from "./Pages/HotelRoom";
import RoomDetails from "./Pages/RoomDetails";
import HotelLoader from "./components/HotelLoader";
import ContactHere from "./components/ContactHere";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app/data loading (replace with API logic if needed)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const styles = `
    @keyframes move-bg { from { background-position: 0 0; } to { background-position: 0 25px; } }
    @keyframes welcome-zoom-loop { 0% { opacity: 0; transform: scale(0.7) translateZ(-200px); } 30%, 70% { opacity: 1; transform: scale(1) translateZ(0); } 100% { opacity: 0; transform: scale(1.2) translateZ(50px); } }
    @keyframes welcome-glow { 0%, 100% { text-shadow: 0 0 5px #aaa, 0 0 10px #fff; } 50% { text-shadow: 0 0 10px #ccc, 0 0 20px #fff, 0 0 30px #fff; } }
    @keyframes letter-from-left-loop { 0%, 40% { opacity: 0; transform: translateX(-80px); } 60%, 90% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(20px); } }
    @keyframes letter-from-right-loop { 0%, 45% { opacity: 0; transform: translateX(80px); } 65%, 95% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; transform: translateX(-20px); } }
    @keyframes red-glow { 0%, 100% { text-shadow: 0 0 5px #f88, 0 0 10px #f00, 0 0 15px #f00; } 50% { text-shadow: 0 0 10px #fff, 0 0 20px #f88, 0 0 30px #f00; } }
    @keyframes cyan-glow { 0%, 100% { text-shadow: 0 0 5px #8ff, 0 0 10px #0ff, 0 0 15px #0ff; } 50% { text-shadow: 0 0 10px #fff, 0 0 20px #8ff, 0 0 30px #0ff; } }
    .animate-move-bg { animation: move-bg 1s linear infinite; }
    .animate-welcome-zoom { animation: welcome-zoom-loop 4s ease-in-out infinite, welcome-glow 3s ease-in-out infinite; }
    .animate-red-glow { animation: red-glow 2.5s ease-in-out infinite; }
    .animate-cyan-glow { animation: cyan-glow 2.5s ease-in-out infinite 0.2s; }
    .animate-letter-from-left { animation: letter-from-left-loop 4s ease-in-out infinite; animation-fill-mode: both; }
    .animate-letter-from-right { animation: letter-from-right-loop 4s ease-in-out infinite 0.2s; animation-fill-mode: both; }
  `;

  if (loading) {
    return (
      <>
        <style>{styles}</style>
        <HotelLoader />
      </>
    );
  }

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<HotelRoom />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/contactHere" element={<ContactHere />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
