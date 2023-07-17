const Footer = () => {
    return (
        <div>
            <p className="flex-shrink-0 dark:text-white-dark text-center ltr:sm:text-left rtl:sm:text-right pt-6 ">
                © {new Date().getFullYear()}. Alte Social <br></br> All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
