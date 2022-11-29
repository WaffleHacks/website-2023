import Image from 'next/image';
const Navbar = () => {
    return (
        <div className='fixed top-0 flex flex-row justify-between bg-[#C0ECFF] w-full px-4 py-2 border-b-4 border-[#2258A1] z-50' style={{boxShadow: '0px 6px 5px rgba(40, 131, 183, 0.36)'}}>
            <div className="text-black flex items-center" >
                <img src="/images/logo.png" alt="" className='w-8 mr-2' />
                <span className='font-medium text-[#1E1E1E] text-xl'>WaffleHacks</span>
            </div>
            <div className='text-[#2258A1] text-lg font-base hidden md:flex items-center flex-grow justify-between pl-12' style={{maxWidth: '40rem'}}>
                <a href='#about'>About</a>
                <a href='#tracks'>Tracks</a>
                <a href='#calendar'>Calendar</a>
                <a href='#faqs'>FAQs</a>
                <a href='#sponsors'>Sponsors</a>
                <button className='rounded-md text-lg bg-white py-1 px-2 shadow-md shadow-[#2A8CC3]'>Coming Soon...</button>
            </div>
            <div className='flex items-center md:hidden'>
                <img src="/images/waffleMenu.svg" alt="menu" className='w-6 mr-2' />
            </div>
        </div>
    )
  }
  
  export default Navbar