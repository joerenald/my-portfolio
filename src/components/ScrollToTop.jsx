import React from 'react'


export default function ScrollToTop(){
const [visible,setVisible] = React.useState(false)
React.useEffect(()=>{
const onScroll = ()=> setVisible(window.scrollY>300)
window.addEventListener('scroll', onScroll)
return ()=> window.removeEventListener('scroll', onScroll)
},[])


const scrollTop = ()=> window.scrollTo({top:0, behavior:'smooth'})


return (
<button onClick={scrollTop} aria-label="scroll to top" className={`fixed right-6 bottom-6 p-3 rounded-full shadow-lg transition ${visible? 'opacity-100 scale-100':'opacity-0 scale-75 pointer-events-none'} bg-gradient-to-br from-blue-500 to-indigo-600`}>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 19V6M5 12l7-7 7 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
</button>
)
}