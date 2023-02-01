import React from 'react'

const details = (props) => {
  return (
    <div className='flex flex-col my-4 w-[70%]'>
      <div className="description flex flex-col mb-10">
        <span className='uppercase font-extrabold my-3'>about</span>
        <span>{props.company}</span>
      </div>
      <div className='bottom w-[100%] text-left'>
        <div className='flex justify-between'>
          <div className="contact-details w-[300px] px-16">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>contact</span>
            <span>{props.contact}</span>
          </div>
          <div className="contact-details px-16 w-[510px]">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>address</span>
            <span>{props.address.suite}{" "}{props.address.street}{" "}{props.address.city}{" "}{props.address.zipcode}</span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className="contact-details w-[300px] px-16">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>website</span>
            <span>{props.website}</span>
          </div>
          <div className="contact-details px-16 w-[510px]">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>suite</span>
            <span>{props.address.suite}</span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className="contact-details w-[300px] px-16">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>email</span>
            <span>{props.email}</span>
          </div>
          <div className="contact-details px-16 w-[510px]">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>street</span>
            <span>{props.address.street}</span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className="contact-details w-[300px] px-16">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>phone</span>
            <span>{props.phone}</span>
          </div>
          <div className="contact-details px-16 w-[510px]">
            <span className='font-extrabold uppercase flex flex-col text-left my-3'>city</span>
            <span>{props.address.city}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default details
