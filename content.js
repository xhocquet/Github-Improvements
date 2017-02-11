// Restore white header
$('div.header.header-dark').removeClass('header-dark');

// Collapsible PR files
$('div.file .file-header .file-info').prepend('<svg aria-hidden="true" class="octicon octicon-fold minimize-file" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3 3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z"></path></svg>');

$('.minimize-file').click(function() {
  var fileContent = $(this).parents('div.file').children('div.js-file-content')
  if (fileContent.css('display') === 'block') {
    fileContent.css('display','none');
  } else {
    fileContent.css('display','block');
  }
});

// Collapsible comments
$('div.js-comment-container .comment .timeline-comment-header .timeline-comment-header-text').prepend('<svg aria-hidden="true" class="octicon octicon-fold minimize-comment" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3 3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z"></path></svg>');

$('.minimize-comment').click(function() {
  var fileContent = $(this).parents('div.comment').children('div.edit-comment-hide')
  if (fileContent.css('display') === 'block') {
    fileContent.css('display','none');
  } else {
    fileContent.css('display','block');
  }
});

// Scroll to Bottom
$('div.gh-header-actions').prepend('<button class="btn btn-sm jump-to-bottom" data-disable-with="">Go to Bottom</button>')

$('button.jump-to-bottom').click(function() {
  window.scrollTo(0,document.body.scrollHeight);
});
