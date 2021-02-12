import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const users = []
import dbConnect from '../util/dbConnect'
import User from '../models/User';
import logger from '../util/logger';

export async function createUser({ email, password }) {
  await dbConnect()
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    created_at: Date.now(),
    email,
    hash,
    salt,
  }

  const result =  await User.create(user)

  logger.info('User successfully created', result);
  return user
}

// Here you should lookup for the user in your DB
export async function findUser({ email }) {
  await dbConnect()
  const user = await User.findOne({email})

  logger.info('User successfully found', user);
  return user
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export async function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')

  const passwordsMatch = user.hash === inputHash
  logger.info(`passwords match: ${passwordsMatch}`)
  return passwordsMatch
}
