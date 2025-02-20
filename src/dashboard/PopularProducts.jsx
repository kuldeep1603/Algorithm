import React from 'react'
import ViewAll from '../common/ViewAll';
import { FaArrowRightLong } from "react-icons/fa6";

const PopularProducts = () => {
    const products = [
        {
            name: 'Necessaire 75ML',
            price: 27.60,
            originalPrice: 34.7,
            image: 'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg'
        },
        {
            name: 'Mario 118ml',
            price: 25.70,
            originalPrice: 32.7,
            image: 'https://st2.depositphotos.com/1576106/10025/i/450/depositphotos_100255514-stock-photo-pile-of-medicines-and-syringes.jpg'
        },
        {
            name: 'Allergy Relief 25mg',
            price: 25.70,
            originalPrice: 32.7,
            image: 'https://t3.ftcdn.net/jpg/06/27/49/32/360_F_627493260_qbpJFJPJqW5BJ7kyc0smatcexwdDdLT8.jpg'
        }
    ];
    return (
        <>
            <div className="popular-products">
                <div className="section-header">
                    <p className='fw-500 fs-18'>Popular Product</p>
                    <ViewAll />
                </div>
                <div className="products-list">
                    {products.map((product, index) => (
                        <div key={index} className="product-card common-cardS">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <h4 className='fw-500 fs-14'>{product.name}</h4>
                            </div>
                            <div className="product-info">
                                <div className="price-info">
                                    <span className="price fw-400 fs-15">${product.price}</span>
                                    <span className="original-price fw-500 fs-16">${product.originalPrice}</span>
                                </div>
                                <FaArrowRightLong className='text-secondary'/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PopularProducts
