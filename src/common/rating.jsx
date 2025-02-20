import React from 'react'

const rating = ({ value, reviews }) => {
    return (
        <>
            <div className="rating">
                <div className="stars">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`star ${index < Math.floor(value) ? 'filled' : ''}`}
                        >
                            ★
                        </span>
                    ))}
                    <span className="rating-value">{value}</span>
                </div>
                <span className="reviews">{reviews}</span>
            </div>
        </>
    )
}

export default rating
