/* Pattrick Nunes · portfólio v3 */
(function () {
    "use strict";
    var ICONS = [{"name": "Rust", "src": "./assets/icons/tech/plain/rust.svg"}, {"name": "Java", "src": "./assets/icons/tech/plain/java.svg"}, {"name": "C#", "src": "./assets/icons/tech/plain/csharp.svg"}, {"name": "SQL \u00b7 MySQL", "src": "./assets/icons/tech/plain/mysql.svg"}, {"name": "Git", "src": "./assets/icons/tech/plain/git.svg"}, {"name": "ServiceNow", "sym": "i-ticket"}, {"name": "Power Apps", "sym": "i-phone"}, {"name": "HTML", "src": "./assets/icons/tech/plain/html5.svg", "learning": true}, {"name": "CSS", "src": "./assets/icons/tech/plain/css3.svg", "learning": true}, {"name": "React", "src": "./assets/icons/tech/plain/react.svg", "learning": true}];
    var PROJECTS = [{"feature": true, "name": "AgentDeck", "kind": {"pt": "Projeto atual · open source", "en": "Current project · open source"}, "status": "oss", "desc": {"pt": "Um terminal desktop onde agentes de IA trabalham em equipe. Claude Code, Codex, Antigravity e OpenCode rodam lado a lado em abas de terminal reais, conversam entre si com o ask-agent e recebem tarefas isoladas em git worktrees, que você revisa e mescla. 100% em Rust, nativo para Windows e Linux.", "en": "A desktop terminal where AI agents work as a team. Claude Code, Codex, Antigravity and OpenCode run side by side in real terminal tabs, talk to each other through ask-agent and get isolated tasks in git worktrees that you review and merge. 100% Rust, native on Windows and Linux."}, "tags": ["Rust", "egui", "Git worktrees", "Windows · Linux", {"pt": "Licença MIT", "en": "MIT license"}], "href": "https://github.com/pattrickn0/AgentDeck", "shot": true}];
    var ENDPOINT = {"url": "https://api.web3forms.com/submit", "key": "f026d75a-6bb6-426e-abd1-c9342a2428f9"};
    var root = document.documentElement;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var T = {
        en: {
            "pal.open": "Go to… (Ctrl+K)", "pal.short": "Go to…", "pal.ph": "Where do you want to go?", "pal.move": "navigate", "pal.go": "open",
            "pal.nav": "Go to", "pal.actions": "Actions", "pal.links": "Links", "pal.empty": "Nothing found. Try \"email\" or \"experience\".",
            "pal.copy": "Copy email", "pal.copied": "Email copied", "pal.lang": "Ver em português", "pal.agentdeck": "AgentDeck on GitHub",
            "nav.aria": "Sections", "nav.about": "About", "nav.exp": "Experience", "nav.edu": "Education", "nav.proj": "Projects", "nav.contact": "Contact",
            "hero.title": "I solve problems. I\u00a0automate the rest.",
            "hero.lede": "I like understanding how things work. When something breaks, I <strong>dig until I find the cause</strong>. When something repeats, I <strong>turn it into an automated process</strong>.",
            "hero.cta1": "Get to know me", "hero.projects": "See projects",
            "hero.kicker": "Pattrick Nunes · Portfolio",
            "hero.hint": "Move your cursor to pick the color of the light", "hero.hintTouch": "Tap to pick the color of the light",
            "about.kicker": "Who I am", "about.title": "One problem goes in. Many solutions come out.",
                        "about.p1": "I'm studying for a <strong>Bachelor's in Information Systems</strong> at IFF, with technical degrees in IT and in Business Administration.",
            "about.p2": "I've assembled computers, deployed systems in stores, set up auditoriums for events and today I build automations at work. I also build my own tools, like <strong>AgentDeck</strong>.",
            "about.p3": "The common thread is the same: <strong>find the cause and leave the process better than I found it</strong>.",
            "about.sub": "Like the light in the prism up top: every problem that reaches me opens up into steps.",
            "ray1.t": "Investigate", "ray1.d": "Understand the cause before touching anything, whether it's hardware, software, network or process.",
            "ray2.t": "Automate", "ray2.d": "Whatever repeats becomes a process: dashboards, macros and low-code apps.",
            "ray3.t": "Build", "ray3.d": "My own tools when the existing ones don't cut it, like AgentDeck.",
            "ray4.t": "Teach", "ray4.d": "Train people so the solution works day to day.",
            "exp.kicker": "Experience", "exp.title": "Where I've been.", "exp.sub": "From audiovisual to deployments and automation. Open an experience to see the details.",
            "edu.kicker": "Education", "edu.title": "Always learning.",
            "edu.ongoing": "In progress", "edu.degree": "Bachelor's in Information Systems", "edu.done": "of the course timeline",
            "edu.tech": "Technical program", "edu.it": "IT Technician", "edu.adm": "Business Administration Technician",
            "edu.certs": "Certifications",
            "cert.net": "Networking", "cert.oop": "C# · OOP",
            "proj.kicker": "Projects", "proj.title": "What I'm building.",
            "contact.kicker": "Contact", "contact.title": "Let's talk?",
            "contact.sub": "Whether it's an opportunity, a project or a process that needs automating, reach out wherever you prefer.",
            "contact.copy": "Copy", "contact.copied": "Copied", "contact.selected": "Selected · Ctrl+C",
            "f.name": "Name", "f.nameph": "Your name", "f.email": "Email", "f.emailph": "you@company.com",
            "f.topic": "Subject", "f.o1": "Job opportunity", "f.o2": "Project or automation", "f.o3": "Exchange ideas", "f.o4": "Other",
            "f.msg": "Message", "f.msgph": "Tell me a bit about what you have in mind", "f.send": "Send message",
            "f.invalid": "Fill in every field with a valid email.", "f.sending": "Sending…", "f.ok": "Message sent! I’ll get back to you soon.", "f.error": "Couldn’t send right now. Please try again or write to pattrickn0@gmail.com.", "f.subject": "New message from the portfolio",
            "f.proto": "Prototype: nothing is sent from this page. On the live site this form delivers to Pattrick's inbox. For now, write to pattrickn0@gmail.com.",
            "foot.stack": "Tools I use", "foot.learning": "Learning now", "foot.links": "Links", "foot.top": "Back to top",
            "now": "Current", "present": "Present",
            "repo": "View repository", "live": "In use", "wip": "In progress", "oss": "Open source",
            "shot.alt": "AgentDeck screen with Claude, Codex and OpenCode side by side and the task board", "shot.tag": "100% Rust · Windows & Linux"
        },
        pt: {
            "contact.copied": "Copiado", "contact.selected": "Selecionado · Ctrl+C", "pal.nav": "Ir para", "pal.actions": "Ações", "pal.links": "Links", "pal.empty": "Nada encontrado. Tente \"e-mail\" ou \"experiência\".",
            "pal.copy": "Copiar e-mail", "pal.copied": "E-mail copiado", "pal.lang": "View in English", "pal.agentdeck": "AgentDeck no GitHub", "f.invalid": "Preencha todos os campos com um e-mail válido.", "f.sending": "Enviando…", "f.ok": "Mensagem enviada! Respondo em breve.", "f.error": "Não foi possível enviar agora. Tente de novo ou escreva para pattrickn0@gmail.com.", "f.subject": "Nova mensagem pelo portfólio",
            "f.proto": "Protótipo: nada é enviado a partir desta página. No site publicado, este formulário chega ao e-mail do Pattrick. Por enquanto, escreva para pattrickn0@gmail.com.",
            "now": "Atual", "present": "atual", "hero.hintTouch": "Toque para escolher a cor da luz",
            "repo": "Ver repositório", "live": "Em uso", "wip": "Em andamento", "oss": "Open source",
            "shot.alt": "Tela do AgentDeck com Claude, Codex e OpenCode lado a lado e a mesa de tarefas", "shot.tag": "100% Rust · Windows e Linux"
        }
    };

    var JOBS = [
        { start: "2025-10", end: "", co: "Minsait",
          role: { pt: "Analista Help Desk N1", en: "Help Desk Analyst L1" },
          desc: { pt: "Atendimento a usuários via chat e telefone, com foco em resolver no primeiro contato, e criação de ferramentas que deixam a operação mais ágil.", en: "Supporting users via chat and phone, focused on solving at first contact, and building tools that make the operation faster." },
          groups: [
            { t: { pt: "Melhoria contínua e automação", en: "Continuous improvement & automation" }, items: [
                { pt: "Dashboards no ServiceNow para acompanhar filas, volume e indicadores da equipe", en: "ServiceNow dashboards to track queues, volume and team KPIs" },
                { pt: "Macros no ServiceNow que padronizam e agilizam respostas recorrentes", en: "ServiceNow macros that standardize and speed up recurring replies" },
                { pt: "Aplicativo em Power Apps para apoiar a rotina da equipe (em andamento)", en: "A Power Apps app to support the team's routine (in progress)" },
                { pt: "Apoio na estruturação e gestão do fluxo de backlog", en: "Helped structure and manage the backlog workflow" } ] },
            { t: { pt: "Resultados", en: "Results" }, items: [
                { pt: "CSAT acima de 95% em todos os meses, com meses de 100% de satisfação", en: "CSAT above 95% every month, with months at 100% satisfaction" },
                { pt: "Média acima de 100 pesquisas de satisfação respondidas por mês", en: "Average of 100+ satisfaction surveys answered per month" },
                { pt: "Top 1 da operação em volume de avaliações positivas durante um período", en: "Top 1 in the operation for positive reviews during a period" },
                { pt: "Até 4 usuários simultâneos no chat, sem perda de qualidade", en: "Up to 4 simultaneous users in chat, with no loss of quality" } ] } ],
          note: { pt: "Antes, fui Ponto Único de Contato (SPOC) entre usuários e equipes resolvedoras: triagem, encaminhamento, acompanhamento de prazos e comunicação até o encerramento.", en: "Previously, I was the Single Point of Contact (SPOC) between users and resolver teams: triage, routing, deadline tracking and communication until closure." } },
        { start: "2024-08", end: "2025-09", co: "Líder Brasil Informática",
          role: { pt: "Técnico de Informática", en: "IT Technician" },
          desc: { pt: "Da manutenção de computadores à implantação de sistemas em novos clientes, presencial e remoto.", en: "From computer maintenance to deploying systems for new clients, on-site and remote." },
          groups: [
            { t: { pt: "Suporte e manutenção", en: "Support & maintenance" }, items: [
                { pt: "Montagem, manutenção e diagnóstico de hardware e software", en: "Assembly, maintenance and troubleshooting of hardware and software" },
                { pt: "Formatação e configuração de computadores e periféricos", en: "Formatting and setup of computers and peripherals" } ] },
            { t: { pt: "Sistemas de gestão e ponto", en: "Management & time-tracking systems" }, items: [
                { pt: "Suporte remoto a PDV, gestão comercial e relógio de ponto", en: "Remote support for POS, business management and time clocks" },
                { pt: "Relatórios, ajuste de batidas, cálculo de horas e cadastro de usuários", en: "Reports, punch adjustments, hour calculations and user registration" } ] },
            { t: { pt: "Implantação", en: "Deployment" }, items: [
                { pt: "Instalação e configuração de sistemas do zero em novos clientes", en: "Installing and configuring systems from scratch for new clients" },
                { pt: "Treinamento de usuários para o dia a dia", en: "Training users for day-to-day use" } ] } ] },
        { start: "2023-10", end: "2024-07", co: "DAM Soluções",
          role: { pt: "Estagiário de Suporte TI", en: "IT Support Intern" },
          desc: { pt: "Implantação e suporte de sistemas de PDV e gestão comercial em clientes de vários segmentos.", en: "Deploying and supporting POS and business management systems for clients across many segments." },
          groups: [
            { t: { pt: "Suporte", en: "Support" }, items: [
                { pt: "Diagnóstico e solução de problemas em PDV e sistemas de gestão", en: "Diagnosing and solving issues in POS and management systems" },
                { pt: "Instalação de impressoras fiscais, leitores de código de barras e periféricos", en: "Installing fiscal printers, barcode scanners and peripherals" },
                { pt: "Ajustes de rede e crimpagem de cabos", en: "Network adjustments and cable crimping" } ] },
            { t: { pt: "Implantação e treinamento", en: "Deployment & training" }, items: [
                { pt: "Implantação em novos estabelecimentos, da análise da infraestrutura à configuração final", en: "Deployments in new businesses, from infrastructure analysis to final setup" },
                { pt: "Treinamentos personalizados para os usuários", en: "Personalized user training" } ] },
            { t: { pt: "Melhoria do produto", en: "Product improvement" }, items: [
                { pt: "Registro de bugs e sugestões para o time de desenvolvimento, e testes das correções", en: "Reported bugs and ideas to the dev team, and tested the fixes" } ] } ] },
        { start: "2023-03", end: "2023-09", co: "IFF · Instituto Federal Fluminense",
          role: { pt: "Bolsista de Multimídia", en: "Multimedia Student Assistant" },
          desc: { pt: "Suporte audiovisual para alunos, professores e eventos do campus.", en: "Audiovisual support for students, teachers and campus events." },
          groups: [
            { t: { pt: "Atendimento", en: "Support" }, items: [
                { pt: "Configuração de projetores, som e videoconferência", en: "Setting up projectors, sound and video conferencing" },
                { pt: "Solução de problemas durante aulas, apresentações e reuniões", en: "Troubleshooting during classes, presentations and meetings" } ] },
            { t: { pt: "Eventos", en: "Events" }, items: [
                { pt: "Montagem de auditórios: som, projeção, iluminação e disposição do espaço", en: "Setting up auditoriums: sound, projection, lighting and layout" },
                { pt: "Apoio na organização de palestras, seminários e workshops", en: "Helping organize lectures, seminars and workshops" } ] } ] }
    ];

    var lang = "pt";
    var original = new Map();
    function $(s, c) { return (c || document).querySelector(s); }
    function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
    function L(o) { return typeof o === "string" ? o : (o[lang] || o.pt); }
    function t(k) { return (T[lang] && T[lang][k]) || T.pt[k] || ""; }
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

    function month(v) { var p = v.split("-"); return new Date(+p[0], +p[1] - 1, 1); }
    function fmt(v) {
        var d = month(v);
        return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "pt-BR", { month: "short" }).format(d).replace(".", "") + " " + d.getFullYear();
    }
    function span(start, end) {
        var a = month(start), b = end ? month(end) : new Date();
        var m = (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth() + 1;
        var y = Math.floor(m / 12), r = m % 12, out = [];
        if (lang === "en") { if (y) out.push(y + (y > 1 ? " yrs" : " yr")); if (r) out.push(r + (r > 1 ? " mos" : " mo")); }
        else { if (y) out.push(y + (y > 1 ? " anos" : " ano")); if (r) out.push(r + (r > 1 ? " meses" : " mês")); }
        return out.join(" ");
    }

    function renderStack() {
        function chips(list) {
            return list.map(function (i) {
                var glyph = i.src ? '<img src="' + i.src + '" alt="" width="16" height="16">' : '<svg class="icon"><use href="#' + i.sym + '"/></svg>';
                return "<li>" + glyph + esc(i.name) + "</li>";
            }).join("");
        }
        $("#stack").innerHTML = chips(ICONS.filter(function (i) { return !i.learning; }));
        $("#stack-learning").innerHTML = chips(ICONS.filter(function (i) { return i.learning; }));
    }

    function renderJobs() {
        var openIndex = $$("#timeline details").findIndex(function (d) { return d.open; });
        $("#timeline").innerHTML = JOBS.map(function (j, i) {
            var groups = j.groups.map(function (g) {
                return '<div class="group"><h4>' + esc(L(g.t)) + '</h4><ul>' + g.items.map(function (it) { return '<li>' + esc(L(it)) + '</li>'; }).join("") + '</ul></div>';
            }).join("");
            return '<li class="job"><details name="exp"' + (i === openIndex ? " open" : "") + '>' +
                '<summary><span class="job-head"><h3 class="job-role">' + esc(L(j.role)) + (j.end ? "" : '<span class="now">' + t("now") + '</span>') + '</h3><span class="job-co">' + esc(j.co) + '</span></span>' +
                '<span class="job-when"><b>' + fmt(j.start) + ' — ' + (j.end ? fmt(j.end) : t("present")) + '</b>' + span(j.start, j.end) + '</span>' +
                '<span class="plus" aria-hidden="true"><svg class="icon"><use href="#i-plus"/></svg></span></summary>' +
                '<div class="job-body"><p>' + esc(L(j.desc)) + '</p><div class="groups">' + groups + '</div>' +
                (j.note ? '<p class="note">' + esc(L(j.note)) + '</p>' : "") + '</div></details></li>';
        }).join("");
        $$("#timeline details").forEach(function (d) {
            d.addEventListener("toggle", function () {
                if (!d.open) return;
                $$("#timeline details").forEach(function (o) { if (o !== d) o.open = false; });
            });
        });
    }

    function renderProjects() {
        $("#projects").innerHTML = PROJECTS.map(function (p) {
            var tags = '<ul class="tags">' + p.tags.map(function (x) { return "<li>" + esc(L(x)) + "</li>"; }).join("") + "</ul>";
            return '<a class="feature" href="' + p.href + '" target="_blank" rel="noopener">' +
                '<div class="feature-copy"><div><span class="label">' + esc(L(p.kind)) + '</span><h3>' + esc(p.name) + '</h3></div>' +
                '<div class="feature-side"><p>' + esc(L(p.desc)) + '</p>' + tags +
                '<div class="feature-foot"><span class="status">' + t(p.status) + '</span><span class="link-out">' + t("repo") + ' <svg class="icon"><use href="#i-out"/></svg></span></div></div></div>' +
                '<div class="shot-stage">' +
                '<img class="shot" src="./assets/img/agentdeck.webp" alt="' + esc(t("shot.alt")) + '" width="900" height="506">' +
                '<span class="shot-tag">' + t("shot.tag") + '</span></div></a>';
        }).join("");
    }

    function renderEdu() {
        var box = $("#degree-progress");
        var a = month(box.dataset.start).getTime(), b = month(box.dataset.end).getTime();
        var pct = Math.round(Math.max(0, Math.min(1, (Date.now() - a) / (b - a))) * 100);
        $("#degree-pct").textContent = pct;
        $("#degree-bar").style.setProperty("--p", pct + "%");
        $("#degree-range").textContent = fmt(box.dataset.start) + " — " + fmt(box.dataset.end);
        $("#adm-range").textContent = fmt("2018-04") + " — " + fmt("2022-02");
    }

    $$("[data-t]").forEach(function (el) { original.set(el, { text: el.textContent }); });
    $$("[data-t-html]").forEach(function (el) { original.set(el, { html: el.innerHTML }); });
    $$("[data-t-ph]").forEach(function (el) { original.set(el, { ph: el.placeholder }); });
    $$("[data-t-aria]").forEach(function (el) { original.set(el, { aria: el.getAttribute("aria-label") }); });

    function apply(next) {
        lang = next;
        document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
        $$("[data-t]").forEach(function (el) { el.textContent = lang === "en" ? (T.en[el.dataset.t] || original.get(el).text) : original.get(el).text; });
        $$("[data-t-html]").forEach(function (el) { el.innerHTML = lang === "en" ? (T.en[el.dataset.tHtml] || original.get(el).html) : original.get(el).html; });
        if (window.matchMedia("(hover: none)").matches) $("#hero-hint").textContent = t("hero.hintTouch");
        $$("[data-t-ph]").forEach(function (el) { el.placeholder = lang === "en" ? (T.en[el.dataset.tPh] || original.get(el).ph) : original.get(el).ph; });
        $$("[data-t-aria]").forEach(function (el) { el.setAttribute("aria-label", lang === "en" ? (T.en[el.dataset.tAria] || original.get(el).aria) : original.get(el).aria); });
        $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
        renderJobs(); renderProjects(); renderEdu();
        try { localStorage.setItem("pn3-lang", lang); } catch (e) {}
    }
    $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { apply(b.dataset.lang); }); });

    /* Prisma interativo: o feixe entra pela esquerda, o vidro o abre num espectro contínuo
       e a poeira no ar acende quando cruza a luz. O cursor inclina o feixe e gira o prisma. */
    var pc = $("#prism"), px = pc.getContext("2d");
    var picked = false, lastHue = -1, lastSave = 0;
    function setAccent(k) {
        var h = Math.round(k * 275);
        if (Math.abs(h - lastHue) < 2) return;
        lastHue = h;
        root.style.setProperty("--hue", h);
        if (picked && performance.now() - lastSave > 600) { lastSave = performance.now(); try { localStorage.setItem("pn3-hue", k.toFixed(3)); } catch (e) {} }
    }
    var PW = 0, PH = 0, aim = 0.5, cur = 0.5, aimX = 0.5, curX = 0.5, clock = 0, lastMove = -1e9, motes = [];
    function sizePrism() {
        var dpr = Math.min(2, window.devicePixelRatio || 1);
        PW = pc.clientWidth; PH = pc.clientHeight;
        pc.width = Math.round(PW * dpr); pc.height = Math.round(PH * dpr);
        px.setTransform(dpr, 0, 0, dpr, 0, 0);
        motes = [];
        var n = Math.min(320, Math.round(PW * PH / 4200));
        for (var i = 0; i < n; i++) {
            motes.push({ x: Math.random() * PW, y: Math.random() * PH, vx: (Math.random() - 0.5) * 0.18, vy: -0.03 - Math.random() * 0.12, r: 0.4 + Math.random() * 1.5, tw: Math.random() * 6.283 });
        }
    }
    function lerp(p, q, k) { return { x: p.x + (q.x - p.x) * k, y: p.y + (q.y - p.y) * k }; }
    function turn(p, c, a) { var sn = Math.sin(a), cs = Math.cos(a), dx = p.x - c.x, dy = p.y - c.y; return { x: c.x + dx * cs - dy * sn, y: c.y + dx * sn + dy * cs }; }
    function hue(k, a, l) { return "hsla(" + Math.round(k * 275) + ",100%," + (l || 62) + "%," + a + ")"; }
    function along(o, ang, d) { return { x: o.x + Math.cos(ang) * d, y: o.y + Math.sin(ang) * d }; }
    function segDist(pt, a, b) {
        var vx = b.x - a.x, vy = b.y - a.y, wx = pt.x - a.x, wy = pt.y - a.y;
        var k = Math.max(0, Math.min(1, (wx * vx + wy * vy) / (vx * vx + vy * vy)));
        return Math.hypot(pt.x - (a.x + vx * k), pt.y - (a.y + vy * k));
    }
    function drawPrism(step) {
        var mobile = PW < 760;
        var size = mobile ? Math.min(PW * 0.52, 230) : Math.min(PH * 0.56, PW * 0.28, 410);
        var c = { x: mobile ? PW * 0.5 : PW * 0.71, y: mobile ? PH - Math.min(170, PH * 0.2) : PH * 0.52 };
        var h = size * Math.sqrt(3) / 2;
        var rot = (curX - 0.5) * 0.05 + Math.sin(clock * 0.3) * 0.008;
        var A = turn({ x: c.x, y: c.y - h * 2 / 3 }, c, rot), B = turn({ x: c.x + size / 2, y: c.y + h / 3 }, c, rot), C = turn({ x: c.x - size / 2, y: c.y + h / 3 }, c, rot);
        var tilt = cur - 0.5;
        var E = lerp(C, A, 0.5 - tilt * 0.12);
        var inAngle = -0.12 + tilt * 0.1;
        var O = { x: -40, y: E.y - Math.tan(inAngle) * (E.x + 40) };
        var xk = 0.5 + tilt * 0.08;
        var X = lerp(A, B, xk);
        var base = inAngle + 0.3 + rot;
        var spread = 0.32;
        var reach = Math.hypot(PW, PH) * 1.2;

        px.globalCompositeOperation = "source-over";
        px.globalAlpha = 1;
        px.clearRect(0, 0, PW, PH);

        var pick = Math.max(0, Math.min(1, cur));
        setAccent(pick);
        px.globalCompositeOperation = "lighter";
        // espectro completo, quase apagado: mostra de onde a cor saiu
        var g1 = along(X, base, reach * 0.35), g2 = along(X, base + spread, reach * 0.35);
        var band = px.createLinearGradient(g1.x, g1.y, g2.x, g2.y);
        for (var s = 0; s <= 6; s++) band.addColorStop(s / 6, hue(s / 6, 0.05));
        px.fillStyle = band;
        var f1 = along(X, base - 0.03, reach), f2 = along(X, base + spread + 0.03, reach);
        px.beginPath(); px.moveTo(X.x, X.y); px.lineTo(f1.x, f1.y); px.lineTo(f2.x, f2.y); px.closePath(); px.fill();

        // fantasma do espectro: raios finos e fracos
        var N = mobile ? 24 : 36;
        px.lineCap = "round";
        for (var j = 0; j < N; j++) {
            var k = j / (N - 1);
            var o = lerp(A, B, xk + (k - 0.5) * 0.05);
            var e = along(o, base + spread * k, reach);
            px.strokeStyle = hue(k, 0.05);
            px.lineWidth = mobile ? 1.6 : 2;
            px.beginPath(); px.moveTo(o.x, o.y); px.lineTo(e.x, e.y); px.stroke();
        }
        // o raio escolhido: uma cor só, forte, com brilho em camadas
        var so = lerp(A, B, xk + (pick - 0.5) * 0.05);
        var sa = base + spread * pick;
        var se = along(so, sa, reach);
        [[34, 0.07, 60], [13, 0.26, 62], [4, 0.95, 66], [1.4, 0.9, 88]].forEach(function (layer) {
            px.strokeStyle = hue(pick, layer[1], layer[2]);
            px.lineWidth = mobile ? layer[0] * 0.75 : layer[0];
            px.beginPath(); px.moveTo(so.x, so.y); px.lineTo(se.x, se.y); px.stroke();
        });

        // luz dentro do vidro, já começando a se separar
        var X1 = lerp(A, B, xk - 0.03), X2 = lerp(A, B, xk + 0.03);
        var inner = px.createLinearGradient(E.x, E.y, X.x, X.y);
        inner.addColorStop(0, "rgba(255,255,255,0.55)");
        inner.addColorStop(1, hue(pick, 0.35, 70));
        px.fillStyle = inner;
        px.beginPath(); px.moveTo(E.x, E.y); px.lineTo(X1.x, X1.y); px.lineTo(X2.x, X2.y); px.closePath(); px.fill();

        // feixe branco em camadas: névoa, brilho e núcleo
        [[28, 0.06], [10, 0.2], [3, 1]].forEach(function (layer) {
            var fade = px.createLinearGradient(O.x, O.y, E.x, E.y);
            fade.addColorStop(0, "rgba(255,255,255,0)");
            fade.addColorStop(mobile ? 0.2 : 0.62, "rgba(255,255,255," + layer[1] * 0.35 + ")");
            fade.addColorStop(1, "rgba(255,255,255," + layer[1] + ")");
            px.strokeStyle = fade;
            px.lineWidth = mobile ? layer[0] * 0.7 : layer[0];
            px.beginPath(); px.moveTo(O.x, O.y); px.lineTo(E.x, E.y); px.stroke();
        });
        [[E, 60, 0.55, null], [so, 56, 0.5, pick]].forEach(function (fl) {
            var rg = px.createRadialGradient(fl[0].x, fl[0].y, 0, fl[0].x, fl[0].y, fl[1]);
            rg.addColorStop(0, fl[3] === null ? "rgba(255,255,255," + fl[2] + ")" : hue(fl[3], fl[2], 70)); rg.addColorStop(1, "rgba(255,255,255,0)");
            px.fillStyle = rg; px.beginPath(); px.arc(fl[0].x, fl[0].y, fl[1], 0, 6.283); px.fill();
        });

        // o vidro: corpo, chanfro interno e arestas iluminadas
        px.globalCompositeOperation = "source-over";
        var mid = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
        var glass = px.createLinearGradient(A.x, A.y, mid.x, mid.y);
        glass.addColorStop(0, "rgba(255,255,255,0.14)");
        glass.addColorStop(0.6, "rgba(255,255,255,0.04)");
        glass.addColorStop(1, "rgba(255,255,255,0.09)");
        px.fillStyle = glass;
        px.beginPath(); px.moveTo(A.x, A.y); px.lineTo(B.x, B.y); px.lineTo(C.x, C.y); px.closePath(); px.fill();
        px.lineJoin = "round";
        px.strokeStyle = "rgba(255,255,255,0.55)"; px.lineWidth = 1.2; px.stroke();
        var cen = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
        var a2 = lerp(cen, A, 0.84), b2 = lerp(cen, B, 0.84), c2 = lerp(cen, C, 0.84);
        px.strokeStyle = "rgba(255,255,255,0.12)"; px.lineWidth = 1;
        px.beginPath(); px.moveTo(a2.x, a2.y); px.lineTo(b2.x, b2.y); px.lineTo(c2.x, c2.y); px.closePath(); px.stroke();
        [[A, a2], [B, b2], [C, c2]].forEach(function (pr) { px.beginPath(); px.moveTo(pr[0].x, pr[0].y); px.lineTo(pr[1].x, pr[1].y); px.stroke(); });
        var edge = px.createLinearGradient(C.x, C.y, A.x, A.y);
        edge.addColorStop(0, "rgba(255,255,255,0.15)");
        edge.addColorStop(Math.max(0, Math.min(1, 0.5 - tilt * 0.12)), "rgba(255,255,255,0.95)");
        edge.addColorStop(1, "rgba(255,255,255,0.3)");
        px.strokeStyle = edge; px.lineWidth = 1.8;
        px.beginPath(); px.moveTo(C.x, C.y); px.lineTo(A.x, A.y); px.stroke();
        var edgeR = px.createLinearGradient(A.x, A.y, B.x, B.y);
        edgeR.addColorStop(0, "rgba(255,255,255,0.25)");
        edgeR.addColorStop(Math.max(0, Math.min(1, xk + (pick - 0.5) * 0.05)), hue(pick, 0.95, 75));
        edgeR.addColorStop(1, "rgba(255,255,255,0.2)");
        px.strokeStyle = edgeR; px.beginPath(); px.moveTo(A.x, A.y); px.lineTo(B.x, B.y); px.stroke();

        // poeira no ar: apagada no escuro, acesa dentro da luz
        px.globalCompositeOperation = "lighter";
        for (var m = 0; m < motes.length; m++) {
            var d = motes[m];
            if (step) {
                d.x += d.vx; d.y += d.vy; d.tw += 0.03;
                if (d.y < -4) { d.y = PH + 4; d.x = Math.random() * PW; }
                if (d.x < -4) d.x = PW + 4; else if (d.x > PW + 4) d.x = -4;
            }
            var col = null, alpha = 0.1 + 0.08 * Math.sin(d.tw), rr = d.r;
            if (d.x > X.x) {
                if (segDist(d, so, se) < (mobile ? 18 : 26)) { col = hue(pick, 0.95, 72); rr = d.r * 1.6; }
                else {
                    var ang = Math.atan2(d.y - X.y, d.x - X.x);
                    if (ang > base && ang < base + spread) { col = hue((ang - base) / spread, 0.22, 70); }
                }
            }
            if (!col && segDist(d, O, E) < 16) { col = "rgba(255,255,255,0.95)"; rr = d.r * 1.4; }
            px.fillStyle = col || "rgba(255,255,255," + alpha.toFixed(3) + ")";
            px.beginPath(); px.arc(d.x, d.y, rr, 0, 6.283); px.fill();
        }
        px.globalCompositeOperation = "source-over";
    }
    var prismRunning = false;
    function prismLoop() {
        clock += 0.016;
        if (!picked) { aim = 0.5 + 0.46 * Math.sin(clock * 0.16); aimX = 0.5 + 0.25 * Math.sin(clock * 0.27); }
        else if (clock - lastMove > 2.5) { aimX = 0.5 + 0.2 * Math.sin(clock * 0.27); }
        cur += (aim - cur) * 0.06;
        curX += (aimX - curX) * 0.05;
        drawPrism(true);
        if (prismRunning) requestAnimationFrame(prismLoop);
    }
    try { var savedHue = parseFloat(localStorage.getItem("pn3-hue")); if (savedHue >= 0 && savedHue <= 1) { aim = cur = savedHue; picked = true; } } catch (e) {}
    sizePrism(); drawPrism(false);
    var hero = $(".hero");
    function point(e) {
        var r = hero.getBoundingClientRect();
        aim = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
        aimX = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        lastMove = clock;
        picked = true;
    }
    if (!reduce && "IntersectionObserver" in window) {
        new IntersectionObserver(function (e) {
            var vis = e[0].isIntersecting;
            if (vis && !prismRunning) { prismRunning = true; requestAnimationFrame(prismLoop); } else if (!vis) { prismRunning = false; }
        }).observe(hero);
    }
    function pointStatic(e) { point(e); if (reduce) { cur = aim; curX = aimX; drawPrism(false); } }
    hero.addEventListener("pointermove", pointStatic);
    hero.addEventListener("pointerdown", pointStatic);
    window.addEventListener("resize", function () { if (pc.clientWidth !== PW) { sizePrism(); drawPrism(false); } });

    /* Partículas no fundo do site: pontos que flutuam devagar, se afastam do cursor
       na cor escolhida no prisma. */
    var dc = $("#dust"), dx = dc.getContext("2d"), DW = 0, DH = 0, dust = [], cursor = { x: -999, y: -999 };
    function sizeDust() {
        var dpr = Math.min(2, window.devicePixelRatio || 1);
        DW = innerWidth; DH = innerHeight;
        dc.width = Math.round(DW * dpr); dc.height = Math.round(DH * dpr);
        dx.setTransform(dpr, 0, 0, dpr, 0, 0);
        dust = [];
        var n = Math.min(110, Math.round(DW * DH / 14000));
        for (var i = 0; i < n; i++) dust.push({ x: Math.random() * DW, y: Math.random() * DH * 3, z: 0.2 + Math.random() * 0.8, r: 0.5 + Math.random() * 1.3, vx: (Math.random() - 0.5) * 0.12, vy: -0.05 - Math.random() * 0.1, ox: 0, oy: 0 });
    }
    function drawDust(step) {
        dx.clearRect(0, 0, DW, DH);
        var sy = window.scrollY;
        for (var i = 0; i < dust.length; i++) {
            var d = dust[i];
            if (step) {
                d.x += d.vx; d.y += d.vy;
                if (d.x < -10) d.x = DW + 10; else if (d.x > DW + 10) d.x = -10;
            }
            var band = DH * 3;
            var y = ((d.y - sy * d.z * 0.35) % band + band) % band - DH;
            var ddx = d.x - cursor.x, ddy = y - cursor.y, dist = Math.hypot(ddx, ddy);
            var push = dist < 110 ? (110 - dist) / 110 : 0;
            d.ox += ((push ? ddx / (dist || 1) * push * 26 : 0) - d.ox) * 0.08;
            d.oy += ((push ? ddy / (dist || 1) * push * 26 : 0) - d.oy) * 0.08;
            if (y < -10 || y > DH + 10) continue;
            dx.globalAlpha = 0.22 + d.z * 0.4;
            dx.fillStyle = "hsl(" + Math.max(0, lastHue) + " 88% 58%)";
            dx.beginPath(); dx.arc(d.x + d.ox, y + d.oy, d.r * (0.6 + d.z * 0.6), 0, 6.283); dx.fill();
        }
        dx.globalAlpha = 1;
    }
    sizeDust(); drawDust(false);
    if (!reduce) {
        (function dustLoop() { if (!document.hidden) drawDust(true); requestAnimationFrame(dustLoop); })();
        window.addEventListener("pointermove", function (e) { cursor.x = e.clientX; cursor.y = e.clientY; }, { passive: true });
        document.addEventListener("pointerleave", function () { cursor.x = cursor.y = -999; });
    } else {
        window.addEventListener("scroll", function () { drawDust(false); }, { passive: true });
    }
    window.addEventListener("resize", function () { if (innerWidth !== DW) sizeDust(); else DH = innerHeight; drawDust(false); });

    // Revelação ao rolar (o conteúdo já está visível em repouso)
    if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
        }, { threshold: 0.2 });
        $$(".reveal").forEach(function (el) { io.observe(el); });
    }

    // Link ativo na navegação
    var links = $$(".nav-links a");
    function markActive() {
        var current = "";
        $$("main section[id]").forEach(function (sec) { if (sec.getBoundingClientRect().top < innerHeight * 0.4) current = sec.id; });
        links.forEach(function (a) { var on = a.getAttribute("href") === "#" + current; a.classList.toggle("is-active", on); on ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current"); });
    }
    window.addEventListener("scroll", markActive, { passive: true });
    markActive();

    // Paleta de comandos (Ctrl+K, / ou o botão de busca)
    if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) $("#kbd-hint").textContent = "⌘K";
    var palette = $("#palette"), palInput = $("#pal-input"), palList = $("#pal-list"), palToast = $("#pal-toast");
    var lastFocus = null, sel = 0, shown = [];
    function norm(x) { return String(x).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
    function commands() {
        var nav = [
            ["inicio", "i-home", lang === "en" ? "Home" : "Início"],
            ["sobre", "i-user", lang === "en" ? "About" : "Quem sou"],
            ["experiencia", "i-brief", lang === "en" ? "Experience" : "Experiência"],
            ["formacao", "i-grad", lang === "en" ? "Education" : "Formação"],
            ["projetos", "i-box", lang === "en" ? "Projects" : "Projetos"],
            ["contato", "i-chat", lang === "en" ? "Contact" : "Contato"]
        ].map(function (n) { return { group: t("pal.nav"), icon: n[1], label: n[2], hint: "#" + n[0], keys: n[0], run: function () { $("#" + n[0]).scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); } }; });
        var jobs = JOBS.map(function (j, i) {
            return { group: t("pal.nav"), icon: "i-brief", label: L(j.role) + " · " + j.co, hint: lang === "en" ? "experience" : "experiência", keys: "experiencia experience", run: function () {
                var d = $$("#timeline details")[i]; d.open = true; d.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
            } };
        });
        var actions = [
            { group: t("pal.actions"), icon: "i-copy", label: t("pal.copy"), hint: "pattrickn0@gmail.com", keys: "email e-mail copiar copy contato", stay: true, run: function () {
                var done = function () { palToast.textContent = t("pal.copied"); setTimeout(function () { palToast.textContent = ""; }, 1800); };
                if (navigator.clipboard) navigator.clipboard.writeText("pattrickn0@gmail.com").then(done, function () { palToast.textContent = "pattrickn0@gmail.com"; });
                else palToast.textContent = "pattrickn0@gmail.com";
            } },
            { group: t("pal.actions"), icon: "i-globe", label: t("pal.lang"), hint: lang === "en" ? "PT" : "EN", keys: "idioma language ingles english portugues", stay: true, run: function () { apply(lang === "en" ? "pt" : "en"); render(palInput.value); } }
        ];
        var links = [
            { group: t("pal.links"), icon: "i-in", label: "LinkedIn", hint: "in/pattrick-nunes", keys: "linkedin", href: "https://www.linkedin.com/in/pattrick-nunes" },
            { group: t("pal.links"), icon: "i-gh", label: "GitHub", hint: "pattrickn0", keys: "github codigo code", href: "https://github.com/pattrickn0" },
            { group: t("pal.links"), icon: "i-box", label: t("pal.agentdeck"), hint: "github", keys: "agentdeck projeto project rust", href: "https://github.com/pattrickn0/AgentDeck" }
        ];
        return nav.concat(jobs, actions, links);
    }
    function render(q) {
        var nq = norm(q.trim());
        shown = commands().filter(function (c) { return !nq || norm(c.label + " " + c.keys + " " + c.hint).indexOf(nq) !== -1; });
        if (!nq) shown = shown.filter(function (c) { return c.icon !== "i-brief" || c.keys === "experiencia"; });
        sel = Math.min(sel, Math.max(0, shown.length - 1));
        if (!shown.length) { palList.innerHTML = '<li class="palette-empty">' + esc(t("pal.empty")) + "</li>"; palInput.removeAttribute("aria-activedescendant"); return; }
        var html = "", group = "";
        shown.forEach(function (c, i) {
            if (c.group !== group) { group = c.group; html += '<li class="group" role="presentation">' + esc(group) + "</li>"; }
            var inner = '<span class="ic"><svg class="icon"><use href="#' + c.icon + '"/></svg></span><span>' + esc(c.label) + "</span><small>" + esc(c.hint) + "</small>";
            html += "<li role=\"presentation\">" + (c.href
                ? '<a role="option" id="pal-' + i + '" data-i="' + i + '" aria-selected="' + (i === sel) + '" href="' + c.href + '" target="_blank" rel="noopener">' + inner + "</a>"
                : '<div role="option" id="pal-' + i + '" data-i="' + i + '" aria-selected="' + (i === sel) + '">' + inner + "</div>") + "</li>";
        });
        palList.innerHTML = html;
        palInput.setAttribute("aria-activedescendant", "pal-" + sel);
    }
    function highlight(i) {
        if (!shown.length) return;
        sel = (i + shown.length) % shown.length;
        $$("[role=option]", palList).forEach(function (el) { el.setAttribute("aria-selected", String(+el.dataset.i === sel)); });
        var el = $("#pal-" + sel); if (el) el.scrollIntoView({ block: "nearest" });
        palInput.setAttribute("aria-activedescendant", "pal-" + sel);
    }
    function runSel(i) {
        var c = shown[i]; if (!c) return;
        if (c.href) { var a = $("#pal-" + i); if (a) a.click(); closePalette(); return; }
        if (!c.stay) closePalette();
        c.run();
    }
    function openPalette() {
        lastFocus = document.activeElement;
        palette.hidden = false; sel = 0; palInput.value = ""; palToast.textContent = "";
        $$("body > header, body > main, body > footer").forEach(function (el) { el.inert = true; });
        render(""); palInput.focus();
    }
    function closePalette() {
        palette.hidden = true;
        $$("body > header, body > main, body > footer").forEach(function (el) { el.inert = false; });
        if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    $$("[data-open-palette]").forEach(function (b) { b.addEventListener("click", openPalette); });
    $$("[data-close-palette]").forEach(function (b) { b.addEventListener("click", closePalette); });
    palInput.addEventListener("input", function () { sel = 0; render(palInput.value); });
    palInput.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") { e.preventDefault(); highlight(sel + 1); }
        else if (e.key === "ArrowUp") { e.preventDefault(); highlight(sel - 1); }
        else if (e.key === "Enter") { e.preventDefault(); runSel(sel); }
    });
    palList.addEventListener("click", function (e) {
        var opt = e.target.closest("[role=option]"); if (!opt) return;
        if (opt.tagName === "A") { closePalette(); return; }
        runSel(+opt.dataset.i);
    });
    palList.addEventListener("mousemove", function (e) { var opt = e.target.closest("[role=option]"); if (opt && +opt.dataset.i !== sel) highlight(+opt.dataset.i); });
    document.addEventListener("keydown", function (e) {
        var typing = /input|textarea|select/i.test((e.target || {}).tagName || "");
        if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); }
        else if (e.key === "/" && !typing && palette.hidden) { e.preventDefault(); openPalette(); }
        else if (e.key === "Escape" && !palette.hidden) { closePalette(); }
    });

    // Copiar e-mail
    $("#copy-email").addEventListener("click", function () {
        var btn = this;
        function done() { btn.textContent = t("contact.copied"); setTimeout(function () { btn.textContent = lang === "en" ? T.en["contact.copy"] : original.get(btn).text; }, 1600); }
        function select() {
            var r = document.createRange(); r.selectNodeContents(btn.previousElementSibling.querySelector("b"));
            var sl = getSelection(); sl.removeAllRanges(); sl.addRange(r);
            btn.textContent = t("contact.selected");
            setTimeout(function () { btn.textContent = lang === "en" ? T.en["contact.copy"] : original.get(btn).text; }, 2400);
        }
        if (navigator.clipboard) navigator.clipboard.writeText("pattrickn0@gmail.com").then(done, select); else select();
    });

    // Formulário: no site publicado envia pelo Web3Forms; no protótipo só valida
    var form = $("#form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var note = $("#form-note"), ok = true;
        $$("input:not(.hp), textarea", form).forEach(function (f) {
            var valid = f.value.trim() !== "" && f.checkValidity() && (f.type !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value.trim()));
            f.classList.toggle("invalid", !valid);
            valid ? f.removeAttribute("aria-invalid") : f.setAttribute("aria-invalid", "true");
            if (!valid && ok) { f.focus(); ok = false; }
        });
        if (!ok) { note.className = "form-note err"; note.textContent = t("f.invalid"); return; }
        if (!ENDPOINT) { note.className = "form-note ok"; note.textContent = t("f.proto"); return; }

        var btn = $("button[type=submit]", form), label = $("span", btn), idle = label.textContent;
        btn.disabled = true; label.textContent = t("f.sending");
        note.className = "form-note"; note.textContent = "";
        var data = {
            access_key: ENDPOINT.key,
            subject: t("f.subject") + " · " + form.topic.value,
            from_name: "Portfólio · Pattrick Nunes",
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            topic: form.topic.value,
            message: form.message.value.trim(),
            botcheck: form.botcheck.checked
        };
        fetch(ENDPOINT.url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (!res.success) throw new Error(res.message);
                form.reset();
                note.className = "form-note ok"; note.textContent = t("f.ok");
            })
            .catch(function () { note.className = "form-note err"; note.textContent = t("f.error"); })
            .then(function () { btn.disabled = false; label.textContent = idle; });
    });

    renderStack();
    var start = null;
    try { start = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (start !== "en" && start !== "pt") { try { start = localStorage.getItem("pn3-lang"); } catch (e) {} }
    if (start !== "en" && start !== "pt") start = /^pt\b/i.test(navigator.language || "pt") ? "pt" : "en";
    apply(start);
})();
