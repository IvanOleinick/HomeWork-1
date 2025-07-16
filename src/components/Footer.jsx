const Footer = () => {
    return (
        <footer className="py-4 rounded-b-2xl flex justify-center">
            <div
                className="bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white"
            >
                Send me an{" "}
                <span className="text-[#eedb00] hover:text-white uppercase">
      email
    </span>
            </div>
        </footer>



    );
};

export default Footer;