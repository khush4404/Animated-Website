import React from "react";

const Footer = () => {
    let time = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p className="mt-5">
                © {time} khush vagadiya. All Rights Reserved | Terms and Conditions
                </p>
            </footer>
        </>
    )
}

export default Footer;