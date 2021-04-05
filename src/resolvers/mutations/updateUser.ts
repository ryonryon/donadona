import { getRepository } from "typeorm";
import UpdateUserInput from "../../entities/UpdateUserInput";
import User from "../../entities/User";

async function updateUser(
  _: any,
  { userId, firstName, lastName }: UpdateUserInput
) {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);

  if (!user) throw new Error("The user doesn't exist");
  if (firstName) user.firstName;
  if (lastName) user.lastName;

  return await userRepository.save(user);
}

export default updateUser;
