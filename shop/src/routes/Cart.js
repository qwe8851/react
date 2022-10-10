import {Table} from 'react-bootstrap';
import {useSelector} from 'react-redux';

function Cart(){
    
    let state = useSelector((state)=>state);
    console.log(state.product[0].id);

    return(
        <div>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{state.product[0].id}</td>
                    <td>{state.product[0].name}</td>
                    <td>{state.product[0].count}</td>
                    <td>안녕</td>
                </tr>
                <tr>
                    <td>{state.product[1].id}</td>
                    <td>{state.product[1].name}</td>
                    <td>{state.product[1].count}</td>
                    <td>안녕</td>
                </tr>
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;