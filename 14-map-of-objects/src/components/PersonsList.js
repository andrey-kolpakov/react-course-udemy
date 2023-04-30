import Person from './Person'
import persons from '../data/persons.js'
import '../App.css'

function PersonsList() {
    return (
        <div className="persons-list">
            {persons.map((person, index) => {
                return <Person {...person} key={index} />
            })}
        </div>
    )
}

export default PersonsList