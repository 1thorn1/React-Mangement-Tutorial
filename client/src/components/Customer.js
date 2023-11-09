/*
import React from 'react'; //라이브러리 가져오기

class Customer extends React.Component{ //react에 component 형태로 작성이된 클래스 이는 일종의 라이브러리이자 클래스
    // 이를 상속받아 하나의 컴포넌트 정의 가능
    render(){ //실제로 그려지는 내용
        <div>
            <h2>강주희</h2>
            <p>201834701</p>
            <p></p>
            <p>대학생</p>
        </div>
    } 
}
export default Customer; //Customer 클래스 내보내기
*/

import React from 'react';
import TableRow  from '@mui/material/TableRow';
import TableCell  from '@mui/material/TableCell';
function Customer(props) { //props를 직접 담아 사용
    return (
        /*<div>
            <CustomerProfile id = {props.id} image = {props.image} name = {props.name}/>
            <CustomerInfo birthday = {props.birthday} gender = {props.gender} job = {props.job}/>
        </div> //jsx 문법 중 하나 , 빠지면 error
        */
       <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell><img src ={props.image} alt="profile"/></TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
       </TableRow>
    );
}
//Customer profile과 Customer inform으로 구조화 시키기

/*
function CustomerProfile(props){
    return(
        <div>
            <img src ={props.image} alt="profile"/>
            <h2>{props.name}({props.id})</h2>
        </div>
    );
}

function CustomerInfo(props){
    return(
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    )
}
*/
export default Customer;