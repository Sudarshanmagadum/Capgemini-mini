import './ViewMemberList.css'
const ViewMemberList = (props) => {
    let blogs = props.blogs;
    const handleDelete = props.handleDelete;
    return (
        <div className="memberlist">
            {blogs.map((name) => (
                <div className="service-preview m-auto" key={name.id}>
                    <div className="box">
                        <div className="para">
                        <h3>{name.name} </h3>
                        <p> {name.number} </p>
                        </div>
                        <button className="button1" onClick={() => handleDelete(name.id)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewMemberList;