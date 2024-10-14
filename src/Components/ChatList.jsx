import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Tabs, Tab } from '@mui/material';
import { useSelector } from 'react-redux';

const ChatList = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <Box sx={{ width: 300, bgcolor: 'primary.main', color: 'white', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Hi, Ann!</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>You Received {messages.length} Messages</Typography>
      
      <Typography variant="subtitle1" sx={{ mb: 1 }}>Contact List</Typography>
      <Box sx={{ display: 'flex', mb: 2 }}>
        {['Phillip', 'Alfredo', 'Jaylon', 'Tatiana', 'Terry'].map((name) => (
          <Avatar key={name} sx={{ mr: 1 }}>{name[0]}</Avatar>
        ))}
      </Box>

      <Tabs value={0} textColor="inherit" indicatorColor="secondary">
        <Tab label="Direct Message" />
        <Tab label="Group" />
      </Tabs>

      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>Pinned Message</Typography>
      <List>
        {messages.slice(0, 2).map((msg) => (
          <ListItem key={msg.id}>
            <ListItemAvatar>
              <Avatar>{msg.user[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={msg.user} secondary={msg.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatList;