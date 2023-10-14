import React from "react";

class ClassCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "hello",
            count: 0,
        };
    }

    handleClick = (type) => {
        // console.log(this)
        this.setState({
            count: this.state.count + (type === 'add' ? 1 : -1),
        })
    }

    render() {
        const { msg, count } = this.state;
        const changeVal = (e) => {
            // console.log(this);
            this.setState({
                msg: e.target.value,
            })
        }
        return (
            <div>
                <div>{ count }</div>
                {/* 必须要用bind,因为这里需要一个函数,而不是函数调用 */}
                <button onClick={ this.handleClick.bind(this, 'add') }>+</button>
                <button onClick={ this.handleClick.bind(this, 'lll') }>-</button>
                <input type="text" value={ msg } onChange={ changeVal } />
            </div>
        );
    }
}

export default ClassCom;
