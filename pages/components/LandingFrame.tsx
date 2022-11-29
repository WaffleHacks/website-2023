import BoardingPass from './BoardingPass';
const LandingFrame = () => {
  return (
    <div className="bg-[#C0ECFF] h-screen flex flex-col md:flex-row pt-12">
        <div className="md:flex-grow flex flex-col pt-8 items-start pl-8 pr-8 md:pr-0">
            <span className='text-[6vw] font-bold text-[#2258A1]' style={{textShadow: '-0.3vw 0.3vw 0px #67A1F0'}}>WaffleHacks 2023</span>
            <BoardingPass />
            <button className='rounded-md mt-8 text-lg bg-white py-2 px-8 text-[#2258A2]' style={{boxShadow: "0px 2px 12px rgba(42, 140, 196, 0.64)"}}>Grab Your Ticket - Coming Soon...</button>
        </div>
        <div className='flex-grow md:flex-grow-0 md:w-[37%] flex flex-col items-center md:pt-[10vw] relative'>
            <img src="/images/islands.png" alt="islands" className='md:w-5/6' style={{aspectRatio: 1}} />
            <div className='absolute left-[-3vw] top-[5vw] rotate-[-10.35deg] px-12 py-4 rounded-lg text-[2.5vw] text-center text-[#2258A1] font-bold' style={{fontFamily:"Dancing Script", background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(1px)', border: '1px solid #2258A1', lineHeight: '120%'}}>
              Travel to<br />Waffle Paradise!
            </div>
        </div>
    </div>
  )
}

export default LandingFrame