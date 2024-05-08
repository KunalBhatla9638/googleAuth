import { useEffect, useState } from "react";

function HomePage() {
  const [emailUser, setEmailUser] = useState("");
  

  useEffect(() => {
    document.title = "Registration Page";
  });

  // useGoogleOneTapLogin({
  //   onSuccess: (credentialResponse) => {
  //     const decodedCredentialResponse = jwtDecode(
  //       credentialResponse?.credential
  //     );
  //     console.log("real-->", credentialResponse);
  //   },
  //   onError: () => {
  //     console.log("Login Failed");
  //   },
  // });

  return (
    <>
      <h1>Home Page</h1>
    </>
  );
}

export default HomePage