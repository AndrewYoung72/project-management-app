import React from 'react'
import Clients from "../component/Clients";
import Projects from "../component/Projects";
import AddClientModal from "../component/addClientModal";


export default function Home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
    <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  )
}
