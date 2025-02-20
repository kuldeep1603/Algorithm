import React from 'react'

const Sidebar = () => {
    const menuItems = [
        { icon: '🏠', text: 'Home', active: true },
        { icon: '📅', text: 'Appointment' },
        { icon: '🧪', text: 'Lab Tests' },
        { icon: '💊', text: 'Medicine Order' },
        { icon: '❤️', text: 'Favourites' },
        { icon: '👪', text: 'Family' },
        { icon: '📝', text: 'Prescription' },
        { icon: '✉️', text: 'Messages' },
        { icon: '💳', text: 'Payments' },
        { icon: '⚙️', text: 'Settings' }
    ];
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <span className="logo-check">✓</span>
                    <span className="logo-text">medik</span>
                </div>
                <nav className="sidebar-nav">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`nav-item ${item.active ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-text">{item.text}</span>
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    )
}

export default Sidebar
