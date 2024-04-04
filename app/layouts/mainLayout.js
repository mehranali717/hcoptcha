import { Header } from "@/sections";

const MainLayout = ({children}) => (
  <>
        <Header />
        {children}
  </>
);

export default MainLayout