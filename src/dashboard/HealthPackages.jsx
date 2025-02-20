import React from 'react'
import ViewAll from '../common/ViewAll';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const HealthPackages = () => {
    const packages = [
        {
            name: 'Basic Health Package',
            description: 'Ideal for individuals aged 21- 40...',
            icon: ''
        },
        {
            name: 'Fever Panel',
            description: 'Ideal for individuals aged 21- 40...',
            icon: ''
        }
    ];
    return (
        <>
            <div className="health">
                <div className="section-header">
                    <p className='fw-500 fs-18'>Health Package</p>
                    <ViewAll />
                </div>
                <div className="packages-list">
                    {packages.map((pkg, index) => (
                        <div key={index} className="package-card common-cardS">
                            <div className="package-icon"><span>{pkg.icon}</span></div>
                            <div className="package-info">
                                <h4 className='fw-500 fs-14'>{pkg.name}</h4>
                                <p className='text-secondary fs-14 '>{pkg.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HealthPackages
