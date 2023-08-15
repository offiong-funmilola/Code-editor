import React from 'react'
import Interface from './Interface'
import {useContext} from 'react'
import InterfaceContext from './Context/InterfaceContext'

function Main() {
    const {value} = useContext(InterfaceContext)
    console.log(`This is value - ${value}`)
  return (
    <div className='w-full h-[100vh]'>
        <Interface  />
        <div className='w-1/2 h-full bg-white'>
            {value &&
                <div>{value}</div>
            }
        </div>
    </div>
  )
}

export default Main