import Image from 'next/image';
const Navbar = () => {
    return (
        <div className='sticky top-0 flex flex-row justify-between bg-[#C0ECFF] w-full px-4 py-2 border-b-4 border-[#2258A1]'>
            <div className="text-black flex items-center" >
                <img src="/images/logo.png" alt="" className='w-8 mr-2' />
                <span className='font-medium text-[#1E1E1E] text-xl'>WaffleHacks</span>
            </div>
            <div className='text-[#2258A1] font-bold flex items-center flex-grow justify-between pl-12' style={{maxWidth: '35rem'}}>
                <span>About</span>
                <span>Tracks</span>
                <span>Calendar</span>
                <span>FAQs</span>
                <span>Sponsors</span>
                <button className='rounded-md bg-white py-1 px-2 shadow-md shadow-[#2A8CC3]'>Apply Now!</button>
            </div>
        </div>
    )
  }
  
  export default Navbar