import React from 'react'

const DoctorCard = ({ doctor }) => {
    return (
        <>
            <div className="doctor-card">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <div className="doctor-info">
                    <h5 className='text-ellipsis fw-500 fs-15'>{doctor.name.length >= 15 ? doctor.name +"..." : doctor.name}</h5>
                    <p className='text-ellipsis fs-14 text-secondary'>{doctor.speciality}</p>
                    <div className="rating">
                        <span className="stars">{doctor.rating}</span>
                        <span className="reviews">{doctor.reviews}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorCard
