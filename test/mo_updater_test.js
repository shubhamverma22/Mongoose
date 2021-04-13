const Student = require("../app/student");
const assert = require("assert");
const { error } = require("console");

describe("Update Test", () => {
	let updater;
	beforeEach(() => {
		updater = new Student({ name: "Updater" });
		updater.save().then(() => done());
	});
	it("Set n Save Test", () => {
		updater.set("name", "UpUpdater");
		updater
			.save()
			.then(() => Student.find({}))
			.then((students) => {
				assert(students[0].name !== "Updater");
			});
	});
});
