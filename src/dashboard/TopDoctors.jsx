import React from 'react'
import DoctorCard from './DoctorCard';
import ViewAll from '../common/ViewAll';
const TopDoctors = () => {
    const doctors = [
        {
            id: 1,
            name: 'Dr. Darlene Robertson',
            speciality: 'Dental Specialist',
            rating: 5.0,
            reviews: '50+ Reviews',
            image: 'https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA='
        },
        {
            id: 3,
            name: 'Dr. Ankit Patil',
            speciality: 'Dental Specialist',
            rating: 1.0,
            reviews: '10+ Reviews',
            image: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 2,
            name: 'Dr. Kuldeep Mourya',
            speciality: 'Dental Specialist',
            rating: 2.0,
            reviews: '20+ Reviews',
            image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
        },
        {
            id: 3,
            name: 'Dr. Abhishek mhatre',
            speciality: 'Dental Specialist',
            rating: 4.0,
            reviews: '60+ Reviews',
            image: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D'
        },

    ];
    return (
        <>
            <div className="section">
                <div className="section-header">
                    <p className='fw-500 fs-18'>Top Doctors</p>
                    <ViewAll />
                </div>
                <div className="doctors-grid">
                    {doctors.map(doctor => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopDoctors
