import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom"
import Loader from '../components/Loader'
import Navbar from './Navbar/Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <main>
      <Suspense fallback={<Loader />}>
           <Outlet/>
        </Suspense>
      </main>
    </div>
  )
}
