import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const store=useSelector((store)=>store)
  console.log(store)
  return (
    
    <header>
        <div>
            <img src="/logo-f.png" />
            <h2>Uçuş Radarı</h2>
        </div>
        <h4>{store.isLoading
              ?'Uçuşlar Hesaplanıyor...'
              :`${store.flights.length} Uçuş Bulundu`
        }</h4>
    </header>
  )
}

export default Header