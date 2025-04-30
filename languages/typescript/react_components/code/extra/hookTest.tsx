import React, { useEffect } from "react";
import useRequestState from "./useRequestState";

const MyComponent = () => {
  const { requestState, setIdle, setLoading, setSuccess, setError } =
    useRequestState<string>(); // declare data to be string (can be any)

  const fetchData = async () => {
    try {
      setLoading();
      const res = await fetch("https://api.example.com/data");
      const text = await res.text(); // suppose string is returned
      setSuccess(text);
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {requestState.status === "idle" && <p>ready to load</p>}
      {requestState.status === "loading" && <p>loading</p>}
      {requestState.status === "success" && <p>success: {requestState.data}</p>}
      {requestState.status === "error" && (
        <p>error: {requestState.error.message}</p>
      )}

      <button onClick={fetchData}>reload</button>
    </div>
  );
};
