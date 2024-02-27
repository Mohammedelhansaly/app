import React, { useEffect, useRef, useState } from 'react'
import logo1 from '../../assets/Images/logo/Logo_Axians.png'
import logo2 from '../../assets/Images/logo/Logo_Axians.webp'

import { Link, NavLink, useNavigate } from 'react-router-dom'
import avatar from '../../assets/Images/avatars/300-2.jpg'
import './Header.css'
import HeadTitle from '../HeadTitle/HeadTitle'

const Header = () => {
    const navigate = useNavigate()

    //add active class to navbar when scrolling
    const [scrolling, setscrolling] = useState(false)
    const nav = useRef()
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150 && document.documentElement.scrollTop > 150) {
            nav.current.classList.add('active')
            setscrolling(true)
        }
        else {
            nav.current.classList.remove('active')
            setscrolling(false)
        }
    })







    // search function and add search items to recent searches list
    const [search, setsearch] = useState('')
    const [recentSearch, setrecentsearch] = useState([])


    useEffect(() => {
        const storedSearches = localStorage.getItem('recentSearch');
        if (storedSearches) {
            setrecentsearch(JSON.parse(storedSearches));
        }
    }, []);

    const hundleSearch = () => {
        if (search.trim() !== '') {
            const updatedSearches = [search, ...recentSearch];
            localStorage.setItem('recentSearch', JSON.stringify(updatedSearches));
            setrecentsearch(updatedSearches);
            if (updatedSearches.length >= 10) {
                updatedSearches.pop();
            }
            setsearch('');
            navigate(`/MesProjets?query=${encodeURIComponent(search)}`);

        }
    }
    const hundleSearchByRecent = (recent) => {
        setsearch(recent)
        navigate(`/MesProjets?query=${encodeURIComponent(recent)}`);
    }


    //show search dropdown
    const searchIcon = useRef(null)
    const toogleSearch = () => {
        searchIcon.current.classList.toggle('active')
        profile.current.classList.remove('active')

    }

    //show profile dropdonw
    const profile = useRef()
    const toggleProfile = () => {
        searchIcon.current.classList.remove('active')

        profile.current.classList.toggle('active')
    }



    return (
        <>
            <header>
                <nav ref={nav}>
                    <div className="content">
                        <div className="brand">
                            <img src={scrolling ? logo2 : logo1} alt="" />
                        </div>
                        <div className="menu-links">
                            <ul>
                                <NavLink className={navlink => navlink.isActive ? 'active' : ''} to={'/MesProjets'}><span>Mes Projets</span></NavLink>
                                <NavLink className={navlink => navlink.isActive ? 'active' : ''} to={'/profile'}><span>Mes Projets</span></NavLink>

                                </ul>
                        </div>
                        <div className="toolbar">
                            <ul className='list'>
                                <li >
                                    <div className='tool' onClick={toogleSearch}><i class="ri-search-2-line"></i></div>
                                    <div className="searchBox" ref={searchIcon}>
                                        <div className="top">
                                            <i class="ri-search-2-line"></i>
                                            <input type='text' placeholder='Search...' value={search} onChange={(e) => setsearch(e.target.value)} />
                                        </div>
                                        <div className="middle">
                                            <h3>Récemment recherché :</h3>
                                            <ul >
                                                {
                                                    recentSearch.map(recent => {
                                                        return (
                                                            <>
                                                                <li onClick={() => hundleSearchByRecent(recent)}>{recent}</li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="bottom">
                                            <button onClick={hundleSearch} className='btn2'>search</button>
                                        </div>
                                    </div>
                                </li>
                                <li><div className='tool' onClick={toggleProfile}><img src={avatar} alt="" className='user-profile' /></div>
                                    <div className="profile" ref={profile}>
                                        <div className="top">
                                            <div className="left">
                                                <img src={avatar} alt="" />
                                            </div>
                                            <div className="right">
                                                <span>mohammed</span>
                                                <p>elhansalymohammed@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <ul>
                                                <li><Link to={'/profile'}>Profile</Link></li>
                                                <li>Se deconnecter</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <HeadTitle />
            </header>
        </>
    )
}

export default Header