import React from "react";

function Footer(props) {
  return (
    <footer className="footer bg-gray-200 relative pt-1 ">
      <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-2xl font mb-2">
              <strong>Developed by: </strong>
              {props.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
