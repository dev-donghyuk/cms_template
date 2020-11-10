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
            filtering: false,
            sorting: false,
            pageSize: pageSize,
            paging: paging,
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
