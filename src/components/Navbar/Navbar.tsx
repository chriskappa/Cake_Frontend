import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-blue-300 p-5 flex gap-10'>
            <h1 className='font-bold text-white text-xl'>Cake Menu</h1>
            <ul className='flex items-center  gap-2'>
                <Link to="/">
                    <li className='font-bold text-xl duration-300 hover:scale-105 text-white hover:text-green-500'>Home</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;