import React from "react"; 
const finalURL ='https://jsonplaceholder.typicode.com/users';
// const finalURL = 'https://bible-api.com/';
class DataAPI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        }; 
    }

    componentDidMount() {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    items:responseJson,
                    DataisLoaded: true
                }); 
            })
    }

    render(){
        const { DataisLoaded , items} = this.state; 
        if(!DataisLoaded) {
            return (
            <div className="progress">
                <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{width:"25px"}} 
                    aria-valuenow="25" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                >
                    25%
                </div>
            </div>);
        }
        else{
            return (
                <div className="container">
                    <h1>Fetch Data from API in React </h1>
                    {
                        items.map((item) => (
                            <ol key= {item.id} >
                                User_Name: {item.username},
                                Full_Name: { item.name},
                                User_Email: { item.email }
                                book_id : {item.book_id},
                                book_name: { item.book_name}, 

                            </ol>
                        ))
                    }
                </div>
            )
        }
        
    }
}

export default DataAPI; 