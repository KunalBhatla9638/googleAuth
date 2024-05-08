import { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import {useNavigate} from 'react-router-dom'

function RegisterPage() {
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
      
      <h2>Google Authentication {}</h2>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const decodedCredentialResponse = jwtDecode(
            credentialResponse?.credential
          );
          console.log(decodedCredentialResponse);
          setEmailUser(decodedCredentialResponse);
          const navigate = useNavigate();

          try {
            const response = await axios.post(
              API + "/register",
              {
                firstname: decodedCredentialResponse.given_name,
                lastname: decodedCredentialResponse.family_name,
                email: decodedCredentialResponse.email,
                profilUrl: decodedCredentialResponse.picture,
              },
              {
                headers : {
                  "Content-Type" : "application/json"
                },
              }
            );

            if (response.status === 200) {
              
              console.log(response);

            }
          } catch (err) {
            console.log(err);
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />

      <div className="card"></div>
    </>
  );
}

export default RegisterPage