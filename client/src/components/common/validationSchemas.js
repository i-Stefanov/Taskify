import * as yup from "yup";

const today = new Date();
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Not a valid email."),
  password: yup
    .string()
    .required("Password is required.")
    .min(3, "Password must be atleast 6 characters long.")
    .max(20, "Password must be shorter than 20 characters."),
});
const createEditValidationSchema = yup.object().shape({
  taskName: yup
    .string()
    .required("Task name is required.")
    .min(3, "Task name must be atleast three characters.")
    .max(15, "Task name must be shorter than 15 characters."),
  dueDate: yup
    .date()
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    })
    .required("Please select a date")
    .min(yesterday, "Selected date must be equal to or after today")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      "Selected date must be within the next year"
    ),
  taskPriority: yup.string().required("Priority is required."),
  description: yup
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description cannot exceed 200 characters")
    .required("Please add a description."),
});
export { createEditValidationSchema, loginValidationSchema };
