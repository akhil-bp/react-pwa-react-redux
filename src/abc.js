import { connect } from "react-redux";
import React from "react";
import {
    addData1,
    addData2,
    removeData1,
    removeData2,
    updateData1
} from './store/actions'

class Abc extends React.Component {
    constructor(props) {
        super(props);
    };
    addMessage = () => {

        this.props.addData1({ msg: Date.now() })
        // this.setState((state) => {
        //   return { inputs: {
        //     message: '',
        //     log: state.inputs.log
        //   }}      
        // })
    }

    addLog = () => {
        // this.props.addLog(this.state.inputs.log)
        // this.setState((state) => {
        //   return { inputs: {
        //     message: state.inputs.message,
        //     log: ''
        //   }}
        // })
    }
    componentDidMount() {
    }
    ckeck = () => {
        this.addMessage()
    }
    render() {
        return (
            <div>
                <button onClick={this.ckeck}>
                    test
                            </button>
                <div >
                    {
                        this.props.Data1.map((data, i) => (
                            <section key={i}>
                                <p>{data.msg}</p>
                                <button onClick={() => this.props.removeData1(i)}>Remove</button>
                                <button onClick={() => this.props.updateData1({ data: { msg: "updated" }, index: i })}>Update</button>
                            </section>
                        ))
                    }
                </div>
            </div>
        )
    }

}


export default connect(
    ({ Data1, Data2 }) => ({ Data1, Data2 }),
    {
        addData1,
        addData2,
        removeData1,
        removeData2,
        updateData1
    }
)(Abc)