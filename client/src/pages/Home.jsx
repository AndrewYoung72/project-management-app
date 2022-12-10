import React from 'react'
import Clients from "../component/Clients";
import Projects from "../component/Projects";
import AddClientModal from "../component/addClientModal";
import AddProjectModal from '../component/addProjectModal';


export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
    <AddClientModal />
    <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}
