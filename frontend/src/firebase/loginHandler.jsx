import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const handleLogin = async (e, userData, navigate) => {
  e.preventDefault();

  const { email, password } = userData;

  console.log(email + password);

  // Mapping of Firebase error codes to custom messages
  const errorMessages = {
    "auth/invalid-credential": "Invalid Credentials",
    "auth/user-not-found": "User not found",
    "auth/wrong-password": "Incorrect password",
    "auth/too-many-requests": "Too many login attempts. Please try again later.",
  };

  try {
    console.log("Logging in with:", email, password);
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    toast.success("Welcome back! Successfully logged in.");
    navigate("/home");
  } catch (error) {
    const customMessage = errorMessages[error.code] || "Login failed. Please try again.";
    toast.error(customMessage);
  }
};

export default handleLogin;