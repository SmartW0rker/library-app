import React from "react";
import {Link} from "react-router-dom";

const Categories=(props)=>{
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Category Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>NOVEL</td>
                        </tr>
                        <tr>
                            <td>THRILER</td>
                        </tr>
                        <tr>
                            <td>HISTORY</td>
                        </tr>
                        <tr>
                            <td>FANTASY</td>
                        </tr>
                        <tr>
                            <td>BIOGRAPHY</td>
                        </tr>
                        <tr>
                            <td>CLASSICS</td>
                        </tr>
                        <tr>
                            <td>DRAMA</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    );
}
export default Categories;