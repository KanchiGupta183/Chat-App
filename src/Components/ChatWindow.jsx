import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText, Avatar, Paper, InputBase, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { sendMessage } from "../features/chatSlices";

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const endOfMessagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch(sendMessage({ text }));
      inputRef.current.value = '';
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2, bgcolor: 'white' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Phillip Franci</Typography>
      <Paper elevation={0} sx={{ flexGrow: 1, mb: 2, overflow: 'auto', bgcolor: '#F5F5F5' }}>
        <List>
          {messages.map((msg) => (
            <ListItem key={msg.id} sx={{ flexDirection: 'column', alignItems: msg.user === 'John' ? 'flex-end' : 'flex-start' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar sx={{ mr: 1 }}>{msg.user[0]}</Avatar>
                <Typography variant="body2">{msg.user}</Typography>
              </Box>
              <Paper elevation={1} sx={{ p: 1, maxWidth: '70%', bgcolor: msg.user === 'John' ? 'primary.main' : 'white', color: msg.user === 'John' ? 'white' : 'inherit' }}>
                <Typography variant="body1">{msg.text}</Typography>
              </Paper>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
                {msg.timestamp}
              </Typography>
            </ListItem>
          ))}
        </List>
        <div ref={endOfMessagesRef} />
      </Paper>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type Message"
          inputRef={inputRef}
        />
        <IconButton color="primary" sx={{ p: '10px' }} onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ChatWindow;
