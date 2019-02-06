import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Close = ({ className, onClose }) => (
    <Icon
        name='times'
        className={className}
        onClick={onClose}
    />
);

const CloseIcon = styled(Close)`
    position: absolute;
    top: 10px;
    right: 5px;
    cursor: pointer;
    
    &:hover {
        opacity: 0.88;
    }
`;

export default CloseIcon;