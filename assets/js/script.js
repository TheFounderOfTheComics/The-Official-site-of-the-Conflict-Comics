// Small script to wire WhatsApp order buttons and dynamic year
(function(){
  const phone = '923034086168'; // Pakistan country code (92) + number without leading 0
  const base = 'https://wa.me/';

  // Product data: Bro VS Bro 1..15 with editions (prices are shared across all comics)
  const editionPrices = {
    normal: 100,
    coloured: 200,
    special: 250
  };

  // Bro VS Bro series (hard-coded list — explicit titles and descriptions)
  const products = [
    {
      id: 1,
      title: 'Bro VS Bro 1',
      desc: 'The Brothers fight changes everything.',
      img: 'https://picsum.photos/seed/bro1/800/600',
      localBase: 'assets/images/bro1',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 2,
      title: 'Bro VS Bro 2',
      desc: 'The 2 Brothers reunite and continue their battle.',
      img: 'https://picsum.photos/seed/bro2/800/600',
      localBase: 'assets/images/bro2',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 3,
      title: 'Bro VS Bro 3',
      desc: 'An unkown person shows up who stops the fight between the brothers.The Brothers then team up to face the new threat. In the battle between the unkown person and the Brothers, The unkown person took the other brother.',
      img: 'https://picsum.photos/seed/bro3/800/600',
      localBase: 'assets/images/bro3',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 4,
      title: 'Bro VS Bro 4',
      desc: 'The Brother looks to save his brother from the unkown person at all costs.',
      img: 'https://picsum.photos/seed/bro4/800/600',
      localBase: 'assets/images/bro4',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 5,
      title: 'Bro VS Bro 5: The Extreme Battle',
      desc: 'The brother now fights in the secrat base of the unkown person with a terrible surprise at the end.',
      img: 'https://picsum.photos/seed/bro5/800/600',
      localBase: 'assets/images/bro5',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 6,
      title: 'Bro VS Bro 6: the revealed enemy',
      desc: 'The true enemy is now finally found they work together and make the enemy friend.',
      img: 'https://picsum.photos/seed/bro6/800/600',
      localBase: 'assets/images/bro6',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 7,
      title: 'Bro VS Bro 7: Yldis the true enemy',
      desc: 'The Master is found: Yldis!!.',
      img: 'https://picsum.photos/seed/bro7/800/600',
      localBase: 'assets/images/bro7',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 8,
      title: 'Bro VS Bro 8: on the run',
      desc: 'Everyone is being chased ,Yldis whishes there death!!.',
      img: 'https://picsum.photos/seed/bro8/800/600',
      localBase: 'assets/images/bro8',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 9,
      title: 'Bro VS Bro 9: ambushes everywhere',
      desc: 'Yldis strong warrior locates the Brothers and ambushes them .',
      img: 'https://picsum.photos/seed/bro9/800/600',
      localBase: 'assets/images/bro9',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 10,
      title: 'Bro VS Bro 10: fight as a team',
      desc: 'The Brothers unite to fight Yldis strongest warrior, Yldis takes a friends body.',
      img: 'https://picsum.photos/seed/bro10/800/600',
      localBase: 'assets/images/bro10',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 11,
      title: 'Bro VS Bro 11: a body of its own',
      desc: 'The brothers fight to get there friends body back.',
      img: 'https://picsum.photos/seed/bro11/800/600',
      localBase: 'assets/images/bro11',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 12,
      title: 'Bro VS Bro 12: the fight for the world',
      desc: 'Everyone must contribute to stop Yldis and win the fight of the world.',
      img: 'https://picsum.photos/seed/bro12/800/600',
      localBase: 'assets/images/bro12',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 13,
      title: 'Bro VS Bro 13: the only way to beat him',
      desc: 'There is only one way to beat Yldis. What will it be?...',
      img: 'https://picsum.photos/seed/bro13/800/600',
      localBase: 'assets/images/bro13',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 14,
      title: 'Bro VS Bro 14: the final battle',
      desc: 'the bros Put up a fight to the end against Yldis .',
      img: 'https://picsum.photos/seed/bro14/800/600',
      localBase: 'assets/images/bro14',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    },
    {
      id: 15,
      title: 'Bro VS Bro 15: celebration and the end',
      desc: 'The battles are finally over. Yeldis is ...',
      img: 'https://picsum.photos/seed/bro15/800/600',
      localBase: 'assets/images/bro15',
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    }
  ];

  // Add Code War series
  products.push({
    id: 23,
    title: 'Code War Chapter 1: A.M',
    desc: 'An AI is made by a company to make the world a better place.', 
    img: 'https://picsum.photos/seed/code1/800/600',
    localBase: 'assets/images/code1',
    editions: {
      normal: editionPrices.normal,
      coloured: editionPrices.coloured,
      special: editionPrices.special
    }
  });

  // Add Sam The Crazy World series (issues 1-7) as products
  const samProducts = [
    {
      id: 16,
      title: 'Sam The Crazy World 1: The Entry',
      desc: 'The first issue of Sam The Crazy World — The Entry.',
      img: 'https://picsum.photos/seed/sam1/800/600',
      localBase: 'assets/images/sam1'
    },
    {
      id: 17,
      title: 'Sam The Crazy World 2: The Entry',
      desc: 'The second issue of Sam The Crazy World.',
      img: 'https://picsum.photos/seed/sam2/800/600',
      localBase: 'assets/images/sam2'
    },
    {
      id: 18,
      title: 'Sam The Crazy World 3: The Entry',
      desc: 'The third chapter in Sam\'s adventure.',
      img: 'https://picsum.photos/seed/sam3/800/600',
      localBase: 'assets/images/sam3'
    },
    {
      id: 19,
      title: 'Sam The Crazy World 4: The Entry',
      desc: 'The fourth installment of Sam\'s journey.',
      img: 'https://picsum.photos/seed/sam4/800/600',
      localBase: 'assets/images/sam4'
    },
    {
      id: 20,
      title: 'Sam The Crazy World 5: Water World',
      desc: 'Sam discovers the mysteries of the Water World.',
      img: 'https://picsum.photos/seed/sam5/800/600',
      localBase: 'assets/images/sam5'
    },
    {
      id: 21,
      title: 'Sam The Crazy World 6: Water Guardian',
      desc: 'Sam faces the challenges of becoming a Water Guardian.',
      img: 'https://picsum.photos/seed/sam6/800/600',
      localBase: 'assets/images/sam6'
    },
    {
      id: 22,
      title: 'Sam The Crazy World 7: The Fire World Pt1',
      desc: 'Sam enters the dangerous Fire World in this first part of a new saga.',
      img: 'https://picsum.photos/seed/sam7/800/600',
      localBase: 'assets/images/sam7'
    },
    {
      id: 24,
      title: 'Sam The Crazy World 8: The Fire World Pt2',
      desc: 'The epic conclusion of Sam\'s journey through the Fire World.',
      img: 'https://picsum.photos/seed/sam8/800/600',
      localBase: 'assets/images/sam8'
    },
    {
      id: 25,
      title: 'Sam The Crazy World 9: The Fire Guardian Pt1',
      desc: 'Sam begins his journey to become the Fire Guardian.',
      img: 'https://picsum.photos/seed/sam9/800/600',
      localBase: 'assets/images/sam9'
    },
    {
      id: 26,
      title: 'Sam The Crazy World 10: The Fire Guardian Pt2',
      desc: 'The thrilling conclusion to Sam\'s quest to become the Fire Guardian.',
      img: 'https://picsum.photos/seed/sam10/800/600',
      localBase: 'assets/images/sam10'
    }
    ,
    {
      id: 27,
      title: 'Sam The Crazy World 11: The Bolts World',
      desc: 'Sam explores the Bolts World and meets its mysterious guardian.',
      img: 'https://picsum.photos/seed/sam11/800/600',
      localBase: 'assets/images/sam11'
    },
    {
      id: 28,
      title: 'Sam The Crazy World 12: The Light World',
      desc: 'Sam travels to the Light World and discovers its guardian.',
      img: 'https://picsum.photos/seed/sam12/800/600',
      localBase: 'assets/images/sam12'
    },
    {
      id: 29,
      title: 'Sam The Crazy World 13: The Final World',
      desc: 'The penultimate issue as Sam approaches the Final World.',
      img: 'https://picsum.photos/seed/sam13/800/600',
      localBase: 'assets/images/sam13'
    },
    {
      id: 30,
      title: 'Sam The Crazy World 14: Get All Keys Back',
      desc: 'Sam must recover all keys to reach the ultimate confrontation.',
      img: 'https://picsum.photos/seed/sam14/800/600',
      localBase: 'assets/images/sam14'
    },
    {
      id: 31,
      title: 'Sam The Crazy World 15: The Final Battle and Back Home',
      desc: 'The final battle concludes and Sam returns home.',
      img: 'https://picsum.photos/seed/sam15/800/600',
      localBase: 'assets/images/sam15'
    }
  ];

  // Add all Sam products with shared edition prices
  samProducts.forEach(product => {
    products.push({
      ...product,
      editions: {
        normal: editionPrices.normal,
        coloured: editionPrices.coloured,
        special: editionPrices.special
      }
    });
  });

  // Prefill message template
  function buildMessage(item){
    let msg = `Hi, I would like to order: ${item}. Delivery address: Lahore (delivery available Lahore only). Please confirm availability and price.`;
    return encodeURIComponent(msg);
  }

  // Render products into a target grid element (items is array of product objects)
  function renderProducts(targetId, items){
    const grid = document.getElementById(targetId);
    if(!grid) return;
    grid.innerHTML = '';
    items.forEach(p=>{
      const col = document.createElement('div');
      col.className = 'col-sm-6 col-md-4';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img id="product-img-${p.id}" src="${p.img}" class="card-img-top" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text small flex-grow-1">${p.desc}</p>
            <div class="mt-2">
              <label class="form-label small">Edition</label>
              <select class="form-select form-select-sm edition-select" data-id="${p.id}">
                <option value="normal">Normal — Rs. ${p.editions.normal}</option>
                <option value="coloured">Coloured — Rs. ${p.editions.coloured}</option>
                <option value="special">Special Coloured — Rs. ${p.editions.special}</option>
              </select>
            </div>
            <p class="card-text text-muted mt-2 mb-0">Delivery charges apply based on distance.</p>
            <div class="mt-3 d-grid">
              <a class="btn btn-success order-btn" data-title="${p.title}" data-id="${p.id}" href="#">Order via WhatsApp</a>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(col);

      // After adding to DOM, wire up image fallbacks and edition change handler
      const imgEl = document.getElementById(`product-img-${p.id}`);
      const selectEl = col.querySelector('.edition-select');

      // helper to attempt multiple sources in order
      function setImageSrcForEdition(imgElement, product, editionKey){
        const candidates = [
          `${product.localBase}-${editionKey}.png`,
          `${product.localBase}-${editionKey}.jpg`,
          `${product.localBase}.png`,
          `${product.localBase}.jpg`,
          product.img
        ];
        let i = 0;
        imgElement.onerror = function(){
          i++;
          if(i < candidates.length){
            imgElement.src = candidates[i];
          } else {
            imgElement.onerror = null;
          }
        };
        // start with first candidate
        imgElement.src = candidates[0];
      }

      // initial image according to default select value
      const initialEdition = selectEl ? selectEl.value : 'normal';
      if(imgEl){ setImageSrcForEdition(imgEl, p, initialEdition); }

      // update image when edition changes
      if(selectEl){
        selectEl.addEventListener('change', ()=>{
          const ed = selectEl.value || 'normal';
          if(imgEl) setImageSrcForEdition(imgEl, p, ed);
        });
      }
    });
  }

  // Set hero and order buttons and attach handlers
  document.addEventListener('DOMContentLoaded', ()=>{
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // hero and main order link
    const heroBtn = document.getElementById('whatsapp-hero');
    const orderBtn = document.getElementById('whatsapp-order');
    const heroMsg = encodeURIComponent('Hi, I want to order comics. Delivery to Lahore only.');
    if(heroBtn) heroBtn.href = `${base}${phone}?text=${heroMsg}`;
    if(orderBtn) orderBtn.href = `${base}${phone}?text=${heroMsg}`;

    // render product cards: on homepage render featured (first 3) into featured-grid;
    // on products page render all into products-grid
    if(document.getElementById('featured-grid')){
      // Build featured list: Bro VS Bro 1, Code War Ch1, Sam The Crazy World 1
      const broOne = products.find(p=>p.id===1) || products[0];
      const codeWar = products.find(p=>p.title && p.title.toLowerCase().includes('code war'));
      const sam = products.find(p=>p.title && p.title.toLowerCase().includes('sam the crazy world'));
      const featured = [broOne, codeWar, sam].filter(Boolean);
      renderProducts('featured-grid', featured);
    }
    if(document.getElementById('products-grid')){
      renderProducts('products-grid', products);
    }

    // product order buttons
    const productBtns = document.querySelectorAll('.order-btn');
    productBtns.forEach(btn => {
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const title = btn.dataset.title || 'Comics order';
        const id = btn.dataset.id;
        // find edition for this product
        const select = document.querySelector(`.edition-select[data-id=\"${id}\"]`);
        const editionKey = select ? select.value : 'normal';
        const editionLabel = editionKey === 'normal' ? 'Normal' : (editionKey === 'coloured' ? 'Coloured' : 'Special Coloured');
        const price = select ? (products.find(p=>String(p.id)===String(id)).editions[editionKey]) : editionPrices.normal;
        const msg = buildMessage(`${title} — ${editionLabel} (Rs. ${price})`);
        window.open(`${base}${phone}?text=${msg}`, '_blank');
      });
      // also set href for non-JS fallback
      const title = btn.dataset.title || 'Comics order';
      btn.href = `${base}${phone}?text=${encodeURIComponent('Hi, I want to order: '+title+' (Lahore delivery)')}`;
    });
  });
})();