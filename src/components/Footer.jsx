import React from 'react'
import { motion } from 'framer-motion'


export default function Footer(){
return (
<motion.footer className="text-center py-6 text-gray-500" initial={{opacity:0}} animate={{opacity:1}}>
<div className="max-w-6xl mx-auto px-6">
<div className="h-0.5 w-28 mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 mb-4 rounded-full opacity-80" />
<p>© {new Date().getFullYear()} Joe Renald — All Rights Reserved</p>
</div>
</motion.footer>
)
}