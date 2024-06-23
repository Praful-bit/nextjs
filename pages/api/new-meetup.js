import {MongoClient} from 'mongodb'

async function handler(req,res){
if(req.method === 'POST'){
    const data = req.body

    const {title,description} = data;

   const client = await MongoClient.connect('mongodb+srv://prafulgahlot0896:AxIrWy64pulLsBkI@cluster0.3fpr6vu.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0')
   const db = client.db();

   const meetupCollections = db.collection("meetup")
   const result =await meetupCollections.insertOne({data})
   
   console.log(result)

   client.close()

   res.status(201).json({message:  "Meetup inserted!"})
}
}
export default handler