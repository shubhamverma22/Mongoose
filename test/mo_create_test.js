const Student = require("../app/student");
const assert = require("assert");
const { error } = require("console");

//Create test in mongodb
describe("Create records", () => {
	it("create a user in DB", () => {
		// assert(true);
		const sam = Student({ name: "Shubham" });
		sam
			.save()
			.then(() => {
				assert(!sam.isNew);
			})
			.catch((err) => {
				console.log("error", err);
			});
	});
});
