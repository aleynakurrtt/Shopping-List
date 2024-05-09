import { useState } from 'react'
import './App.css'
import ShoppingList from './components/ShoppingList.jsx';
import AddProduct from './components/AddProduct.jsx';

function App() {
  const shops = [
    { id: 1, name: "Migros" },
    { id: 2, name: "Teknosa" },
    { id: 3, name: "Bim" }
  ]

  const categories = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Şarküteri" },
    { id: 3, name: "Oyuncak" },
    { id: 4, name: "Bakliyat" },
    { id: 5, name: "Fırın" }
  ]

  return (
    <>
      <ShoppingList />
      <AddProduct />
    </>
  )
}

export default App
