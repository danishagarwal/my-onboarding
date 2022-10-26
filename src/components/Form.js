import React, { useState } from 'react'
import Welcome from './Welcome'
import Setup from './Setup'
import Plan from './Plan'
import Congrats from './Congrats'

const Form = () => {

    // This will hold the value, on which page we are on 
    const [page, setPage] = useState(0);
    // to store the data which we get from the forms
    const [formData, setFormData] = useState({ displayName: "" });
    //to save the titles of each page creating an array
    const FormTitles = ["Welcome! First things first...", "Let's set up a home for all your work", "How are you planning to use Eden?", "Congratulations"];
    const FormTitlesFoot = ["You can always change them later.", "You can always create another workspace later", "We'll streamline your setup experience accordingly", "You have completed onboarding, you can start using Eden!"];



    //to display the particular page
    const PageDisplay = () => {
        if (page === 0) {
            return <Welcome formData={formData} setFormData={setFormData} />
        }
        else if (page === 1) {
            return <Setup />
        }

        else if (page === 2) {
            return <Plan />
        }
        else {

            return <Congrats></Congrats>
        }

    }


    return (

        <>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            {/* creating a main form inside which we have different sections    */}

            <div className="form">
                <h1><i className='fa fa-bolt' ></i> Eden</h1>

                <div className="progressbar">
                    <div style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
                </div>

                <div className="form-container">
                    <div className="header">
                        {/* Gives us the title and below content which we have to write */}
                        {/* Gives us the tickmark fa fa-check */}
                        {page === 3 ?
                            <i className="fa fa-check fa-3x" ></i> : ""}
                        <h1>{FormTitles[page]}</h1>
                        <h9>{FormTitlesFoot[page]}</h9>
                    </div>

                    {/* Display the page in the body when we have to display particular page */}
                    <div className="body">{PageDisplay()}</div>

                    <div className="footer"><button
                        disabled={page === 3}
                        onClick={() => { setPage((currPage) => currPage + 1) }}>{page === 3 ? "Workspace Loaded" : "Create Workspace"}</button>
                    </div>

                </div>
                
            </div>

        </>


    )
}

export default Form