import "./GlossaryButtonStyles.css"
import "./ConceptDisplayStyles.css"
import "./AddConceptStyles.css"

 function AddConcept(){

    return(
        <div className="item-info">
            <div className="title-container">
                <h1>Add New </h1>
                <div className="add-btn">
                    +
                </div>
            </div>

            <input className="title-input" type="text" placeholder="Concept Title"/>
            <textarea className="desc-input" type="text" placeholder="Description"/>
        </div>

    )
}

export default AddConcept