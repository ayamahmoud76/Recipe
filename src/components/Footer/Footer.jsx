import logo from '../../assets/logo.png'


export default function Footer() {
  return <>
  
  <footer className='pt-10 font-[cursive]'>
    <div className="px-10">
    <div className="flex justify-between">
      <div className="recipe flex">
        <img src={logo} className='w-9 h-7 mr-3' alt="recipe" />
        <p className='self-center capitalize text-2xl font-bold'>recipe</p>
      </div>
      <div className='text-blue-600 text-[20px] font-bold'>
        Route
      </div>
    </div>
    <hr />
    <div className='flex justify-center py-6'>
      <p className='text-gray-500 mb-0 text-sm'>© 2025 Nagy Osama™. All Rights Reserved.</p>
    </div>
  </div>
  </footer>
  </>
}
