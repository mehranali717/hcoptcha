const Input =({props, placeholder, type})=><input
{...props}
// type="password"
type={type}
placeholder={placeholder}
name="uname"
required
/>
export default Input