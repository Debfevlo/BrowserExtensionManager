import { useState } from 'react';
import data from '../data.json'
import { FaToggleOn } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";

const BrowserExtension = () => {
    const [filterExtension, setFilterExtension] = useState('all')
    const [toggle, setToggle] = useState(
        data.reduce((accumulator, extension)=>({
            ...accumulator, 
            [extension.id] : extension.isActive
        }), {})
    )
    const [removeExtension, setRemoveExtension] = useState([])

    const filterData = data.filter((extension)=>{
         if (removeExtension.includes(extension.id)) return false;
        if(filterExtension === 'all') return true;
        if (filterExtension === 'active') return toggle[extension.id];
        if (filterExtension === 'inactive') return !toggle[extension.id]
    })
    
    const handlefilter = (State) =>{
        setFilterExtension(State)
    }

    const handleToggle = (id)=>{
        
        setToggle(prev => ({
            ...prev ,
            [id] : !prev[id]
        }))
    }

    const handleRemove = (id) =>{
        setRemoveExtension((prev) => [...prev, id]);
    }

    
  return (
    <div className=" w-full max-w-[1200px] mx-auto  pt-8">
        <div className='text-center md:flex justify-between items-center space-y-4'>
             <p className='text-2xl text-Neutral-900 font-bold dark:text-Neutral-0'>Extension List</p>
        <div className='flex gap-5 mx-12 md:mx-0'>
            <button className={`px-4 py-2 rounded-full ${filterExtension === 'all' ? "bg-Red-700 text-Neutral-0 dark:bg-Red-700 dark:text-Neutral-0" :  "bg-Neutral-0 text-Neutral-900 border border-Neutral-100"} dark:bg-Neutral-700 dark:text-Neutral-0 dark:border-Neutral-900 hover:cursor-pointer hover:bg-Red-400 hover:text-Neutral-0 hover:border-none`} onClick={() => handlefilter('all')}>All</button>
            <button className={`px-4 py-2 rounded-full ${filterExtension === 'active' ? 'bg-Red-700 text-Neutral-0 dark:bg-Red-700 dark:text-Neutral-0' : 'bg-Neutral-0 text-Neutral-900 border border-Neutral-100'}  dark:bg-Neutral-700 dark:text-Neutral-0 dark:border-Neutral-900 hover:cursor-pointer hover:bg-Red-400 hover:text-Neutral-0 hover:border-none`} onClick={() => handlefilter('active')}>Active</button>
            <button className={`px-4 py-2 rounded-full ${filterExtension === 'inactive' ? 'bg-Red-700 text-Neutral-0 dark:bg-Red-700 dark:text-Neutral-0' : 'bg-Neutral-0 text-Neutral-900 border border-Neutral-100'}  dark:bg-Neutral-700 dark:text-Neutral-0 dark:border-Neutral-900 hover:cursor-pointer hover:bg-Red-400 hover:text-Neutral-0 hover:border-none`}  onClick={() => handlefilter('inactive')}>Inactive</button>
        </div>
        </div>

        <div className='flex flex-wrap gap-8  py-8'>
            {filterData.map((extension)=>{
            return(
                <div key={extension.id}className='md:w-[378px] bg-white dark:bg-Neutral-800  py-4 px-4   shadow-md rounded-3xl relative '>
                    {/*logo and name and description section*/}
                    <div className='flex gap-4 '>
                        <img src={extension.logo} alt="" className='w-12 h-12'/>
                        <div className='flex flex-col'>
                            <p className='text-Neutral-900 text-lg font-bold dark:text-Neutral-0'>{extension.name}</p>
                            <p className='text-base text-Neutral-600 dark:text-Neutral-0 '>{extension.description}</p>
                        </div>
                    </div >
                            <button className='mt-12 px-6 py-2 rounded-full text-Neutral-800 border border-Neutral-100 bg-Neutral-0  text-md dark:bg-Neutral-700 dark:text-Neutral-0 dark:border-Neutral-600 hover:bg-Red-500 hover:text-white hover:cursor-pointer' onClick={()=>handleRemove(extension.id)}>Remove</button >
                            <button onClick={()=>handleToggle(extension.id)}>
                                {toggle[extension.id] ? <FaToggleOn  className='text-4xl absolute right-[30px] bottom-[17px] text-Red-500 dark:text-Red-400 hover:cursor-pointer' /> : <FaToggleOff   className='text-4xl absolute right-[30px] bottom-[17px] text-Neutral-300 dark:text-Neutral-600 hover:cursor-pointer'/>}  
                            </button>
                            

                </div>
            ) 
        })}
        </div>
    </div>
  )
}

export default BrowserExtension