(function () {
    "use strict";

    var root = document.documentElement;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var dict = window.I18N || { pt: {}, en: {} };
    var lang = "pt";

    function $(sel, ctx) { return (ctx || document).querySelector(sel); }
    function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

    function storage(key, value) {
        try {
            if (value === undefined) return localStorage.getItem(key);
            localStorage.setItem(key, value);
        } catch (e) { return null; }
    }

    function t(key) {
        return (dict[lang] && dict[lang][key]) || dict.pt[key] || "";
    }

    /* ------------------------------------------------------------------
       Idioma
       ------------------------------------------------------------------ */
    // O HTML já está em português: guardamos o original para poder voltar.
    var original = new Map();

    $$("[data-i18n]").forEach(function (el) { original.set(el, { text: el.textContent }); });
    $$("[data-i18n-html]").forEach(function (el) { original.set(el, { html: el.innerHTML }); });
    $$("[data-i18n-attr]").forEach(function (el) {
        var saved = original.get(el) || {};
        saved.attrs = {};
        el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
            var name = pair.split(":")[0].trim();
            saved.attrs[name] = el.getAttribute(name);
        });
        original.set(el, saved);
    });

    function translate(el, key, fallback) {
        return lang === "pt" ? fallback : (dict.en[key] || fallback);
    }

    function applyLanguage(next) {
        lang = next === "en" ? "en" : "pt";
        root.lang = lang === "en" ? "en" : "pt-BR";
        document.title = t("meta.title");

        $$("[data-i18n]").forEach(function (el) {
            el.textContent = translate(el, el.getAttribute("data-i18n"), original.get(el).text);
        });
        $$("[data-i18n-html]").forEach(function (el) {
            el.innerHTML = translate(el, el.getAttribute("data-i18n-html"), original.get(el).html);
        });
        $$("[data-i18n-attr]").forEach(function (el) {
            var saved = original.get(el).attrs;
            el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
                var parts = pair.split(":");
                var name = parts[0].trim();
                el.setAttribute(name, translate(el, parts[1].trim(), saved[name]));
            });
        });

        $(".lang-current").textContent = lang === "en" ? "en-US" : "pt-BR";
        $$(".lang-menu [data-lang]").forEach(function (btn) {
            btn.setAttribute("aria-selected", String(btn.dataset.lang === lang));
        });

        var cv = $(".photo-cv");
        if (cv) cv.href = lang === "en" ? cv.dataset.cvEn : cv.dataset.cvPt;

        var subject = $('#contact-form input[name="subject"]');
        if (subject) subject.value = t("form.subject");

        renderPeriods();
        updateSeeMoreLabel();
        storage("pn-lang", lang);
    }

    function detectLanguage() {
        var param = new URLSearchParams(location.search).get("lang");
        if (param === "en" || param === "pt") return param;
        var saved = storage("pn-lang");
        if (saved === "en" || saved === "pt") return saved;
        return /^pt\b/i.test(navigator.language || "pt") ? "pt" : "en";
    }

    // Seletor de idioma (dropdown)
    var langToggle = $(".lang-toggle");
    var langMenu = $(".lang-menu");

    function setLangMenu(open) {
        langMenu.hidden = !open;
        langToggle.setAttribute("aria-expanded", String(open));
        if (open) {
            var current = $('[aria-selected="true"]', langMenu);
            if (current) current.focus();
        }
    }

    langToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        setLangMenu(langMenu.hidden);
    });
    $$("[data-lang]", langMenu).forEach(function (btn) {
        btn.addEventListener("click", function () {
            applyLanguage(btn.dataset.lang);
            setLangMenu(false);
            langToggle.focus();
        });
    });
    langMenu.addEventListener("keydown", function (e) {
        var items = $$("[data-lang]", langMenu);
        var i = items.indexOf(document.activeElement);
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            items[(i + (e.key === "ArrowDown" ? 1 : items.length - 1)) % items.length].focus();
        }
    });

    /* ------------------------------------------------------------------
       Datas (períodos e progresso do curso)
       ------------------------------------------------------------------ */
    function parseMonth(value) {
        if (!value) return new Date();
        var p = value.split("-");
        return new Date(Number(p[0]), Number(p[1]) - 1, 1);
    }

    function formatMonth(date) {
        var locale = lang === "en" ? "en-US" : "pt-BR";
        var month = new Intl.DateTimeFormat(locale, { month: "short" }).format(date).replace(".", "");
        return month + " " + date.getFullYear();
    }

    function renderPeriods() {
        $$(".period").forEach(function (el) {
            var start = formatMonth(parseMonth(el.dataset.start));
            var end = el.dataset.end ? formatMonth(parseMonth(el.dataset.end)) : t("period.present");
            el.textContent = start + " - " + end;
        });
    }

    function renderProgress() {
        $$(".progress").forEach(function (el) {
            var start = parseMonth(el.dataset.start).getTime();
            var end = parseMonth(el.dataset.end).getTime();
            var pct = Math.max(0, Math.min(1, (Date.now() - start) / (end - start)));
            el.style.setProperty("--progress", Math.round(pct * 100) + "%");
        });
    }

    /* ------------------------------------------------------------------
       Menu mobile
       ------------------------------------------------------------------ */
    var menuToggle = $(".menu-toggle");
    var navLinks = $("#nav-links");

    function setMenu(open) {
        navLinks.classList.toggle("is-open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
    }

    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        setMenu(!navLinks.classList.contains("is-open"));
    });
    $$("a", navLinks).forEach(function (a) {
        a.addEventListener("click", function () { setMenu(false); });
    });

    document.addEventListener("click", function (e) {
        if (!langMenu.hidden && !langMenu.contains(e.target)) setLangMenu(false);
        if (navLinks.classList.contains("is-open") && !navLinks.contains(e.target)) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        if (!langMenu.hidden) { setLangMenu(false); langToggle.focus(); }
        if (navLinks.classList.contains("is-open")) { setMenu(false); menuToggle.focus(); }
    });

    /* ------------------------------------------------------------------
       Experiência: só um cargo aberto por vez
       ------------------------------------------------------------------ */
    var jobs = $$(".job");
    jobs.forEach(function (job) {
        job.addEventListener("toggle", function () {
            if (!job.open) return;
            jobs.forEach(function (other) {
                if (other !== job && other.open) other.open = false;
            });
        });
    });

    /* ------------------------------------------------------------------
       Ver mais / Recolher (formação e certificações)
       ------------------------------------------------------------------ */
    var seeMore = $(".see-more");
    var more = $("#more-academic");

    function updateSeeMoreLabel() {
        var open = seeMore.getAttribute("aria-expanded") === "true";
        $(".see-more-label", seeMore).textContent = t(open ? "exp.less" : "exp.more");
    }

    seeMore.addEventListener("click", function () {
        var open = seeMore.getAttribute("aria-expanded") !== "true";
        seeMore.setAttribute("aria-expanded", String(open));
        more.hidden = !open;
        updateSeeMoreLabel();
        if (open) renderProgress();
    });

    /* ------------------------------------------------------------------
       Animações de entrada e contadores
       ------------------------------------------------------------------ */
    function countUp(el) {
        var target = Number(el.dataset.count);
        if (reduceMotion || target <= 1) { el.textContent = target; return; }
        var duration = 1400;
        var startTime = null;
        function step(now) {
            if (!startTime) startTime = now;
            var p = Math.min(1, (now - startTime) / duration);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
        }
        el.textContent = "0";
        requestAnimationFrame(step);
    }

    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-in");
                $$("[data-count]", entry.target).forEach(countUp);
                io.unobserve(entry.target);
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
        $$(".reveal").forEach(function (el) { io.observe(el); });
    } else {
        $$(".reveal").forEach(function (el) { el.classList.add("is-in"); });
    }

    /* ------------------------------------------------------------------
       Parallax do prisma + botão "voltar ao topo"
       ------------------------------------------------------------------ */
    var hero = $(".hero");
    var toTop = $(".to-top");
    var ticking = false;

    function onScroll() {
        var y = window.scrollY;
        if (!reduceMotion && y < hero.offsetHeight) {
            hero.style.setProperty("--parallax", (y * 0.25).toFixed(1) + "px");
        }
        toTop.classList.toggle("is-visible", y > window.innerHeight * 0.9);
        ticking = false;
    }
    window.addEventListener("scroll", function () {
        if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });

    /* ------------------------------------------------------------------
       Copiar e-mail
       ------------------------------------------------------------------ */
    $$(".copy-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var text = btn.dataset.copy;
            var done = function () {
                var label = btn.getAttribute("aria-label");
                btn.classList.add("is-done");
                btn.setAttribute("aria-label", t("contact.copied"));
                setTimeout(function () {
                    btn.classList.remove("is-done");
                    btn.setAttribute("aria-label", label);
                }, 1800);
            };
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(done, function () { location.href = "mailto:" + text; });
            } else {
                location.href = "mailto:" + text;
            }
        });
    });

    /* ------------------------------------------------------------------
       Formulário de contato (Web3Forms)
       ------------------------------------------------------------------ */
    var form = $("#contact-form");
    var status = $(".form-status", form);
    var submit = $(".submit", form);

    function setStatus(message, kind) {
        status.textContent = message;
        status.className = "form-status" + (kind ? " is-" + kind : "");
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var valid = true;
        $$("input[required], textarea[required]", form).forEach(function (field) {
            var ok = field.value.trim() !== "" && field.checkValidity();
            field.closest(".field").classList.toggle("is-invalid", !ok);
            if (!ok && valid) { field.focus(); valid = false; }
        });
        if (!valid) { setStatus(t("form.invalid"), "error"); return; }

        var label = $(".submit-label", submit);
        var idle = label.textContent;
        submit.disabled = true;
        label.textContent = t("form.sending");
        setStatus("");

        fetch(form.action, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(form)))
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
                if (!data.success) throw new Error(data.message);
                form.reset();
                setStatus(t("form.ok"), "ok");
            })
            .catch(function () { setStatus(t("form.error"), "error"); })
            .then(function () {
                submit.disabled = false;
                label.textContent = idle;
                var subject = $('input[name="subject"]', form);
                if (subject) subject.value = t("form.subject");
            });
    });

    $$("input, textarea", form).forEach(function (field) {
        field.addEventListener("input", function () {
            field.closest(".field") && field.closest(".field").classList.remove("is-invalid");
        });
    });

    /* ------------------------------------------------------------------
       Inicialização
       ------------------------------------------------------------------ */
    $("#year").textContent = new Date().getFullYear();
    applyLanguage(detectLanguage());
    renderProgress();
    onScroll();
})();
