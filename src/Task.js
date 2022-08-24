import React, { useEffect, useState } from "react";
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Task() {

    const [users, setUser] = useState([]);


    const getList = () => {
        axios.get("https://zzz-mart.aaratechnologies.in/ZZZMART/admin/ecommerce_api/category/cat_read.php?apicall=category_list")
            .then((response) => {
                console.log(response);
                let dataToBeDisplayed = response.data[0].data;
                console.warn(dataToBeDisplayed);
                setUser(dataToBeDisplayed);
            })
    }

    return (
        <>


            <button type="button" className="btn btn-secondary" onClick={getList}>Click Here to Display list of items</button>
            <br />
            <br /><br /><br />




            <div className="container">
                <div className=" row ">
                    <div className="d-flex flex-wrap justify-content-center">


                        {
                            users.map((Apidata, i) => {
                                return (
                                    <>

                                        <div className="card" style={{ display: "inline-block", width: "15rem" }}>
                                            <img key={Apidata.TopCategoryId} src={Apidata.Image} style={{ width: "18rem", height: "10rem" }} className="card-img-top, img-fluid" alt="image" />
                                            <div className="card-body">
                                                <h5 key={Apidata.TopCategoryId} className="card-title">{Apidata.TopCategoryName}</h5>
                                            </div>
                                        </div>

                                    </>
                                )
                            })

                        }
                    </div>

                </div>
            </div>






        </>


    );


}

export default Task;
// card-img-top  