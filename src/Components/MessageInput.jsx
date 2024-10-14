import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../features/chatSlices";
import { TextField, Button, Box } from "@mui/material";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage({ text: message }));
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box mt={2} display="flex" alignItems="center">
      <TextField
        fullWidth
        variant="outlined"
        label="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        multiline
        maxRows={4}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        sx={{ ml: 2, height: '56px' }}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;