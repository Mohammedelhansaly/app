import React, { useEffect, useState } from 'react'
import './ListeProject.css'
import { data } from '../../../assets/Database/projetcts'
import { Link, useLocation } from 'react-router-dom'
import UpdateProject from '../UpdateProject/UpdateProject'

const ListeProject = () => {
  const [projets, setprojects] = useState(data)
  const totalEquipements = data.reduce((total, project) => {
    return total + project.equipements.length;
  }, 0);


  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery()
  const searchQuery = query.get('query') || ''
  useEffect(() => {
    const searched = data.filter(project =>
      project.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    )
    setprojects(searched)
  }, [searchQuery])


  const [sortOrder, setSortOrder] = useState();

  const sortProjects = (order) => {

    const sortedItems = [...projets].sort((a, b) => {
      if (order === "ascending") {
        return new Date(a.created_at) - new Date(b.created_at)
      }
      if (order === "descending") {
        return new Date(b.created_at) - new Date(a.created_at)
      }
    });
    setSortOrder(order)
    setprojects(sortedItems);
  };

  const [currentPage, setcurrentPage] = useState(1)
  const recordsPerPage = 8
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = projets.slice(firstIndex, lastIndex)
  const npage = Math.ceil(data.length / recordsPerPage)
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

  const [isModalOpen, setIsModalOpen] = useState(false)
  const opModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }



  return (
    <section className='listProject_section'>
      <div className="content">
        <div className="total row2">
          <div className="col">
            <h2>{data.length}</h2>
            <p>Total Projets</p>
          </div>
          <div className="col">
            <h2>{totalEquipements}</h2>
            <p>Total Equipements</p>
          </div>
        </div>
        <div className="prjects">
          <div className="head">
            <div className="title">
              <h2>Projets <span>par date</span></h2>
            </div>
            <div className="right">
              <div className="sorting__widget">
                <select value={sortOrder} onChange={(e) => sortProjects(e.target.value)}>
                  <option>Default</option>
                  <option value="ascending">Trier par ordre croissant</option>
                  <option value="descending">Trier par ordre décroissant</option>

                </select>
              </div>
            </div>
          </div>
          <div className=" projects-items row3">

            {
              records.length > 0 ?
                records.map(e => {
                  return (
                    <div className="col">
                      <Link to={'/ListeEquipements'}>
                        <h2>{e.name}</h2>
                        <p>{e.client}</p>
                        <div className="info">
                          <div className="due">
                            <h5>{e.created_at}</h5>
                            <p>créé à</p>
                          </div>
                          <div className="count">
                            <h5>{e.equipements.length}</h5>
                            <p>nombre  équipements</p>
                          </div>
                        </div>
                      </Link>
                      <div className="action">
                        <span onClick={opModal}><i class="ri-edit-fill"></i></span>
                        <span><i class="ri-delete-bin-7-fill"></i></span>
                      </div>
                    </div>
                  )
                })
                :
                <h2>Aucun projet trouvé.</h2>
            }


          </div>
        </div>
        <div className="foot">
          <div className="counter">
            <p>Affichage de 1 à {recordsPerPage} sur {data.length} entrées</p>
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
        
        <UpdateProject isOpen={isModalOpen} isclose={closeModal} />
      </div>
    </section>
  )
}

export default ListeProject