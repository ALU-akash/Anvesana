import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const handleLogin = async (e, userData, navigate) => {
  e.preventDefault();

  const { email, password } = userData;
  
  console.log(email + password);
  try {
    console.log("Logging in with:", email, password);
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    alert("Login Successfully: " + user.email);
    navigate("/home");
  } catch (error) {
    alert(error.message);
  }
};

export default handleLogin;