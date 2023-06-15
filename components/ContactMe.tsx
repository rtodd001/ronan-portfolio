import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from "react-hook-form";
import { PageInfo } from '@/typings';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {
    pageInfo: PageInfo
}

function ContactMe({ pageInfo }: Props) {

    const { 
        register, 
        handleSubmit
    } = useForm<Inputs>();

    {/** GENERIC EMAILING WAY */}
    const onSubmit:SubmitHandler<Inputs> = (formData => {
        window.location.href = `mailto:ronan.jtodd@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    });

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
                    max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact Me
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                Reach out to me!
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] -7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] -7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.email}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] -7 w-7 animate-pulse'/>
                    <p className='text-2xl'>{pageInfo?.address}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} 
                className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button 
                    type='submit' 
                    className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
                    Submit
                </button>
            </form>
            
        </div>
    </div>
  )
}

export default ContactMe