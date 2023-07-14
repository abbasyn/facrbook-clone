import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";

const schema = yup
  .object({
    // firstName: yup.string().required(),

    email: yup.string().email().required("In valid email address"),
    password: yup.string().min(4).max(32).required(),
    // emailOrPhone: yup
    //   .string()
    //   .required("Email or phone number is required")
    //   .test(
    //     "validEmailOrPhone",
    //     "Please enter a valid email or phone number",
    //     (value) => {
    //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //       const phoneRegex = /^\d+$/;
    //       return emailRegex.test(value) || phoneRegex.test(value);
    //     }
    //   ),
  })
  .required();

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const Firebase = useFirebase();

  console.log(Firebase);

  const onSubmit = async (data) => {
    console.log(data);
    await Firebase.createUser(data.email, data.password)
      .then((value) => toast.success("user created successfully"))
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email all ready exsist.Try another");
          return;
        }
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-3"
      >
        {/* <div className="flex gap-2"> */}
        {/* <div> */}
        {/* <input
              type="text"
              name="firstName"
              className="p-2 border rounded  border-[#CCD0D5] focus:first-line:none outline-none"
              placeholder="first Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div> */}
        {/* <div>
            <input
              type="text"
              name="surname"
              className="p-2 border rounded border-[#CCD0D5]   focus:first-line:none outline-none"
              placeholder="Surname"
              {...register("surname")}
            />
          </div> */}
        {/* </div> */}
        <div className="w-full border border-[#CCD0D5] focus:none rounded ">
          <input
            type="text"
            name="email"
            className="p-2 w-full border rounded   focus:first-line:none outline-none"
            placeholder="Mobile number or email address"
            //{...register("emailOrPhone")}
            {...register("email")}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div className="w-full border border-[#CCD0D5] rounded ">
          <input
            type="password"
            name="password"
            className="p-2 w-full border rounded focus:first-line:none outline-none"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        {/*
        <div className="flex flex-col gap-3 w-full">
          {/* Day dropdown */}
        {/* <label>Date of birth</label> */}
        {/* <div className="flex gap-4"> */}
        {/* <select {...register("day")} className="p-2 px-4 border"> */}
        {/* <option value="">Day</option> */}
        {/* Render options for 1 to 31 */}
        {/* {Array.from({ length: 31 }, (_, i) => ( */}
        {/* <option key={i + 1} value={i + 1}> */}
        {/* {i + 1} */}
        {/* </option> */}
        {/* ))} */}
        {/* </select> */}
        {/* Month dropdown */}
        {/* <select {...register("month")} className="p-2 px-4 border"> */}
        {/* <option value="">Month</option> */}
        {/* Render options for January to December */}
        {/* {Array.from({ length: 12 }, (_, i) => ( */}
        {/* <option key={i + 1} value={i + 1}> */}
        {/* {new Date(0, i).toLocaleString("default", { */}
        {/* month: "long", */}
        {/* })} */}
        {/* </option> */}
        {/* ))} */}
        {/* </select> */}
        {/* Year dropdown */}
        {/* <select {...register("year")} className="p-2 px-4 border"> */}
        {/* <option value="">Year</option> */}
        {/* Render options for the last 100 years */}
        {/* {Array.from({ length: 100 }, (_, i) => ( */}
        {/* <option key={i + 1920} value={i + 1920}> */}
        {/* {i + 1920} */}
        {/* </option> */}
        {/* ))} */}
        {/* </select> */}
        {/* </div> */}

        {/* <label>Gender</label> */}
        {/* <div className="flex gap-2"> */}
        {/* Female radio button */}
        {/* <input type="radio" value="Female" {...register("gender")} /> */}
        {/* <label>Female</label> */}

        {/* Male radio button */}
        {/* <input type="radio" value="Male" {...register("gender")} /> */}
        {/* <label>Male</label> */}

        {/* Custom radio button */}
        {/* <input type="radio" value="Custom" {...register("gender")} /> */}
        {/* <label>Custom</label> */}
        {/* </div> */}
        {/* </div> */}

        <button
          className="p-2 cursor-pointer font-bold bg-[#00A400] rounded w-48 text-white"
          type="submit"
          value=""
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignupForm;
