import userContext from "../Users/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


export default function Products(){
    let productList = useContext(userContext);
    let value = 1;


    return( <>
    <div class="container-fluid">


<h1 class="h3 mb-2 text-gray-800">Tables</h1>

<Link to="/productscreate">Create Product</Link>
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Products List</h6>
    </div>
    
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        productList.productData.map((obj)=>{
                            return <tr>
                            <td>{obj.Name}</td>
                            <td>{obj.Category}</td>
                            <td>${obj.Price}</td>
                            <td>
                                <Link to={`/productsedit/${value++}`}>Edit Product</Link>
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
    )
}