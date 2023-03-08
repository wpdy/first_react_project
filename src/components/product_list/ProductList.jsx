import './ProductList.css'

import data from '../../data.js/data'
import Product from '../product/Product'

export const ProductList = () => {

    console.log(data)

  return (
    <div>
        <Product items={data}/>
    </div>
  )
}


export default ProductList
