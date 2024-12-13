import {ChangeEvent, Component} from 'react';

export interface Param {
    id: number;
    name: string;
    type: 'string';
}

export interface ParamValue {
    paramId: number;
    value: string;
}

export interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    paramValues: ParamValue[];
}

class ParamEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            paramValues: props.model.paramValues,
        };
    }

    handleParamChange = (paramId: number, value: string) => {
        this.setState((prevState) => ({
            paramValues: prevState.paramValues.map((paramValue) =>
                paramValue.paramId === paramId
                    ? {...paramValue, value}
                    : paramValue
            ),
        }));
    };

    public getModel(): Model {
        return {
            paramValues: this.state.paramValues,
        };
    }

    render() {
        const {params} = this.props;
        const {paramValues} = this.state;

        return (
            <div>
                <form>
                    {params.map((param) => {
                        const paramValue = paramValues.find(
                            (pValue) => pValue.paramId === param.id
                        )?.value || '';

                        return (
                            <div key={param.id} style={{marginBottom: '10px'}}>
                                <label>
                                    <span style={{marginRight: '10px'}}>
                                        {param.name}
                                    </span>
                                    <input
                                        type="text"
                                        value={paramValue}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                            this.handleParamChange(param.id, e.target.value)
                                        }
                                    />
                                </label>
                            </div>
                        );
                    })}
                </form>
            </div>
        );
    }
}

export default ParamEditor;
