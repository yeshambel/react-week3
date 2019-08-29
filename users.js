import React from 'react';
 
class Users extends React.Component{

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
      return (
        <div style = {{backgroundColor:'lightyellow'}}>
          <h3 align="center"> List of Regions</h3>
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
            {this.state.data.map((object)=>(
            
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

export default Users