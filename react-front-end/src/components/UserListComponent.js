import React, {Component} from 'react';
import {  Table } from 'reactstrap';
import NewUser from './NewUserComponent';
import {connect} from 'react-redux';
import { addUser,fetchUsers } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      users: state.users
    }
  }

const mapDispachToProps = (dispatch) => ({
    
    addUser:(firstname,lastName,email) => {dispatch(addUser(firstname,lastName,email))},
    fetchUsers:() =>{dispatch(fetchUsers())}
})



class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage:''
        };
        
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    componentDidUpdate(prevProps){
        

        if(prevProps.users !== this.props.users){
            if(this.props.users.errMess && this.props.users.errMess ){
                this.setState({errorMessage:'Technical Error Occured'})
            }else{
                this.setState({errorMessage:''})
            }
        }
        
    }

    UserBody =() =>{
        return(
            this.props.users.users.map((user,index)=>{
                return(
                    <tr key={user.firstName+user.lastName}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>
                    
                )
            })

        )
        
    }
    
    render() {
        return(
            <>
                <div className="userHeader-text">
                    <div>Users</div>
                </div>
                <Table bordered>
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.UserBody()}
                    </tbody>
                </Table>
                <div>
                    {this.state.errorMessage}
                </div>   
                <NewUser addUser={this.props.addUser}/>
                    
            </>
        )
    }
}

export default connect(mapStateToProps,mapDispachToProps)(UserList);