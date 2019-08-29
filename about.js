import React from 'react';
 
class About extends React.Component{
            state = {
                data: []
            }
 componentDidMount(){
                fetch("https://uinames.com/api/?amount=25")
                .then(res => res.json())
                .then(data => {
                    this.setState({data: data})
                    console.log(data)}
                )
            }
            
            render() {
                const disFemale = this.state.data.filter((object)=>( object.gender === "female"))
                console.log(disFemale);
                
              return (
                <div>
            <h3 align="center"> List of Females</h3>
             <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Sure Name</th>
                <th>Gender</th>
                <th>Region</th>
                
              </tr>
            </thead>
            <tbody>
            {disFemale.map((object)=>(
            
            <tr key = {Object.id}> 
          <td>
            {object.name}
          </td>
          <td>
            {object.surname}
          </td>
          <td>
            {object.gender}
          </td>
          <td>
            {object.region}
          </td>
          <td>
            <button onClick ={this.edit} className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr> 
        
            ))
    }
            </tbody>
          </table>
        </div>
     
        )
    }
}
export default About