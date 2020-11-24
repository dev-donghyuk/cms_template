import React, { useContext, useEffect, useState, useRef } from "react";

import Layout from "../../../../layout";
import { Grid } from "@material-ui/core";
import Wrapper from "./styles";

import { useHistory, useParams } from "react-router-dom";

import PageTitle from "../../../../components/page-title";
import ButtonType from "../../../../components/button-type";
//
import { useDispatch, useSelector } from "react-redux";
import { apiObject } from "../../../../api";
import {
  TableDetailRowHalf,
  TableDetailRow,
} from "../../../../components/table-detail-row";

const TempDetailComponent = () => {
  const reducer = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <Wrapper>
      <Grid className="">
        <PageTitle title="상세페이지" />
        {/*  */}
        <TableDetailRowHalf
          title_1="이름"
          text_1={"김동혁"}
          title_2="성별"
          text_2={"남"}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="생년월일"
          text_1={"990627"}
          title_2="주소"
          text_2={`서울특별시 중랑구 신내동 신내로 51`}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="휴대폰번호"
          text_1="01033002200"
          title_2="직업"
          text_2={`프론트엔드개발자`}
        />
        {/*  */}
        <TableDetailRow title_1="페이지" text_1="CMS 탬플릿페이지" />
        {/*  */}
      </Grid>
      <Grid container justify="flex-end" className="btn_wrap">
        <ButtonType
          title="목록"
          onClick={() => {
            history.go(-1);
          }}
        />
      </Grid>
      {/*  */}
    </Wrapper>
  );
};

const TempDetail = () => {
  return (
    <>
      <TempDetailComponent />
    </>
  );
};

export default TempDetail;
