import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { USER } from '../../../src/firebase/collectionSchema'
import { SentMessageOneToOneRepository } from '../domain/repository/message/messageOneToOne';
import { Document as MessageDoc } from '../../../src/orm/rxfire/user/message/base'

const firestore = admin.firestore()

const path = `${USER.name}/{userId}/${USER.children.SENT_MESSAGE_ONE_TO_ONE.name}/{mesasgeId}`
export const copySentOneToOneMessageToTargets = functions
  .firestore
  .document(path)
  .onCreate((snap) => {
    const message = { ...snap.data(), id: snap.id } as MessageDoc
    return new SentMessageOneToOneRepository(firestore)
      .send(message)
      .then(() => console.log('oneToOneのMessageを配信しました'))
  })
