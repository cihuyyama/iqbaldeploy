import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import "../styles/Icon.css";

<FaPen color="#023373" className="PenIcon" />

const Icon = ({ name }) => {
    switch (name) {
        case "circle":
            return <FaRegCircle className="icons" />;
        case "cross":
            return <FaTimes className="icons" />;
        default:
            return <FaPen className="icons" />;
    }
};

export default Icon;
