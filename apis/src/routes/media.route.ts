import {
    getAllMediaController,
    getMediaByMediaIsVideoController,
    getMediaByMediaIdController
} from "../controllers/media.controller";
import {Router} from "express";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {check} from "express-validator";
import {mediaIdValidator} from "../validators/media.validator";

const {checkschema} = require ("express-validator")
export const mediaRoute = Router()

mediaRoute.route('/').get(getAllMediaController)

mediaRoute.route('/:mediaId')
   .get(asyncValidatorController([check("mediaId", 'Please provide a valid UUID').isUUID()]), getMediaByMediaIdController)

mediaRoute.route("/mediaIsVideo/:mediaIsVideo")
   .get(asyncValidatorController([check("mediaIsVideo", "Please check media id").isInt()]), getMediaByMediaIsVideoController)
