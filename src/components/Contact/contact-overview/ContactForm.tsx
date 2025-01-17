
import { Card } from '../../ui/card'

function ContactForm() {
  return (
    <div className='flex flex-col items-center justify-center '>

        

          <div className='md:w-2/3 max-w-2/3 h-2/3 max-h-2/3  '>
            

            

           
               <Card className=' w-[95%] mt-4 bg-transparent border-2 border-black-custom shadow-custom  rounded-none md:p-11 p-20  md:w-2/3  mx-auto'>
                 <form className='flex flex-col items-center justify-center gap-4'>
                        <input type='text' placeholder='Name' className='border-2 border-black-custom rounded-none shadow-custom p-2 md:w-2/3'/>
                        <input type='email' placeholder='Email' className='border-2 border-black-custom rounded-none shadow-custom p-2 md:w-2/3'/>
                        <textarea placeholder='Message' className='border-2 border-black-custom rounded-none shadow-custom p-2 md:w-2/3'/>
                        <button className='bg-blue-custom text-white border-2 border-black-custom rounded-none shadow-custom p-2 hover:bg-blue-custom-hover hover:-translate-y-0.5 hover:shadow-custom-hover transition-all w-4/5 md:w-2/3'>Send</button>
                    </form>
               </Card>
              </div>
              

    </div>

    )
}
export default ContactForm