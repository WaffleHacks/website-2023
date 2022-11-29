import BoardingPass from './BoardingPass';
const LandingFrame = () => {
  return (
    <div className="bg-[#C0ECFF] h-screen flex">
        <div className="flex-grow flex flex-col pt-8 items-start pl-8">
            <span className='text-[6vw] font-bold text-[#2258A1]' style={{textShadow: '-0.3vw 0.3vw 0px #67A1F0'}}>WaffleHacks 2023</span>
            <BoardingPass />
        </div>
        <div className='w-2/6 flex flex-col items-center pt-24'>
            <img src="/images/islands.png" alt="islands" className='w-5/6' style={{aspectRatio: 1}} />
        </div>
    </div>
  )
}

export default LandingFrame