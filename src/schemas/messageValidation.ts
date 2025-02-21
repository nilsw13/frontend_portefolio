import {z} from 'zod';

const normalizeInput = (value: string) => {
  return value
    .replace(/['']/g, "'") // Normalise les apostrophes
    .replace(/\s+/g, " ")  // Normalise les espaces
    .trim();
};


const messageSchema = z.object({

    // name input
    name: z.string().min(3).max(255).transform(value => {
      return value
        .replace(/[''′']/g, "'")  // Normalise toutes les variantes d'apostrophes
        .replace(/[""″"]/g, '"')  // Normalise les guillemets
        .trim();
    })
    .refine(
      (value) => {
     
        const dangerousPatterns = [
          /script/i,
          /javascript:/i,
          /(<[^>]*>)/i, // Tags HTML
          /\b(select|insert|update|delete)\s+into\b/i,
          /\bdrop\s+table\b/i
        ];
        return !dangerousPatterns.some(pattern => pattern.test(value));
      },
      "Contenu non autorisé détecté"
    ),
      
      
      










    // email input

    email: z.string().email().nonempty(),











    
    // message input

    message: z.string()
    .min(10)
    .max(1000)
    .transform(normalizeInput)
    .refine(
      (value) => {
     
        const dangerousPatterns = [
          /script/i,
          /javascript:/i,
          /(<[^>]*>)/i, // Tags HTML
          /\b(select|insert|update|delete)\s+into\b/i,
          /\bdrop\s+table\b/i
        ];
        return !dangerousPatterns.some(pattern => pattern.test(value));
      },
      "Contenu non autorisé détecté"
    ),
      



    













      // phone input

    phoneNumber: z.string().regex(/^[0-9]{10}$/)
    .refine(
        (value) => {
          //  regex  SQL 
          const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
          return !sqlInjectionRegex.test(value);
        },
        "Le telephoen contient des caractères non autorisés"
      )
      
      // regex XSS
      .refine(
        (value) => {
          
          const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
          return !xssRegex.test(value);
        },
        "Le telephoen contient des caractères non autorisés"
      )

      .refine(
        // le champs doit contenir uniqument des chiffres et doit avoir une longueur de 15 maximum
        (value) => /^[0-9]*$/.test(value),
        "Le telephoen ne doit contenir que des chiffres"
        
      )
      
     
      .refine(
        (value) => {
          // regex caractères spéciaux
          const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
          return !specialCharsRegex.test(value);
        },
        "Le telephoen contient des caractères non autorisés"
      ),
      
     
      
     // sanitize input


    // company input

    company: z.string().min(3).max(255).transform(value => {
      return value
        .replace(/[''′']/g, "'")  // Normalise toutes les variantes d'apostrophes
        .replace(/[""″"]/g, '"')  // Normalise les guillemets
        .trim();
    })
    .refine(
      (value) => {
     
        const dangerousPatterns = [
          /script/i,
          /javascript:/i,
          /(<[^>]*>)/i, // Tags HTML
          /\b(select|insert|update|delete)\s+into\b/i,
          /\bdrop\s+table\b/i
        ];
        return !dangerousPatterns.some(pattern => pattern.test(value));
      },
      "Contenu non autorisé détecté"
    ),
      



      // loading & erros

        loading: z.boolean(),
        error: z.string().nullable()

     
  


      

    
        

    
})



        

export default messageSchema;