import React from 'react';
import {useHistory} from 'react-router-dom';

const BookEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: null,
        authorId: null,
        availableCopies:null
    })
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
        console.log(formData);
    }


    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.book.name;
        const category = formData.category !==null ? formData.category : props.book.category;
        const authorId = formData.authorId !==null ? formData.authorId : props.book.authorId;
        const availableCopies = formData.availableCopies !==null ? formData.availableCopies : props.book.availableCopies;

        props.onEditBook(props.book.id, name, category,authorId,availableCopies);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Project name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option selected={props.book.category==="NOVEL"} value="NOVEL">NOVEL</option>
                            <option selected={props.book.category==="THRILER"} value="THRILER">THRILER</option>
                            <option selected={props.book.category==="HISTORY"} value="HISTORY">HISTORY</option>
                            <option selected={props.book.category==="FANTASY"} value="FANTASY">FANTASY</option>
                            <option selected={props.book.category==="BIOGRAPHY"} value="BIOGRAPHY">BIOGRAPHY</option>
                            <option selected={props.book.category==="CLASSICS"} value="CLASSICS">CLASSICS</option>
                            <option selected={props.book.category==="DRAMA"} value="DRAMA">DRAMA</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                if(props.book.authorId !== undefined &&
                                    props.book.authorId === term.id)
                                    return <option key={term.id} selected={props.book.authorId} value={term.id}>{term.name}</option>
                                else return <option key={term.id} value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder={props.book.availableCopies}
                               onChange={handleChange}
                        />
                    </div>


                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;