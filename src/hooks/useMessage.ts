import api from "@/utils/axios";
import { useCallback, useState } from "react";


    export interface Message {
        name: string;
        email: string;
        company: string;
        message: string;
        phoneNumber: string;
        loading: boolean;
        error: string | null;

    }

    interface UseMessageReturn {
        sendMessage: (message: Message) => Promise<void>;
        loading: boolean;
        error: string | null;
        resetState: () => void;
      }


      export function useMessage(): UseMessageReturn {
        const [loading, setLoading] = useState<boolean>(false);
        const [error, setError] = useState<string | null>(null);
      
        const sendMessage = useCallback(async (message: Message) => {
          setLoading(true);
          setError(null);
          
          const requestBody = {
            name: message.name,
            company: message.company,
            email: message.email,
            message: message.message,
            phone: message.phoneNumber

          };
      
          try {
            const response = await api.post('/messages/send', requestBody);
            console.log("requestBody: ", requestBody);
            console.log("response: ", response);
          } catch (error) {
            setError((error as any).message);
          } finally {
            setLoading(false);  // N'oubliez pas de désactiver loading
          }
        }, []);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const resetState = () => {
            setLoading(false);
            setError(null);
            
          }
          // @ts-ignore
        
      
        // Retourne un objet avec toutes les valeurs nécessaires
        return {
          sendMessage,
          loading,
          error,
          resetState
        };
      }