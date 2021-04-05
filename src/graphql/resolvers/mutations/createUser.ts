import { getRepository } from "typeorm";
import { USER_CREATION_MESSAGE } from "../../../constants/mutationMessages";
import CreateUserInput from "../../../entities/CreateUserInput";
import User from "../../../entities/User";

async function createUser(_: any, { firstName, lastName }: CreateUserInput) {
  const user = new User(firstName, lastName);

  try {
    return {
      success: true,
      message: USER_CREATION_MESSAGE,
      user: await getRepository(User).save(user),
    };
  } catch (e) {
    return {
      success: false,
      message: e,
      user: null,
    };
  }
}

export default createUser;
