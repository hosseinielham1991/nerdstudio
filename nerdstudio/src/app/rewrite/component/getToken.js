"use client";
import  {  useEffect ,useRef } from "react";

import { setToken } from "@/features/tokenSlice";
import { useDispatch,useSelector } from "react-redux";
const FetchToken = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const hasFetched = useRef(false); // Ref to track if fetch has happened

  useEffect(() => {
    const getToken = async () => {
      if (!hasFetched.current && token.value === 0) {
        hasFetched.current = true; // Mark as fetched
        const res = await fetch("http://5.78.55.161:8000/v1/api/auth/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "test@test.com",
            password: "test12345",
          }),
        });
        if (!res.ok) {
          return;
        }
        const data = await res.json();
        dispatch(setToken(data.access_token));
      }
    };
    getToken();
  }, [dispatch, token.value]);

  return children;
};


export default FetchToken;