var trying = (function() {
  var tc = {};

 


  var $inputText;
  var $usernameInput;
  var $statusRow;
  var $typingRow;
  var $typingPlaceholder;

  $(document).ready(function() {
    tc.$messageList = $('#message-list');
    $inputText = $('#input-text');
    $usernameInput = $('#username-input');
    $statusRow = $('#status-row');
    $typingRow = $('#typing-row');
    $typingPlaceholder = $('#typing-placeholder');
    $usernameInput.focus();
    $usernameInput.on('keypress', handleUsernameInputKeypress);
    $inputText.on('keypress', handleInputTextKeypress);
    $('#connect-image').on('click', connectClientWithUsername);
    $('#add-channel-image').on('click', showAddChannelInput);
    $('#leave-span').on('click', disconnectClient);
    $('#delete-channel-span').on('click', deleteCurrentChannel);
  });

  function handleUsernameInputKeypress(event) {
    if (event.keyCode === 13){
      connectClientWithUsername();
    }
  }

  function handleInputTextKeypress(event) {
    if (event.keyCode === 13) {
      tc.currentChannel.sendMessage($(this).val());
      event.preventDefault();
      $(this).val('');
    }
    else {
      notifyTyping();
    }
  }

  var notifyTyping = $.throttle(function() {
    tc.currentChannel.typing();
  }, 1000);

  function connectClientWithUsername() {
    var usernameText = $usernameInput.val();
    $usernameInput.val('');
    if (usernameText == '') {
      alert('Username cannot be empty');
      return;
    }
    tc.username = usernameText;
    fetchAccessToken(tc.username, connectMessagingClient);
  }