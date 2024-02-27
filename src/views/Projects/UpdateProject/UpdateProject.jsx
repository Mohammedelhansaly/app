import React, { useEffect, useState } from 'react'
import './UpdateProject.css'

const UpdateProject = ({ isOpen, isclose }) => {
    if (!isOpen) {
        return null
    }
    // Get the name of the current country from local storage and store it in a variable

    const [city, setCity] = useState([])
    const fetchCountries = async () => {
        let response = await axios.post("https://countriesnow.space/api/v0.1/countries/cities", {
            country: 'Morocco'
        })
        setCity(response.data.data)

    }

    useEffect(() => {
        fetchCountries()
    }, [])

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div className="Update_project">
                <div className="form-item">
                    <div className="top">
                        <h3>Noveau Projet</h3>
                        <div className="close" onClick={isclose}>
                            <i class="ri-close-fill"></i>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="form">

                            <div className="input-field">
                                <label>Nom de projet </label>
                                <input type="text" placeholder="enter le nom" />

                            </div>
                            <div className="input-field">
                                <label htmlFor="name" >Site </label>
                                <select name="" id="" >
                                    <option value="" selected>Choisir  un site...</option>
                                    {city.map((city) => (
                                        <option key={`${city}`} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-field">
                                <label>description </label>
                                <textarea name="" id="" cols="30" rows="5" placeholder='entrez la description'></textarea>

                            </div>
                            <button className='btn2'>Creer Projet</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default UpdateProject