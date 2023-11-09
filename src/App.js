import './App.css';
import Customer from './components/Customer';

const customers = [{ //customer 객체 정의
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '강주희', //속성 키 : 값
  'birthday' : '980605',
  'gender' : '여자',
  'job' : '머학생'
},

{ //customer 객체 정의
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '강강', //속성 키 : 값
  'birthday' : '19980605',
  'gender' : '여자',
  'job' : '인턴'
},

{ //customer 객체 정의
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '쏜팡이', //속성 키 : 값
  'birthday' : '20231109',
  'gender' : '여자',
  'job' : '쏜덕'
}]

function App(props) {
  return (
    <div>
      {
        customers.map( c => { //배열 함수
        return(
          <Customer
          key = {c.id} //id 값이 다 다르므로 설정, key 반드시 필요
          id = {c.id}
          image = {c.image}
          name = {c.name}
          birhtday = {c.birthday}
          gender = {c.gender}
          job = {c.job}/>
        );
      })
    }
    </div>
  )}
    

export default App;
