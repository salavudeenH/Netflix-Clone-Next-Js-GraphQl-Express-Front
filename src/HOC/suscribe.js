import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const suscribe = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [verify, setVerify] = useState(false);
    const [check, setCheck] = useState(false);
    const [user, setUser] = useState({});
    useEffect(() => {
      const token = localStorage.getItem("token");
      authService
        .verifyToken(token)
        .then((data) => {
          if (data.verify) {
            setVerify(true);
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
          router.push("/login");
        });
      });

    if (verify) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default suscribe;
