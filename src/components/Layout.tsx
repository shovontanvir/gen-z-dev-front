import { LayoutProps } from "../types/Layout";

const Layout = ({ children, className, id }: LayoutProps.Props) => {
  return (
    <>
      <section
        className={`w-screen px-10 md:px-28 py-10 md:py-24 ${className}`}
        id={id}
      >
        {children}
      </section>
    </>
  );
};

export default Layout;
