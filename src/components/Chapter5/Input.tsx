import * as React from "react"
import {
    TextInput,
} from "@reglendo/mergado-ui-kit"
import {
    changeFormValue
} from "./reducers"
import {connect} from "react-redux"

export interface Props {
    label?: string,
    id?: string
    changeFormValue: (e) => any
    form: any
}

class Input extends React.Component<Props, {}> {

    changeValue = e => this.props.changeFormValue(e.target.value)

    render() {
        const { label, form, ...props } = this.props
        return (
            <TextInput value={form} onChange={this.changeValue} label={label} {...props} />
        );
    }
}

export default connect((state,props) => ({
    form: state.form,
}), {
    changeFormValue,
})(Input)