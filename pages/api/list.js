import { connectDB } from "@/util/database";

export default async function handler(request, response) {
    
    const db = (await connectDB).db("forum");
    const list = await db.collection('post').find().toArray();
    
    if(request.method == 'GET') {
        return response.status(200).json(list);
    }
}