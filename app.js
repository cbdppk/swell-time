// app.js
class Spinner {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.isSpinning = false;
    }

    start() {
        this.isSpinning = true;
        this.element.classList.add('spinning');
    }

    stop() {
        this.isSpinning = false;
        this.element.classList.remove('spinning');
    }

    toggle() {
        if (this.isSpinning) {
            this.stop();
        } else {
            this.start();
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const spinner = new Spinner('spinner');
    
    document.getElementById('toggleBtn').addEventListener('click', () => {
        spinner.toggle();
    });
});