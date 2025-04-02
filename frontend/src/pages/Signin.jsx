import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md">
          <div className="rounded-2xl bg-white/90 backdrop-blur-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
              <Heading label={"Sign in"} />
              <SubHeading label={"Enter your credentials to access your account"} />
              <InputBox onChange={(e) => setUsername(e.target.value)} label={"Email"} placeholder={"syed@gmail.com"} />
              <InputBox onChange={(e) => setPassword(e.target.value)} label={"Password"} placeholder={"••••••"} />
              <div className="flex justify-center pt-6">
                  <Button onClick={async() => {
                      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                          username,
                          password
                      });
                      localStorage.setItem("token", response.data.token);
                      navigate("/dashboard");
                  }} label={"Sign in"} />
              </div>
              <BottomWarning label={"Don't have an account?"} linkText={"Sign up"} to={"/signup"} />
          </div>
      </div>
  </div>
}