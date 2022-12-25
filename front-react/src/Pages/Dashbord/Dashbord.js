import React, { useContext } from 'react'
import { LangContext } from '../../Context/langContext'

export default function Dashbord() {
  const lang=useContext(LangContext)
  return (
    <div>{lang.home}<br/>{lang.client} </div>
  )
}
