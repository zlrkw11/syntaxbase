import { useState } from "react";

type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

function useRequestState<T = any>() {
  const [requestState, setRequestState] = useState<RequestState<T>>({
    status: "idle",
  });

  const setIdle = () => setRequestState({ status: "idle" });
  const setLoading = () => setRequestState({ status: "loading" });
  const setSuccess = (data: T) => setRequestState({ status: "success", data });
  const setError = (error: Error) =>
    setRequestState({ status: "error", error });

  return { requestState, setIdle, setLoading, setSuccess, setError };
}

export default useRequestState;
