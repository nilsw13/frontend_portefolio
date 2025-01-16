import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'




function PhoneContact() {

    
return (
    <div className='flex flex-col items-center justify-center'>

            <Card className='rounded-none bg-transparent border-2 border-black-custom shadow-custom w-2/3 p-4'>
                

                <div className='mt-20 mb-20 flex flex-col items-center justify-center gap-4'>
                    <h2 className='font-bold text-2xl'>Phone Number</h2>
                    <p className=''>06 77 30 93 46</p>
                    <p className='font-medium'>I'm available from Monday to Friday </p>
                        <div>
                            <p className='font-medium'>From 9:00 to 18:00</p>

                        </div>
                    <Button className='mt-4 bg-green-300 border-2 border-black-custom text-black-custom hover:bg-green-300 rounded-none shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all' >
                        Text me on Whatsapp
                    </Button>
                </div>

            </Card>

    </div>
  )
}

export default PhoneContact