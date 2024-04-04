"use client";

const Input =({props, placeholder, type, id})=><input
{...props}
id={id}
type={type}
placeholder={placeholder}
name="uname"
required
/>
export default Input