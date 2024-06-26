'use client';
import React, { useEffect } from 'react'
import SectionHeading from './sectionheading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const {ref } = useSectionInView('About');
    return (
        <motion.section 
        ref={ref}
        className='mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        initial={{ opacity: 0, y:100}}
        animate={{ opacity: 1, y:0}}
        transition={{ delay: 0.175 }}
        id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                <span>
                    My journey has been a dynamic blend of academia, entrepreneurship, and a quest for knowledge. After completing my Bachelor of Engineering in Computer Science, I delved into preparation for Indian Civil Services exams while also <span className="font-bold">co-founding</span> an EdTech startup in Bangalore. 
                </span>

                <span>
                    Eager to immerse myself in the forefront of technological innovation, I made the decision to move to the United States in 2022 to pursue a <span className='italic'>Master of Science in Computer Science</span> at the <span className='font-bold'>University of Southern California</span>. The move was driven by my desire to gain exposure to cutting-edge advancements in technology, and the U.S. stood out as the perfect environment to nurture my passion and expand my horizons.
                </span>
            </p>
            <p className='mb-3'>
                <span>
                    Now, armed with a comprehensive understanding of computer science and practical experience in <span className="italic">web development</span>, AI integration, and cloud platforms, I am actively seeking opportunities in India as a <span className="font-bold">Software Engineer</span>. My focus lies in backend development and <span className="italic">Python</span>, where I aim to leverage my skills to drive impactful solutions and contribute to innovative projects.
                </span>

                <span>
                    Beyond the realm of technology, I find solace and inspiration in <span className="italic">music</span>, <span className="italic">meditation</span>, and hikes. I believe in the power of continuous learning and am dedicated to expanding my skill set to stay at the forefront of the ever-evolving tech landscape. I am excited about the prospect of collaborating with like-minded individuals and organizations to create a positive impact through technology.
                </span>
            </p>
        </motion.section>
    )
}

