import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then(
    (values) => {
      const res = [];
      values.forEach((value) => {
        if (value.status === "rejected") {
          res.push({ status: value.status, value: value.reason });
        } else {
          res.push({ status: value.status, value: value.value });
        }
      });
      return res;
    }
  );
}
