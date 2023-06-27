import { IUser } from "@/types/types";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./FormLogin.module.scss";
import { ChangeEvent } from "react";

interface IProps {
  onSubmit: SubmitHandler<IUser>;
  passwordRepeate: string;
  setPasswordRepeate: (event: ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

export const FormLogin = ({
  text,
  onSubmit,
  passwordRepeate,
  setPasswordRepeate,
}: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Email"
        type="email"
        {...register("email", { required: true })}
      />
      <input
        placeholder="Name"
        type="text"
        {...register("name", { required: true })}
      />
      <input
        placeholder="Surname"
        type="text"
        {...register("surname", { required: true })}
      />
      <input
        placeholder="Login"
        type="text"
        {...register("login", { required: true })}
      />
      <input
        placeholder="Password"
        type="text"
        {...register("password", { required: true })}
      />
      <input
        placeholder="Password repeat"
        type="text"
        value={passwordRepeate}
        onChange={(event) => setPasswordRepeate(event)}
        required
      />
      <button>{text}</button>
      {errors.email && <span>Это поле обезательное</span>}
    </form>
  );
};
