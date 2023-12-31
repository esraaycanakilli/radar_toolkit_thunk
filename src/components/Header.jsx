import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const store = useSelector((store) => store);

  const handleLogoClick = () => {
    
    window.location.href = '/Mapview';
  };

  return (
    <header>
      <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src="/logo-f.png" alt="Logo" />
        <h2>Uçuş Radarı</h2>
      </div>
      <h4>
        {store.isLoading
          ? 'Uçuşlar Hesaplanıyor...'
          : `${store.flights.length} Uçuş Bulundu`}
      </h4>
    </header>
  );
};

export default Header;
