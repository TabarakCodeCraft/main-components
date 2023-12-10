import React from "react";
import "./header.css";
const Header = ({ headerLink, brand, width }) => {
    return (
        <div className="border">
            <div className="container" style={{ maxWidth: width }}>
                <div className="header">
                    <div className="logo">
                        <h1>{brand}</h1>
                    </div>
                    <div className="content">
                        <ul>
                            {headerLink.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link}>{link.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;
