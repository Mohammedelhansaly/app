import React, { useEffect, useRef, useState } from 'react'
import './ListEquipement.css'
import { equipement } from '../../../assets/Database/Equipements'
import { Link } from 'react-router-dom'
import CreateEquipement from '../CreateEquipement/CreateEquipement'
import UpdateEquipement from '../UpdateEquipement/UpdateEquipement'

const ListEquipement = () => {
    

    const [Equipement, setequipment] = useState(equipement)



    const [sortOrder, setSortOrder] = useState();

    const sortequipment = (order) => {

        const sortedItems = [...equipement].sort((a, b) => {
            if (order === "ascending") {
                return new Date(a.startDate) - new Date(b.startDate)
            }
            if (order === "descending") {
                return new Date(b.startDate) - new Date(a.startDate)
            }
        });
        setSortOrder(order)
        setequipment(sortedItems);
    };
    const [searchTerm, setSearchTerm] = useState("");


    const searchedequipement = Equipement.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }

    });

    const [showItem, setShowItem] = useState(30)
    const [currentPage, setcurrentPage] = useState(1)
    const recordsPerPage = showItem
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = searchedequipement.slice(firstIndex, lastIndex)
    const npage = Math.ceil(equipement.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function prePage() {
        if (currentPage !== firstIndex) {
            setcurrentPage(currentPage - 1)
        }
    }
    function nextpage() {
        if (currentPage !== lastIndex) {
            setcurrentPage(currentPage + 1)
        }
    }
    function changeCPage(id) {
        setcurrentPage(id)
    }


    const fileInputRef = useRef()
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };


    // modal create equipement
    const [isModalOpen, setIsModalOpen] = useState(false);

    function opModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }
    // modal update equipment
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    function opModal1() {
        setIsModalOpen1(true)
    }

    function closeModal1() {
        setIsModalOpen1(false)
    }
    const [status, setstatus] = useState()
    const nowDate = new Date()

    return (
        <>
            <section className='listeEquipement_section'>
                <div className="content">

                    <div className="top">
                        <div className="left">
                            <div><span>Projet :</span><h1>Projet 1</h1></div>
                            <div><span>Site : </span><h4>Bengurir</h4></div>
                        </div>
                        <div className="right">
                            <button className='btn2' onClick={opModal}>Ajouter Equipement</button>
                            <button className='btn3' onClick={handleButtonClick}>importer Equipement
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="head">
                            <div className="title">
                                <h2>Les equipements</h2>
                            </div>
                            <div className="search-bar">
                                <i class="ri-search-2-line"></i>
                                <input type='text' placeholder='chercher par nombre de serie' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            </div>
                            <div className="outils">
                                <div className="sort">
                                    <select value={sortOrder} onChange={(e) => sortequipment(e.target.value)}>
                                        <option>Trier par date debut</option>
                                        <option value="ascending">Trier par ordre croissant</option>
                                        <option value="descending">Trier par ordre décroissant</option>
                                    </select>
                                </div>
                                <div className="export">
                                    <select>
                                        <option>Export</option>
                                        <option value="ascending">Excel</option>
                                        <option value="descending">Pdf</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <div class="table__body">
                                <table>
                                    <thead>
                                        <tr>
                                            <th> equipement </th>
                                            <th>description / Licence</th>
                                            <th> date de debut</th>
                                            <th> date de  fin  </th>
                                            <th> status  </th>
                                            <th>numéro de série </th>
                                            <th> Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            records?.length > 0 ?
                                                records.map((e, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{e.equipement}</td>
                                                            <td>{e.description}</td>
                                                            <td>{e.startDate}</td>
                                                            <td>{e.endDate} </td>
                                                            <td>{new Date(e.endDate) < new Date() ? 'not ok' : 'ok'} </td>
                                                            <td>{e.serialNumber} </td>

                                                            <td className='actions'>
                                                                <span onClick={opModal1}><i class="ri-edit-fill"></i> </span>
                                                                <span><i class="ri-delete-bin-7-fill"></i></span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <tr>
                                                    <td colSpan={6} className='empty'>aucune Equipement trove</td>
                                                </tr>


                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="footer">
                            <div className="showItem">
                                <select value={showItem} onChange={(e) => setShowItem(e.target.value)} name="" id="">
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                            <div className="pagination">
                                <ul>
                                    <li className={`page-item ${currentPage < npage ? 'disabled-button' : ''}`} onClick={prePage}>
                                        <Link className='page-link' href='' ><i className="ri-arrow-left-s-line"></i></Link>
                                    </li>
                                    {
                                        numbers.map(e => {
                                            return (
                                                <li className={` page-item ${currentPage === e ? 'active' : ''}`} onClick={() => changeCPage(e)}>
                                                    <Link className='page-link' href="" >{e}</Link>
                                                </li>
                                            )

                                        })
                                    }
                                    <li className={`page-item ${currentPage >= npage ? 'disabled-button' : ''}`} onClick={nextpage} >
                                        <Link className='page-link' href=''  ><i className="ri-arrow-right-s-line"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* modals*/}

                    <CreateEquipement
                        isOpen={isModalOpen}
                        isclose={closeModal}
                    />

                    <UpdateEquipement
                        isOpen={isModalOpen1}
                        isclose={closeModal1}
                    />

                </div>
            </section >
        </>
    )
}

export default ListEquipement