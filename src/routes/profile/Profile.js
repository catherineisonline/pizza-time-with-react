import React, { useEffect, useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { useNavigate } from "react-router-dom";
import validateForm from "../../components/validateForm";


const Profile = ({ currentUser, handleLogout, updateUser }) => {
    const [editForm, setEditForm] = useState(false);
    const [formValue, setFormValue] = useState({ email: '', password: '', fullname: '', address: '', number: '' });
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const navigate = useNavigate()
    const validate = validateForm("profile");
    const toggleForm = () => {
        setEditForm(!editForm);
    }

    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        setFormErrors(validate(formValue));
        window.scrollTo(0, 0);
        if (Object.keys(validate(formValue)).length > 0) {
            setLoading(false);
            return;
        }
        else {
            const updatedFields = {};
            // Check each field to determine if it was modified
            for (const fieldName of Object.keys(formValue)) {
                if (formValue[fieldName] !== '' && formValue[fieldName] !== currentUser[fieldName]) {
                    updatedFields[fieldName] = formValue[fieldName];
                } else {
                    updatedFields[fieldName] = currentUser[fieldName]; // Keep original value
                }
            }

            const update = await updateUser(currentUser.id, updatedFields);
            if (update) {
                setLoading(false);
                setEditForm(false);
                setFormValue({ email: '', password: '', fullname: '', address: '', number: '' })
            }
        }
    }

    const confirmDeleteUser = () => {
        ResetLocation()
        setConfirmationModal(true);
    }

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USERS_URL}/${id}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                navigate("/");
                handleLogout();
                return true;
            }
        }
        catch (err) {
            console.log(err.message);
            return false;
        }
    }

    useEffect(() => {
        document.title = "Profile | Pizza Time";
    }, []);
    return (
        <main className="profile">
            <h2>Profile information</h2>
            <p>Personal details and application</p>
            {loading ?
                <div role="status" className="loader">
                    <p>Almost there...</p>
                    <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
                </div> :
                editForm ?
                    <form className="profile-form" onSubmit={handleSubmit}>
                        <hr />
                        <section className="profile-information-section">
                            <label htmlFor="email">Email</label>
                            <input name="email" type="text" value={formValue.email} placeholder={currentUser.email} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.email}</span>
                        <hr />
                        <section className="profile-information-section">
                            <label htmlFor="password">Password</label>
                            <input name="password" type="password" value={formValue.password} placeholder="********" onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.password}</span>
                        <hr />
                        <section className="profile-information-section">
                            <label htmlFor="fullname">Fullname</label>
                            <input name="fullname" type="text" value={formValue.fullname} placeholder={currentUser.fullname} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.fullname}</span>
                        <hr />
                        <section className="profile-information-section">
                            <label htmlFor="address">Address</label>
                            <input name="address" type="text" value={formValue.address} placeholder={currentUser.address !== null ? currentUser.address : 'Add address...'} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.address}</span>
                        <hr />
                        <section className="profile-information-section">
                            <label htmlFor="number">Number</label>
                            <input name="number" type="text" value={formValue.number} placeholder={currentUser.number !== null ? currentUser.number : 'Add number...'} onChange={handleValidation} />
                        </section>
                        <span className="input-validation-error">{formErrors.number}</span>
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
                                <h3>Fullname</h3>
                                <p>{currentUser.fullname}</p>
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
                            <button type="button" className="active-button-style" onClick={() => { toggleForm(); ResetLocation() }}>Edit profile</button>
                            <button type="button" className="passive-button-style" onClick={() => confirmDeleteUser()}>Delete account</button>
                        </section>
                    </React.Fragment>
            }
            {confirmationModal ?
                <section className="deletion-modal">
                    <section className="deletion-window">
                        <h3>Delete account</h3>
                        <p>Are you sure you want to delete your account? This action cannot be reversed and all the data will be lost</p>
                        <section>
                            <button type="button" className="confirm-deletion" onClick={() => deleteUser(currentUser.id)}>Confirm</button>
                            <button type="button" className="cancel-deletion" onClick={() => { setConfirmationModal(false); ResetLocation() }}>Cancel</button>
                        </section>
                    </section>
                </section>
                : null}
        </main>
    )
}



export default Profile;