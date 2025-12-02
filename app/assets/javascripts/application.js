//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Make copyCode available globally
window.copyCode = function(button) {
  const codeWrapper = button.closest('.code-wrapper');
  const codeBlock = codeWrapper.querySelector('code');
  const text = codeBlock.textContent;
  
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent;
    const originalBgColor = button.style.backgroundColor;
    
    button.textContent = 'Copied';
    button.style.backgroundColor = '#00823b';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = originalBgColor;
    }, 2000);
  });
}

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})