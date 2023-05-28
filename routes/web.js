import express from 'express'
import StudentController from '../controller/studentController.js'

const router = express.Router()


router.get("/",StudentController.getAllDetails)
router.post("/",StudentController.createStudentDetail)
router.post("/update/:id",StudentController.updateStudentDetailById)
router.get("/edit/:id",StudentController.editStudentDetail)
router.post("/delete/:id",StudentController.deleteStudentDetailById)








export default router