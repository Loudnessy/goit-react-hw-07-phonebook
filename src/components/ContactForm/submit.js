import { addContact, fetchContacts } from "api/api";
export const submit = async (evt, dispatch) => {
    const formReset = () => {
        evt.target.name.value = ""
        evt.target.querySelector('input[type="tel"]').value = ""
    }
    await dispatch(addContact({name: evt.target.name.value, number: evt.target.querySelector('input[type="tel"]').value}))
    await dispatch(fetchContacts())
   await formReset()
} 