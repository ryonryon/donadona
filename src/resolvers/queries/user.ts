import { getRepository } from "typeorm";
import User from "../../entities/User";

function user(_: any, { userId }: { userId: string }) {
  const userRepository = getRepository(User);

  return userRepository.findOne(userId);
}

export default user;
