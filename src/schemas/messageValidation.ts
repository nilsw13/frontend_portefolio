import z from 'zod';

export const messageSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    message: z.string().min(10).max(1000),
    phone: z.string().regex(/^[0-9]{10}$/)


    // regex to securise from xss attacks sql injections etc

        
})