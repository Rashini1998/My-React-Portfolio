import { CONTACT } from "../constants"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <p className="my-4">
                    {CONTACT.phoneNo}
                </p>
                <a href="mailto:gamalathrashini@gmail.com" className="border-b mb-5">
                    {CONTACT.email}
                </a><br></br>

                <a
                    href="assets/doc/Rashini Sathsarani Gamalath.pdf"
                    download
                    target="_blank"
                    className="mt-5 inline-block px-6 py-2 text-white bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                    Download CV
                </a>

            </div>
        </div>
    )
}

export default Contact