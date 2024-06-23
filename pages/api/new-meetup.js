import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://prafulgahlot0896:AxIrWy64pulLsBkI@cluster0.3fpr6vu.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const todoCollections = db.collection("todo");
    const result = await todoCollections.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: "Todo!" });
  } else if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://prafulgahlot0896:AxIrWy64pulLsBkI@cluster0.3fpr6vu.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const todoCollections = db.collection("todo");

    const todos = await todoCollections.find().toArray();

    client.close();
    res.status(200).json(todos);
  }
}
export default handler;
