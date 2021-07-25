const NOTION_TOKEN = 'secret_tdQ1shZC0SltOP2w4zoPk34mAKYEKnRsWSE0fggU8BW';
const DATABASE_ID = 'e9d73cbcd451444981d88c6cfbe45bf4';

const { Client } = require("@notionhq/client")

// Initializing a client
export const notion = new Client({
        auth: NOTION_TOKEN,
    })

