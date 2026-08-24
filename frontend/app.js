let currentLang = 'it';
let cart = [];

function renderIntroSection() {
  const container = document.getElementById('intro-formats-section');
  if (!container) return;

  const introData = translations?.[currentLang]?.intro;
  if (!introData) return;

  // Image HTML helper
  const thumbsImgHTML = `<div class="thumbs-badge"><img src="assets/img/icon-thumbs-up.svg" alt="Recommended" class="thumbs-badge-img" /></div>`;

  const formatsHTML = (introData.formats || []).map((fmt, index) => `
    <div class="format-card">
      <h3 class="format-card-title">${fmt.title}</h3>
      <img src="${fmt.icon || `assets/img/icon-${index + 1}.svg`}" alt="${fmt.title}" class="format-img" />
      <p class="format-desc">${fmt.desc}</p>
    </div>
  `).join('');

  const taglieriItemsHTML = (introData.specials?.taglieri?.items || []).map(item => `
    <div class="special-item item-${item.id}" data-id="${item.id}">
      <div class="special-item-header">
        <span class="item-name">${item.name}</span>
        <div class="price-action">
          <span class="item-price">${item.price.toFixed(2)} €</span>
          <button class="add-btn-sm" 
                  type="button"
                  data-id="${item.id}" 
                  data-price="${item.price}" 
                  data-name="${item.name}">
            ${translations[currentLang].addBtn}
          </button>
        </div>
      </div>
      <p class="item-details">
        ${item.desc}
        ${item.advice ? `<span class="advice-tag">${item.advice}</span>` : ''}
      </p>
    </div>
  `).join('');

  const bowleItemsHTML = (introData.specials?.bowle?.items || []).map(item => `
    <div class="special-item item-${item.id}" data-id="${item.id}">
      <div class="special-item-header">
        <span class="item-name">${item.name}</span>
        <div class="price-action">
          <span class="item-price">${item.price.toFixed(2)} €</span>
          <button class="add-btn-sm" 
                  type="button"
                  data-id="${item.id}" 
                  data-price="${item.price}" 
                  data-name="${item.name}">
            ${translations[currentLang].addBtn}
          </button>
        </div>
      </div>
      <p class="item-details">${item.desc}</p>
    </div>
  `).join('');

  const combo = introData.specials?.combo || {};

  container.innerHTML = `
    <h2 class="intro-main-title">${introData.mainTitle || ''}</h2>

    <div class="formats-grid">
      ${formatsHTML}
    </div>

    <div class="special-formats-row">
      <!-- Taglieri Card -->
      <div class="special-card">
        ${thumbsImgHTML}
        <h3 class="special-title">${introData.specials?.taglieri?.title || ''}</h3>
        ${taglieriItemsHTML}
      </div>

      <div class="special-right-col">
        <!-- Bowlè Card -->
        <div class="special-card">
          ${thumbsImgHTML}
          <h3 class="special-title">${introData.specials?.bowle?.title || ''}</h3>
          ${bowleItemsHTML}
        </div>

        <!-- Combo Card -->
        <div class="special-card combo-card">
          ${thumbsImgHTML}
          <div class="combo-badge">${combo.badge || ''}</div>
          <h3 class="special-title">${combo.title || ''}</h3>
          <p class="item-details">${combo.desc || ''}</p>
          <div class="price-action flex-end">
            <span class="combo-price">${combo.price ? combo.price.toFixed(2) : '0.00'} €</span>
            <button class="add-btn-sm" 
                    type="button"
                    data-id="${combo.id || ''}" 
                    data-price="${combo.price || 0}" 
                    data-name="${combo.title || ''}">
              ${translations[currentLang].addBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSidebarNotes() {
  const container = document.getElementById('sidebar-notes');
  if (!container) return;

  const sidebarData = translations?.[currentLang]?.sidebar;
  if (!sidebarData) return;

  const legendItemsHTML = (sidebarData.legendItems || []).map(item => `
    <div class="legend-item">
      <img src="${item.icon}" alt="${item.label}" class="legend-icon" />
      <span class="legend-label">${item.label}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="section1-spacer"></div>
    <p class="sidebar-text">${sidebarData.notes[0] || ''}</p>
    <div class="same-item-spacer"></div>
    <p class="sidebar-text">${sidebarData.notes[1] || ''}</p>
    <div class="section2-spacer"></div>
    <p class="sidebar-text">${sidebarData.notes[2] || ''}</p>
    <div class="same-item-spacer"></div>
    <div class="format-legend-card">
      <h4 class="legend-title">${sidebarData.legendTitle || ''}</h4>
      <div class="legend-list">
        ${legendItemsHTML}
      </div>
    </div>
    <div class="section3-spacer"></div>
    <p class="sidebar-text">${sidebarData.notes[3] || ''}</p>
  `;
}

function renderFeaturedBanner() {
  const container = document.getElementById('featured-banner-section');
  if (!container) return;

  const bannerData = translations?.[currentLang]?.featuredTagliere;
  if (!bannerData) return;

  const veganBadge = bannerData.isVegan 
    ? `<img src="assets/img/vegan.png" alt="Vegan" class="badge-vegan" title="Vegan" />` 
    : '';

  const addText = translations[currentLang]?.addBtn || 'Aggiungi';

  container.innerHTML = `
    <div class="menu-card-golden item-${bannerData.id}" id="item-${bannerData.id}" data-id="${bannerData.id}">
      <div>
        <div class="card-header-row">
          <h3 class="card-title-golden">${bannerData.name}</h3>
          ${veganBadge}
        </div>
        <p class="card-description-golden">${bannerData.desc}</p>
      </div>
      <div class="card-footer-row">
        <span class="card-price-golden">${bannerData.price.toFixed(2)} €</span>
        <button type="button" 
                class="btn-add-golden add-btn-sm" 
                data-id="${bannerData.id}" 
                data-price="${bannerData.price}" 
                data-name="${bannerData.name}">
          ${addText}
        </button>
      </div>
    </div>
  `;
}

function getDietaryBadgeHTML(item) {
  if (item.isVegan) {
    return `<img src="assets/img/vegan.png" alt="Vegan" class="dietary-icon" title="Vegan" />`;
  }
  if (item.isVegetarian) {
    return `<img src="assets/img/vegeterian.jpg" alt="Vegetarian" class="dietary-icon" title="Vegetarian" />`;
  }
  return '';
}

function renderMenu() {
  console.log('🔄 Rendering menu...');
  
  renderSidebarNotes();
  renderIntroSection();
  renderFeaturedBanner();

  const container = document.getElementById('menu-sections');
  if (!container) {
    console.error('❌ menu-sections container not found!');
    return;
  }

  container.innerHTML = '';

  if (typeof menuSections === 'undefined') {
    console.error('❌ menuSections is not defined!');
    return;
  }

  console.log('📋 Rendering', menuSections.length, 'menu sections');

  menuSections.forEach((section) => {
    const sectionTitle = currentLang === 'en' ? section.enTitle : section.itTitle;
    const sectionCol = document.createElement('div');
    sectionCol.className = 'menu-section-col';

    const itemsHTML = (section.items || []).map(item => {
      const langData = item[currentLang] || {};
      const dietaryBadge = getDietaryBadgeHTML(item);

      if (item.options && item.options.length > 0) {
        const optionsHTML = item.options.map(opt => `
          <div class="option-row">
            <img src="${opt.icon}" alt="${opt.type}" class="option-icon" />
            <span class="option-price">${opt.price.toFixed(2)} €</span>
            <button class="add-btn-sm" 
                    type="button"
                    data-id="${item.id}" 
                    data-type="${opt.type}" 
                    data-price="${opt.price}" 
                    data-name="${langData.name}">
              ${translations[currentLang].addBtn}
            </button>
          </div>
        `).join('');

        return `
          <div class="menu-item multi-option-item item-${item.id}" data-id="${item.id}">
            <div class="item-info">
              <h3>${langData.name || ''} ${dietaryBadge}</h3>
              <p class="description">${langData.desc || ''}</p>
            </div>
            <div class="options-container">
              ${optionsHTML}
            </div>
          </div>
        `;
      }

      const itemPriceNum = item.price ? item.price : 0;
      const itemPriceStr = item.price ? item.price.toFixed(2) : '0.00';

      return `
        <div class="menu-item item-${item.id}" data-id="${item.id}">
          <div class="item-info">
            <h3>${langData.name || ''} ${dietaryBadge}</h3>
            <p class="description">${langData.desc || ''}</p>
            <span class="price">${itemPriceStr} €</span>
          </div>
          <button class="add-btn" 
                  type="button" 
                  data-id="${item.id}"
                  data-price="${itemPriceNum}"
                  data-name="${langData.name || ''}">
            ${translations[currentLang].addBtn}
          </button>
        </div>
      `;
    }).join('');

    sectionCol.innerHTML = `
      <h2 class="section-title">${sectionTitle}</h2>
      <div class="menu-list">${itemsHTML}</div>
    `;

    container.appendChild(sectionCol);
  });

  // Render Redesigned Promotions & Info Section
  const bannerData = translations?.[currentLang]?.banners || {};
  const promoSection = document.createElement('div');
  promoSection.className = 'promo-info-section';

  const sectionHeaderTitle = currentLang === 'en' ? 'Special Offers & Info' : 'Offerte e Info';
  const comboTitle = bannerData.comboTitle || (currentLang === 'en' ? 'Valid on full menu' : 'Valido su tutto il menu');
  const comboDesc = bannerData.comboDesc || (currentLang === 'en' 
    ? 'Add <strong>4.00 €</strong> to your order to get the <strong>wedges + soft drink</strong> combo' 
    : 'Aggiungi <strong>4,00 €</strong> al tuo ordine e hai la combo <strong>patate wedges e softdrink</strong>');
  const dessertText = bannerData.dessertText || (currentLang === 'en' 
    ? 'Ask the staff for today\'s house dessert!' 
    : 'Chiedi allo staff qual è il dolce della casa oggi!');

  promoSection.innerHTML = `
    <h2 class="section-title">${sectionHeaderTitle}</h2>
    <div class="promo-grid">
      
      <!-- Combo Deal Card -->
      <div class="promo-card combo-highlight">
        <span class="promo-badge badge-green">${bannerData.comboBadge || 'COMBO'}</span>
        <div class="promo-content">
          <h3 class="promo-card-title">${comboTitle}</h3>
          <p class="promo-card-desc">${comboDesc}</p>
        </div>
        <div class="promo-footer">
          <span class="promo-price">+ 4.00 €</span>
          <button class="add-btn-sm" 
                  type="button"
                  data-id="combo-wedges-drink" 
                  data-price="4.00" 
                  data-name="${comboTitle}">
            ${translations[currentLang].addBtn}
          </button>
        </div>
      </div>

      <!-- House Dessert Special Card -->
      <div class="promo-card dessert-highlight">
        <span class="promo-badge badge-yellow">${bannerData.dessertBadge || 'DOLCE'}</span>
        <div class="promo-content">
          <h3 class="promo-card-title">${currentLang === 'en' ? 'House Dessert' : 'Dolce della Casa'}</h3>
          <p class="promo-card-desc">${dessertText}</p>
        </div>
        <div class="promo-footer">
          <span class="promo-info-tag">🍰 ${currentLang === 'en' ? 'Ask Staff' : 'Chiedi allo staff'}</span>
        </div>
      </div>

    </div>
  `;
  container.appendChild(promoSection);

  updateCartBar();
  updateModalStaticText();
  
  console.log('✅ Menu rendered successfully!');
}

function setLanguage(lang) {
  currentLang = lang;
  const enBtn = document.getElementById('lang-en');
  const itBtn = document.getElementById('lang-it');

  if (enBtn && itBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    itBtn.classList.toggle('active', lang === 'it');
  }

  renderMenu();
  const cartModal = document.getElementById('cart-modal');
  if (cartModal && !cartModal.hasAttribute('hidden')) {
    renderCartModal();
  }
}

function addToCart(itemId, optionType = null, optionPrice = null, customName = null) {
  let selectedItem = null;
  
  if (typeof menuSections !== 'undefined') {
    menuSections.forEach(section => {
      const found = section.items?.find(i => i.id === itemId);
      if (found) selectedItem = found;
    });
  }

  if (selectedItem) {
    if (optionType && optionPrice) {
      cart.push({
        id: `${selectedItem.id}-${optionType}`,
        name: {
          en: `${selectedItem.en.name} (${optionType.toUpperCase()})`,
          it: `${selectedItem.it.name} (${optionType.toUpperCase()})`
        },
        price: parseFloat(optionPrice)
      });
    } else {
      cart.push({
        id: selectedItem.id,
        name: {
          en: selectedItem.en.name,
          it: selectedItem.it.name
        },
        price: selectedItem.price || 0
      });
    }
  } else {
    const price = optionPrice ? parseFloat(optionPrice) : 0;
    const nameStr = customName || itemId;
    
    cart.push({
      id: itemId,
      name: {
        en: nameStr,
        it: nameStr
      },
      price: price
    });
  }

  updateCartBar();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartBar();
  renderCartModal();

  if (cart.length === 0) {
    closeCartModal();
  }
}

function updateCartBar() {
  const countElement = document.getElementById('cart-count');
  const totalElement = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (!countElement || !totalElement || !checkoutBtn) return;

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  countElement.textContent = `${totalItems} ${translations[currentLang].items}`;
  totalElement.textContent = `${totalPrice} €`;
  checkoutBtn.textContent = translations[currentLang].viewOrder;
  checkoutBtn.disabled = totalItems === 0;
}

function updateModalStaticText() {
  const modalTitle = document.getElementById('modal-title');
  const totalLabel = document.getElementById('modal-total-label');
  const sendBtn = document.getElementById('send-kitchen-btn');

  if (modalTitle) modalTitle.textContent = translations[currentLang].yourOrder;
  if (totalLabel) totalLabel.textContent = translations[currentLang].total;
  if (sendBtn) sendBtn.textContent = translations[currentLang].sendKitchen;
}

function openCartModal() {
  if (cart.length === 0) return;
  renderCartModal();
  const cartModal = document.getElementById('cart-modal');
  if (cartModal) cartModal.removeAttribute('hidden');
}

function closeCartModal() {
  const cartModal = document.getElementById('cart-modal');
  if (cartModal) cartModal.setAttribute('hidden', '');
}

function renderCartModal() {
  const modalList = document.getElementById('cart-items-list');
  const modalTotalPrice = document.getElementById('modal-total-price');
  
  if (!modalList) return;

  modalList.innerHTML = '';

  if (cart.length === 0) {
    modalList.innerHTML = `<p style="text-align: center; color: #64748b; padding: 1rem;">${translations[currentLang].emptyCart}</p>`;
    if (modalTotalPrice) modalTotalPrice.textContent = '0.00 €';
    return;
  }

  cart.forEach((item, index) => {
    let itemName = 'Item';
    if (item.name && item.name[currentLang]) {
      itemName = item.name[currentLang];
    } else if (item[currentLang] && item[currentLang].name) {
      itemName = item[currentLang].name;
    } else if (typeof item.name === 'string') {
      itemName = item.name;
    }

    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <span class="cart-row-title">${itemName}</span>
      <span class="cart-row-price">${item.price.toFixed(2)} €</span>
      <button class="remove-item-btn" type="button" onclick="removeFromCart(${index})">${translations[currentLang].remove}</button>
    `;
    modalList.appendChild(row);
  });

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  if (modalTotalPrice) modalTotalPrice.textContent = `${totalPrice} €`;
}

// Event Delegation for dynamic add buttons
document.addEventListener('click', (e) => {
  const addBtn = e.target.closest('.add-btn');
  const addBtnSm = e.target.closest('.add-btn-sm');

  if (addBtn) {
    const itemId = addBtn.getAttribute('data-id');
    const price = parseFloat(addBtn.getAttribute('data-price'));
    const name = addBtn.getAttribute('data-name');
    addToCart(itemId, null, price, name);
  } else if (addBtnSm) {
    const itemId = addBtnSm.getAttribute('data-id');
    const type = addBtnSm.getAttribute('data-type');
    const price = parseFloat(addBtnSm.getAttribute('data-price'));
    const name = addBtnSm.getAttribute('data-name');
    addToCart(itemId, type, price, name);
  }
});

// ==================== BACKEND CONNECTION ====================

// UPDATED FOR RENDER: Use relative paths so it works on the same domain
const API_URL = '/api'; 
let socket = null;
let currentTrackingOrderId = null;
let trackingUpdateInterval = null;

// Initialize socket connection
function connectToServer() {
    try {
        if (typeof io !== 'undefined') {
            // UPDATED FOR RENDER: Connect to the same domain (no hardcoded URL)
            socket = io({
                path: '/socket.io/',
                transports: ['websocket', 'polling']
            });

            socket.on('connect', () => {
                console.log('✅ Connected to server');
            });

            socket.on('orderConfirmed', (data) => {
                showOrderConfirmation(data.orderNumber, data.orderId);
                cart = [];
                updateCartBar();
                closeCartModal();
                // Reload table orders if table is assigned
                if (currentTableNumber > 0) {
                    setTimeout(loadTableOrders, 1000);
                }
            });

            socket.on('orderError', (data) => {
                alert(`❌ Error: ${data.error}`);
            });

            socket.on('connect_error', (error) => {
                console.warn('⚠️ Connection error:', error);
            });

            // ===== ORDER STATUS UPDATES - FIXED =====
            socket.on('orderStatusUpdated', (data) => {
                console.log('🔄 Order status updated:', data);
                
                // 1. Update tracking modal if open
                const trackingModal = document.getElementById('tracking-modal');
                if (!trackingModal.hasAttribute('hidden') && currentTrackingOrderId === data.orderId) {
                    fetchOrderStatus(data.orderId);
                }
                
                // 2. Update the confirmation message if the confirmation popup is showing the same order
                const confirmation = document.getElementById('order-confirmation');
                if (!confirmation.hasAttribute('hidden')) {
                    const messageEl = document.getElementById('confirmation-message');
                    if (messageEl) {
                        const statusLabels = {
                            pending: '⏳ Your order is pending...',
                            preparing: '👨‍🍳 Your order is being prepared!',
                            ready: '🍽️ Your order is ready to serve!',
                            served: '✅ Your order has been served! Enjoy!'
                        };
                        messageEl.textContent = statusLabels[data.status] || 'Your order is being processed.';
                    }
                }
                
                // 3. Reload table orders if this is a table order
                if (currentTableNumber > 0) {
                    loadTableOrders();
                }
                
                // 4. Update the tracking modal if it's open (even if it's a different order, refresh list)
                const trackingModal2 = document.getElementById('tracking-modal');
                if (!trackingModal2.hasAttribute('hidden')) {
                    // If we have a current tracking ID, refresh it
                    if (currentTrackingOrderId) {
                        fetchOrderStatus(currentTrackingOrderId);
                    }
                }
            });
            
            socket.on('orderReceived', function(order) {
                console.log('📦 New order received in tracking:', order);
                // If order is for this table, reload
                if (order.tableNumber === currentTableNumber) {
                    loadTableOrders();
                }
            });
        } else {
            console.warn('⚠️ Socket.io not loaded');
        }
    } catch (error) {
        console.error('Socket error:', error);
    }
}

// ==================== ORDER TRACKING ====================

// Show order confirmation
function showOrderConfirmation(orderNumber, orderId) {
    const confirmation = document.getElementById('order-confirmation');
    const orderNumEl = document.getElementById('confirmation-order-number');
    const messageEl = document.getElementById('confirmation-message');
    
    orderNumEl.textContent = `Order #${orderNumber}`;
    messageEl.textContent = 'Your order is being prepared. You can track its status below.';
    
    currentTrackingOrderId = orderId;
    
    const trackBtn = document.getElementById('track-order-btn');
    const newTrackBtn = trackBtn.cloneNode(true);
    trackBtn.parentNode.replaceChild(newTrackBtn, trackBtn);
    newTrackBtn.addEventListener('click', function() {
        openTrackingModal(orderId);
        document.getElementById('order-confirmation').setAttribute('hidden', '');
    });
    
    const closeBtn = document.getElementById('close-confirmation-btn');
    const newCloseBtn = closeBtn.cloneNode(true);
    closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
    newCloseBtn.addEventListener('click', function() {
        document.getElementById('order-confirmation').setAttribute('hidden', '');
    });
    
    confirmation.removeAttribute('hidden');
}

// Open tracking modal
function openTrackingModal(orderId) {
    const modal = document.getElementById('tracking-modal');
    modal.removeAttribute('hidden');
    fetchOrderStatus(orderId);
    if (trackingUpdateInterval) {
        clearInterval(trackingUpdateInterval);
    }
    trackingUpdateInterval = setInterval(function() {
        fetchOrderStatus(orderId);
    }, 5000);
}

// Close tracking modal
function closeTrackingModal() {
    const modal = document.getElementById('tracking-modal');
    modal.setAttribute('hidden', '');
    if (trackingUpdateInterval) {
        clearInterval(trackingUpdateInterval);
        trackingUpdateInterval = null;
    }
    currentTrackingOrderId = null;
}

// Fetch order status - UPDATED
async function fetchOrderStatus(orderId) {
    if (!orderId) return;
    
    try {
        console.log('📡 Fetching order status for:', orderId);
        // UPDATED FOR RENDER: Use relative API URL
        const response = await fetch(`${API_URL}/orders/${orderId}`);
        const data = await response.json();
        
        if (data.success && data.order) {
            console.log('📋 Order data received:', data.order.status);
            renderTrackingModal(data.order);
        } else {
            console.error('Failed to fetch order:', data.error);
        }
    } catch (error) {
        console.error('Error fetching order:', error);
    }
}

// Render tracking modal - UPDATED
function renderTrackingModal(order) {
    const container = document.getElementById('tracking-content');
    if (!order) {
        container.innerHTML = `<div style="text-align:center;padding:2rem;color:#94a3b8;">⏳ Loading order details...</div>`;
        return;
    }
    
    console.log('🎨 Rendering tracking modal for order:', order.orderNumber, 'Status:', order.status);
    
    const itemsHTML = (order.items || []).map(item => `
        <li>
            <span>${item.quantity || 1}x ${item.name}</span>
            <span>€${(item.price * (item.quantity || 1)).toFixed(2)}</span>
        </li>
    `).join('');
    
    const statusLabels = {
        pending: '🟡 Pending',
        preparing: '🔵 Preparing',
        ready: '🟢 Ready',
        served: '⚪ Served'
    };
    
    const steps = ['pending', 'preparing', 'ready', 'served'];
    const currentStep = steps.indexOf(order.status);
    const stepLabels = {
        pending: '📝 Order Received',
        preparing: '👨‍🍳 Being Prepared',
        ready: '🍽️ Ready to Serve',
        served: '✅ Completed'
    };
    const stepEmojis = {
        pending: '📝',
        preparing: '👨‍🍳',
        ready: '🍽️',
        served: '✅'
    };
    
    const progressHTML = steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const statusClass = isCompleted ? 'completed' : (isActive ? 'active' : '');
        return `
            <div class="step ${statusClass}">
                <div class="step-icon">${isCompleted ? '✅' : (isActive ? stepEmojis[step] : '○')}</div>
                <span class="step-label">${stepLabels[step]}</span>
            </div>
        `;
    }).join('');
    
    let estimateTime = '';
    if (order.status === 'pending') estimateTime = '~10-15 minutes';
    else if (order.status === 'preparing') estimateTime = '~5-10 minutes';
    else if (order.status === 'ready') estimateTime = 'Ready now! 🍽️';
    else if (order.status === 'served') estimateTime = 'Completed! ✅';
    
    const statusColor = {
        pending: '#facc15',
        preparing: '#3b82f6',
        ready: '#22c55e',
        served: '#6b7280'
    };
    
    // Get the current time to show when the order was placed
    const orderTime = new Date(order.orderTime);
    const timeStr = orderTime.toLocaleTimeString();
    const dateStr = orderTime.toLocaleDateString();
    
    container.innerHTML = `
        <div class="tracking-order-header">
            <span class="tracking-order-number">#${order.orderNumber}</span>
            <span class="tracking-status-badge ${order.status}" style="background: ${statusColor[order.status]}; color: ${order.status === 'pending' ? '#000' : '#fff'}">
                ${statusLabels[order.status] || order.status}
            </span>
        </div>
        <div class="tracking-details">
            <span>📋 Table: ${order.tableNumber || 'Takeout'}</span>
            <span>🕐 ${dateStr} ${timeStr}</span>
        </div>
        <div class="tracking-progress">
            <div class="progress-steps">${progressHTML}</div>
        </div>
        <div class="tracking-estimate">
            <div class="estimate-label">⏱️ Estimated Time</div>
            <div class="estimate-time">${estimateTime}</div>
        </div>
        <ul class="tracking-items">${itemsHTML}</ul>
        <div class="tracking-total">Total: €${order.totalAmount.toFixed(2)}</div>
        ${order.specialRequests ? `<p style="color: #94a3b8; font-size: 0.85rem; margin: 0.5rem 0;">📝 Notes: ${order.specialRequests}</p>` : ''}
        <div class="tracking-actions">
            <button class="btn-close-tracking" onclick="closeTrackingModal()">Close</button>
        </div>
    `;
}

// ==================== TABLE ORDERS ====================

let currentTableNumber = 0;
let tableOrders = [];
let tableOrdersLoaded = false;

// Get table number from URL
function getTableNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    const table = urlParams.get('table');
    return table ? parseInt(table) : 0;
}

// Initialize table
function initTable() {
    currentTableNumber = getTableNumber();
    const badge = document.getElementById('table-badge');
    if (badge) {
        badge.textContent = currentTableNumber > 0 ? `Table #${currentTableNumber}` : 'Takeout';
    }
    
    // Show table orders button if table is assigned
    const tableOrdersBtn = document.getElementById('table-orders-btn');
    if (tableOrdersBtn && currentTableNumber > 0) {
        tableOrdersBtn.style.display = 'inline-block';
        // Load orders for this table
        loadTableOrders();
        // Auto-refresh every 15 seconds
        setInterval(loadTableOrders, 15000);
    }
}

// Load orders for current table
async function loadTableOrders() {
    if (currentTableNumber <= 0) return;
    
    try {
        // UPDATED FOR RENDER: Use relative API URL
        const response = await fetch(`${API_URL}/orders`);
        const data = await response.json();
        
        if (data.success && data.orders) {
            // Filter orders for this table
            tableOrders = data.orders.filter(order => 
                order.tableNumber === currentTableNumber
            );
            
            // Update button badge
            updateTableOrdersBadge();
            
            // If modal is open, refresh the list
            const modal = document.getElementById('table-orders-modal');
            if (!modal.hasAttribute('hidden')) {
                renderTableOrders();
            }
            
            tableOrdersLoaded = true;
        }
    } catch (error) {
        console.error('Error loading table orders:', error);
    }
}

// Update table orders badge
function updateTableOrdersBadge() {
    const btn = document.getElementById('table-orders-btn');
    if (!btn) return;
    
    const activeOrders = tableOrders.filter(o => 
        ['pending', 'preparing', 'ready'].includes(o.status)
    );
    
    if (activeOrders.length > 0) {
        btn.classList.add('has-orders');
        btn.textContent = `📋 ${activeOrders.length} Order${activeOrders.length > 1 ? 's' : ''}`;
    } else {
        btn.classList.remove('has-orders');
        btn.textContent = '📋 Table Orders';
    }
}

// Open table orders modal
function openTableOrdersModal() {
    const modal = document.getElementById('table-orders-modal');
    modal.removeAttribute('hidden');
    renderTableOrders();
}

// Close table orders modal
function closeTableOrdersModal() {
    const modal = document.getElementById('table-orders-modal');
    modal.setAttribute('hidden', '');
}

// Render table orders
function renderTableOrders() {
    const container = document.getElementById('table-orders-list');
    
    if (tableOrders.length === 0) {
        container.innerHTML = `
            <div class="no-table-orders">
                <span class="emoji">🍽️</span>
                No orders yet for Table #${currentTableNumber}
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">
                    Scan the QR code again to place a new order.
                </p>
            </div>
        `;
        return;
    }
    
    // Sort orders by time (newest first)
    const sortedOrders = [...tableOrders].sort((a, b) => 
        new Date(b.orderTime) - new Date(a.orderTime)
    );
    
    const statusLabels = {
        pending: '🟡 Pending',
        preparing: '🔵 Preparing',
        ready: '🟢 Ready',
        served: '⚪ Served'
    };
    
    container.innerHTML = sortedOrders.map(order => {
        const itemsPreview = (order.items || []).map(item => 
            `${item.quantity || 1}x ${item.name}`
        ).join(', ');
        
        const isActive = ['pending', 'preparing', 'ready'].includes(order.status);
        
        return `
            <div class="table-order-item ${isActive ? 'active-order' : ''}" 
                 onclick="trackOrderById('${order._id}')">
                <div class="order-header">
                    <span class="order-number">#${order.orderNumber}</span>
                    <span class="order-status ${order.status}">${statusLabels[order.status] || order.status}</span>
                </div>
                <div class="order-time">
                    🕐 ${new Date(order.orderTime).toLocaleString()}
                </div>
                <div class="order-items-preview">
                    ${itemsPreview}
                </div>
                <div class="order-total">
                    Total: €${order.totalAmount.toFixed(2)}
                </div>
                ${isActive ? `<div style="font-size: 0.7rem; color: var(--color-accent-yellow); margin-top: 0.3rem;">⏳ In progress...</div>` : ''}
            </div>
        `;
    }).join('');
}

// Track order by ID (for table orders)
function trackOrderById(orderId) {
    // Close table orders modal
    closeTableOrdersModal();
    // Open tracking modal
    openTrackingModal(orderId);
}

// Send order to backend
async function sendOrderToKitchen() {
    if (cart.length === 0) {
        alert(translations[currentLang].emptyCart);
        return;
    }

    const badgeText = document.getElementById('table-badge').textContent;
    const tableNumber = parseInt(badgeText.replace(/[^0-9]/g, '')) || 0;
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    const orderData = {
        items: cart.map(item => ({
            name: item.name[currentLang] || item.name,
            price: item.price,
            quantity: 1
        })),
        tableNumber: tableNumber,
        totalAmount: totalAmount,
        customerName: '',
        specialRequests: ''
    };

    try {
        if (socket && socket.connected) {
            socket.emit('newOrder', orderData);
        } else {
            const response = await fetch(`${API_URL}/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });
            const data = await response.json();
            if (data.success) {
                showOrderConfirmation(data.orderNumber, data.orderId);
                cart = [];
                updateCartBar();
                closeCartModal();
                if (currentTableNumber > 0) {
                    setTimeout(loadTableOrders, 1000);
                }
            } else {
                throw new Error(data.error || 'Failed to send order');
            }
        }
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Failed to send order. Please try again.');
    }
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Page loaded, initializing...');
    
    // Initialize table
    initTable();
    
    // Language buttons
    const enBtn = document.getElementById('lang-en');
    const itBtn = document.getElementById('lang-it');
    if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
    if (itBtn) itBtn.addEventListener('click', () => setLanguage('it'));

    // Cart button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCartModal);

    // Close modal button
    const closeModalBtn = document.getElementById('close-modal-btn');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeCartModal);

    // Close modal on overlay click
    const modalOverlay = document.getElementById('cart-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeCartModal();
        });
    }

    // Send to Kitchen button
    const sendKitchenBtn = document.getElementById('send-kitchen-btn');
    if (sendKitchenBtn) {
        const newBtn = sendKitchenBtn.cloneNode(true);
        sendKitchenBtn.parentNode.replaceChild(newBtn, sendKitchenBtn);
        newBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sendOrderToKitchen();
        });
    }

    // Close tracking modal button
    const closeTrackingBtn = document.getElementById('close-tracking-btn');
    if (closeTrackingBtn) {
        closeTrackingBtn.addEventListener('click', closeTrackingModal);
    }

    // Close tracking modal on overlay click
    const trackingModal = document.getElementById('tracking-modal');
    if (trackingModal) {
        trackingModal.addEventListener('click', function(e) {
            if (e.target === trackingModal) closeTrackingModal();
        });
    }
    
    // Table orders button
    const tableOrdersBtn = document.getElementById('table-orders-btn');
    if (tableOrdersBtn) {
        tableOrdersBtn.addEventListener('click', openTableOrdersModal);
    }
    
    // Close table orders modal
    const closeTableOrdersBtn = document.getElementById('close-table-orders-btn');
    if (closeTableOrdersBtn) {
        closeTableOrdersBtn.addEventListener('click', closeTableOrdersModal);
    }
    
    // Close table orders on overlay click
    const tableOrdersModal = document.getElementById('table-orders-modal');
    if (tableOrdersModal) {
        tableOrdersModal.addEventListener('click', function(e) {
            if (e.target === tableOrdersModal) closeTableOrdersModal();
        });
    }

    // Socket connection
    connectToServer();

    // Set default language
    setLanguage('it');
    
    console.log('✅ Initialization complete!');
});

// Close tracking with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeTrackingModal();
        closeTableOrdersModal();
    }
});
