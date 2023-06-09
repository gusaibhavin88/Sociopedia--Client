import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@/redux/action/useraction";
import { useRouter } from "next/router";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(getProfile());
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, dispatch]);

  return <div>{children}</div>;
};

export default PrivateRoute;
