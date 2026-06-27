// mobile-controls.js
<script src="controls.js" defer></script>
document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement('div');
    container.style.cssText = "position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 9999;";

    const keys = ['w', 'a', 's', 'd'];
    
    keys.forEach(key => {
        const btn = document.createElement('button');
        btn.innerText = key.toUpperCase();
        btn.style.padding = "20px 30px";
        btn.style.fontSize = "18px";
        btn.style.borderRadius = "10px";
        btn.style.backgroundColor = "rgba(0,0,0,0.5)";
        btn.style.color = "white";
        btn.style.border = "none";
        
        // Події натискання
        btn.addEventListener('touchstart', (e) => { e.preventDefault(); simulateKey(key, 'keydown'); });
        btn.addEventListener('touchend', (e) => { e.preventDefault(); simulateKey(key, 'keyup'); });
        btn.addEventListener('mousedown', () => simulateKey(key, 'keydown'));
        btn.addEventListener('mouseup', () => simulateKey(key, 'keyup'));
        btn.addEventListener('mouseleave', () => simulateKey(key, 'keyup'));

        container.appendChild(btn);
    });

    document.body.appendChild(container);
});

function simulateKey(key, type) {
    const event = new KeyboardEvent(type, {
        key: key,
        code: 'Key' + key.toUpperCase(),
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(event);
}
