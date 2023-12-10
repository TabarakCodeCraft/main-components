import React from "react";
import { FaRegFolderOpen, FaInstagram, FaFacebookF } from "react-icons/fa";
import {AiFillFacebook , AiFillFolderOpen} from "react-icons/ai";
import Proptypes from 'prop-types';
const icons={
Facebook: <AiFillFacebook />,
instagram :<FaInstagram /> ,
folder: <AiFillFolderOpen />

}

function IconButton({ icon, size, type }) {
    let fontSize, color;
    if (size === "small") {
        fontSize = "13px";
    } else if (size === "medium"){
        fontSize ="16";
    } else if (size === "large"){
        fontSize ="22px"
    }
    //شنو هاي بضبط أسأل ياسين
    color= type === "secondary" ?" #ff1f1f" : type === "primary"  ? "#FFFFFFF" : "#000000";
    return React.cloneElement(icons[icon],{
        style : {fontSize, color},
    });
};

IconButton.Proptypes ={
    icon: Proptypes.string.isRequired,
    size: Proptypes.oneOf(['small', 'medium', 'large']),
    type: Proptypes.oneOf(['primary', 'secondary']),
}
export default IconButton;