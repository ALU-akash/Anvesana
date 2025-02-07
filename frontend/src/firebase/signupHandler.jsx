import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const handleSignup = async (e, userData, navigate) => {
  e.preventDefault();

  const {
    firstName,
    lastName,
    dob,
    email,
    employeeId,
    city,
    process,
    shift,
    password,
    phoneNumber,
  } = userData;

  if (!email.includes("berg.co.in")) {
    toast.error("Use an @berg.co.in email address.");
    return;
  }

  if (
    !firstName ||
    !lastName ||
    !dob ||
    !email ||
    !password ||
    !employeeId ||
    !city ||
    !process ||
    !shift
  ) {
    toast.error("All fields are required.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCredential.user.uid;

    // Add a new document in collection "Users"
    await setDoc(doc(db, "Users", uid), {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      employeeId: employeeId,
      city: city,
      process: process,
      shift: shift,
      phone: phoneNumber,
    });
    toast.success("User created successfully");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  } catch (e) {
    alert(e);
  }
};

export default handleSignup;
