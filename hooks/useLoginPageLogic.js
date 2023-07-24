import useComponentToast from "@/utils/useComponentToast";
import { useRouter } from "next/router";
import { useState } from "react";

const useLogicPageLogic = (initialState) => {
  const router = useRouter();
  const { showToast } = useComponentToast();

  const [userDetails, setUserDetails] = useState(initialState);

  const login = (e) => {
    e.preventDefault();

    if (!userDetails.email || !userDetails.firstname || !userDetails.lastname) {
      showToast("Error!", "Please fill in all the required fields.", "error");
      return;
    }

    localStorage.setItem("ssUser", JSON.stringify(userDetails));
    setUserDetails(initialState);
    showToast("Successful!", "Logged in successfully.", "success");
    setTimeout(() => {
      setUserDetails({
        firstname: "",
        lastname: "",
        email: "",
      });
    }, 0);

    router.push("/my-profile");
  };

  const inputDetails = [
    {
      title: "first name",
      placeholder: "eg- Chioma",
      stateName: "firstname",
    },
    {
      title: "last name",
      placeholder: "eg- Nwocha",
      stateName: "lastname",
    },
  ];
  return {
    login,
    inputDetails,
    userDetails,
    setUserDetails,
  };
};

export default useLogicPageLogic;
