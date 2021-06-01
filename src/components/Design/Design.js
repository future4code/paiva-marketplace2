import React from 'react'
import estudo from '../../img/estudo.jpg'
import "../../tailwind.output.css";



export default class Design extends React.Component {
    render() {
        return (            
                <img
                    className="h-56 w-full object-cover mt-2"
                    src= {estudo}
                    alt="Estudar"
                />           
            


        )


    }
}