import { getRepository } from "typeorm";
import {
  USER_DELETION_MESSAGE,
  USER_DELETION_FAILED_MESSAGE,
} from "../../../constants/mutationMessages";
import User from "../../../entities/User";

async function removeUser(_: any, { userId }: { userId: string }) {
  try {
    const res = await getRepository(User).delete(userId);

    if (res.affected)
      return {
        success: true,
        message: USER_DELETION_MESSAGE,
      };

    return {
      success: false,
      message: USER_DELETION_FAILED_MESSAGE,
    };
  } catch (e) {
    return {
      success: false,
      message: e,
    };
  }
}

export default removeUser;
