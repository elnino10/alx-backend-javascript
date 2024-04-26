import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const result = [];
    values.forEach((val) => {
      if (val.status === 'fulfilled') {
        result.push({ status: val.status, value: val.value });
      } else {
        result.push({ status: val.status, value: `${val.reason}` });
      }
    });
    return result;
  });
}
