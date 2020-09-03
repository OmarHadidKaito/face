import React, { useState } from 'react';
import { FileUpload } from "../../Components/FileUpload";
import { DropZone } from '../../Components/dropzone';
import face from './image/face2.png';
import './css/style.css';
export default function AI() {
    const [value, setValue] = useState(null);

    function handleChange(newValue) {
        setValue(newValue);
    }

    return (

        < div className="container" >
            <div className="row">
                <div className="col-lg-6 white-text vertical-center">
                    <div className="AMborder">
                        <p className="uplouad-paragraph">
                            Upload an image
                        </p>
                        <FileUpload className="button-chooser" onChange={handleChange}></FileUpload>
                        <hr
                            style={{
                                color: "#DAE1E7",
                                backgroundColor: "#DAE1E7",
                                height: "1px",
                                width: "80%",
                                marginLeft: "10%",
                                marginRight: "10%"
                            }}
                        />
                        <DropZone className="drop-zone" onChange={handleChange}></DropZone>
                        <hr
                            style={{
                                color: "#DAE1E7",
                                backgroundColor: "#DAE1E7",
                                height: "1px",
                                width: "80%",
                                marginLeft: "10%",
                                marginRight: "10%"
                            }}
                        />
                        {value ? <p className="file-paragraph text-center">{value[0].name}</p> : <p className="file-paragraph text-center"><br /></p>}
                        <button href="# " className="AIbutton justify-content-center ">Start analyzing</button>
                    </div>

                </div>
                <div className="col-lg-6 white-text vertical-center">
                    <img src={face} className="img-fluid" alt="." />
                </div>
            </div>
        </div >
    )
}
