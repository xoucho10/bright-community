'use client'
import {useState} from 'react'
import Link from 'next/link'
export default function Navbar(){
  const [open,setOpen]=useState(false)
  return(
  <header className='sticky top-0 z-50'>
    <div className='bg-[#B91C2C] text-white text-[11px] py-2 px-5 md:px-10 flex justify-between'>
      <span>Kampala, Uganda | +256 700 123 456</span>
      <span className='hidden md:block'>info@brightcommunity.ug | To Build Strong Community Is Our Mission</span>
    </div>
    <div className='bg-white border-b shadow-sm'>
      <div className='max-w-[1400px] mx-auto px-5 py-3 flex justify-between items-center'>
        {/* LOGO - BIG AND VISIBLE */}
        <Link href='/' className='flex items-center gap-3'>
          <img src='/logo.png' alt='Bright Community Development Organization Logo' className='w-14 h-14 md:w-[68px] md:h-[68px] object-contain bg-white rounded-[10px] p-1 border shadow-sm'/>
          <div className='leading-none'>
            <b className='text-[14px] md:text-[15px] text-[#111827]'>Bright Community</b><br/>
            <span className='text-[9px] font-bold tracking-[0.15em] opacity-70'>DEVELOPMENT ORG</span>
            <span className='block text-[8px] opacity-50 mt-0.5 hidden md:block'>To Build Strong Community Is Our Mission</span>
          </div>
        </Link>
        <nav className='hidden lg:flex gap-7 text-[13px] font-medium'>
          <Link href='/' className='font-black text-[#B91C2C]'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/programs'>Programs</Link>
          <Link href='/impact'>Impact</Link>
          <Link href='/get-involved'>Get Involved</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <div className='flex items-center gap-3'>
          <Link href='/donate' className='hidden md:block bg-[#B91C2C] hover:bg-[#9e1725] text-white px-7 py-3 rounded-full font-black text-[12px] transition'>Donate Now</Link>
          <button onClick={()=>setOpen(!open)} className='lg:hidden w-11 h-11 border rounded-full grid place-items-center font-bold'>{open?'X':'MENU'}</button>
        </div>
      </div>
      {open && <div className='lg:hidden bg-white border-t p-6 grid gap-4 font-medium'><Link href='/'>Home</Link><Link href='/about'>About</Link><Link href='/programs'>Programs</Link><Link href='/impact'>Impact</Link><Link href='/get-involved'>Get Involved</Link><Link href='/contact'>Contact</Link><Link href='/donate' className='bg-[#B91C2C] text-white rounded-full py-4 text-center font-black'>Donate Now</Link></div>}
    </div>
  </header>
  )
}
