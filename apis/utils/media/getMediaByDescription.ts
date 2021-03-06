import {connect} from "../../src/database";
/**

 * Helper function that grabs all misquotes

 **/

export async function getMediaByDescription(mediaDescription:String) {
    try {
        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(mediaId) AS mediaId, mediaIsVideo, mediaDescription, mediaAlt, mediaURL FROM media WHERE mediaDescription= :mediaDescription";
        const [rows] = await mysqlConnection.execute(mySqlQuery, {mediaDescription: mediaDescription})
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}