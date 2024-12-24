import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { DestinationList } from './pages/DestinationList';
import { DestinationDetail } from './pages/DestinationDetail';
import { SearchResults } from './pages/SearchResults';
import { Hotels } from './pages/Hotels';
import { HotelSearchResults } from './pages/HotelSearchResults';
import { Activities } from './pages/Activities';
import { Profile } from './pages/Profile';
import { Bookings } from './pages/Bookings';
import { DetailPage } from './components/CulturalInfo/DetailPage';
import { DanceList } from './components/CulturalInfo/DanceList';
import { FestivalList } from './components/Festival/FestivalList';
import { TempleList } from './components/Temple/TempleList';
import { FoodList } from './components/Food/FoodList';

export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<DestinationList />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/search" element={<HotelSearchResults />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/cultural/dance" element={<DanceList />} />
            <Route path="/cultural/temple" element={<TempleList />} />
            <Route path="/cultural/food" element={<FoodList />} />
            <Route path="/cultural/festival" element={<FestivalList />} />
            <Route path="/cultural/:category/:id" element={<DetailPage />} />
          </Routes>
          <ScrollToTop />
        </div>
      </Router>
    </AuthProvider>
  );
}