import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/button";
import Input from "../../../components/form/input";
import { guestSigninSchema } from "./schema";
import StyleGuestSigninForm from "./style";

const GuestSigninForm = () => {
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(guestSigninSchema),
  });

  const submitHandler = async function (formData: { name: string }) {
    // mutate(formData);
    console.log(formData);

    // if (data)
    reset({
      name: "",
    });
  };

  return (
    <StyleGuestSigninForm onSubmit={handleSubmit(submitHandler)}>
      <Input
        {...register("name")}
        type="text"
        placeholder="Name"
        name="name"
        errorMsg={errors.name?.message}
      />
      <Button text="Next" onClick={() => {}} />
    </StyleGuestSigninForm>
  );
};

export default GuestSigninForm;
