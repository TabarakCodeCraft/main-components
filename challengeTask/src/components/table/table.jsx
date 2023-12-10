import React from "react";
import "./table.css";

const Table = ({ columns, list }) => {
    return (<div className="table">
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={columns.key}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {list.map((item) => (
                    <tr key={item.key}>
                        {columns.map((column) => (
                            <td key={column.key}>{item[column.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

    </div>)
};

export default Table;