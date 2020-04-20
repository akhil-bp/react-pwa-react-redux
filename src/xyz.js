import { connect } from "react-redux";
import React from "react";
import {
    addData1,
    addData2,
    removeData1,
    removeData2,
    updateData1
} from './store/actions'

class Xyz extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
    }
    render() {
        return (
            <div>
                <div >
                    {
                        this.props.Data1.map((data, i) => (
                            <section key={i}>
                                <p>{data.msg}</p>
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
)(Xyz)