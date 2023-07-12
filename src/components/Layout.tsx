import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout(props: any) {
  return (
    <SideBar>
      <Header />
      {props.children}
    </SideBar>
  )
}