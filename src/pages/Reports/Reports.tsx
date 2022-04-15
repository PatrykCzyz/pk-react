import React from 'react'
import Badge from '../../components/Badge/Badge';
import SearchBar from '../../components/SearchBar/SearchBar'
import Table from '../../components/Table/Table'
import useReports from '../../hooks/useReports'

export default function Reports() {
    const reports = useReports();

    return (
        <div className='p-8'>
            <h1 className='text-4xl'>Sprawozdania</h1>
            <div className='mt-12'>
                <SearchBar />
                <Table className='mt-6'>
                    <Table.Header columns={[
                        'Zlecenie',
                        'Próbki',
                        'Data realizacji',
                        'Zlecający',
                        'Status']} />
                    {reports.map(report =>
                        <Table.Row>
                            <Table.Row.Item><span className='font-semibold'>{report.orderNumber}</span></Table.Row.Item>
                            <Table.Row.Item>
                                {report.samples.map(sample => <Badge text={sample} />)}
                            </Table.Row.Item>
                            <Table.Row.Item><span className='text-gray-400'>{report.realizationDate.toDateString()}</span></Table.Row.Item>
                            <Table.Row.Item><span>{report.orderBy}</span></Table.Row.Item>
                            <Table.Row.Item><span>{'status'}</span></Table.Row.Item>
                        </Table.Row>
                    )}
                </Table>
            </div>
        </div>
    )
}
