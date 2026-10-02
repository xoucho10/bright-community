import Link from 'next/link'
export default function Footer(){
  return(
  <footer className='bg-[#111827] text-white'>
    <div className='max-w-[1400px] mx-auto px-5 md:px-10 py-10 grid md:grid-cols-4 gap-8'>
      <div>
        <div className='flex gap-3 items-center'>
          <img src='/logo.png' alt='Bright Community Logo' className='w-14 h-14 bg-white rounded-[12px] p-2 object-contain'/>
          <b className='text-[12px] leading-tight'>Bright Community<br/>Development Organization</b>
        </div>
        <p className='mt-4 text-[11px] opacity-60 leading-5'>To Build Strong Community Is Our Mission. Based in Kampala, Uganda. 95 percent of funds go directly to field.</p>
      </div>
      <div><b className='text-[10px] tracking-widest'>PROGRAMS</b><div className='mt-3 grid gap-2 text-[12px] opacity-70'><Link href='/programs'>Education Support</Link><Link href='/programs'>Clean Water Access</Link><Link href='/programs'>Youth Skills</Link><Link href='/impact'>Impact Map</Link></div></div>
      <div><b className='text-[10px] tracking-widest'>GET INVOLVED</b><div className='mt-3 grid gap-2 text-[12px] opacity-70'><Link href='/donate'>Donate</Link><Link href='/get-involved'>Volunteer</Link><Link href='/contact'>Contact Us</Link><Link href='/transparency'>Transparency</Link></div></div>
      <div><b className='text-[10px] tracking-widest'>CONTACT</b><p className='mt-3 text-[11px] opacity-60 leading-5'>Plot 12, Kampala, Uganda<br/>Phone: +256 700 123 456<br/>Email: info@brightcommunity.ug</p></div>
    </div>
    <div className='border-t border-white/10 py-4 text-center text-[10px] opacity-50'>Copyright 2025 Bright Community Development Organization - Kampala, Uganda</div>
  </footer>
  )
}
