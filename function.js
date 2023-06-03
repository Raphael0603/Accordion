function showContent(contentId, textId, contentText) {
  let content = document.getElementById(contentId);
  let text = document.getElementById(textId);

  content.style.display = "block";
  text.innerHTML = contentText;
}

function hideContent(contentId) {
  let content = document.getElementById(contentId);
  content.style.display = "none";
}

document.getElementById('myElement1').addEventListener('mouseenter', function() {
  showContent('text1', 'text-1', 'Information management is an emerging field that is concerned with the infrastructure used to collect, manage, preserve, store, and deliver information.');
});
document.getElementById('myElement1').addEventListener('mouseleave', function() {
  hideContent('text1');
});

document.getElementById('myElement2').addEventListener('mouseenter', function() {
  showContent('text2', 'text-2', 'Computer networking refers to interconnected computing devices that can exchange data and share resources with each other. These networked devices use a system of rules, called communications protocols, to transmit information over physical or wireless technologies.');
});
document.getElementById('myElement2').addEventListener('mouseleave', function() {
  hideContent('text2');
});

document.getElementById('myElement3').addEventListener('mouseenter', function() {
  showContent('text3', 'text-3', 'Web information system, or web-based information system, is an information system that uses Internet web technologies to deliver information and services to users or other information systems/applications.');
});
document.getElementById('myElement3').addEventListener('mouseleave', function() {
  hideContent('text3');
});

document.getElementById('myElement4').addEventListener('mouseenter', function() {
  showContent('text4', 'text-4', 'The Systems Integration Architecture provides a bridge between the heterogeneous operational applications and platforms. This architecture ties together the mix of platforms, operating systems, transports, and applications.');
});
document.getElementById('myElement4').addEventListener('mouseleave', function() {
  hideContent('text4');
});
