// src/components/filter.table.js
import React from "react";
import Modal from "./Modal";
import useModal from './useModal';


import { useTable, useGlobalFilter, useAsyncDebounce } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        className="form-control"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  );
}

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  return (
    <div>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
      <div>
        <pre>
          <code>{JSON.stringify(state.filters, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

function FilterTableComponent() {

  const {isShowing, toggle} = useModal();
  var handleClick = (values) => {
      alert('You have clicked this button. ' + values.catalog_name + " " + values.catalog_type + " " + values.site + " " + values.course)
  }

  const columns = React.useMemo(
    () => [
        {
            Header: "Catalog Name",
            accessor: "catalog_name",
        },
        {
            Header: "Catalog Type",
            accessor: "catalog_type",
        },
        {
            Header: "Linked Site",
            accessor: "site",
        },
        {
            Header: "Included Course",
            accessor: "course",
        },
        {
            Header: "Actions",
            accessor: "action",
            Cell: ({ cell }) => (
                <div>
                    <button value={cell.row.values.catalog_name} onClick={toggle}>
                    Edit {cell.row.values.catalog_name}
                    </button> {" "}
                    <button value={cell.row.values.catalog_name} onClick={() => handleClick(cell.row.values)}>
                    Delete {cell.row.values.catalog_name}
                    </button>
                </div>
              )
        },
    ],
    []
  );

  const data = [
      {
        "catalog_name": "Catalog 1",
        "type": "public",
        "site": "none",
        "course": "A",
        "action": "Add"
      },
      {
        "catalog_name": "Catalog 1",
        "type": "Public",
        "site": "none",
        "course": "B",
        "action": "Add"
      },
      {
        "catalog_name": "Catalog 2",
        "type": "public",
        "site": "none",
        "course": "F",
        "action": "Delete"
      },
      {
        "catalog_name": "Catalog 3",
        "type": "public",
        "site": "blackhills",
        "course": "A",
        "action": "Add"
      },
      {
        "catalog_name": "Catalog 3",
        "type": "local",
        "site": "blackhills",
        "course": "A course",
        "action": "Add"
      },
      {
        "catalog_name": "Catalog 3",
        "type": "local",
        "site": "blackhills",
        "course": "C",
        "action": "Add"
      },
      {
        "catalog_name": "Catalog 4",
        "type": "local",
        "site": "redhouse",
        "course": "D",
        "action": "Add"
      },
      {
        "catalog_name": "Catalog 4",
        "type": "local",
        "site": "redhouse",
        "course": "A",
        "action": "Add"
      },


  ];

  return (
    <>
        <Modal
            isShowing={isShowing}
            hide={toggle}
        />
        <Table columns={columns} data={data} />
    </>
  );
}

export default FilterTableComponent;
