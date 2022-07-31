import * as Yup from "yup";

export const newGroupSchema = Yup.object().shape({
  groupName: Yup.string().min(5, "Name is too short").required("Name Required"),
  groupCity: Yup.string().required("City Required").min(3, "City is too short"),
  groupDistance: Yup.number()
    .min(1, "More than 1!")
    .max(900, "Be realistic!")
    .required("Distance Required"),
  groupSpeed: Yup.number()
    .min(1, "More than 1!")
    .max(100, "Be realistic!")
    .required("Speed required"),
});

export const newUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Username is too short")
    .max(18, "Username is too long")
    .required("Name required"),
  city: Yup.string().required("City Required").min(3, "City is too short"),
  email: Yup.string()
    .email("That email is not valid")
    .required("We need your email!"),
  password: Yup.string()
    .required("Please create a password")
    .min(8, "Password should be at least 8 characters long")
    .max(64, "That password is tooooo long"),
  distance: Yup.number().min(1, "More than 1!").max(900, "Be realistic!"),
  speed: Yup.number().min(1, "More than 1!").max(100, "Be realistic!"),
});
