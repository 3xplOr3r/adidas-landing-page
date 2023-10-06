

const Hero = () => {
  return (

    <div className="radial-gradient flex flex-col
    items-center justify-center md:flex-row relative">
      <div className="w-[70%] h-auto relative flex items-center justify-center mt-10">
        <h1 className='md:text-[30rem] text-[20rem] absolute font-oxanium text-white/25'>ZX</h1>
        <img src="/public/Shoe.png" alt="" className=" md:w-[95%] w-[150%] h-auto z-20 overflow-hidden" />
      </div>
      <div className="flex md:flex-col flex-row w-auto p-2 gap-3">
        <span className="scrollBtn"></span>
        <span className="scrollBtn"></span>
        <span className="scrollBtn"></span>
        <span className="scrollBtn"></span>
        <span className="scrollBtn"></span>
      </div>
      <div className="absolute bottom-10 left-20 p-2 flex flex-col items-center cursor-pointer">
        <h2 className=" font-oxanium text-sm font-light text-white/50">SHOW MORE</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="16" viewBox="0 0 127 16" fill="none">
          <path d="M126.707 8.70712C127.098 8.31659 127.098 7.68343 126.707 7.2929L120.343 0.928943C119.953 0.538418 119.319 0.538418 118.929 0.928943C118.538 1.31947 118.538 1.95263 118.929 2.34316L124.586 8.00001L118.929 13.6569C118.538 14.0474 118.538 14.6806 118.929 15.0711C119.319 15.4616 119.953 15.4616 120.343 15.0711L126.707 8.70712ZM-8.74228e-08 9L126 9.00001L126 7.00001L8.74228e-08 7L-8.74228e-08 9Z" fill="#FFF9F9"/>
        </svg>
      </div>
    </div>

  )
}

export default Hero