import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logoutAction } from "../../store/action/UserAction";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(logoutAction());
    history.push("/login");
  });
  return null;
};

export default Logout;
