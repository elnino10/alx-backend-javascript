import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

test();
