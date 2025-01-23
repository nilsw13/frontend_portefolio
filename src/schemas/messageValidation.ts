import {z} from 'zod';


const messageSchema = z.object({

    // name input
    name: z.string().min(3).max(255)
    .refine(
        (value) => {
          //  regex  SQL 
          const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
          return !sqlInjectionRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // regex XSS
      .refine(
        (value) => {
          
          const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
          return !xssRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
     
      .refine(
        (value) => {
          // regex caractères spéciaux
          const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
          return !specialCharsRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // only letters, numbers and simple punctuation
      .refine(
        (value) => {
          
          const safeCharsRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]*$/;
          return safeCharsRegex.test(value);
        },
        "Le texte ne doit contenir que des lettres, chiffres et ponctuation simple"
      )
      
      // // starts with a letter
      .refine(
        (value) => /^[a-zA-ZÀ-ÿ]/.test(value),
        "Le texte doit commencer par une lettre"
      ),










    // email input

    email: z.string().email()
    .refine(
        (value) => {
          //  regex  SQL 
          const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
          return !sqlInjectionRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // regex XSS
      .refine(
        (value) => {
          
          const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
          return !xssRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
     
      .refine(
        (value) => {
          // regex caractères spéciaux
          const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
          return !specialCharsRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // only letters, numbers and simple punctuation
      .refine(
        (value) => {
          
          const safeCharsRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]*$/;
          return safeCharsRegex.test(value);
        },
        "Le texte ne doit contenir que des lettres, chiffres et ponctuation simple"
      )
      
      // // starts with a letter
      .refine(
        (value) => /^[a-zA-ZÀ-ÿ]/.test(value),
        "Le texte doit commencer par une lettre"
      ),













    
    // message input

    message: z.string().min(10).max(1000)
    .refine(
        (value) => {
          //  regex  SQL 
          const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
          return !sqlInjectionRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // regex XSS
      .refine(
        (value) => {
          
          const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
          return !xssRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
     
      .refine(
        (value) => {
          // regex caractères spéciaux
          const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
          return !specialCharsRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // only letters, numbers and simple punctuation
      .refine(
        (value) => {
          
          const safeCharsRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]*$/;
          return safeCharsRegex.test(value);
        },
        "Le texte ne doit contenir que des lettres, chiffres et ponctuation simple"
      )
      
      // // starts with a letter
      .refine(
        (value) => /^[a-zA-ZÀ-ÿ]/.test(value),
        "Le texte doit commencer par une lettre"
      ),



    













      // phone input

    phoneNumber: z.string().regex(/^[0-9]{10}$/)
    .refine(
        (value) => {
          //  regex  SQL 
          const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
          return !sqlInjectionRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // regex XSS
      .refine(
        (value) => {
          
          const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
          return !xssRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
     
      .refine(
        (value) => {
          // regex caractères spéciaux
          const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
          return !specialCharsRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // only letters, numbers and simple punctuation
      .refine(
        (value) => {
          
          const safeCharsRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]*$/;
          return safeCharsRegex.test(value);
        },
        "Le texte ne doit contenir que des lettres, chiffres et ponctuation simple"
      )
      
      // // starts with a letter
      .refine(
        (value) => /^[a-zA-ZÀ-ÿ]/.test(value),
        "Le texte doit commencer par une lettre"
      ),
     // sanitize input


    // company input

    company: z.string().min(3).max(255)
    .refine(
        (value) => {
          //  regex  SQL 
          const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|@@|@|char|nchar|varchar|nvarchar|alter|begin|cast|create|cursor|declare|delete|drop|end|exec|execute|fetch|insert|kill|open|select|sys|table|update)/gi;
          return !sqlInjectionRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // regex XSS
      .refine(
        (value) => {
          
          const xssRegex = /(<|>|javascript:|data:|vbscript:|onload=|onerror=|onclick=|onmouseover=|\%00|\%0d|\%0a)/gi;
          return !xssRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
     
      .refine(
        (value) => {
          // regex caractères spéciaux
          const specialCharsRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u2029]/g;
          return !specialCharsRegex.test(value);
        },
        "Le texte contient des caractères non autorisés"
      )
      
      // only letters, numbers and simple punctuation
      .refine(
        (value) => {
          
          const safeCharsRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'-]*$/;
          return safeCharsRegex.test(value);
        },
        "Le texte ne doit contenir que des lettres, chiffres et ponctuation simple"
      )
      
      // // starts with a letter
      .refine(
        (value) => /^[a-zA-ZÀ-ÿ]/.test(value),
        "Le texte doit commencer par une lettre"
      ),



      // loading & erros

        loading: z.boolean(),
        error: z.string().nullable()

     
  


      

    
        

    
})



        

export default messageSchema;