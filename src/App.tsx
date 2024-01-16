import { MyFooter } from "./components/layouts/MyFooter";
import { MyNavbar } from "./components/layouts/MyNavbar";

export default function App() {
  return (
    <div className="container mx-auto">
      <MyNavbar />
      {/* <MySidebar /> */}
      <MyFooter />
    </div>
  );
}
