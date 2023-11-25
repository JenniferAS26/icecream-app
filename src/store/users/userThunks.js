import { setError } from './userSlice'
import auth from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const createAccountAsync = ( newUser ) => async ( dispatch ) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    await updateProfile(auth.currentUser, {
      displayName: newUser.displayName, 
      photoURL: newUser.photoURL,
    })
  } catch (error) {
    console.warn(error)
    dispatch(setError({ 
      error: true, 
      code: error.code, 
      message: error.message 
    }))
  }
}