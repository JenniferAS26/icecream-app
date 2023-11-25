import auth from '../../firebase/firebaseConfig'
import { setError, setIsAuthenticate, setUser } from './userSlice'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const createAccountAsync = ( newUser ) => async ( dispatch ) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    await updateProfile(auth.currentUser, {
      displayName: newUser.displayName, 
      photoURL: newUser.photoURL,
    })
    dispatch(setUser({ 
      id: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      accessToken: user.accessToken
    }))
    dispatch(setIsAuthenticate(true))
    dispatch(setError(false))
  } catch (error) {
    console.warn(error)
    dispatch(setError({ 
      error: true, 
      code: error.code, 
      message: error.message 
    }))
  }
}