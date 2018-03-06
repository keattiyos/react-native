function getUrl() {
    return 'http://web.sit.kmutt.ac.th/sanit/int493/'
}

function fetchContacts() {
    return fetch(getUrl() + 'contacts.php')
        .then((response) => response.json())
        .then((contacts) => {
            return contacts.contacts;
        })
        .catch((error) => {
            console.error(error);
        })
}

export default {fetchContacts: fetchContacts}