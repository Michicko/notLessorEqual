const app = require('./app');
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

const db = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

async function main() {
	await mongoose.connect(db);
	console.log("Server connected to database successfully!!");
}

main().catch((err) => console.log(err));

const PORT = 8000 || process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
