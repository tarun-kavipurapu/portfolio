import Image from "next/image";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Email Address */}
      <div className="p-8 z-50 flex-1 rounded-[25px] relative flex flex-col items-center">
        <div className="text-center mb-4 flex-row flex gap-4 ">
          <h2 className="text-2xl font-bold text-white mb-4 underline">
            Email Address:
          </h2>
          <p className="text-white mb-4 text-center text-xl underline mt-1">
            tarunsharmakavipurapu@gmail.com
          </p>
        </div>
        <div className="mr-8">
          <Image
            src={"./Mention-amico.svg"}
            height={500}
            width={500}
            alt="contact"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className=" rounded-[25px] z-[50] flex flex-col flex-1 border-[#2A0E61] border items-center justify-center m-2 ">
        {/* <h2 className="text-2xl font-bold text-white mb-4  ">Contact Us</h2> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 w-10/12	py-3   "
        >
          <div className="flex flex-col gap-1 ">
            <label className="text-white">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="mb-2 form-group rounded-sm p-2"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white">Email</label>

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="mb-2 form-group rounded-sm p-2 border "
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-white">Message</label>

            <textarea
              placeholder="Message"
              {...register("message", { required: true })}
              className="mb-2 form-group h-32 rounded-sm p-2"
            />
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}
          </div>
          <div className="text-center	">
            <button
              type="submit"
              className="mt-14 inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
