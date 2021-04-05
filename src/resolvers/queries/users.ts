import { getRepository } from "typeorm";
import User from "../../entities/User";

function users() {
  const userRepository = getRepository(User);

  return userRepository.find();
}

export default users;
