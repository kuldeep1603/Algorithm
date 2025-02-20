import React from 'react'

const UpcomingConsultation = () => {
    return (
        <>
            <div className=" consultation">
                <p className='fw-500 fs-18'>Upcoming Consultation</p>
                <div className="consultation-card common-cardS">
                    <div className="doctor-info">
                        <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Doctor" className="doctor-image" />
                        <div>
                            <h4 className='fw-500 fs-16'>Dr. Darlene Robertson</h4>
                            <p className='text-secondary fs-14'>Dental Specialist</p>
                        </div>
                    </div>
                    <div className="consultation-details">
                        <div className="date-time">
                            <p className='text-secondary fw-400 fs-13'>27 Oct 2021</p>
                            <p className='text-secondary fw-400 fs-13'>11.00 - 12:00 AM</p>
                        </div>
                        <div className="action-buttons">
                            <button className="btn-cancel">Cancel</button>
                            <button className="btn-reschedule">Reschedule</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingConsultation
