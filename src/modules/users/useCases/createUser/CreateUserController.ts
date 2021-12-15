import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(req: Request, res: Response): Response {
    try {
      const { email, name } = req.body;

      const response = this.createUserUseCase.execute({ email, name });
      return res.status(201).json(response);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export { CreateUserController };
