import { Card } from '../ui/card'

function ContactHeader() {
  return (
    <div className='mx-auto md:w-2/3 md:max-w-2/3 h-2/3 max-h-2/3'>
        <Card className='w-[90%] bg-transparent border-2  border-black-custom shadow-custom hover:shadow-custom-hover rounded-none md:p-6 p-8 transition-all hover:-translate-y-1 md:w-2/3  mx-auto'>

            <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold text-center'>Contact Me</h1>
            <p className='text-center'>I am always open to new opportunities and collaborations. Feel free to reach out to me!</p>
            </div>
        </Card>
    </div>
  )
}

export default ContactHeader