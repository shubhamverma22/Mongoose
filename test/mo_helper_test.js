const mongoose = require("mongoose");
mongoose.Promise = global.Promise; //ES6 - promises

before((done) => {
	mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });
	mongoose.connection
		.once("open", () => {
			// console.log("Connected")
			done();
		})
		.on("error", (error) => {
			console.log(error);
		});
});

beforeEach((done) => {
	mongoose.connection.collections.collectionofstuds.drop(() => {
		done();
	});
});
