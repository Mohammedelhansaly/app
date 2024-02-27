import React, { useState } from 'react'
import CreateProject from '../../views/Projects/CreateProject/CreateProject';
import './HeadTitle.css'


const HeadTitle = () => {

  const retourBack = () => {
    window.history.back()
  }

  // modal create project
  const [isModalOpen, setIsModalOpen] = useState(false);

  function opModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  const splitUrl = location.pathname.split('/').join('').split(/(?=[A-Z])/)
  console.log(splitUrl)
  return (
    <>
      <div className="headtitle_section">
        <div className="container">
          <div className="content">
            <div className="left">
              <h2>tableau de bord</h2>
              <div className="link">
                <p>tableau de bord -
                  {
                    splitUrl.map(e => {
                      return (
                        <span>{e}</span>
                      )
                    })
                  }
                </p>
              </div>
            </div>
            <div className="right">
              <button className='btn' onClick={opModal}> noveau projet</button>
            </div>
            {
              location.pathname !== '/MesProjets' ? <p className='return' onClick={retourBack}><i class="ri-arrow-left-line"></i><span>retourner</span></p> : null

            }



          </div>
          {/* modals*/}
          <CreateProject
            isOpen={isModalOpen}
            isclose={closeModal}
          />
        </div>
      </div>
    </>
  )
}

export default HeadTitle