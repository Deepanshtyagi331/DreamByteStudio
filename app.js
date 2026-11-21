/**
 * DREAMBYTE STUDIO - Interactive Logic & Animations
 * Photo / Video Production Studio Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------
     1. SCROLL PROGRESS & NAVBAR SCROLLED STATE
  ------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scrollProgressBar');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolledPercent = (scrollTop / docHeight) * 100;
    
    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrolledPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, { passive: true });


  /* -------------------------------------------------------------
     2. MOBILE MENU DRAWER
  ------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (mobileDrawer.classList.contains('hidden')) {
          icon.className = 'fa-solid fa-bars-staggered text-2xl';
        } else {
          icon.className = 'fa-solid fa-xmark text-2xl text-amber-400';
        }
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars-staggered text-2xl';
      });
    });
  }


  /* -------------------------------------------------------------
     3. PORTFOLIO FILTER TABS
  ------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });


  /* -------------------------------------------------------------
     4. PORTFOLIO LIGHTBOX MODAL
  ------------------------------------------------------------- */
  const mediaModal = document.getElementById('mediaModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalGear = document.getElementById('modalGear');
  const modalBookBtn = document.getElementById('modalBookBtn');

  function openMediaModal(item) {
    if (!mediaModal) return;
    const title = item.getAttribute('data-title') || 'DreamByte Production';
    const type = item.getAttribute('data-type') || 'Studio Reel';
    const gear = item.getAttribute('data-gear') || 'Cinema Line';
    const imgSrc = item.getAttribute('data-img') || item.querySelector('img')?.src;

    if (modalTitle) modalTitle.textContent = title;
    if (modalCategory) modalCategory.textContent = type;
    if (modalGear) modalGear.innerHTML = `<i class="fa-solid fa-camera mr-1 text-amber-400"></i> ${gear}`;
    if (modalImage && imgSrc) modalImage.src = imgSrc;

    mediaModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMediaModal() {
    if (!mediaModal) return;
    mediaModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => openMediaModal(item));
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeMediaModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeMediaModal);
  if (modalBookBtn) {
    modalBookBtn.addEventListener('click', () => {
      closeMediaModal();
    });
  }


  /* -------------------------------------------------------------
     5. SHOWREEL VIDEO MODAL
  ------------------------------------------------------------- */
  const openShowreelBtn = document.getElementById('openShowreelBtn');
  const heroReelCard = document.getElementById('heroReelCard');
  const showreelModal = document.getElementById('showreelModal');
  const showreelBackdrop = document.getElementById('showreelBackdrop');
  const showreelCloseBtn = document.getElementById('showreelCloseBtn');
  const showreelVideoPlayer = document.getElementById('showreelVideoPlayer');
  const closeShowreelAndBook = document.getElementById('closeShowreelAndBook');

  function openShowreel() {
    if (!showreelModal) return;
    showreelModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (showreelVideoPlayer) {
      showreelVideoPlayer.currentTime = 0;
      showreelVideoPlayer.play().catch(() => {});
    }
  }

  function closeShowreel() {
    if (!showreelModal) return;
    showreelModal.classList.add('hidden');
    document.body.style.overflow = '';
    if (showreelVideoPlayer) {
      showreelVideoPlayer.pause();
    }
  }

  if (openShowreelBtn) openShowreelBtn.addEventListener('click', openShowreel);
  if (heroReelCard) heroReelCard.addEventListener('click', openShowreel);
  if (showreelCloseBtn) showreelCloseBtn.addEventListener('click', closeShowreel);
  if (showreelBackdrop) showreelBackdrop.addEventListener('click', closeShowreel);
  if (closeShowreelAndBook) {
    closeShowreelAndBook.addEventListener('click', () => {
      closeShowreel();
    });
  }

  // Escape key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMediaModal();
      closeShowreel();
    }
  });


  /* -------------------------------------------------------------
     6. BEFORE / AFTER COLOR GRADING COMPARISON SLIDER
  ------------------------------------------------------------- */
  const sliderContainer = document.getElementById('comparisonSlider');
  const beforeClip = document.getElementById('beforeClip');
  const sliderHandle = document.getElementById('sliderHandle');

  if (sliderContainer && beforeClip && sliderHandle) {
    let isDragging = false;

    function updateSlider(clientX) {
      const rect = sliderContainer.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;

      const percentage = (offsetX / rect.width) * 100;
      beforeClip.style.width = `${percentage}%`;
      sliderHandle.style.left = `${percentage}%`;
    }

    // Mouse Events
    sliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Events for Mobile / Tablet
    sliderContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches[0]) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });
  }


  /* -------------------------------------------------------------
     7. INTERACTIVE SLOT BOOKING ENGINE & WHATSAPP GENERATOR
  ------------------------------------------------------------- */
  const bookingForm = document.getElementById('bookingForm');
  const bookingDateInput = document.getElementById('bookingDate');
  const serviceCards = document.querySelectorAll('.service-radio-card');
  const timeSlotBtns = document.querySelectorAll('.time-slot-btn');
  const addonCheckboxes = document.querySelectorAll('input[name="addons"]');
  const estimatedPriceEl = document.getElementById('estimatedPrice');
  const toastNotification = document.getElementById('toastNotification');

  // Set date input minimum to tomorrow
  if (bookingDateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const tomorrowStr = today.toISOString().split('T')[0];
    bookingDateInput.min = tomorrowStr;
    bookingDateInput.value = tomorrowStr;
  }

  let selectedServiceRate = 15000;
  let selectedServiceName = 'Commercial Video';
  let selectedTimeSlot = 'Morning (09:00 AM - 01:00 PM)';

  // Format INR currency
  function formatINR(number) {
    return '₹' + number.toLocaleString('en-IN');
  }

  // Update Estimated Price
  function calculateTotal() {
    let total = selectedServiceRate;

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        total += parseInt(cb.getAttribute('data-price') || '0', 10);
      }
    });

    if (estimatedPriceEl) {
      estimatedPriceEl.textContent = formatINR(total);
    }
  }

  // Service Selection
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        selectedServiceRate = parseInt(radio.getAttribute('data-rate') || '15000', 10);
        selectedServiceName = card.querySelector('span.font-bold')?.textContent || radio.value;
      }
      calculateTotal();
    });
  });

  // Time Slot Selection
  timeSlotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      timeSlotBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTimeSlot = btn.getAttribute('data-slot') || btn.textContent.trim();
    });
  });

  // Addon Checkbox Styling & Calculation
  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const parentLabel = cb.closest('.addon-checkbox-card');
      if (parentLabel) {
        if (cb.checked) {
          parentLabel.classList.add('checked');
        } else {
          parentLabel.classList.remove('checked');
        }
      }
      calculateTotal();
    });
  });

  // Toast Helper
  function showToast(title, message) {
    if (!toastNotification) return;
    const tTitle = document.getElementById('toastTitle');
    const tMsg = document.getElementById('toastMessage');
    if (tTitle) tTitle.textContent = title;
    if (tMsg) tMsg.textContent = message;

    toastNotification.classList.remove('hidden');
    setTimeout(() => {
      toastNotification.classList.add('hidden');
    }, 4500);
  }

  // Form Submit Handler -> Constructs WhatsApp Reservation Link
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const clientName = document.getElementById('clientName')?.value.trim() || 'Client';
      const clientPhone = document.getElementById('clientPhone')?.value.trim() || '';
      const clientEmail = document.getElementById('clientEmail')?.value.trim() || 'Not specified';
      const shootDate = bookingDateInput?.value || 'Next Available';
      const clientNotes = document.getElementById('clientNotes')?.value.trim() || 'None';

      const selectedAddons = [];
      addonCheckboxes.forEach(cb => {
        if (cb.checked) {
          const addonCard = cb.closest('.addon-checkbox-card');
          const title = addonCard?.querySelector('span.block')?.textContent || cb.value;
          selectedAddons.push(title);
        }
      });

      const addonsText = selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None';
      const currentEstimate = estimatedPriceEl?.textContent || 'Custom Quote';

      // WhatsApp Message Formatting
      const waMessage = 
`🎬 *NEW STUDIO SLOT RESERVATION REQUEST* 🎬
*DreamByte Studio (Dehradun)*
-----------------------------------------
👤 *Client Name:* ${clientName}
📞 *Phone / WhatsApp:* ${clientPhone}
📧 *Email:* ${clientEmail}

📽 *Service:* ${selectedServiceName}
📅 *Preferred Date:* ${shootDate}
⏰ *Time Window:* ${selectedTimeSlot}
⚡ *Add-ons Selected:* ${addonsText}
💰 *Est. Total:* ${currentEstimate}

📝 *Project Notes / Vision:*
${clientNotes}
-----------------------------------------
Please confirm crew and stage availability for this slot!`;

      showToast('Reservation Transmitted!', 'Opening WhatsApp to confirm with DreamByte Studio...');

      const encodedMessage = encodeURIComponent(waMessage);
      const studioWhatsAppNumber = '918279720490';
      const waUrl = `https://wa.me/${studioWhatsAppNumber}?text=${encodedMessage}`;

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 700);
    });
  }


  /* -------------------------------------------------------------
     8. FAQ ACCORDION LOGIC
  ------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

  // Calculate initial price on load
  calculateTotal();
});
