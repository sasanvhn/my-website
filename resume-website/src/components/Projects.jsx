import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='text-center text-4xl my-20'>Projects</h2>
            <div>
                {PROJECTS.map(
                    (projects, index) => (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:w-1/4'>
                                <img src={projects.image} width={150} height={150} className='mb-6 rounded' alt="" />
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 font-semibold'>{projects.title}</h6>
                                <p className='mb-4 text-neutral-400'>{projects.description}</p>
                                {projects.technologies.map((tags, index) => (
                                    <span key={index} className='mr-2 mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tags}</span>
                                ))}
                            </motion.div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Projects