import React from 'react';
import style from './ContactList.module.css';

const ContactList = ({ contacts, ondeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
                <p>
                    {name}: {number}
                </p>
                <button type="button" onClick={() => ondeleteContact(id)}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

export default ContactList;
