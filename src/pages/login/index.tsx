import { BackgroundBlur, LogoIcon } from "@/assets";
import { Button, Inputprompt } from "@/components";
import Logo from "@/assets/images/logo.png";
import { RootLayout } from "@/layouts/withoutNavBar";
import { useAccountStore } from "@/store/accounts";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { personalInfo, personalInfoErrors, updateErrors, updatePersonalInfo } =
    useAccountStore();
    const navigate=useNavigate();

  const handleLogin = () => {
    if (!personalInfo.name) {
      updateErrors("name", "Name is required");
      return;
    }
    if (!personalInfo.password) {
      updateErrors("password", "Password is required");
      return;
    }
    navigate("/");
  };

  return (
    <RootLayout
      containerClassName={`relative overflow-hidden pt-[1.563rem] pb-[1.5rem] px-[1rem] flex flex-col bg-content1 transition-none`}
    >
      {/* Backgrounds */}
      <BackgroundBlur
        className="absolute -left-96 -top-28 pointer-events-none"
        size={700}
      />

      <BackgroundBlur
        className="absolute -bottom-48 -right-96 pointer-events-none"
        size={600}
      />
      <div className="flex-1 flex flex-col  w-full h-full mt-auto items-center">
        <div className="flex  items-center gap-[0.813rem]">
          <LogoIcon />
          <p className="text-[2rem] text-content1-foreground font-semibold tracking-wide ">
            Logo
          </p>
        </div>
        <div className="flex flex-col items-center gap-[1rem]">
          <img src={Logo} alt="" />
          <div className="flex flex-col items-center gap-[0.7rem]">
            <p className="font-semibold text-body3 text-content1-foreground">
              <span className="!text-primary-200">Welcome</span> back!
            </p>
            <p className="text-body text-secondary-150">
              Your journey to fluent English continues…
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-[1rem] my-auto">
          <Inputprompt
            label="Your Name"
            labelClassName=" !text-body text-secondary-150"
            placeholder="Enter Your Name"
            type="text"
            inputClassName="bg-secondary-250 rounded-[0.5rem] !placeholder:text-h6 placeholder:text-secondary-150"
            value={personalInfo.name}
            error={personalInfoErrors.name}
            onChange={(val) => updatePersonalInfo("name", val)}
          />

          <Inputprompt
            label="Password"
            labelClassName=" !text-body text-secondary-150"
            inputClassName="bg-secondary-250 rounded-[0.5rem] !placeholder:text-h6 placeholder:text-secondary-150"
            placeholder="Enter Your Password"
            type="password"
            error={personalInfoErrors.password}
            value={personalInfo.password}
            onChange={(val) => updatePersonalInfo("password", val)}
          />
          <p className="text-end w-full text-h6 text-primary-200 cursor-pointer -mt-1">
            Forgot Password?
          </p>
        </div>
      </div>
      <div className="mt-auto w-full flex flex-col items-center gap-[1rem]">
        <Button
          buttonText={"Log In"}
          variant="secondary"
          handleOnClick={handleLogin}
          textClassName="text-h5 !text-content1 font-medium font-sans"
        />
        <div className="flex  flex-col items-center gap-[0.3rem]">
          <p className="text-body font-sans text-content1-foreground">
            Don’t have an account?{" "}
          </p>
          <p className="text-body font-sans text-primary-200 underline cursor-pointer">
            Create one
          </p>
        </div>
      </div>
    </RootLayout>
  );
};
