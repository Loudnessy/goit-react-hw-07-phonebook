import React from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { StyledDiv } from "App.styled";
import { useDispatch } from "react-redux";
import { submit } from "./ContactForm/submit";
import { deleteContact } from "api/api";
import { changeFilter } from "redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "api/api";
export const App = () => {
// const [contacts, setContacts] = useState([])
// const [filter, setFilter] = useState('')
const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchContacts())
}, [dispatch])


const onSubmitContact = evt => {
    evt.preventDefault()
    submit(evt, dispatch)
}
const onChangeInput = evt => {
    dispatch(changeFilter(evt.target.value))
}
const contacts = useSelector(state => state.contacts.items)
const filter = useSelector(state => state.filter)
// console.log(contacts);
const filterByName = () => {
     return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()))      
}
const deletingContact = evt => {
    dispatch(deleteContact(evt.target.id))
    // localStorage.setItem("contacts", JSON.stringify(newObj));
}
    return <StyledDiv>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={onSubmitContact}/>
        <h2>Contacts</h2>
        <Filter input={onChangeInput}/>
<ContactList contacts={contacts} filter={filter} filtering={filterByName} deleting={deletingContact}/>
    </StyledDiv>
};
