import { BaseSentMessageRepository } from "../base";
import { ACCOUNT } from '../../../../../../src/firebase/collectionSchema';

export class SentMessageOneToOneRepository extends BaseSentMessageRepository {
  public messageCollectionName() {
    return ACCOUNT.children.MESSAGE_ONE_TO_ONE.name
  }
}
