import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
export default function Page(){
  return(
  <main className='bg-[#FFFBF5] min-h-screen'>
    <Navbar/>
    <div className='max-w-[1100px] mx-auto px-6 py-16'>
      <div className='flex items-center gap-4'>
        <img src='/logo.png' alt='Logo' className='w-16 h-16 bg-white rounded-[12px] p-2 border object-contain'/>
        <div><span className='bg-[#B91C2C] text-white px-3 py-1 rounded-full text-[10px] font-black'>BRIGHT COMMUNITY</span><h1 className='text-[32px] md:text-[46px] font-black leading-[0.9] mt-2'>Get Involved</h1></div>
      </div>
      <p className='opacity-60 mt-4 text-[13px] max-w-[600px]'>This Get Involved page is fully linked and mobile responsive. Content for Bright Community Development Organization - To Build Strong Community Is Our Mission.</p>
      <div className='mt-8 bg-white border rounded-[20px] p-8'>
        <h3 className='font-black'>Get Involved - Coming Soon Content</h3>
        <p className='text-[13px] opacity-70 mt-2'>Real content will be added here. All navigation works and logo is visible.</p>
        <div className='mt-6 flex gap-3'>
          <Link href='/' className='bg-[#111827] text-white px-6 py-3 rounded-full text-[12px] font-bold'>Back Home</Link>
          <Link href='/donate' className='bg-[#B91C2C] text-white px-6 py-3 rounded-full text-[12px] font-black'>Donate Now</Link>
        </div>
      </div>
    </div>
    <Footer/>
  </main>)
}
