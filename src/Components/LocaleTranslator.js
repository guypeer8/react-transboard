import React from 'react';
import { Input, Table } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getStore as getTranslationStore } from '../Providers/Store';

const LocaleTranslator = React.memo(({ localeTranslations, setChanged }) => {
    const { translationState } = getTranslationStore();
    const { translations, translating_locale, base } = translationState;

    return (
        <div>
            <Table celled padded>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>{base}</TableHeaderCell>
                        <TableHeaderCell>{translating_locale}</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <Table.Body>
                    {Object.keys(translations[translating_locale] || {}).map(phrase => {
                        const [translation, setTranslation] = localeTranslations[phrase];

                        return (
                            <TableRow key={phrase}>
                                <TableCell>{phrase}</TableCell>
                                <TableCell>
                                    <Input
                                        size='small'
                                        type='text'
                                        style={{width: '100%'}}
                                        value={translation}
                                        onChange={({ target: { value } }) => {
                                            if (typeof value === 'string') {
                                                setTranslation(value);
                                                setChanged(true);
                                            }
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    );
});

LocaleTranslator.propTypes = {
    setChanged: PropTypes.func.isRequired,
};

const TableHeader = styled(Table.Header)`
    text-align: center;
`;

const TableRow = styled(Table.Row)`
    text-align: center;
`;

const TableHeaderCell = styled(Table.HeaderCell)`
    text-align: center;
`;

const TableCell = styled(Table.Cell)`
    text-align: center;
`;

export default LocaleTranslator;
