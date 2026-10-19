/* ============================================================
   TheosWorld App Store — directory logic (search, filters, sort)
   ============================================================ */
(function () {
  "use strict";

  var APPS = window.THEOSWORLD_APPS || [];

  var grid = document.getElementById("app-grid");
  var searchInput = document.getElementById("search");
  var chipsEl = document.getElementById("category-chips");
  var sortSel = document.getElementById("sort");
  var metaEl = document.getElementById("results-meta");

  if (!grid) return;

  // ---- State (seeded from the URL so filters are shareable) ----
  var params = new URLSearchParams(window.location.search);
  var state = {
    q: params.get("q") || "",
    cat: params.get("cat") || "All",
    sort: params.get("sort") || "featured"
  };

  searchInput.value = state.q;
  sortSel.value = state.sort;

  // ---- Helpers ----
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function categoryCounts() {
    var counts = {};
    APPS.forEach(function (a) {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }

  function sizeInMb(s) {
    var n = parseFloat(s) || 0;
    return /gb/i.test(s) ? n * 1024 : n;
  }

  function haystack(a) {
    return [a.name, a.tagline, a.description, a.category]
      .concat(a.tags || [])
      .join(" ")
      .toLowerCase();
  }

  function filtered() {
    var tokens = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    var list = APPS.filter(function (a) {
      if (state.cat !== "All" && a.category !== state.cat) return false;
      if (!tokens.length) return true;
      var hay = haystack(a);
      return tokens.every(function (t) { return hay.indexOf(t) !== -1; });
    });

    var sorters = {
      featured: function (a, b) {
        if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
        return a.name.localeCompare(b.name);
      },
      name: function (a, b) { return a.name.localeCompare(b.name); },
      newest: function (a, b) { return (b.updated || "").localeCompare(a.updated || ""); },
      size: function (a, b) { return sizeInMb(a.size) - sizeInMb(b.size); }
    };
    return list.sort(sorters[state.sort] || sorters.featured);
  }

  function syncUrl() {
    var p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.cat !== "All") p.set("cat", state.cat);
    if (state.sort !== "featured") p.set("sort", state.sort);
    var qs = p.toString();
    window.history.replaceState(null, "", qs ? "?" + qs : window.location.pathname);
  }

  // ---- Rendering ----
  function renderChips() {
    var counts = categoryCounts();
    var cats = ["All"].concat(Object.keys(counts).sort());
    chipsEl.innerHTML = cats.map(function (c) {
      var n = c === "All" ? APPS.length : counts[c];
      return '<button type="button" class="chip' + (state.cat === c ? " active" : "") +
        '" data-cat="' + esc(c) + '">' + esc(c) +
        '<span class="count">' + n + "</span></button>";
    }).join("");
  }

  function cardHtml(a) {
    return '<a class="card" href="apps/' + esc(a.slug) + '/">' +
      '<div class="card-top">' +
        '<div class="app-icon ' + esc(a.color || "ic-blue") + '">' + esc(a.icon || "📦") + "</div>" +
        "<div>" +
          '<h3 class="card-title">' + esc(a.name) + "</h3>" +
          '<div class="card-category">' + esc(a.category) + "</div>" +
        "</div>" +
      "</div>" +
      '<p class="card-desc">' + esc(a.tagline || a.description) + "</p>" +
      '<div class="tag-list">' + (a.tags || []).map(function (t) {
        return '<span class="tag">' + esc(t) + "</span>";
      }).join("") + "</div>" +
      '<div class="card-foot">' +
        "<span>v" + esc(a.version) + " · " + esc(a.size) + "</span>" +
        (a.featured ? '<span class="badge">Featured</span>' : "") +
      "</div>" +
    "</a>";
  }

  function render() {
    var list = filtered();
    renderChips();

    if (!list.length) {
      grid.innerHTML = '<div class="empty">No apps match <strong>' +
        esc(state.q || state.cat) + "</strong>. Try a different search or category.</div>";
    } else {
      grid.innerHTML = list.map(cardHtml).join("");
    }

    var filtering = state.q || state.cat !== "All";
    metaEl.innerHTML =
      "<span>Showing " + list.length + " of " + APPS.length + " apps" +
      (state.cat !== "All" ? " in <strong>" + esc(state.cat) + "</strong>" : "") +
      (state.q ? ' for "<strong>' + esc(state.q) + '</strong>"' : "") +
      "</span>" +
      (filtering ? '<button type="button" class="link-btn" id="clear-filters">Clear filters</button>' : "");

    syncUrl();
  }

  // ---- Events ----
  var debounce;
  searchInput.addEventListener("input", function () {
    clearTimeout(debounce);
    debounce = setTimeout(function () {
      state.q = searchInput.value.trim();
      render();
    }, 120);
  });

  chipsEl.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    state.cat = chip.getAttribute("data-cat");
    render();
  });

  sortSel.addEventListener("change", function () {
    state.sort = sortSel.value;
    render();
  });

  metaEl.addEventListener("click", function (e) {
    if (e.target.id !== "clear-filters") return;
    state.q = "";
    state.cat = "All";
    searchInput.value = "";
    render();
  });

  // "/" focuses search, Escape clears it
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      state.q = "";
      render();
    }
  });

  render();
})();
