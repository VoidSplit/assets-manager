import PropTypes from 'prop-types'
import "./Simple_dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Simple_dropdown({icon, title, description, identifier}) {
    return (
        <label className="question-box" htmlFor={identifier}>
            <input type="checkbox" id={identifier}></input>
            <div className="icon"><FontAwesomeIcon icon={icon} /></div>
            <div className="question-inner">
                <div className="title">
                    <p>{title}</p>
                    <div className="caret">
                        <FontAwesomeIcon icon={faCaretUp} />
                    </div>
                </div>
                <div className="answer">
                    {description}
                </div>
            </div>
        </label>
    );
}

Simple_dropdown.propTypes = {

}