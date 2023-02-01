import React, { useState } from 'react'
import Details from './Details'

const Listitems = (props) => {
  const [val, setVal] = useState(true)

  return (
    <div className='w-full flex flex-col items-center my-16'>
      <div className="flex flex-row my-4 items-center justify-center">
        <div className="company_name px-16 w-[290px]">{props.company}</div>
        <div className="contact-details w-[250px] px-16">
          <span className='font-extrabold uppercase flex flex-col text-left'>contact</span>
          <span>{props.contact}</span>
        </div>
        <div className="city_details w-[250px] px-16">
          <span className='font-extrabold uppercase flex flex-col text-left'>Street</span>
          <span>{props.street}</span>
        </div>
        <div className="state_details w-[250px] px-16">
          <span className='font-extrabold uppercase flex flex-col text-left'>City</span>
          <span>{props.city}</span>
        </div>
        <button className='bg-red-500 text-white rounded-2xl px-3 py-1 cursor-pointer'
          onClick={() => setVal(!val)}>{val ? "View Details" : "Hide Details"}</button>
      </div>
      {
        val ? "" : <Details contact={props.contact} company={props.company_des} website={props.website} email={props.email} phone={props.phone} address={props.address} />
      }
    </div>
  )
}

export default Listitems
