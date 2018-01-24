import { Router, Request, Response } from 'express';

const router = Router();

router.get('/',(req : Request, res: Response)=>{
  res.send('Hola mundo');
});

export default router;
