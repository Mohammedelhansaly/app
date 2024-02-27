import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import './FullLayout.css'
import Footer from '../Footer/Footer'

const FullLayout = () => {
    return (
        <>
            <main>
                {/********header**********/}
                <Header />

                <div className="contentArea">
                    {/********Middle Content**********/}
                    <div className="container" >
                        <Outlet />
                    </div>

                </div>
                <Footer />

            </main>
        </>
    )
}

export default FullLayout