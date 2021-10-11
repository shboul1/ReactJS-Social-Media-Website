import {signInWithPopup, signOut, getAuth  } from "firebase/auth";
import {auth, provider} from '../firebase/firebase'

export const SignInWithGoogle = async () => {
    let user;
    await signInWithPopup(auth, provider)
    .then((result) => {
     user = result.user;
    }).catch((error) => {
      console.log(error)
    })
    return user;
}

export const Logout =  () => {
  const auth = getAuth();

 signOut(auth).then(() => {
  console.log('done ...')
}).catch((error) => {
  console.log(error)
});
}
