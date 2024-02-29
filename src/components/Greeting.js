export default function Greeting(props) {
const {name, age} =props ;

    return <>
    <h2> Welcome { name } </h2>
    <h3> Age : {age}</h3>
    </>
}