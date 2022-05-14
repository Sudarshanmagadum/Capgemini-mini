import './BookList.css'
const BookList = (props) => {
    let blogs = props.blogs;
    const handleDelete = props.handleDelete;
    return (
        <div className="bookList">
            {blogs.map((name) => (
                <div className="service-preview m-auto" key={name.id}>
                    <div className="box">
                        <div className="para">
                        <h3>{name.name} </h3>
                        <p> {name.author} </p>
                        </div>
                        <button className="button1" onClick={() => handleDelete(name.id)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookList;