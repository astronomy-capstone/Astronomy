import {Glossary} from "../interfaces/Glossary";
import {connect} from "../../src/database";

export async function insertGlossary(glossary: Glossary) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "INSERT INTO glossary(glossaryId, glossaryName, glossaryDefinition) VALUES (UUID_TO_BIN(UUID()), :glossaryName, :glossaryDefinition)";
		const [rows] = await mySqlConnection.execute(mySqlQuery, glossary)
		return "Glossary created successfully"
	} catch (error) {
		console.error(error.message)
	}
}


