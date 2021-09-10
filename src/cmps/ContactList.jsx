import { LinearProgress, Paper } from '@material-ui/core'
import React from 'react'

const ContactList = ({ loading, contacts }) => {
    return (
        <Paper style={{
            margin: "20px auto", padding: "20px", maxWidth: "450px",
            position: "relative", backgroundColor: "cornflowerblue"
        }}>
            {loading ? <LinearProgress /> : (
                contacts.data.map((contact)=>{
                    return <div className="contact-preview" key={contact.id}>
                        <img className="contact-img"
                         src={contact.picture} alt={contact.firstName} />
                         <div className="contact-info">
                         <h4>{contact.firstName} {contact.lastName}</h4>
                         <p>{contact.email}</p>
                         </div>
                    </div>
                })
            )}
        </Paper>
    )
}

export default ContactList
