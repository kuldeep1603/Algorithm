import React from 'react'
import { FaBell } from "react-icons/fa6";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="search-bar">
                    <select className="default-select">
                        <option>Default</option>
                    </select>
                    <input
                        type="search"
                        placeholder="Search by doctor's name/ speciality etc"
                        className="search-input"
                    />
                </div>
                <div className="header-actions">
                    <button className="notification-btn"><FaBell /></button>
                    <div className="user-profile">
                        <img src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="User" className="profile-img" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
