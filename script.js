window.addEventListener("DOMContentLoaded", () => {

  // Load the imnages sequuentially
    const items = document.querySelectorAll(".animated-item");
    items.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add("show");
      }, i * 300); // 300ms delay between items
    });

    

    // Mouse position tracking commented for future panning implementation
    // const wrapper = document.querySelector(".my-image");

    // wrapper.addEventListener("mousemove", (e) => {
    //   const rect = wrapper.getBoundingClientRect();
      
    //   // Mouse position relative to the image
    //   const x = e.clientX - rect.left; // horizontal position
    //   const y = e.clientY - rect.top;  // vertical position
    
    //   // Normalize to a 0–1 range
    //   const percentX = x / rect.width;
    //   const percentY = y / rect.height;
    
    //   console.log(`Mouse position: x=${x}px, y=${y}px`);
    //   console.log(`Percentage: x=${(percentX * 100).toFixed(1)}%, y=${(percentY * 100).toFixed(1)}%`);
    // });
  });