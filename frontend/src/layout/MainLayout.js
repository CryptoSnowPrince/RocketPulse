import Header from "./header/header";
import Footer from "./footer/footer";

export default function MainLayout(props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="mb-auto text-white">{props.children}</main>
      <Footer />
    </div>
  );
}
