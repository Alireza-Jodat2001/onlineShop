import { useContext } from 'react'

import { FaSearch } from 'react-icons/fa'

import { EventContext } from '../../hook/Context/EventContext'

export default function SearchField() {
    const { searchFocus , searchPreset , searchInputRef , dispatchEvent } = useContext(EventContext)

    return (
        <div className={`${searchFocus} position-relative`} clickoutside=''>
            <form className='d-flex rounded overflow-hidden align-items-center' id='search' name='search'>
                <button className='h-100 border-0 px-3'><FaSearch /></button>

                <input
                    placeholder='Search here...'
                    autoComplete='off'
                    ref={searchInputRef}
                    className='border-0 h-100'
                    onFocus={() => dispatchEvent({type: 'searchFocus' , data: {searchPreset: 'open' , backdrop: 'open'}})}
                />

                <div>
                    <span className='rounded py-1 px-2 me-1'>Ctrl</span>

                    <span className='rounded py-1 px-2 me-1'>Q</span>
                </div>
            </form>

            <div className={`${searchPreset} rounded mt-4 position-absolute w-100`}>Not found result...</div>
        </div>
    )
}
