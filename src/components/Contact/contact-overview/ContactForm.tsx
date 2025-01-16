
import { Card } from '../../ui/card'

function ContactForm() {
  return (
    <div className='flex flex-col items-center justify-center '>

        

            <Card className='bg-transparent border-2  border-black-custom shadow-custom hover:shadow-custom-hover rounded-none md:p-6 p-8 transition-all hover:-translate-y-1 md:w-2/3 w-4/5 mx-auto'>

            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
                <p className='text-center'>I am always open to new opportunities and collaborations. Feel free to reach out to me!</p>
            </div>
            </Card>

            

           
               <Card className='mt-4 bg-transparent border-2 border-black-custom shadow-custom  rounded-none md:p-12 p-20  md:w-2/3 w-4/5 mx-auto'>
                 <form className='flex flex-col items-center justify-center gap-4'>
                        <input type='text' placeholder='Name' className='border-2 border-black-custom rounded-none shadow-custom p-2 md:w-2/3'/>
                        <input type='email' placeholder='Email' className='border-2 border-black-custom rounded-none shadow-custom p-2 md:w-2/3'/>
                        <textarea placeholder='Message' className='border-2 border-black-custom rounded-none shadow-custom p-2 md:w-2/3'/>
                        <button className='bg-blue-custom text-white border-2 border-black-custom rounded-none shadow-custom p-2 hover:bg-blue-custom-hover hover:-translate-y-0.5 hover:shadow-custom-hover transition-all w-4/5 md:w-2/3'>Send</button>
                    </form>
               </Card>
     
              

    </div>

    )
}
export default ContactForm