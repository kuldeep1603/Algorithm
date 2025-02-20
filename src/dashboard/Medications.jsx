import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

const Medications = () => {
    const medications = [
        {
            name: 'Acetaminophen 500 mg',
            instruction: 'Take with food every morning'
        },
        {
            name: 'Doxycycline 100 mg',
            instruction: 'Take 1 with food twice a day, and avoid drinking alcohol for 2 hours after'
        },
        {
            name: 'Hydrochlorothiazide 23 mg',
            instruction: 'Take 3 tablets, 3 times a day for 7 days'
        }
    ];
    return (
        <>
            <div className="section medications">
                <div className="section-header">
                    <p className='fw-500 fs-18'>Medications</p>
                    <HiDotsHorizontal className='text-secondary'/>
                </div>
                <div className="medications-list">
                    {medications.map((med, index) => (
                        <div key={index} className="medication-item">
                            <h4 className='fw-500 fs-16'>{med.name}</h4>
                            <p className='text-secondary fs-13'>{med.instruction}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Medications
