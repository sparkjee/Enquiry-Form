import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = "sparkjee";
const collectionName = "enquiries";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { date, student_name, contact_number, course } = req.body;

  if (!date || !student_name || !contact_number || !course) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const doc = {
      date,
      student_name,
      contact_number,
      course,
      createdAt: new Date()
    };

    await collection.insertOne(doc);
    return res.status(200).json({ message: "Enquiry submitted successfully" });
  } catch (err) {
    console.error("Error saving to DB:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
