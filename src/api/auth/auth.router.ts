import { Router } from "express";
import { FirstUserDTO, LoginUserDTO, SigninUserDTO, UpdateUserDTO } from "./auth.dto";
import { firstUser, login, signin, signinFirstUser, update } from "./auth.controller";
import { validate } from "../../utils/middleware/validation.middleware";
import { isAdmin } from "../../utils/middleware/authentication.middleware";
import { limiterLogin } from "../../global";
import { thereIsntUser } from "../../utils/middleware/there-isnt-user.middleware";
import { UsernameDTO } from "../user/user.dto";

const router = Router();

router.post("/signin", isAdmin, validate(SigninUserDTO), signin);
router.patch("/update/:username", isAdmin, validate(UpdateUserDTO), validate(UsernameDTO, "params"), update)
router.post("/signin/first-user", validate(FirstUserDTO), thereIsntUser(), signinFirstUser);
router.get("/first-user", firstUser);
router.post("/login", validate(LoginUserDTO), login);

export default router;