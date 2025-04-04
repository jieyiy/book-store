import { useState } from "react";
import AddToCart from "./AddToCart"

function ProductDetail({ product }) {

  const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);

   return (
     <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
       {/* 左側：產品圖片（佔6/24） */}
       <div className="lg:col-span-6 lg:col-start-3">
         <img
           alt={product.title}
           className="w-full h-130 object-cover object-center rounded-md"
           src={product.cover}
         />
       </div>
 
       {/* 右側：產品資訊（佔14/24） */}
       <div className="lg:col-span-14 px-4">
         <h2 className="text-black opacity-40 mb-1 text-lg">{product.author}</h2>
         <h1 className="text-black text-2xl font-bold mb-2">{product.title}</h1>
         <p className="text-black opacity-60 text-base mb-4">{product.summary}</p>
        <br />
         {/* 價格與按鈕 */}
         <div className="flex flex-col gap-4 text-gray-600">
           <p className="text-2xl font-semibold">US${product.price}.00</p>
           <p className="text-2xl font-semibold">stock：{product.stock}</p>

           <p>
            <span className="font-bold" >Status</span>: {product.stock > 0 ? "In Stock" : "Unavailable."}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-bold" >Qty:</span>
            <select
              className="select select-bordered w-20 bg-[#ffffff] text-black"
              defaultValue={product.stock > 0 ? 1 : 0}
              onChange={ event => setQty(event.target.value)}
            >
              {[ ...Array(product.stock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <p>
            <span className="font-bold">Total Price</span>: {product.price * qty}
          </p>

          <AddToCart  product={product} qty={qty} />
         </div>
       </div>
     </div>
   );
 }
 
 export default ProductDetail;