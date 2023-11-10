import React, {useState} from "react";
import "./forms.scss"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const onButtonClick = () => {
        console.log("Button clicked")
    }

    return (
    <div className={"form_container"}>
      <div className={"login_container"}>
          <div className={"title_container"}>
              <div>Login</div>
          </div>
          <div className={"input_container"}>
              <input
                  value={email}
                  placeholder="Enter your email here"
                  onChange={ev => setEmail(ev.target.value)}
                  className={"input_box"} />
              <label className="errorLabel">{emailError}</label>
          </div>
          <div className={"input_container"}>
              <input
                  value={password}
                  placeholder="Enter your password here"
                  onChange={ev => setPassword(ev.target.value)}
                  className={"input_box"} />
              <label className="errorLabel">{passwordError}</label>
          </div>
          <div className={"input_container"}>
              <input
                  className={"input_button"}
                  type="button"
                  onClick={onButtonClick}
                  value={"Log in"} />
          </div>
      </div>
  </div>
  )
}