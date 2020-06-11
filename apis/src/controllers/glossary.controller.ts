import {NextFunction, Request, Response} from "express";
import {getAllGlossaries} from "../../utils/Glossary/getAllGlossaries";
import {Status} from "../../utils/interfaces/status";
import {getGlossaryByGlossaryId} from "../../utils/glossary/getGlossaryByGlossaryId";


export async function getAllGlossariesController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const data = await getAllGlossaries()

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}

export async function getGlossaryByGlossaryIdController(request: Request, response: Response, nextFunction: NextFunction) {

	try {

		const {glossaryId} = request.params;

		const data = await getGlossaryByGlossaryId(glossaryId)

		console.log(data)

		const status: Status = {status: 200, data, message: null}

		return response.json(status)

	} catch (error) {

		console.log(error)

	}

}