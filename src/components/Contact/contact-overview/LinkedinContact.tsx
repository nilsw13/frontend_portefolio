import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


function LinkedinContact() {
  return (
    <div className="flex flex-col items-center justify-center">

        <Card className="rounded-none bg-transparent border-2 border-black-custom shadow-custom w-2/3 p-4">

        <div className='mt-20 mb-20 flex flex-col items-center justify-center gap-4'>
                    <h2 className='font-bold text-2xl'>Linkedin Profile</h2>
                    
                    <p className='font-medium'>Connect with me on LinkedIn:</p>
                        
                    <Button className='mt-4 bg-blue-600 border-2 border-black-custom text-black-custom hover:bg-blue-600 rounded-none shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all' >
                        View Linkedin Profile
                    </Button>

                    
                </div>
        </Card>

    </div>
  )
}

export default LinkedinContact