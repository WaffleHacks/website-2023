const AboutFrame = () => {
  return (
    <div className='bg-white px-4 py-8 md:py-12'>
        <h1 className='text-2xl md:text-5xl font-light mb-3 md:mb-6'>Dream. Learn. Create. Have Fun! <br className="hidden md:inline-block" /> For WH2023, let's travel to Waffle Paradise!</h1>
        <div className='flex flex-col md:flex-row-reverse md:justify-center items-center'>
            <div className='w-full bg-gray-300 my-4' style={{aspectRatio: '2', maxWidth: "40rem"}}></div>
            <p className="text-left" style={{maxWidth: "40rem"}}>Lorem ipsum dolor sit amet. Aut perferendis rerum ea accusamus modi id consequatur alias vel omnis architecto et velit eius. Rem quae aliquid eum magnam dolorem id reiciendis necessitatibus vel eius obcaecati...</p>
        </div>
        
    </div>
  )
}

export default AboutFrame