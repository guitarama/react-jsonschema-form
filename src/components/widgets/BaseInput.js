import React, {PropTypes} from "react";


function BaseInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  const {
    value,
    readonly,
    autofocus,
    options,  // eslint-disable-line
    schema,   // eslint-disable-line
    formContext,  // eslint-disable-line
    registry, // eslint-disable-line
    ...inputProps
  } = props;
  const _onChange = ({target: {value}}) => {
    return props.onChange(value === "" ? undefined : value);
  };
  return (
    inputProps.type === 'text' ?
    <input
      {...inputProps}
      className="form-control"
      readOnly={readonly}
      autoFocus={autofocus}
      defaultValue={typeof value === "undefined" ? "" : value}
      onChange={e => {}}
      onBlur={_onChange} /> :
    <input
      {...inputProps}
      className="form-control"
      readOnly={readonly}
      autoFocus={autofocus}
      value={typeof value === "undefined" ? "" : value}
      onChange={_onChange} />
  );
}

BaseInput.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}

export default BaseInput;
