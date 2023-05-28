import StudentModel from "../models/Student.js";

class StudentController {
  static createStudentDetail = async (req, res) => {
    // console.log(req.body)

    const { name, age, fees } = req.body;
    const newStudentDetail = new StudentModel({
      name,
      age,
      fees,
    });

    await newStudentDetail.save();

    res.redirect("/student");
  };

  // get all detail
  static getAllDetails = async (req, res) => {
    try {
      const result = await StudentModel.find();
      // console.log(result)
      res.render("index", { data: result });
    } catch (err) {
      console.log(err);
    }
  };

  // edit detail
  static editStudentDetail = async (req, res) => {
    try {
      const result = await StudentModel.findById(req.params.id);

      res.render("edit", { data: result });
    } catch (err) {
      console.log(err);
    }
  };

  // edit detail
  static updateStudentDetailById = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
    } catch (err) {
      console.log(err);
    }

    res.redirect("/student");
  };
  static deleteStudentDetailById = async (req, res) => {
    try {
      const result = await StudentModel.findByIdAndDelete(req.params.id);
      res.redirect("/student");
    } catch (err) {
      console.log(err);
    }
  };
}

export default StudentController;
