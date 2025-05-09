/* eslint-disable react/prop-types */
import { Link } from 'react-router';
import _ from 'lodash';

function ProductItem({ product }) {
   return (
      <section className="pt-4 px-3 lg:px-4">
         <div className="border border-gray-500 rounded overflow-hidden">
            <Link to={`/products/ID/${product.ID}`}>
               <img className="w-full" src={product.cover} alt={product.title} />
            </Link>
            <div className="p-4">
               <h6 className="text-black opacity-80 mb-1">
                  {product.author}
               </h6>
               <h5 className="text-black mb-3">
                  {product.title}
               </h5>
               <p className="text-black opacity-70 mb-3">
                  {_.truncate(product.summary, { length: 60, omission: " ... " })}
               </p>               
               <div className="flex justify-between flex-wrap">
                  <Link to={`/products/id/${product.ID}`} className="no-underline text-blue-500 flex items-center">
                     See More
                     <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                     </svg>
                  </Link>
                  <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
                     ${product.price}
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductItem;