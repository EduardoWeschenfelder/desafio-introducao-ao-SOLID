import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(req: Request, res: Response): Response {
    try {
      const { user_id } = req.params;
      const response = this.showUserProfileUseCase.execute({ user_id });

      return res.json(response);
    } catch (err) {
      return res.status(404).json({ error: err });
    }
  }
}

export { ShowUserProfileController };
