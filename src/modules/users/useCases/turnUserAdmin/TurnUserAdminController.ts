import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(req: Request, res: Response): Response {
    try {
      const { user_id } = req.params;

      const response = this.turnUserAdminUseCase.execute({ user_id });

      return res.json(response);
    } catch (err) {
      return res.status(404).json({ error: err });
    }
  }
}

export { TurnUserAdminController };
