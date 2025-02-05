import { useMessage } from '@/hooks/useMessage';
import { Card } from '../../ui/card';
import { useState } from 'react';

import Toast from '@/components/utils/Toast';
import messageSchema from '@/schemas/messageValidation';


// Définissons une interface plus simple pour les données du formulaire
interface FormData {
  name: string;
  email: string;
  company: string;  
  message: string;
  phoneNumber: string;
  loading: boolean;
  error: string | null;
}

function ContactForm() {
  // Simplifions l'état initial
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: '',
    phoneNumber: '',
    loading: false,
    error: null
  });





  const [showToast, setShowToast] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  // @ts-ignore
  const [isSubmitError, setIsSubmitError] = useState<boolean>(false);
  const { sendMessage, loading } = useMessage();


  const resetBackgroundColors = () => {
    const formFields = document.querySelectorAll('input, textarea');
    formFields.forEach(field => {
      (field as HTMLElement).style.backgroundColor = 'white';
      (field as HTMLInputElement).style.transition = 'background-color 0.5s';
    });
  };

  // Gestionnaire de changement amélioré
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    e.target.style.backgroundColor = value.trim() === '' ? 'white' : '#ffffcc';



    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Gestionnaire de soumission amélioré
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {

      const validatedData = messageSchema.parse(formData);
      

      // Envoi direct des données sans imbrication inutile
      await sendMessage(validatedData);
      setShowToast(true);

      resetBackgroundColors();

      setIsSubmitSuccessful(true);
      
     
      


      
      // Réinitialisation du formulaire après succès

      

      setFormData({
        name: '',
        company: '',
        email: '',
        message: '',
        phoneNumber: '',
        loading: false,
        error: null
      });

      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setIsSubmitError(true);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
    {/* Error Toast */}
    {isSubmitError && (
      <Toast
        message="Erreur lors de l'envoi du message"
        isVisible={!showToast}
        onHide={() => setIsSubmitError(false)}
      />
    )}

    {/* Success Toast */}
    {isSubmitSuccessful && (
      <Toast
        message="Message envoyé avec succès !"
        isVisible={showToast}
        onHide={() => {
          setShowToast(false);
          setIsSubmitSuccessful(false);
        }}
      />
    )}


      <div className='md:w-2/3 max-w-2/3 h-1/3 max-h-2/3'>
        <Card className='h-[400px] w-[350px] p-3 mx-auto mt-4 bg-transparent border-2 rounded-none border-black-custom shadow-custom md:w-2/3'>
         
         
       



          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-4'>

            
            <input
              id='name'
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              className='p-2 border-2 rounded-none border-black-custom shadow-custom md:w-2/3'
              required
            />



            
            <input 
            id='company'
            placeholder='Company'
            name='company'
            type="text"
            value={formData.company}
            onChange={handleChange}
            className='p-2 border-2 rounded-none border-black-custom shadow-custom md:w-2/3'
            required 
            />







            
            <input

              id='email'
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              
              className='p-2 border-2 rounded-none border-black-custom shadow-custom md:w-2/3'
              required
            />

            <input 
            id='phoneNumber'
            name='phoneNumber'
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
            className='p-2 border-2 rounded-none border-black-custom shadow-custom md:w-2/3'
            />
            


            
            <textarea
              id='message'
              name='message'
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
              className='p-2 border-2 rounded-none border-black-custom shadow-custom md:w-2/3'
              required
            />
            
            <button
              type='submit'
              disabled={loading}
              className={`bg-blue-custom text-white border-2 border-black-custom rounded-none shadow-custom p-2 hover:bg-blue-custom-hover hover:-translate-y-0.5 hover:shadow-custom-hover transition-all w-4/5 md:w-2/3 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
}


export default ContactForm;