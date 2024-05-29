import { faCircleCheck, faCircleXmark, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Loading'

export default function Dialog({type, trigerFunction, setShowDialog}){
    return(
        <div className="photo-dialog">
            <div className="dialog-container">
                {
                    type === 'success' ?
                    <>
                        <FontAwesomeIcon icon={faCircleCheck} size="5x" className="success"/>
                        <span>Success</span>
                        <div className="choice-option">
                            <button onClick={() => trigerFunction()}>CLOSE</button>
                        </div>
                    </> :
                    type === 'fail' ?
                    <>
                        <FontAwesomeIcon icon={faCircleXmark} size="5x" className="fail"/>
                        <span>Failed! Please try again</span>
                        <div className="choice-option">
                            <button onClick={() => setShowDialog(false)}>CLOSE</button>
                        </div>
                    </> :
                    <>
                        <FontAwesomeIcon icon={faTriangleExclamation} size="5x" className="alert" />
                        <span>Are you sure to delete this photo?</span>
                        <div className="choice-option">
                            <button onClick={() => trigerFunction()}>Yes</button>
                            <button onClick={() => setShowDialog(false)}>No</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}