const { MongoClient } = require("mongodb");

// Connect the Client to the Server
const uri =
	"mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=db1";

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

async function run() {
	try {
		// Connection URI ("Uniform Resource Identifier")

		// Create a new MongoClient
		await client.connect();
		console.log("Connected succesfully to mongodb server");

		// Establish and verify connection
		// client.db("10x-insta-clone");
		console.log("Connected succesfully to database server");
		const db = client.db("10x-insta-clone");
		db.createCollection("photos", (err, res) => {
			if (err) {
				console.log(`"photos" collections already exists`);
			} else console.log("Collection Created!");
		});
	} finally {
		setTimeout(() => {
			client.close();
		}, 5000);
	}
}
run().catch(console.dir);
