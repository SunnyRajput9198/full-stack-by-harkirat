import { ReactElement } from "react"


type varient = "primary" | "secondary" | "danger";
interface ButtonProps {
  varient: varient,
  size: "sm" | "md" | "lg",
  text: string,
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  onClick?: () => void
}

const variantstyle = {
  primary: "bg-purple-200 text-white",
  secondary: "bg-purple-300 text-white",
  danger: "bg-red-500 text-white"
}
const defaultstyle = "rounded-md p-4"

const sizestyle = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-4 px-8 text-xl",
}
export const Button = (props: ButtonProps) => {
  return <button className= {`${variantstyle[props.varient]} ${defaultstyle} ${sizestyle[props.size]} `} >{props.startIcon}{props.text}{props.endIcon}</button>
}

<Button varient="primary" size="md" startIcon={<span>hi</span>} endIcon={<span>hi</span>} text="hi" onClick={() => { }} />