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

const tempState = [
  { key: 0, value: "일반" },
  { key: 1, value: "인증강사" },
  { key: 2, value: "공식매니저" },
];

const useTabs = (TabValue, Content) => {
  const [currentIndex, setCurrentIndex] = useState(TabValue);
  return {
    currentItem: Content[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const TempDetailComponent = () => {
  const reducer = useSelector((state) => state.reducer);

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const { currentItem, changeItem } = useTabs(0, tempState);
  const [tableData, setTableData] = useState({});
  const [pointData, setPointData] = useState([]);
  const [modifySw, setModifySw] = useState(false);

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Grid className="">
        <PageTitle title="상세페이지" />
        {/*  */}
        <TableDetailRowHalf
          title_1="이름"
          text_1={"이름"}
          title_2={`소속팀`}
          text_2={"소속팀"}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="성별"
          text_1={"성별"}
          title_2={`코인`}
          text_2={`코인`}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="생년월일"
          text_1={"생년월일"}
          title_2={`포인트`}
          text_2={`포인트`}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="시, 도"
          text_1={"시, 도"}
          title_2={`매달 갯수`}
          text_2={`3개`}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="구, 군"
          text_1={"구, 군"}
          title_2={`모여라 참여횟수`}
          text_2={`1회`}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="선호종목"
          text_1={"종목"}
          title_2={`팀매칭 참여횟수`}
          text_2={`1회`}
        />
        {/*  */}
        <TableDetailRowHalf
          title_1="휴대폰번호"
          text_1={"01033002200"}
          title_2={`구해요 참여횟수`}
          text_2={`1회`}
        />
        {/*  */}
      </Grid>
      <Grid container justify="flex-end" className="btn_wrap">
        <ButtonType
          title="삭제"
          onClick={() => {
            if (window.confirm("해당 회원정보를 정말 삭제하시겠습니까 ?")) {
            }
          }}
        />
        <ButtonType
          title={modifySw ? "저장" : "수정"}
          className="blue"
          onClick={() => {
            setModifySw(!modifySw);
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
