import { useEffect, useState } from "react";
import Report from "../interfaces/Report";
import ReportsService from "../services/reports.service";

function useReports() {
    const [ reports, setReports ] = useState<Report[]>([]);

    useEffect(() => {
        const r = ReportsService.getAll();

        setReports(r);
    }, []);

    return reports;
}

export default useReports;