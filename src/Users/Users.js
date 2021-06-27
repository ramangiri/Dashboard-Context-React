import { Link } from "react-router-dom";
import userContext from "./userContext";
import { useContext } from "react";

export default function Users(){
    let tableData = useContext(userContext);
    let value = 1;
    return <>
    <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Tables</h1>


<Link to="/userscreate">Create User</Link>
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Users List</h6>
    </div>
    
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                    
                    tableData.userData.map((obj)=>{
                        return <tr>
                        <td>{obj.firstName}</td>
                        <td>{obj.position}</td>
                        <td>{obj.Office}</td>
                        <td>{obj.Age}</td>
                        <td>{obj.Date}</td>
                        <td>${obj.Salary}</td>
                        <td>
                            <Link to={`/usersedit/${value++}`}>Edit User</Link>
                        </td>
                    </tr>
                        
                    })
                    }
                  </tbody>
            </table>
        </div>
    </div>
</div>

</div>
    </>
}