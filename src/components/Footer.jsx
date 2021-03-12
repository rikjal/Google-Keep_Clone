import React from 'react'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <footer className="text-center fixed-bottom">
                <p className="text-light"> Copyright ©️ {year} </p>
            </footer>
        </>
    )
}

export default Footer