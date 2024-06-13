import React, { Fragment } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <div className="p-2 dark:bg-black bg-[#ecf8f9] font-sans text-lg text-center">
        @PabloIO {currentYear}
      </div>
    </Fragment>
  );
};

export default Footer;
