import { Router } from 'express';

const userRouter = Router();

// Ruta - Validación - Controlador

userRouter.post('/register');//Registro
userRouter.post('/login');//Login
userRouter.get('/user');//Get User
userRouter.patch('/update-email');//Mod Email
userRouter.patch('/update-password');//Mod Password
userRouter.patch('/update-data');//Mod User-Info
userRouter.delete('/delete-user');//Delete User

export default userRouter;
