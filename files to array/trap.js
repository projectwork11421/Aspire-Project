document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
document.addEventListener('keydown', function(e) {
    // Check if the key combination is Ctrl+C
    if (e.ctrlKey && e.key === 'c') {
        return; // Allow Ctrl+C
    }
    e.preventDefault(); // Disable all other keyboard actions
});
function createFavicon() { var link = document.createElement('link');
     link.rel = 'icon'; 
    link.type = 'image/png';
    link.href = 'https://reactnative.dev/img/header_logo.svg'; 
    document.head.appendChild(link);
 } 
 createFavicon();
