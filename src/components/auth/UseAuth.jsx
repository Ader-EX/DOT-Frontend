import { AuthContext } from "./AuthCtx";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
