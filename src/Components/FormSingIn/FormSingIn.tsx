import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { SubmitHandler } from "react-hook-form";
import { Form } from "../Form/Form";
import { IUser } from "@/types/types";
import { useAppDispatch } from "@/hooks/useRedux";
import { FetchSingInUser, addUser } from "@/store/userSlice";
import styles from "./FormSingIn.module.scss";

export const FormSingIn = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    dispath(
      addUser({
        id: "1",
        email: "d",
        password: data.password,
        token: "d",
        surname: data.surname,
        login: data.login,
        name: data.name,
      })
    );

    dispath(FetchSingInUser({ password: data.password!, login: data.login! }));

    navigate("/WordOfFlowers");
  };
  return <Form text="Sing In" onSubmit={onSubmit}></Form>;
};
