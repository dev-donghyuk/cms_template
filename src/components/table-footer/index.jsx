import React from 'react';

import Wrapper from './styles';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const TableFooter = (props) => {
  const {
    currentPageChange,
    searchTextChange,
    children,
    search,
    tableLength,
    pagination,
    searchPlaceholder,
  } = props;
  return (
    <Wrapper>
      <Grid container justify="flex-end" className="table_footer">
        {children}
        {pagination && (
          <Grid className="table_pagination">
            <Pagination
              count={Math.ceil(tableLength / 10)}
              onChange={currentPageChange}
            />
          </Grid>
        )}
        {search && (
          <Grid item className="search_box">
            <Grid className="search_icon">
              <img src="/images/search_icon.png" alt="" />
            </Grid>
            <input
              type="text"
              onChange={searchTextChange}
              placeholder={searchPlaceholder}
            />
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
};

export default TableFooter;
