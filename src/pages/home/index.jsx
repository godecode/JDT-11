import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../services/api";

const HomePage = () => {
  
  const  [cities, setCities] = useState ([]);

  const fetchCities = async() => {
    try{

      const url = '/api/v1/city'
      const response = await api.get(url)
      const payload = [...response.data.data.cities]
      console.log(payload || []);
      setCities(payload)

    } catch (error) {
      alert (error)
    }

  }

  useEffect (() => {

    fetchCities()

  }, []);

  const  [products, setProducts] = useState ([]);

  const fetchProducts = async() => {
    try{

      const url = '/api/v1/products/'
      const response = await api.get(url)
      const payload = [...response.data.data.products]
      console.log(payload || []);
      setProducts(payload)

    } catch (error) {
      alert (error)
    }

  }

  useEffect (() => {

    fetchProducts()

  }, []);

  return (
    <>
      <Banner />
      
    <div className="bg-primary text-center text-white grid grid-cols-5 gap-4 m-5">
      {cities.map((item) => {
      return(
      
        
        <span key={item.id}> {item.name}</span>
    
      )
      })}
     </div>

     <div className="grid grid-cols-4 gap-10 mt-5 m-5">
     {products.map((item) => (
          <ProductCard 
            key={item.id}
            productName={item.name}
            productCategory={item.categoryId.name}
            productPrice={item.price}
            random={Math.random()}
            onClick={item.id}
            />
          ))}
        </div>
    </>
  );

};

export default HomePage;
