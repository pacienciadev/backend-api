import { Router } from 'express'

 const authRouter = Router()

authRouter.get('/auth', (req, res) => {
  res.send({ message: 'Hello API - Auth Route :D ' })
})

export { authRouter }
