// Saves options to chrome.storage
function save_options() {
  var debug = document.getElementById('debug').value;
  var enabled = document.getElementById('on').checked;
  
  chrome.storage.sync.set({
    debugMode: debug,
	extEnabled: enabled
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = 'Error saving options to chrome.storage';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    debugMode: false,
    extEnabled: true
  }, function(items) {
    document.getElementById('debug').checked = items.debugMode;
    document.getElementById('on').checked = items.extEnabled;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);