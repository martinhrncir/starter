import * as React from "react"
import {
    TextInput,
} from "@reglendo/mergado-ui-kit"

export interface Props {
    label?: string,
    id?: string
    getValue?: (value) => void
    setValue?: (value) => void
}

export interface State {
    value: string,
}

export default class Input extends React.Component<Props, State> {
    state = {
        value: ''
    }

    changeValue = e => {
        this.setState({ value: e.target.value })
        if(this.props.getValue) {
            this.props.getValue( e.target.value )
        }
    }

    render() {
        const { value } = this.state
        const { label, ...props } = this.props
        return (
            <TextInput value={value} onChange={this.changeValue} label={label} {...props} />
        );
    }
}



