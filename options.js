function save_options() {
  var wantsDarkHeader = document.getElementById('darkHeader').checked;
  chrome.storage.sync.set({
    wantsDarkHeader: wantsDarkHeader
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    wantsDarkHeader: false
  }, function(items) {
    document.getElementById('darkHeader').checked = items.wantsDarkHeader;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
