import RegisterForm from "@/components/form/register/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import React from "react";

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-t from-slate-700 via-slate-800 to-slate-900">
      <div className="p-4 lg:p-8 w-full lg:w-2/6 flex flex-col items-center justify-center bg-slate-900">
        <div className="flex flex-col items-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <span className="text-white text-2xl font-bold">
            Register your account
          </span>
          <span className="text-white text-base">
            Already have an account?&nbsp;
            <Link href="#" className="text-blue-400">
              Login
            </Link>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-4/6 flex flex-col items-center justify-center">
        <Card className="bg-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Register</CardTitle>
            <CardDescription className="text-gray-200">
              Create an account to start using the application.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <RegisterForm />
              <hr className="border-gray-200" />
              <span className="text-gray-200 text-base">Or register with</span>
              <div className="flex justify-center space-x-2">
                <Link href="#">
                  <img
                    className="size-8"
                    src="/images/google-icon.svg"
                    alt="Google"
                  />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
