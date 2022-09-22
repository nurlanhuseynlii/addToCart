import React from 'react'
import data from '../data/data'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className='container'>
      <div className="row">
        {data.carData.map((deyer,saygac)=>{
          return(
            <ProductItem sekil={deyer.img}
             basliq={deyer.title}
             aciqlama={deyer.desc}
             qiymet={deyer.price}
             mehsul={deyer}
             saygac = {deyer.id}
             key = {saygac}
             
             
             />
          )
        })}
      </div>
    </div>
  )
}

export default Products