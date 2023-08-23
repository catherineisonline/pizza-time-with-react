import React, { useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";
const Profile = ({ currentUser }) => {
    const [editForm, setEditForm] = useState(false);
    const [formValue, setFormValue] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const toggleForm = () => {
        setEditForm(!editForm);
    }
    return (
        <main className="profile">
            <h2>Profile Information</h2>
            <p>Personal details and application</p>
            {editForm ?
                <form className="profile-form" onSubmit={handleSubmit}>
                    <hr />
                    <section className="profile-information-section">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" placeholder={currentUser.fullname} />
                    </section>
                    <hr />
                    <section className="profile-information-section">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder={currentUser.email} />
                    </section>
                    <hr />
                    <section className="profile-information-section">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="********" />
                    </section>
                    <hr />
                    <section className="profile-information-section">
                        <label htmlFor="address">Address</label>
                        <input type="password" placeholder={currentUser.address !== null ? currentUser.address : 'Add address...'} />
                    </section>
                    <hr />
                    <section className="profile-information-section">
                        <label htmlFor="number">Number</label>
                        <input type="password" placeholder={currentUser.number !== null ? currentUser.number : 'Add number...'} />
                    </section>
                    <hr />
                    <section className="profile-buttons">
                        <button type="button" className="active-button-style" onClick={() => { toggleForm(); ResetLocation() }}>Cancel edit</button>
                        <button className="passive-button-style">Save profile</button>
                    </section>
                </form> :
                <React.Fragment>
                    <article className="profile-information">
                        <hr />
                        <section className="profile-information-section">
                            <h3>Fullname</h3>
                            <p>{currentUser.fullname}</p>
                        </section>
                        <hr />
                        <section className="profile-information-section">
                            <h3>Email</h3>
                            <p>{currentUser.email}</p>
                        </section>
                        <hr />
                        <section className="profile-information-section">
                            <h3>Password</h3>
                            <p>*********</p>
                        </section>
                        <hr />
                        <section className="profile-information-section">
                            <h3>Address</h3>
                            {currentUser.address !== null ?
                                <p>{currentUser.address}</p> :
                                <p>N/A</p>}
                        </section>
                        <hr />
                        <section className="profile-information-section">
                            <h3>Number</h3>
                            {currentUser.number !== null ?
                                <p>{currentUser.number}</p> :
                                <p>N/A</p>}
                        </section>
                        <hr />
                    </article>
                    <section className="profile-buttons">
                        <button className="active-button-style" onClick={() => { toggleForm(); ResetLocation() }}>Edit profile</button>
                        <button className="passive-button-style">Delete account</button>
                    </section>
                </React.Fragment>
            }
        </main >
    )
}



export default Profile;