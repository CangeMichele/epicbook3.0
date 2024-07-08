//----- Componenti react
import React from 'react'

//----- Componenti app
import Categorys from '../Components/Categorys';




//----- Home.jsx
export default function HomePage({search}) {
  return (
    <Categorys search={search} />

  )
}
