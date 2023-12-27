document.addEventListener('DOMContentLoaded', function () {
    const toggleChatButton = document.getElementById('toggleChat');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
  
    let chatVisible = true;
  
    toggleChatButton.addEventListener('click', function () {
      chatVisible = !chatVisible;
      chatMessages.style.display = chatVisible ? 'block' : 'none';
    });
  
    sendMessageButton.addEventListener('click', function () {
      const messageText = messageInput.value.trim();
  
      if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;
  
        chatMessages.appendChild(messageElement);
  
        // Clear the input field
        messageInput.value = '';
  
        // Scroll to the bottom to show the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });
  });

  const chatMessages = document.getElementById('chatMessages');

  function addUserMessage(message) {
    const userMessage = document.createElement('p');
    userMessage.className = 'user-mssg';
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);
  }

  function addBotMessage(message) {
    const botMessage = document.createElement('p');
    botMessage.className = 'Pre-mssg';
    botMessage.textContent = message;
    chatMessages.appendChild(botMessage);
  }

  function handleUserInput(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes('location')) {
      addBotMessage('The company is located in G11 Markaz.');
    } else if (userInput.includes('services')) {
      addBotMessage('We offer services in App Development, Web Development, Software Development, and more.');
    } else {
      addBotMessage('I\'m sorry, I didn\'t understand. Please ask about the location or our services.');
    }
  }

  // Example usage:
  // Simulating user input
  addUserMessage('Tell me the location.');
  handleUserInput('Tell me the location.');

  addUserMessage('What services do you provide?');
  handleUserInput('What services do you provide?');

  addUserMessage('Can you do graphic design?');
  handleUserInput('Can you do graphic design?');