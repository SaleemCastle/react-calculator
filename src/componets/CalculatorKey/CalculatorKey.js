import React, {Component} from 'react'
//import Calculator from '../../containers/calculator'

class CalculatorKey extends Component {

    render(){
        const {onPress, className, ...props} = this.props
        return(
            <button className={`calculator-key ${className}`} {...props} />
        )
    }
}

export default CalculatorKey