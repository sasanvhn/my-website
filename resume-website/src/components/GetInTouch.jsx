import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion";

const GetInTouch = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h2 className='text-center text-4xl my-20'>Get In Touch</h2>
            <div className='text-center tracking-tighter'>
                <motion.a
                    href='tel:+49 176 80713289'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='my-4'>{CONTACT.phoneNo}</motion.a>
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='my-4'>{CONTACT.address}</motion.p>

                <motion.a
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    href="mailto:vahidinia.sasan@gmail.com" className='border-b'>{CONTACT.email}</motion.a>
            </div>
        </div>
    )
}

export default GetInTouch