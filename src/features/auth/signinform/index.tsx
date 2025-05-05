import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/button";
import Input from "../../../components/form/input";
import { signinSchema } from "./schema";
import StyleSigninForm from "./style";

const SigninForm = () => {
  // const { logInUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const { data, isLoading, mutate } = useMutation({
  //   mutationFn: login,
  //   onError: () => toast.error("Email or password is wrong!"),
  //   onSuccess: ({ data }) => {
  //     logInUser(data.token, {
  //       name: data.name,
  //       surname: data.surname,
  //       image: data.profileImage,
  //     });
  //     navigate("/");
  //   },
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const submitHandler = async function (formData: {
    email: string;
    password: string;
  }) {
    // mutate(formData);
    console.log(formData);

    // if (data)
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <StyleSigninForm onSubmit={handleSubmit(submitHandler)}>
      <Input
        {...register("email")}
        type="email"
        placeholder="Email"
        name="email"
        errorMsg={errors.email?.message}
      />
      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        name="password"
        errorMsg={errors.password?.message}
      />
      <Button text="Sign in" onClick={() => {}} />
    </StyleSigninForm>
  );
};

export default SigninForm;
