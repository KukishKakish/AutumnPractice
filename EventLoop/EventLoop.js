function fetchWithTimeout(url, timeout = 5000) {
  var controller = new AbortController();
  var signal = controller.signal;

  setTimeout(function() {
    controller.abort();
  }, timeout);

  return fetch(url, { signal: signal })
    .then(function(response) {
      return response.json();
    });
}
