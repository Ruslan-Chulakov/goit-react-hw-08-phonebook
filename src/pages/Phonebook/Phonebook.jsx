import ContactForm from "components/ContactForm"
import Filter from "components/Filter"
import ContactList from "components/ContactList"

const Phonebook = () => {
    return (
        <div>
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    )
};

export default Phonebook;