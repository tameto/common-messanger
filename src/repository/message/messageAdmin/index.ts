import { BaseMessageRepository } from "../base";
import { USER } from "../../../firebase/collectionSchema";

export class MessageAdminRepository extends BaseMessageRepository {
  public messageCollectionName() {
    return USER.children.SENT_MESSAGE_ADMIN.name
  }
}
