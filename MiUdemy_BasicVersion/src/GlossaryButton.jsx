
import "./GlossaryButtonStyles.css";
import "./ConceptDisplayStyles.css";
import "./AddConceptStyles.css";

export default function GlossaryButton(props){

    return(
        <div 
            className = {props.complete ? "glossary-btn-complete":"glossary-btn-incomplete"}
            onClick={props.action}
            >
            {props.label}
        </div>
    )
}