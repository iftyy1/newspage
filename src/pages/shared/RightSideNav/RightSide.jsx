import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSide = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2>Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className="p-4">
                <h2>Find Us</h2>
                <a className="items-center p-4 flex  border rounded-t-lg" href=""><FaFacebook className="mr-3"></FaFacebook>Facebook</a>
                <a className="items-center p-4 flex  border-x " href=""><FaTwitter className="mr-3"></FaTwitter>Twitter</a>
                <a className="items-center p-4 flex  border rounded-b-lg" href=""><FaInstagram className="mr-3"></FaInstagram>Instagram</a>
            </div>
        </div>
    );
};

export default RightSide;