import { CONTACT } from "../constants/constants"

const Contacts = () => {
    return (
        <div className="border-b border-neutral-800 pb-20">
            <h2 className="my-20 text-center text-4xl">Contacts</h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" className="border-b">
                    {CONTACT.email}
                </a>
            </div>
        </div>
    )
}

export default Contacts
