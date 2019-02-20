import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidthAdjuster = React.memo(({ width, setWidth }) => (
    <div>
        <InputRange
            type='range'
            min='20'
            max='100'
            step='1'
            value={width}
            onChange={
                ({ target: { value } }) =>
                    setWidth(value)
            }
        />
    </div>
));

WidthAdjuster.propTypes = {
    width: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
    ]),
    setWidth: PropTypes.func.isRequired,
};

const InputRange = styled.input`
    width: 100%;
    margin-top: 15px;
`;

export default WidthAdjuster;
