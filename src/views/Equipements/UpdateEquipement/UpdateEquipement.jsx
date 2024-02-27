import React from 'react'
import './UpdateEquipement.css'

const UpdateEquipement = ({ isOpen, isclose }) => {
    if (!isOpen) {
        return null
    }
    return (
        <>
            <div className="Update_Equipement">
                <div className="form-item">
                    <div className="header">
                        <h3>Edit Equipement</h3>
                        <div className="close" onClick={isclose}>
                            <i class="ri-close-fill"></i>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="form">

                            <div className="input-field">
                                <label>Nom de equipement </label>
                                <input type="text" placeholder="enter le nom" />

                            </div>

                            <div className="input-field">
                                <label>description </label>
                                <input type="text" placeholder="enter le nom" />
                            </div>
                            <div className="field-line">
                                <div className="input-field">
                                    <label>date de debut </label>
                                    <input type="date" placeholder="enter la date" />
                                </div>

                                <div className="input-field">
                                    <label>date  de fin  </label>
                                    <input type="date" placeholder="enter la date" />
                                </div>
                            </div>
                            <div className="input-field">
                                <label>numero de serie  </label>
                                <input type="text" placeholder="enter le nom" />
                            </div>
                            <button className='btn2'>edit Equipement</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateEquipement