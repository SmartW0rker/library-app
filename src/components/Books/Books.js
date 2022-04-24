import React from "react";
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate'
class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }
    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        console.log(offset,nextPageOffset, pageCount)

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.books.map((book,index) => {
                                return  (offset<index && index<nextPageOffset) ?
                                    <>
                                        <tr key={book.id}>
                                            <td>{book.name}</td>
                                            <td>{book.category}</td>
                                            <td>{book.author.name}</td>
                                            <td>{book.availableCopies}</td>
                                            <td>
                                                <Link className={"btn btn-danger"}
                                                      onClick={() => this.props.onDelete(book.id)}
                                                      to={`/books`}>
                                                    Delete
                                                </Link>
                                                <Link className={"btn btn-info mx-2"}
                                                      onClick={() => this.props.onEdit(book.id)}
                                                      to={`/books/edit/${book.id}`}>
                                                    Edit
                                                </Link>
                                                {book.availableCopies>0 ? (
                                                    <>
                                                        <Link className={"btn btn-success"}
                                                              onClick={()=>this.props.onTaken(book.id)}
                                                              to={ '/books'}>
                                                            Mark as taken
                                                        </Link>
                                                    </>
                                                ) : <></>
                                                }


                                            </td>
                                        </tr>
                                    </> : <></>
                                }
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new Book</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>

            </div>

        );
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }
}
export default Books;