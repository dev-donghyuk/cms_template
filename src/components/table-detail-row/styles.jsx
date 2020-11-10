import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  /* & .table { */
  * {
    line-height: 1.3;
  }
  & .tr {
    & > div {
      padding: 20px;
      border-bottom: 1px solid #fff;
      &.td_1 {
        background: #ebebeb;
        & > div {
          height: 100%;
          & > div {
            color: #363636;
          }
        }
      }
      &.td_2 {
        background: #fff;
        & > div {
          height: 100%;
          & > div {
            width: 100%;
            & span {
              &.date {
                display: block;
              }
            }
            & input {
              width: 100%;
              height: 40px;
              line-height: 40px;
              padding-left: 10px;
              font-size: 14px;
              color: #363636;
              font-weight: 500;
              border: 1px solid #d9d9d9;
              border-radius: 4px;
            }
            & textarea {
              width: 100%;
              height: 80px;
              padding: 10px;
              resize: none;
              border: 1px solid #ddd;
              border-radius: 4px;
            }
            & .size {
              & input {
                width: 80px;
              }
              & span {
                display: inline-block;
                line-height: 39px;
                color: #333;
                &.divider {
                  padding: 0 10px;
                }
              }
            }
            & .text {
              padding-top: 10px;
              height: 320px;
              & textarea {
                width: 100%;
                height: 300px;
                padding: 10px;
                font-size: 13px;
                color: #363636;
                border-radius: 4px;
                border: 1px solid #d9d9d9;
                outline: none;
                resize: none;
              }
            }
            & .btn_wrap {
              padding-right: 20px;
              line-height: 45px;
              & .btn {
                width: 100px;
                height: 40px;
                line-height: 38px;
                margin-top: 5px;
                color: ${(props) => props.theme.main};
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                border-radius: 40px;
                border: 1px solid ${(props) => props.theme.main};
                cursor: pointer;
              }
            }
            & .modify_state {
              & > div {
                width: 100px;
                height: 40px;
                line-height: 38px;
                margin-left: 20px;
                text-align: center;
                font-size: 14px;
                color: #979797;
                border: 1px solid #979797;
                border-radius: 20px;
                background: #fff;
                cursor: pointer;
                &.on {
                  background: ${(props) => props.theme.main};
                  border-color: ${(props) => props.theme.main};
                  color: #fff;
                }
              }
            }
            & .member {
              & span {
                display: inline-block;
                margin-right: 5px;
                font-weight: 500;
                color: #363636;
                text-decoration: underline;
              }
            }
            & .team {
              & span {
                display: inline-block;
                &.name {
                  color: #363636;
                }
                &.score {
                  color: #979797;
                }
              }
            }
          }
        }
        &.td_3 {
          background: #f8faff;
          & > div {
            height: 100%;
            & > div {
            }
          }
        }

        & .img {
          position: relative;
          /* height: 240px; */
          & .img_box {
            height: 100%;
            &.modify {
              padding: 30px 0;
            }
            & .title {
              width: 100%;
              & p {
                width: 100%;
                line-height: 180px;
                text-align: center;
                font-size: 14px;
                color: #979797;
              }
            }
            & .btn_img {
              position: absolute;
              right: 0;
              bottom: -15px;
              padding-right: 20px;
              & div {
                width: 60px;
                height: 30px;
                line-height: 28px;
                text-align: center;
                font-size: 14px;
                color: #666666;
                border: 1px solid #ddd;
                border-radius: 4px;
                cursor: pointer;
                &:last-child {
                  margin-left: 8px;
                  color: #fff;
                  background: ${(props) => props.theme.main};
                }
              }
            }
            & > div {
              & .img {
                position: relative;
                height: 160px;
                margin-right: 20px;
                & img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
                & button {
                  position: absolute;
                  left: 50%;
                  top: -35px;
                  transform: translateX(-50%);
                  background: none;
                }
              }
            }
          }
          & .mask {
            display: inline-block;
            max-width: 300px;
            width: 100%;
            height: 100%;
            padding: 10px;
            & img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        & .select {
          * {
            /* color: #ddd; */
          }
          & > div {
            max-width: 320px;
            width: calc(100%);
            height: 40px;
            margin-right: 16px;
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            background: #fff;
            &::before,
            &::after {
              display: none;
            }
            & svg {
              display: none;
            }
            & > div {
              position: relative;
              padding: 0 0 0 10px;
              background: #fff;
              font-size: 14px;
              &::before {
                content: "";
                position: absolute;
                right: 10px;
                top: 5px;
                width: 12px;
                height: 10px;
                background: url("/images/menu_item_arrow.png") no-repeat;
                background-size: 12px;
              }
            }
            &:last-child {
              margin-right: 0 !important;
            }
          }
          & span {
            &.divider {
              display: inline-block;
              width: auto;
              height: 40px;
              line-height: 34px;
              margin-right: 16px;
              border: none;
            }
          }
          &.half {
            & > div {
              width: calc(50% - 8px);
            }
            &.divider {
              & > div {
                width: calc(50% - 20px);
              }
            }
          }
          &.third {
            margin-bottom: 10px;
            & > div {
              width: 80px;
              margin-right: 10px;
            }
            & button {
              width: 70px;
              height: 40px;
              line-height: 38px;
              margin-left: 10px;
              border: 1px solid #ddd;
              border-radius: 4px;
              background: #f6f6f6;
            }
          }
          &.conditional {
            & > div {
              width: 32%;
            }
          }
        }
        & .point {
          & input {
            &.point {
              width: 100px;
              margin-right: 20px;
            }
            &.point_text {
              width: calc(100% - 220px);
            }
          }
          & button {
            width: 80px;
            line-height: 38px;
            margin-left: 20px;
            color: #666;
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #fff;
          }
        }
      }
    }
  }
  /* } */
`;

export default Wrapper;
