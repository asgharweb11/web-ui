import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser , faNewspaper} from "@fortawesome/free-solid-svg-icons"
import s from "../../../../../store.json"

export default function header() {
    return (
        <div className="header">
            <img className="picSidebar" src={`./files/pic/detail/sidebar2.png`} alt="sidebarR" />
            <div className="detail">
                <div className="profile">
                    <img src={`./files/pic/user/user.jpg`} alt="user" />
                </div>
                <div className="other">
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faNewspaper} />
                    </div>
                </div>
            </div>
        </div>
    )
}
