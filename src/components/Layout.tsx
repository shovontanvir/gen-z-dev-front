import { LayoutProps } from "../types/Layout";

const Layout = ({ children, className, id }: LayoutProps.Props) => {
  return (
    <>
      <section className={`py-10 md:py-24 ${className}`} id={id}>
        {children}
      </section>
    </>
  );
};

export default Layout;
