import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "@/Components/FormLogin/FormLogin";
import { IUser } from "@/types/types";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/hooks/useRedux";
import { FetchLoginUser, addUser } from "@/store/userSlice";
import styles from "./LoginForm.module.scss";
import { ChangeEvent, useState } from "react";

export const LoginForm = () => {
  const [passwordRepeate, setPasswordRepeate] = useState<string>("");

  const setPassRepeat = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordRepeate(event.target.value);
  };

  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (data.password !== passwordRepeate) return;
    dispath(
      addUser({
        id: "0",
        email: data.email,
        password: data.password,
        token: "12",
        surname: data.surname,
        login: data.login,
        name: data.name,
      })
    );
    dispath(FetchLoginUser(data));
    navigate("/WordOfFlowers");
  };

  return (
    <FormLogin
      text="Login"
      onSubmit={onSubmit}
      passwordRepeate={passwordRepeate}
      setPasswordRepeate={setPassRepeat}
    />
  );
};
