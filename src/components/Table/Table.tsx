import React from 'react'
import TableFooter from './TableFooter';

const Table = ({ children, className }: any) => {
    const header = React.Children.map(children, child => child.type.displayName === 'Header' ? child : null);
    const rows = React.Children.map(children, child => child.type.displayName === 'Row' ? child : null);

    return (
        // eslint-disable-next-line no-useless-concat
        <table className={'bg-white w-full table-auto border-2' + ' ' + className}>
            <thead>
                {header}
            </thead>
            <tbody>
                {rows}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={header[0].props.columns.length}><TableFooter /></td>
                </tr>
            </tfoot>
        </table>
    )
}

const Header = ({ columns }: { columns: string[] }) => {
    return (
        <tr className='rounded-md bg-gray-100 border-b-2'>
            {columns.map(column => <th className='p-3 pl-4 text-left text-gray-500 text-sm'>{column}</th>)}
        </tr>
    )
}
Header.displayName = 'Header';
Table.Header = Header;

const Row = ({ children }: any) => {
    return (
        <tr className='text-left'>{children}</tr>
    )
}
Row.displayName = 'Row';

const Item = ({ children }: any) => {
    return (
        <td className='pl-4 pb-5 pt-5 border-b-2'>{children}</td>
    )
}
Item.displayName = 'Item';
Row.Item = Item;

Table.Row = Row;

export default Table;