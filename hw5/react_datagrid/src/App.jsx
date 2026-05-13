import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, TextField, Table, TableBody, 
  TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Box, Button 
} from '@mui/material';

function App() {
  const [data, setData] = useState([]);          // 存放 API 資料
  const [filteredData, setFilteredData] = useState([]); // 存放顯示/搜尋後的資料
  const [page, setPage] = useState(1);
  const [rawJson, setRawJson] = useState(null);  // 專門存放要展示的原始 JSON
  const itemsPerPage = 10;

  // --- 講義 42-45 頁：useEffect 練習 ---
  useEffect(() => {
    console.log("Component Rendered / Effect Triggered");
    // 預設載入原本的展覽 API
    fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFilteredData(json);
      });
  }, []);

  // --- 核心功能：切換抓取不同的 API JSON (對應你的要求) ---
  const fetchSelectedJson = (type) => {
    let url = "";
    if (type === 'posts') url = "https://jsonplaceholder.typicode.com/posts/1";
    if (type === 'users') url = "https://jsonplaceholder.typicode.com/users/1";
    if (type === 'comments') url = "https://jsonplaceholder.typicode.com/comments/1";

    fetch(url)
      .then(res => res.json())
      .then(json => {
        setRawJson(json); // 將抓到的資料存入 rawJson
        console.log(`抓取 ${type} 成功`);
      })
      .catch(err => alert("抓取失敗"));
  };

  // --- 原本功能保留：搜尋與刪除 ---
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = data.filter(item => item.title.toLowerCase().includes(keyword));
    setFilteredData(filtered);
    setPage(1);
  };

  const deleteLastItem = () => {
    setFilteredData(prev => prev.slice(0, -1));
  };

  // 分頁邏輯
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const displayData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Container sx={{ mt: 4, pb: 10 }}>
      <Typography variant="h4" align="center" gutterBottom color="primary">
        HW#5：React API 整合練習
      </Typography>

      {/* --- 按鈕區：Post, User, Comments --- */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
        <Button variant="outlined" onClick={() => fetchSelectedJson('posts')}>Post API</Button>
        <Button variant="outlined" onClick={() => fetchSelectedJson('users')}>User API</Button>
        <Button variant="outlined" onClick={() => fetchSelectedJson('comments')}>Comments API</Button>
      </Box>

      {/* --- 原有功能區 --- */}
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
        <TextField label="搜尋展覽名稱" size="small" onChange={handleSearch} />
        <Button variant="contained" color="error" onClick={deleteLastItem}>刪除最後一筆</Button>
      </Box>

      {/* --- 表格展示區 --- */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#eeeeee' }}>
            <TableRow>
              <TableCell>名稱</TableCell>
              <TableCell>地點</TableCell>
              <TableCell>票價</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.showInfo?.[0]?.location || 'N/A'}</TableCell>
                <TableCell>{item.showInfo?.[0]?.price || '免費'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination count={totalPages} page={page} onChange={(e, v) => setPage(v)} />
      </Box>

      {/* --- 最下方展示 JSON 格式資料 (你的核心要求) --- */}
      {rawJson && (
        <Box sx={{ mt: 5, p: 2, backgroundColor: '#272822', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ color: '#66d9ef', mb: 1 }}>原始 JSON 資料展示：</Typography>
          <pre style={{ color: '#f8f8f2', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(rawJson, null, 2)}
          </pre>
        </Box>
      )}

      <Typography variant="body2" align="center" sx={{ mt: 4 }}>Hello CGU!!</Typography>
    </Container>
  );
}

export default App;