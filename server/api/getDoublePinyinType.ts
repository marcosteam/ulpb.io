import type {IncomingMessage, ServerResponse} from 'http';
import { useQuery, sendError, H3Error } from 'h3'
import { flyPinyin } from '~~/composables/doublePinyinPlan/flyPinyin';


export default async (req:IncomingMessage, res:ServerResponse) => {
    const query = await useQuery(req);
    const err:H3Error = {
        name: "H3Error",
        message: "UserBadRequest",
        statusCode: 400,
        statusMessage: "Bad Request",
    }
    if (query.key === "flypinyin") {
        return flyPinyin;
    }
    else {
        sendError(res, err);
    }
}
