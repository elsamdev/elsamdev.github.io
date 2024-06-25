document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  let isDragging = false;
  let startPosX = 0;
  let startPosY = 0;
  let transform = 0;
  let lastTransform = 0;
  let sliderWidth = slider.scrollWidth - slider.clientWidth;
  let direction = '';
  let velocity = 0;
  let itemWidth = slider.querySelector('.slider-item').clientWidth; // Assuming each item has the same width

  function updateSliderWidth() {
      sliderWidth = slider.scrollWidth - slider.clientWidth;
      itemWidth = slider.querySelector('.slider-item').clientWidth; // Recalculate on resize
  }

  window.addEventListener('resize', updateSliderWidth);

  function startInteraction(startX, startY) {
      isDragging = true;
      startPosX = startX;
      startPosY = startY;
      startTime = Date.now();
      direction = '';
      slider.classList.add('grabbing');
      slider.style.transition = 'none'; // Remove transition for real-time tracking
  }

  function moveInteraction(currentX, currentY) {
      if (!isDragging) return;
      const dx = currentX - startPosX;
      const currentTime = Date.now();
      const dt = (currentTime - startTime) || 1; // Prevent division by zero
      velocity = dx / dt; // Calculate velocity

      if (direction === '') {
          direction = 'horizontal'; // Assume horizontal for simplicity
      }

      if (direction === 'horizontal') {
          let tentativeTransform = lastTransform + dx;

          if (tentativeTransform > 0) {
              tentativeTransform = dx / 5; // Elastic resistance at start
          } else if (tentativeTransform < -sliderWidth) {
              tentativeTransform = -sliderWidth + (dx / 5); // Elastic resistance at end
          }

          transform = tentativeTransform;
          slider.style.transform = `translateX(${transform}px)`;
      }
      startPosX = currentX; // Update start position for next calculation
  }

  function endInteraction(currentX) {
      if (!isDragging || direction !== 'horizontal') return;
      isDragging = false;
      slider.classList.remove('grabbing');

      // Add momentum
      let newTransform = lastTransform + currentX - startPosX + (velocity * 500); // Adjust 500 for desired momentum effect
      newTransform = Math.round(newTransform / itemWidth) * itemWidth; // Snap to closest item
      newTransform = Math.max(-sliderWidth, Math.min(0, newTransform)); // Ensure it stays within bounds

      slider.style.transform = `translateX(${newTransform}px)`;
      slider.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)'; // Smooth deceleration
      lastTransform = newTransform;
      direction = ''; // Reset direction after interaction ends
  }

  // Mouse events
  slider.addEventListener('mousedown', e => startInteraction(e.clientX, e.clientY));
  window.addEventListener('mousemove', e => moveInteraction(e.clientX, e.clientY));
  window.addEventListener('mouseup', e => endInteraction(e.clientX));

  // Touch events
  slider.addEventListener('touchstart', e => startInteraction(e.touches[0].clientX, e.touches[0].clientY));
  window.addEventListener('touchmove', e => moveInteraction(e.touches[0].clientX, e.touches[0].clientY));
  window.addEventListener('touchend', e => endInteraction(e.changedTouches[0].clientX));
});
