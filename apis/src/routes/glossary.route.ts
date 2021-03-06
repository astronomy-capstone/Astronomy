import {Router} from "express";
import {getAllGlossariesController, getGlossaryByGlossaryIdController} from "../controllers/glossary.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";
import {glossaryIdValidator} from "../validators/glossary.validator";


export const glossaryRoute = Router()

glossaryRoute.route('/')
	.get(getAllGlossariesController)

glossaryRoute.route("/:glossaryId")
	.get(asyncValidatorController([check("glossaryId", "Please check your UUID").isUUID()]), getGlossaryByGlossaryIdController)

