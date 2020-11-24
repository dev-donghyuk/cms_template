import React from "react";

import Wrapper from "./styles";
import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";

const Table = (props) => {
  const { data, columns, pageSize, paging, onRowClick, selection } = props;
  return (
    <Wrapper>
      <Grid className="table">
        <MaterialTable
          title=""
          data={data}
          columns={columns}
          onRowClick={onRowClick}
          options={{
            selection: selection,
            pageSize: pageSize,
            paging: paging,
            filtering: false,
            sorting: false,
            toolbar: false,
            draggable: false,
          }}
          localization={{
            body: {
              emptyDataSourceMessage: "데이터가 없습니다.",
            },
          }}
        />
      </Grid>
    </Wrapper>
  );
};

export default Table;
