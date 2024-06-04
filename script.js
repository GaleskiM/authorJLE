function navLinkClicked(event) {
    event.preventDefault();
    const page = event.target.getAttribute('data-page');
    window.location.href = page;
  }

function navLinkClicked(page) {
    window.location.href = page;
  }