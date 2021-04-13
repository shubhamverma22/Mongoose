const Student = require("../app/student");
const assert = require("assert");
const { error } = require("console");

//Read test in mongodb
describe("Read Tests", () => {
	let reader;
	beforeEach((done) => {
		reader = new Student({ name: "Reader" });
		reader.save().then(() => {
			done();
		});
	});

	it("Reader a User: Reader", (done) => {
		Student.find({ name: "Reader" }).then((studArray) => {
			assert(reader._id.toString() === studArray[0]._id.toString());
			done();
		});
	});
});
