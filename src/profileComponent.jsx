import { useState } from "react"
import profilePic from "./assets/profilePic.jpg"
import './css/profile.css'


const Profile = () => { 


    return (
        <div className="profile">
            <div className="detailsContainer">
                <img src={profilePic} className="profilePic1" />
                <div className="details">
                    <div className="profilePic">
                        <img src={profilePic} alt="" />
                    </div>
                    <div className="profileText">
                        <h1>JOHN MARC BASBAS</h1>
                        <div>
                            <h3>WEB DEVELOPER</h3>
                            <h3>GRAPHIC DESIGNER</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactContainer">
                <div className="contact contact1">
                    <div className="contactIcon"></div>
                    <h3>basbasjohnmarc@gmail.com</h3>
                </div>
                <div className="contact contact2">
                    <div className="contactIcon"></div>
                    <h3>John Marc Basbas</h3>
                </div>
                <div className="contact contact3">
                    <div className="contactIcon"></div>
                    <h3>@john10_mb</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile