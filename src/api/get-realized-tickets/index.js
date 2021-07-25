import {Client} from "@notionhq/client/build/src";
// import {notion, DATABASE_ID} from "../notion"
export const DATABASE_ID = 'e9d73cbcd451444981d88c6cfbe45bf4';
const NOTION_TOKEN = 'secret_tdQ1shZC0SltOP2w4zoPk34mAKYEKnRsWSE0fggU8BW';

// Initializing a client
export const notion = new Client({
    auth: NOTION_TOKEN,
})

export const getRealizedTickets = async () => {
    console.log('ticket')
        try {
            const tickets = await notion.databases.query({
                database_id: DATABASE_ID,
            });
            await console.log(tickets,'tickets result');
            return tickets;
        } catch (error) {
            await console.log(error,'error result');

            return error;
        }
    }

