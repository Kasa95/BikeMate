import * as Yup from "yup";

export const newGroupSchema = Yup.object().shape({
  groupName: Yup.string().min(5, "Name is too short").required("Name Required"),
  groupCity: Yup.string().required("City Required").min(3, "City is too short"),
  groupDistance: Yup.number()
    .min(1)
    .max(900, "Be realistic!")
    .required("Distance Required"),
  groupSpeed: Yup.number()
    .min(1)
    .max(100, "Be realistic!")
    .required("Speed required"),
});
