import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const SupportWrap = styled.div`
  width: 100%;
  border-top: 1px solid #e5e6e9;
  border-bottom: 1px solid #e5e6e9;

  background-color: #f2f6fc;
  text-align: center;
  display: flex;

  a {
    color: #4c99e9;
  }

  a:hover {
    color: #047fff;
    text-decoration: underline;
  }
`;

function createData(link, text) {
  return { link, text };
}

const rows = [
  createData("https://www.bodiesinmotion.photo/", "크로키 도움 사이트(유료)"),
  createData("https://line-of-action.com/", "크로키 도움 사이트(무료)"),
  createData(
    "https://www.youtube.com/user/onairvideo/videos",
    "유튜브 크로키 강좌 모음"
  ),
  createData(
    "https://www.youtube.com/user/NewMastersAcademy",
    "시간별 크로키 강좌"
  ),
  createData(
    "https://www.youtube.com/playlist?list=PLK3LUh8vAUbVns5QDI-bM4LWcFp1aVzfl",
    "유튜브 이연"
  ),
  createData(
    "https://youryure.postype.com/post/5584221",
    "컬러크로키에 대하여..."
  ),
  createData("http://lookbook.nu/#more", "모델 사진이 올라오는 사이트"),
  createData(
    "https://www.photo-reference-for-comic-artists.com/",
    "역동적인 포즈 많음"
  ),
];

const Support = () => {
  return (
    <SupportWrap>
      <Box sx={{ marginLeft: "auto", marginRight: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>링크</TableCell>
                <TableCell align="right">설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.link}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <a href={row.link}>{row.link}</a>
                  </TableCell>
                  <TableCell align="right">{row.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </SupportWrap>
  );
};

export default Support;
