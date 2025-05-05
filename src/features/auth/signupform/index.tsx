import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/button";
import Input from "../../../components/form/input";
import { signupSchema } from "./schema";
import StyleSignupForm from "./style";

const SignupForm = () => {
  // const navigate = useNavigate();

  // const { data, isLoading, mutate } = useMutation({
  //   mutationFn: signup,
  //   onError: () => toast.error("Something went wrong!"),
  //   onSuccess: ({ data }) => {
  //      navigate("/signin");
  //   },
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const submitHandler = async function (formData: {
    email: string;
    password: string;
    name: string;
    confirmPassword?: string;
  }) {
    // mutate(formData);
    console.log(formData);

    // if (data)
    reset({
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <StyleSignupForm onSubmit={handleSubmit(submitHandler)}>
      <Input
        {...register("email")}
        type="email"
        placeholder="Email"
        name="email"
        errorMsg={errors.email?.message}
      />
      <Input
        {...register("name")}
        type="text"
        placeholder="Name"
        name="name"
        errorMsg={errors.name?.message}
      />
      <Input
        {...register("password")}
        type="password"
        placeholder="Password"
        name="password"
        errorMsg={errors.password?.message}
      />
      <Input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        errorMsg={errors.confirmPassword?.message}
      />
      <Button text="Sign in" onClick={() => {}} />
    </StyleSignupForm>
  );
};

export default SignupForm;
