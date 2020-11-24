import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";
import Wrapper from "./styles";
import { useHistory } from "react-router-dom";

import PageTitle from "../../../components/page-title";
import Tabs from "../../../components/tabs";
import Table from "../../../components/table";
import TableFooter from "../../../components/table-footer";
import ReactExport from "react-data-export";
import { useDispatch, useSelector } from "react-redux";

const tempTabs = [
  { key: 0, value: "번호순" },
  { key: 1, value: "이름순" },
  { key: 2, value: "가입일자순" },
];

const TempComponent = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const history = useHistory();

  // Columns

  const tableColumns = [
    {
      title: "번호",
      field: "no",
      width: 70,
    },
    {
      title: "아이디",
      field: "user_email",
    },
    {
      title: "이메일주소",
      field: "user_email",
    },
    {
      title: "가입경로",
      field: "load",
    },
    {
      title: "가입일자",
      field: "date",
    },
  ];

  // Page
  const [currentPageTitle, setCurrentPageTitle] = useState("");

  // Tabs
  const [tabValue, setTabValue] = useState(tempTabs[0].value);
  // Pagination
  const [currentPage, setCurrentPage] = useState(0);

  const [searchText, setSearchText] = useState("");

  const currentPageChange = (e, n) => {
    setCurrentPage(n);
  };
  // Search

  const searchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    console.log(tabValue);
  }, [tabValue]);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  useEffect(() => {
    let tempCurrentPageData = history.location.pathname.split("/");
    let tempCurrentPageTitle = tempCurrentPageData[
      tempCurrentPageData.length - 1
    ].substring(4, 5);
    setCurrentPageTitle(`페이지${tempCurrentPageTitle}`);
  }, [history.location]);
  return (
    <Wrapper>
      <Grid className="">
        {/* 테이블 상단 */}
        <PageTitle title={currentPageTitle}>
          <Grid item className="tabs">
            <Tabs data={tempTabs} setTabValue={setTabValue}></Tabs>
          </Grid>
        </PageTitle>
        {/* 테이블 바디 */}
        <Grid className="table">
          <Table
            data={reducer.tempTableData}
            columns={tableColumns}
            onRowClick={(rows, rowData) => {
              history.push(`/temp/detail/${1}`);
            }}
          />
        </Grid>
        {/* 테이블 하단 */}
        <TableFooter
          currentPageChange={currentPageChange}
          searchTextChange={searchTextChange}
          search={true}
          pagination={true}
          tableLength={reducer.tempTableData.length}
          searchPlaceholder="회원명을 입력해주세요."
        />
      </Grid>
    </Wrapper>
  );
};

const Temp = () => {
  return (
    <>
      <TempComponent />
    </>
  );
};

export default Temp;
