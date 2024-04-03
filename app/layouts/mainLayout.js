import { Header } from "@/sections";

const MainLayout = ({children}) => (
  <>
    {/* <html lang="en">
      <body> */}
        <Header />
        {children}
      {/* </body>
    </html> */}
  </>
);

export default MainLayout