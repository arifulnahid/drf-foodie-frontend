
import { Footer } from "flowbite-react";

export default function FooterComponent() {
  return (
    <div className="static w-full bottom-0">
      <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-food-logo-png-image_8366720.png"
            alt="Flowbite Logo"
            name="Foodie"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Foodie" year={2024} />
      </div>
    </Footer>
    </div>
  );
}
