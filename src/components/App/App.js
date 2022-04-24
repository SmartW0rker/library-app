import './App.css';
import React, {Component} from "react";
import libraryRepository from "../../repository/libraryRepository";
import {BrowserRouter as Router,Redirect, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Books from "../Books/Books";
import BookAdd from "../Books/BookAdd";
import BookEdit from "../Books/BookEdit";
import Categories from "../Categories/Categories";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            countries: [],
            selectedBook: {},
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Route path={"/books"} exact render={() =>
                            <Books books={this.state.books}
                                   authors={this.state.authors}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}
                                   onTaken={this.takeBook}
                            />}/>
                        <Route path={"/books/add"} exact render={() =>
                            <BookAdd onAddBook={this.addBook}
                                     authors={this.state.authors}
                            />}/>
                        <Route path={"/books/edit/:id"} exact render={() =>
                            <BookEdit onEditBook={this.editBook}
                                      book={this.state.selectedBook}
                                      authors={this.state.authors}
                            />}/>
                        <Route path={"/categories"} exact render={() =>
                            <Categories/>}/>
                        <Redirect to={"/books"}/>
                    </div>
                </main>
            </Router>

        );

    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCountries();
    }

    loadBooks = () => {
        libraryRepository.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                });
            });
    }
    loadAuthors = () => {
        libraryRepository.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                });
            });
    }
    loadCountries = () =>{
        libraryRepository.fetchCountries()
            .then((data) =>{
                this.setState({
                    countries: data.data
                });
            });
    }
    addBook =(name,category,authorId,availableCopies)=>{
        libraryRepository.addBook(name,category,authorId,availableCopies).then(() =>{
            this.loadBooks();
        });
    }
    deleteBook =(id)=>{
        libraryRepository.deleteBook(id).then(()=>{
            this.loadBooks();
        });
    }
    getBook = (id) => {
        libraryRepository.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                });
            });
    }
    editBook= (id, name, category, authorId,availableCopies) =>{
        libraryRepository.editBook(id,name,category,authorId,availableCopies).then(()=>{
            this.loadBooks();
        });
    }
    takeBook=(id)=>{
        libraryRepository.getBook(id)
            .then((data) =>{
                console.log(data.data);
                libraryRepository.editBook(data.data.id,data.data.name,
                    data.data.category,data.data.author.id,data.data.availableCopies-1)
                    .then(()=>{
                        this.loadBooks();
                    });
            });
    }

}

export default App;