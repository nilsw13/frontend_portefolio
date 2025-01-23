import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <footer className=" border-t-2 border-[#1a1a1a] p-6 bg-[#f0ead6] text-center ">
       
       <div className="flex justify-center mb-4 space-x-8">
         <Link to="#" className="text-[#1a1a1a] hover:text-[#d1548e] transition-colors">
           <Github size={28} />
         </Link>
         <Link to="#" className="text-[#1a1a1a] hover:text-[#4ecdc4] transition-colors">
           <Linkedin size={28} />
         </Link>
         <Link to="#" className="text-[#1a1a1a] hover:text-[#f7dc6f] transition-colors">
           <Mail size={28} />
         </Link>
       </div>
       <p className="text-sm">&copy; 2024 Nils Wenting. Tous droits réservés.</p>
     </footer>
    </>
  )
}

export default Footer