import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const changeText = (event) => {
  console.log(event.target);
  // 可以保留或註解掉，依你喜好
  // event.target.innerText = event.target.innerText + " 被點了";
};

const MultiButton = (num) => {
  var output = [];

  // 加入三個圖示按鈕（Page 48~49 的範例）
  output.push(
    <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      onClick={changeText}
    >
      <AddShoppingCartIcon />
    </IconButton>
  );

  output.push(
    <IconButton 
      color="primary" 
      aria-label="delete"
      onClick={changeText}
    >
      <DeleteIcon />
    </IconButton>
  );

  output.push(
    <IconButton 
      color="primary" 
      aria-label="add an alarm"
      onClick={changeText}
    >
      <AlarmIcon />
    </IconButton>
  );

  return output;
};

export default MultiButton;