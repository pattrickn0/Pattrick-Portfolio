/* Pattrick Nunes · portfólio v3 */
(function () {
    "use strict";
    var ICONS = [{"name": "Java", "src": "./assets/icons/tech/plain/java.svg"}, {"name": "C#", "src": "./assets/icons/tech/plain/csharp.svg"}, {"name": "SQL \u00b7 MySQL", "src": "./assets/icons/tech/plain/mysql.svg"}, {"name": "HTML", "src": "./assets/icons/tech/plain/html5.svg"}, {"name": "CSS", "src": "./assets/icons/tech/plain/css3.svg"}, {"name": "JavaScript", "src": "./assets/icons/tech/plain/javascript.svg"}, {"name": "Git", "src": "./assets/icons/tech/plain/git.svg"}, {"name": "ServiceNow", "sym": "i-ticket"}, {"name": "Power Apps", "sym": "i-phone"}, {"name": "Power BI", "sym": "i-chart", "learning": true}];
    var PROJECTS = [{"feature": true, "name": "AgentDeck", "kind": {"pt": "Projeto atual · open source · feito com IA", "en": "Current project · open source · built with AI"}, "status": "oss", "desc": {"pt": "Um terminal desktop criado para coordenar múltiplos agentes de IA trabalhando juntos. Nele, ferramentas como Claude Code, Codex, Antigravity e OpenCode rodam lado a lado em abas de terminal reais, trocam mensagens via linha de comando e executam tarefas isoladas em git worktrees para revisão e merge. Desenvolvo o projeto definindo a arquitetura, os fluxos de uso e validando cada implementação na prática junto aos próprios agentes.", "en": "A desktop terminal built to coordinate multiple AI agents working together. Tools like Claude Code, Codex, Antigravity and OpenCode run side by side in real terminal tabs, message each other via CLI and execute isolated tasks in git worktrees for review and merge. I build the project by designing the architecture and workflows and testing every implementation alongside the agents themselves."}, "tags": [{"pt": "Feito com IA", "en": "Built with AI"}, "Rust", "Git worktrees", "Windows · Linux", {"pt": "Licença MIT", "en": "MIT license"}], "href": "https://github.com/pattrickn0/AgentDeck", "shot": true}];
    var ENDPOINT = {"url": "https://api.web3forms.com/submit", "key": "f026d75a-6bb6-426e-abd1-c9342a2428f9"};
    var root = document.documentElement;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var T = {
        en: {
            "pal.open": "Go to… (Ctrl+K)", "pal.short": "Go to…", "pal.ph": "Where do you want to go?", "pal.move": "navigate", "pal.go": "open",
            "pal.nav": "Go to", "pal.actions": "Actions", "pal.links": "Links", "pal.empty": "Nothing found. Try \"email\" or \"experience\".",
            "pal.copy": "Copy email", "pal.copied": "Email copied", "pal.lang": "Ver em português", "pal.agentdeck": "AgentDeck on GitHub",
            "nav.aria": "Sections", "nav.about": "About", "nav.exp": "Experience", "nav.edu": "Education", "nav.proj": "Projects", "nav.contact": "Contact",
            "hero.title": "Less rework, more intelligence in the process.",
            "hero.lede": "I map where processes get stuck and build the solution to unblock them — combining <strong>automation</strong>, <strong>data</strong> and <strong>AI-assisted development</strong> to turn manual work into smart workflows.",
            "hero.cta1": "About me", "hero.projects": "See projects",
            "hero.kicker": "Pattrick Nunes · Portfolio",
            "hero.hint": "Move your cursor to pick the color of the light", "hero.hintTouch": "Tap to pick the color of the light",
            "about.kicker": "About me", "about.title": "Technology applied to real routines.",
            "about.p1": "I'm studying <strong>Information Systems</strong> at IFF and hold technical degrees in <strong>IT</strong> and in <strong>Business Administration</strong>. That background helps me connect the technical side with process organization.",
            "about.p2": "I started in on-site support, assembling machines, setting up networks and deploying systems in retail stores. Today I work at <strong>Minsait</strong>, where alongside support I build dashboards, macros and internal apps to speed up the operation.",
            "about.p3": "I also build my own tools using AI agents in the development workflow — such as <strong>AgentDeck</strong> — always looking to get manual work out of the way.",
            "about.sub": "From infrastructure to automation, my focus is organizing workflows, bringing visibility to data and making the team's work easier.",
            "ray1.t": "Diagnosis", "ray1.d": "Understand the context and find the root of the problem before touching hardware, software or workflows.",
            "ray2.t": "Standardization", "ray2.d": "Organize recurring demands with standardized replies, clear documentation and queue management.",
            "ray3.t": "Automation", "ray3.d": "Build ServiceNow dashboards, Power Apps solutions and custom tools to cut out manual steps.",
            "ray4.t": "Training", "ray4.d": "Guide users and follow up on daily routines to make sure the solution genuinely helps people on the ground.",
            "exp.kicker": "Experience", "exp.title": "Work experience.", "exp.sub": "From system deployments and hardware maintenance to enterprise support and automation at Minsait.",
            "edu.kicker": "Education", "edu.title": "Academic & technical background.",
            "edu.ongoing": "In progress", "edu.degree": "Bachelor's in Information Systems", "edu.done": "completed",
            "edu.tech": "Technical program", "edu.it": "IT Technician", "edu.adm": "Business Administration Technician",
            "edu.certs": "Certifications", "edu.langs": "Languages", "edu.en": "English", "edu.enLevel": "advanced reading · basic conversation",
            "cert.net": "Networking", "cert.oop": "C# · OOP",
            "proj.kicker": "Projects", "proj.title": "In development.",
            "contact.kicker": "Contact", "contact.title": "Let's talk?",
            "contact.sub": "If you'd like to talk about an opportunity, exchange ideas on automation or learn more about my work, feel free to send a message.",
            "contact.copy": "Copy", "contact.copied": "Copied", "contact.selected": "Selected · Ctrl+C", "contact.loc": "Location",
            "f.name": "Name", "f.nameph": "Your name", "f.email": "Email", "f.emailph": "you@company.com",
            "f.topic": "Subject", "f.o1": "Job opportunity", "f.o2": "Project or automation", "f.o3": "Exchange ideas", "f.o4": "Other",
            "f.msg": "Message", "f.msgph": "Write your message...", "f.send": "Send message",
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
          desc: { pt: "Atendimento a usuários por chat e telefone buscando resolver os chamados já no primeiro contato, além de criar ferramentas internas para reduzir o tempo de resposta da operação.", en: "Supporting users via chat and phone with a focus on first-contact resolution, while building internal tools to reduce the operation's response time." },
          groups: [
            { t: { pt: "Melhoria contínua e automação", en: "Continuous improvement & automation" }, items: [
                { pt: "Dashboards no ServiceNow para acompanhar filas, volume e indicadores da equipe", en: "ServiceNow dashboards to track queues, volume and team KPIs" },
                { pt: "Macros no ServiceNow que padronizam e agilizam respostas recorrentes", en: "ServiceNow macros that standardize and speed up recurring replies" },
                { pt: "Aplicativo em Power Apps para apoiar a rotina da equipe (em andamento)", en: "A Power Apps application to support the team's daily routine (in progress)" },
                { pt: "Apoio na organização e acompanhamento do fluxo de backlog", en: "Helped structure and track the backlog workflow" } ] },
            { t: { pt: "Resultados", en: "Results" }, items: [
                { pt: "CSAT acima de 95% todos os meses, chegando a 100% em mais de um fechamento", en: "CSAT above 95% every month, reaching 100% in multiple monthly closes" },
                { pt: "Média superior a 100 pesquisas de satisfação respondidas por mês", en: "Average of over 100 satisfaction surveys answered per month" },
                { pt: "1º lugar da operação em volume de avaliações positivas durante um período", en: "Ranked 1st in the operation for positive feedback volume during a period" },
                { pt: "Atendimento simultâneo de até 4 usuários no chat mantendo o padrão de qualidade", en: "Simultaneous support for up to 4 chat users while maintaining quality standards" } ] } ],
          note: { pt: "Anteriormente atuei como Ponto Único de Contato (SPOC) entre usuários e equipes técnicas, fazendo a triagem, o acompanhamento de prazos e a comunicação até a conclusão dos chamados.", en: "Previously served as Single Point of Contact (SPOC) between users and technical teams, handling triage, SLA tracking and communication through ticket closure." } },
        { start: "2024-08", end: "2025-09", co: "Líder Brasil Informática",
          role: { pt: "Técnico de Informática", en: "IT Technician" },
          desc: { pt: "Atuação desde o diagnóstico e manutenção de equipamentos até a implantação completa de sistemas comerciais em clientes, tanto presencialmente quanto por acesso remoto.", en: "Worked from hardware troubleshooting and maintenance to full deployment of business systems for clients, both on-site and remotely." },
          groups: [
            { t: { pt: "Suporte e manutenção", en: "Support & maintenance" }, items: [
                { pt: "Diagnóstico, montagem e manutenção preventiva e corretiva de computadores", en: "Troubleshooting, assembly and preventive/corrective maintenance of computers" },
                { pt: "Formatação, preparo de ambiente e configuração de periféricos", en: "OS installation, environment setup and peripheral configuration" } ] },
            { t: { pt: "Sistemas de gestão e ponto", en: "Management & time-tracking systems" }, items: [
                { pt: "Suporte remoto a sistemas de PDV, retaguarda comercial e controle de ponto", en: "Remote support for POS, retail management and time-tracking systems" },
                { pt: "Geração de relatórios, ajuste de marcações, apuração de horas e cadastro de usuários", en: "Report generation, punch adjustments, hour calculations and user setup" } ] },
            { t: { pt: "Implantação", en: "Deployment" }, items: [
                { pt: "Parametrização e instalação de sistemas do zero em novos clientes", en: "Installing and configuring systems from scratch for new clients" },
                { pt: "Treinamento prático das equipes para operação no dia a dia", en: "Hands-on user training for daily operations" } ] } ] },
        { start: "2023-10", end: "2024-07", co: "DAM Soluções",
          role: { pt: "Estagiário de Suporte TI", en: "IT Support Intern" },
          desc: { pt: "Implantação e suporte técnico a sistemas de frente de caixa (PDV) e gestão comercial para clientes do varejo.", en: "Deployment and technical support for POS and retail management systems across various client segments." },
          groups: [
            { t: { pt: "Suporte técnico", en: "Technical support" }, items: [
                { pt: "Resolução de dúvidas operacionais e erros em sistemas de PDV e gestão", en: "Resolving operational questions and errors in POS and management software" },
                { pt: "Configuração de impressoras fiscais, leitores e equipamentos de automação comercial", en: "Configuring fiscal printers, barcode scanners and retail hardware" },
                { pt: "Organização de rede local e cabeamento estruturado básico", en: "Local network adjustments and cable crimping" } ] },
            { t: { pt: "Implantação e treinamento", en: "Deployment & training" }, items: [
                { pt: "Acompanhamento de implantações em novos clientes, da infraestrutura à virada do sistema", en: "Supported new store deployments from infrastructure checks to go-live" },
                { pt: "Treinamento inicial de caixa e retaguarda para novos usuários", en: "Initial cashier and back-office training for new users" } ] },
            { t: { pt: "Qualidade e produto", en: "Product quality" }, items: [
                { pt: "Documentação de bugs, envio de sugestões ao time de desenvolvimento e validação de correções", en: "Documented bugs, shared feedback with the dev team and validated fixes" } ] } ] },
        { start: "2023-03", end: "2023-09", co: "IFF · Instituto Federal Fluminense",
          role: { pt: "Bolsista de Multimídia", en: "Multimedia Student Assistant" },
          desc: { pt: "Apoio técnico audiovisual para aulas, defesas e eventos acadêmicos no campus.", en: "Technical audiovisual support for classes, presentations and academic events on campus." },
          groups: [
            { t: { pt: "Suporte em sala", en: "Classroom support" }, items: [
                { pt: "Preparação e ajuste de projetores, sistemas de som e equipamentos de videoconferência", en: "Setup and adjustment of projectors, audio systems and video conferencing gear" },
                { pt: "Atendimento rápido a problemas técnicos durante aulas e apresentações", en: "Quick troubleshooting during lectures, presentations and meetings" } ] },
            { t: { pt: "Eventos no auditório", en: "Auditorium events" }, items: [
                { pt: "Operação de som, projeção e iluminação nos auditórios da instituição", en: "Operating sound, projection and lighting across campus auditoriums" },
                { pt: "Apoio técnico na realização de palestras, seminários e workshops", en: "Technical support for lectures, seminars and workshops" } ] } ] }
    ];

    var lang = "pt";
    var jobsInit = false;
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
        var detailsList = $$("#timeline details");
        var openIndex = jobsInit ? detailsList.findIndex(function (d) { return d.open; }) : 0;
        jobsInit = true;
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
                if (!reduce && window.gsap) {
                    var els = $$(".job-body > p, .group, .note", d);
                    window.gsap.fromTo(els,
                        { y: 18, rotationX: 8, opacity: 0, transformPerspective: 800 },
                        { y: 0, rotationX: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: "power3.out",
                          onStart: function () { els.forEach(function (el) { el.style.willChange = "transform, opacity"; }); },
                          onComplete: function () { els.forEach(function (el) { el.style.willChange = ""; }); }
                        }
                    );
                }
            });
        });
    }

    function renderProjects() {
        $("#projects").innerHTML = PROJECTS.map(function (p) {
            var tags = '<ul class="tags">' + p.tags.map(function (x) { return "<li>" + esc(L(x)) + "</li>"; }).join("") + "</ul>";
            return '<a class="feature" data-tilt href="' + p.href + '" target="_blank" rel="noopener">' +
                '<div class="feature-copy"><div><span class="label">' + esc(L(p.kind)) + '</span><h3>' + esc(p.name) + '</h3></div>' +
                '<div class="feature-side"><p>' + esc(L(p.desc)) + '</p>' + tags +
                '<div class="feature-foot"><span class="status">' + t(p.status) + '</span><span class="link-out">' + t("repo") + ' <svg class="icon"><use href="#i-out"/></svg></span></div></div></div>' +
                '<div class="shot-stage">' +
                '<img class="shot" src="./assets/img/agentdeck.webp" alt="' + esc(t("shot.alt")) + '" width="900" height="506">' +
                '<span class="shot-tag">' + t("shot.tag") + '</span></div></a>';
        }).join("");
    }

    var eduAnimated = false;
    function renderEdu() {
        var box = $("#degree-progress");
        var a = month(box.dataset.start).getTime(), b = month(box.dataset.end).getTime();
        var pct = Math.round(Math.max(0, Math.min(1, (Date.now() - a) / (b - a))) * 100);
        $("#degree-range").textContent = fmt(box.dataset.start) + " — " + fmt(box.dataset.end);
        $("#adm-range").textContent = fmt("2018-04") + " — " + fmt("2022-02");
        if (reduce || eduAnimated || !("IntersectionObserver" in window)) {
            $("#degree-pct").textContent = pct;
            $("#degree-bar").style.setProperty("--p", pct + "%");
            return;
        }
        $("#degree-pct").textContent = "0";
        $("#degree-bar").style.setProperty("--p", "0%");
        var obs = new IntersectionObserver(function (entries) {
            if (!entries[0].isIntersecting) return;
            obs.disconnect();
            eduAnimated = true;
            var bar = $("#degree-bar i");
            if (window.gsap && bar) {
                window.gsap.fromTo(bar, { width: "0%" }, { width: pct + "%", duration: 1.2, ease: "power3.out" });
            } else {
                $("#degree-bar").style.setProperty("--p", pct + "%");
            }
            var t0 = performance.now(), dur = 1150;
            (function tick(now) {
                var k = Math.min(1, (now - t0) / dur);
                var ease = 1 - Math.pow(1 - k, 3);
                $("#degree-pct").textContent = Math.round(pct * ease);
                if (k < 1) requestAnimationFrame(tick);
            })(t0);
        }, { threshold: 0.35 });
        obs.observe(box);
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
        initTilt();
        try { localStorage.setItem("pn3-lang", lang); } catch (e) {}
    }
    $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { apply(b.dataset.lang); }); });

    /* Prisma interativo: o feixe entra pela esquerda, o vidro o abre num espectro contínuo
       e a poeira no ar acende quando cruza a luz. O cursor inclina o feixe naturalmente
       dentro da área útil da Hero, sem sobrescrever a cor ao sair pelas bordas ou rolar. */
    var pc = $("#prism"), px = pc.getContext("2d");
    var picked = false, lastHue = 200, lastSave = 0;
    function kToHue(k) {
        var stops = [0, 28, 48, 150, 195, 225, 270, 325];
        var pos = Math.max(0, Math.min(1, k)) * (stops.length - 1);
        var idx = Math.min(stops.length - 2, Math.floor(pos));
        var frac = pos - idx;
        return Math.round(stops[idx] + (stops[idx + 1] - stops[idx]) * frac);
    }
    function setAccent(k) {
        var h = kToHue(k);
        if (Math.abs(h - lastHue) < 2) return;
        lastHue = h;
        root.style.setProperty("--hue", h);
        if (picked && performance.now() - lastSave > 600) { lastSave = performance.now(); try { localStorage.setItem("pn3-hue", k.toFixed(3)); } catch (e) {} }
    }
    var defaultPick = 0.58;
    var PW = 0, PH = 0, aim = defaultPick, cur = defaultPick, aimX = 0.5, curX = 0.5, clock = 0.5, lastMove = -1e9, motes = [];
    var prevY = null;
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
    function hue(k, a, l) { return "hsla(" + kToHue(k) + ",100%," + (l || 62) + "%," + a + ")"; }
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
        var spanW = 0.065;
        var X1 = lerp(A, B, xk - spanW), X2 = lerp(A, B, xk + spanW);
        var so = lerp(X1, X2, pick);
        var sa = base + spread * pick;
        var se = along(so, sa, reach);

        // 1. Corpo de vidro do prisma (limpo, sem faixas opacas que cortem o feixe)
        var mid = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
        var glass = px.createLinearGradient(A.x, A.y, mid.x, mid.y);
        glass.addColorStop(0, "rgba(255,255,255,0.12)");
        glass.addColorStop(0.6, "rgba(255,255,255,0.03)");
        glass.addColorStop(1, "rgba(255,255,255,0.08)");
        px.fillStyle = glass;
        px.beginPath(); px.moveTo(A.x, A.y); px.lineTo(B.x, B.y); px.lineTo(C.x, C.y); px.closePath(); px.fill();

        px.globalCompositeOperation = "lighter";
        px.lineCap = "round";
        px.lineJoin = "round";

        // 2. Leque de dispersão interna com bordas 100% suaves (gradiente transversal de alpha 0 -> pico -> alpha 0)
        var X1w = lerp(A, B, xk - spanW * 1.9), X2w = lerp(A, B, xk + spanW * 1.9);
        var inTrans = px.createLinearGradient(X1w.x, X1w.y, X2w.x, X2w.y);
        inTrans.addColorStop(0, "rgba(255,255,255,0)");
        inTrans.addColorStop(0.22, hue(0.15, 0.07, 72));
        inTrans.addColorStop(Math.max(0.25, Math.min(0.75, 0.22 + pick * 0.56)), hue(pick, 0.24, 78));
        inTrans.addColorStop(0.78, hue(0.85, 0.07, 72));
        inTrans.addColorStop(1, "rgba(255,255,255,0)");
        px.fillStyle = inTrans;
        px.beginPath(); px.moveTo(E.x, E.y); px.lineTo(X1w.x, X1w.y); px.lineTo(X2w.x, X2w.y); px.closePath(); px.fill();

        // Gradiente longitudinal interno (branco na entrada E -> cor refratada na saída X)
        var inLong = px.createLinearGradient(E.x, E.y, X.x, X.y);
        inLong.addColorStop(0, "rgba(255,255,255,0.38)");
        inLong.addColorStop(0.45, "rgba(255,255,255,0.14)");
        inLong.addColorStop(1, hue(pick, 0.22, 74));
        px.save();
        px.beginPath(); px.moveTo(E.x, E.y); px.lineTo(X1.x, X1.y); px.lineTo(X2.x, X2.y); px.closePath();
        px.fillStyle = inLong;
        // Mascara com o gradiente transversal para não criar quina seca nas laterais do cone interno
        px.globalAlpha = 0.55;
        px.fill();
        px.restore();
        px.globalAlpha = 1;

        // 3. Espectro externo contínuo e difuso (gradiente transversal suave sem bordas duras)
        var f1 = along(X1, base - 0.045, reach), f2 = along(X2, base + spread + 0.045, reach);
        var g1 = along(X1, base - 0.04, reach * 0.36), g2 = along(X2, base + spread + 0.04, reach * 0.36);
        var band = px.createLinearGradient(g1.x, g1.y, g2.x, g2.y);
        band.addColorStop(0, "rgba(255,255,255,0)");
        for (var s = 0; s <= 6; s++) {
            var ks = s / 6;
            band.addColorStop(0.08 + ks * 0.84, hue(ks, 0.065, 64));
        }
        band.addColorStop(1, "rgba(255,255,255,0)");
        px.fillStyle = band;
        px.beginPath(); px.moveTo(X1.x, X1.y); px.lineTo(f1.x, f1.y); px.lineTo(f2.x, f2.y); px.lineTo(X2.x, X2.y); px.closePath(); px.fill();

        // Raios finos do espectro que nascem suavemente na face do vidro
        var N = mobile ? 24 : 36;
        for (var j = 0; j < N; j++) {
            var k = j / (N - 1);
            var o = lerp(X1, X2, k);
            var e = along(o, base + spread * k, reach);
            var rgLine = px.createLinearGradient(o.x, o.y, e.x, e.y);
            rgLine.addColorStop(0, hue(k, 0.01, 70));
            rgLine.addColorStop(0.05, hue(k, 0.055, 65));
            rgLine.addColorStop(0.65, hue(k, 0.035, 62));
            rgLine.addColorStop(1, hue(k, 0, 60));
            px.strokeStyle = rgLine;
            px.lineWidth = mobile ? 1.6 : 2.2;
            px.beginPath(); px.moveTo(o.x, o.y); px.lineTo(e.x, e.y); px.stroke();
        }

        // 4. Feixe óptico contínuo (Entrada O -> E -> Saída so -> se) sem cortes retos ("butt")
        // Camadas de atmosfera e brilho que envolvem todo o trajeto da luz continuamente
        [[46, 0.04], [20, 0.11], [8, 0.26]].forEach(function (aura) {
            var w = mobile ? aura[0] * 0.72 : aura[0], al = aura[1];
            // Entrada branca até E
            var gIn = px.createLinearGradient(O.x, O.y, E.x, E.y);
            gIn.addColorStop(0, "rgba(255,255,255,0)");
            gIn.addColorStop(mobile ? 0.2 : 0.58, "rgba(255,255,255," + (al * 0.35).toFixed(4) + ")");
            gIn.addColorStop(1, "rgba(255,255,255," + al + ")");
            px.strokeStyle = gIn; px.lineWidth = w;
            px.beginPath(); px.moveTo(O.x, O.y); px.lineTo(E.x, E.y); px.stroke();

            // Ponte interna dentro do cristal (E -> so) conectando a luz sem degrau
            var gMid = px.createLinearGradient(E.x, E.y, so.x, so.y);
            gMid.addColorStop(0, "rgba(255,255,255," + (al * 0.9).toFixed(4) + ")");
            gMid.addColorStop(1, hue(pick, al * 1.1, 70));
            px.strokeStyle = gMid; px.lineWidth = w * 0.85;
            px.beginPath(); px.moveTo(E.x, E.y); px.lineTo(so.x, so.y); px.stroke();

            // Saída refratada (so -> se)
            var gOut = px.createLinearGradient(so.x, so.y, se.x, se.y);
            gOut.addColorStop(0, hue(pick, al * 1.25, 68));
            gOut.addColorStop(0.65, hue(pick, al, 62));
            gOut.addColorStop(1, hue(pick, 0, 60));
            px.strokeStyle = gOut; px.lineWidth = w;
            px.beginPath(); px.moveTo(so.x, so.y); px.lineTo(se.x, se.y); px.stroke();
        });

        // Núcleo de alta intensidade do feixe (branco na entrada -> transição no cristal -> cor viva na saída)
        [[3.6, 0.92, 66], [1.4, 0.98, 92]].forEach(function (core) {
            var w = mobile ? core[0] * 0.78 : core[0], al = core[1], lt = core[2];
            var cIn = px.createLinearGradient(O.x, O.y, E.x, E.y);
            cIn.addColorStop(0, "rgba(255,255,255,0)");
            cIn.addColorStop(mobile ? 0.2 : 0.6, "rgba(255,255,255," + (al * 0.4).toFixed(3) + ")");
            cIn.addColorStop(1, "rgba(255,255,255," + al + ")");
            px.strokeStyle = cIn; px.lineWidth = w;
            px.beginPath(); px.moveTo(O.x, O.y); px.lineTo(E.x, E.y); px.stroke();

            var cMid = px.createLinearGradient(E.x, E.y, so.x, so.y);
            cMid.addColorStop(0, "rgba(255,255,255," + (al * 0.85).toFixed(3) + ")");
            cMid.addColorStop(0.5, hue(pick, al * 0.65, 84));
            cMid.addColorStop(1, hue(pick, al * 0.95, lt));
            px.strokeStyle = cMid; px.lineWidth = w * 0.9;
            px.beginPath(); px.moveTo(E.x, E.y); px.lineTo(so.x, so.y); px.stroke();

            var cOut = px.createLinearGradient(so.x, so.y, se.x, se.y);
            cOut.addColorStop(0, hue(pick, al, Math.min(98, lt + 5)));
            cOut.addColorStop(0.7, hue(pick, al, lt));
            cOut.addColorStop(1, hue(pick, 0, lt));
            px.strokeStyle = cOut; px.lineWidth = w;
            px.beginPath(); px.moveTo(so.x, so.y); px.lineTo(se.x, se.y); px.stroke();
        });

        // 5. Iluminação óptica nos pontos de refração E e so (bloom suave + reflexo na aresta do vidro)
        function drawRefractionBloom(pt, rOuter, colorPick) {
            var rg = px.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, rOuter);
            if (colorPick === null) {
                rg.addColorStop(0, "rgba(255,255,255,0.92)");
                rg.addColorStop(0.08, "rgba(255,255,255,0.52)");
                rg.addColorStop(0.22, "rgba(255,255,255,0.20)");
                rg.addColorStop(0.45, "rgba(255,255,255,0.055)");
                rg.addColorStop(0.72, "rgba(255,255,255,0.012)");
                rg.addColorStop(1, "rgba(255,255,255,0)");
            } else {
                rg.addColorStop(0, "rgba(255,255,255,0.96)");
                rg.addColorStop(0.08, hue(colorPick, 0.68, 84));
                rg.addColorStop(0.22, hue(colorPick, 0.28, 70));
                rg.addColorStop(0.45, hue(colorPick, 0.08, 64));
                rg.addColorStop(0.72, hue(colorPick, 0.018, 60));
                rg.addColorStop(1, "rgba(255,255,255,0)");
            }
            px.fillStyle = rg;
            px.beginPath(); px.arc(pt.x, pt.y, rOuter, 0, 6.283); px.fill();
        }
        drawRefractionBloom(E, mobile ? 54 : 76, null);
        drawRefractionBloom(so, mobile ? 60 : 86, pick);

        // 6. Arestas do prisma e chanfro interno sutil iluminados pela passagem da luz
        px.globalCompositeOperation = "source-over";
        var cen = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
        var a2 = lerp(cen, A, 0.84), b2 = lerp(cen, B, 0.84), c2 = lerp(cen, C, 0.84);
        px.strokeStyle = "rgba(255,255,255,0.12)"; px.lineWidth = 1;
        px.beginPath(); px.moveTo(a2.x, a2.y); px.lineTo(b2.x, b2.y); px.lineTo(c2.x, c2.y); px.closePath(); px.stroke();
        [[A, a2], [B, b2], [C, c2]].forEach(function (pr) { px.beginPath(); px.moveTo(pr[0].x, pr[0].y); px.lineTo(pr[1].x, pr[1].y); px.stroke(); });

        px.strokeStyle = "rgba(255,255,255,0.48)"; px.lineWidth = 1.2;
        px.beginPath(); px.moveTo(A.x, A.y); px.lineTo(B.x, B.y); px.lineTo(C.x, C.y); px.closePath(); px.stroke();

        var hitL = Math.max(0.08, Math.min(0.92, 0.5 - tilt * 0.12));
        var edgeL = px.createLinearGradient(C.x, C.y, A.x, A.y);
        edgeL.addColorStop(0, "rgba(255,255,255,0.16)");
        edgeL.addColorStop(Math.max(0, hitL - 0.22), "rgba(255,255,255,0.32)");
        edgeL.addColorStop(hitL, "rgba(255,255,255,0.98)");
        edgeL.addColorStop(Math.min(1, hitL + 0.22), "rgba(255,255,255,0.32)");
        edgeL.addColorStop(1, "rgba(255,255,255,0.22)");
        px.strokeStyle = edgeL; px.lineWidth = 1.8;
        px.beginPath(); px.moveTo(C.x, C.y); px.lineTo(A.x, A.y); px.stroke();

        var hitR = Math.max(0.08, Math.min(0.92, xk + (pick - 0.5) * 0.13));
        var edgeR = px.createLinearGradient(A.x, A.y, B.x, B.y);
        edgeR.addColorStop(0, "rgba(255,255,255,0.22)");
        edgeR.addColorStop(Math.max(0, hitR - 0.22), hue(pick, 0.42, 72));
        edgeR.addColorStop(hitR, hue(pick, 0.98, 84));
        edgeR.addColorStop(Math.min(1, hitR + 0.22), hue(pick, 0.42, 72));
        edgeR.addColorStop(1, "rgba(255,255,255,0.18)");
        px.strokeStyle = edgeR;
        px.beginPath(); px.moveTo(A.x, A.y); px.lineTo(B.x, B.y); px.stroke();

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
        if (!picked) { aim = 0.5 + 0.46 * Math.sin(clock * 0.16 + 0.45); aimX = 0.5 + 0.25 * Math.sin(clock * 0.27); }
        else if (clock - lastMove > 2.5) { aimX = 0.5 + 0.2 * Math.sin(clock * 0.27); }
        cur += (aim - cur) * 0.06;
        curX += (aimX - curX) * 0.05;
        drawPrism(true);
        if (prismRunning) requestAnimationFrame(prismLoop);
    }
    try {
        var savedHue = parseFloat(localStorage.getItem("pn3-hue"));
        if (savedHue >= 0 && savedHue <= 1) { aim = cur = savedHue; picked = true; }
    } catch (e) {}
    sizePrism(); drawPrism(false);
    var hero = $(".hero");
    function point(e) {
        if (window.scrollY > 20) return;
        if (e.target && e.target.closest && e.target.closest(".ctas")) return;
        var r = hero.getBoundingClientRect();
        var nx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
        var ny = (e.clientY - r.top) / r.height;
        var dy = prevY === null ? 0 : Math.abs(e.clientY - prevY);
        prevY = e.clientY;
        // Ignora as bordas de saída da Hero e movimentos bruscos de saída para não travar na cor da borda
        if (e.type !== "pointerdown" && (ny < 0.14 || ny > 0.80 || dy > 26)) return;
        var mappedY = Math.max(0, Math.min(1, (ny - 0.14) / 0.66));
        aim = Math.max(0, Math.min(1, mappedY * 0.72 + nx * 0.28));
        aimX = nx;
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
    hero.addEventListener("pointerleave", function () { prevY = null; });
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

    // Ajuste exato do nome no rodapé para nunca cortar em nenhuma tela
    var footName = $(".foot-name"), footSpan = $(".foot-name span");
    function fitFootName() {
        if (!footName || !footSpan) return;
        var maxW = footName.clientWidth;
        if (maxW <= 0) return;
        footSpan.style.fontSize = "100px";
        var textW = footSpan.offsetWidth;
        if (textW > 0) {
            footSpan.style.fontSize = Math.floor(100 * (maxW / textW) * 0.992) + "px";
        }
    }
    window.addEventListener("resize", fitFootName, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitFootName);

    /* ---------- Antigravity UI & Motion Engine (GSAP + ScrollTrigger + 3D CSS) ---------- */
    function initTilt() {
        if (reduce || !window.gsap || window.matchMedia("(hover: none)").matches) return;
        $$("[data-tilt]").forEach(function (card) {
            if (card._tiltInit) return;
            card._tiltInit = true;
            var isFeature = card.classList.contains("feature");
            var maxRot = isFeature ? 1.4 : 2.6;
            var lift = isFeature ? -2 : -3;
            var rx = window.gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3.out" });
            var ry = window.gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3.out" });
            var ty = window.gsap.quickTo(card, "y", { duration: 0.45, ease: "power3.out" });
            window.gsap.set(card, { transformPerspective: 1100 });
            card.addEventListener("pointerenter", function () {
                card.style.willChange = "transform";
                ty(lift);
            }, { passive: true });
            card.addEventListener("pointermove", function (e) {
                var r = card.getBoundingClientRect();
                var px = (e.clientX - r.left) / r.width - 0.5;
                var py = (e.clientY - r.top) / r.height - 0.5;
                rx(-py * maxRot * 2);
                ry(px * maxRot * 2);
            }, { passive: true });
            card.addEventListener("pointerleave", function () {
                rx(0); ry(0); ty(0);
                setTimeout(function () { card.style.willChange = ""; }, 500);
            }, { passive: true });
        });
    }

    function initMotion() {
        if (reduce || !window.gsap) return;
        var gsap = window.gsap;
        if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

        // Entrada espacial 3D da Hero
        var heroItems = $$(".hero-item");
        gsap.fromTo(heroItems,
            { y: 32, rotationX: 14, z: -24, opacity: 0, transformPerspective: 1000 },
            { y: 0, rotationX: 0, z: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
              onStart: function () { heroItems.forEach(function (el) { el.style.willChange = "transform, opacity"; }); },
              onComplete: function () { heroItems.forEach(function (el) { el.style.willChange = ""; }); }
            }
        );

        if (!window.ScrollTrigger) return;

        // Helper para entradas 3D escalonadas com gerenciamento limpo de will-change
        function scrollFloat(targets, triggerEl, opts) {
            var list = typeof targets === "string" ? $$(targets) : targets;
            if (!list || !list.length) return;
            var cfg = opts || {};
            gsap.fromTo(list,
                { y: cfg.y || 38, rotationX: cfg.rotX !== undefined ? cfg.rotX : 12, z: cfg.z || -20, opacity: 0, transformPerspective: 1100 },
                {
                    y: 0, rotationX: 0, z: 0, opacity: 1,
                    duration: cfg.dur || 0.85,
                    stagger: cfg.stagger !== undefined ? cfg.stagger : 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: triggerEl || list[0],
                        start: cfg.start || "top 86%",
                         toggleActions: "play none none none",
                        once: true
                    },
                    onStart: function () { list.forEach(function (el) { el.style.willChange = "transform, opacity"; }); },
                    onComplete: function () { list.forEach(function (el) { el.style.willChange = ""; }); }
                }
            );
        }

        // Cabeçalhos das seções
        $$(".sec-head").forEach(function (head) {
            scrollFloat($$(".kicker, .title, .sub", head), head, { y: 28, rotX: 10, stagger: 0.09 });
        });

        // Quem sou: parágrafos, cards 01-04 em dominó (0.1s) e faixa de ferramentas
        scrollFloat("#sobre .about-text p", "#sobre .about-grid", { y: 32, rotX: 10, stagger: 0.1 });
        scrollFloat("#sobre .rays-row li", "#sobre .rays-row", { y: 44, rotX: 16, z: -30, stagger: 0.1 });
        scrollFloat(["#sobre .tools-band"], "#sobre .tools-band", { y: 30, rotX: 8, stagger: 0 });
        scrollFloat("#sobre .stack li", "#sobre .tools-band", { y: 18, rotX: 0, z: 0, dur: 0.6, stagger: 0.04 });

        // Experiência: itens da timeline em cascata 0.1s
        scrollFloat("#timeline .job", "#timeline", { y: 30, rotX: 8, stagger: 0.1 });

        // Formação: Bacharelado, cursos técnicos e certificações em dominó
        scrollFloat(["#formacao .degree", "#formacao .course"].reduce(function (a, s) { return a.concat($$(s)); }, []), "#formacao .edu-top", { y: 42, rotX: 14, z: -24, stagger: 0.1 });
        scrollFloat("#formacao .cert-list li", "#formacao .edu-bottom", { y: 22, rotX: 6, stagger: 0.08 });

        // Projetos: palco AgentDeck + perspectiva 3D isométrica ao rolar na imagem .shot
        scrollFloat(["#projetos .feature"], "#projetos .projects", { y: 46, rotX: 10, z: -30, stagger: 0 });
        var shot = $("#projetos .shot");
        if (shot) {
            gsap.fromTo(shot,
                { rotationX: 18, rotationY: -7, rotationZ: 1.5, y: 44, scale: 0.94, transformPerspective: 1400 },
                {
                    rotationX: 0, rotationY: 0, rotationZ: 0, y: 0, scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#projetos .feature",
                        start: "top 85%",
                        end: "center 52%",
                        scrub: 0.7
                    }
                }
            );
        }

        // Contato: links e formulário de vidro
        scrollFloat("#contato .contact-list > *", "#contato .contact-grid", { y: 26, rotX: 8, stagger: 0.1 });
        scrollFloat(["#contato .form-glass"], "#contato .form-wrap", { y: 36, rotX: 12, stagger: 0 });

        // Parallax em múltiplas camadas (fundo mais lento que o primeiro plano)
        gsap.to("#prism", {
            yPercent: 15,
            ease: "none",
            scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: true }
        });
        gsap.to("#contato .stars", {
            yPercent: -14,
            ease: "none",
            scrollTrigger: { trigger: "#contato", start: "top bottom", end: "bottom top", scrub: true }
        });
        gsap.fromTo(".foot-name",
            { y: 36, opacity: 0.35 },
            {
                y: 0, opacity: 1, ease: "none",
                scrollTrigger: { trigger: ".footer", start: "top 92%", end: "bottom bottom", scrub: 0.6 }
            }
        );

        initTilt();
    }

    // Link ativo na navegação
    var links = $$(".nav-links a");
    function markActive() {
        var current = "";
        $$("main section[id]").forEach(function (sec) { if (sec.getBoundingClientRect().top < innerHeight * 0.4) current = sec.id; });
        links.forEach(function (a) { var on = a.getAttribute("href") === "#" + current; a.classList.toggle("is-active", on); on ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current"); });
    }
    window.addEventListener("scroll", markActive, { passive: true });

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
            { group: t("pal.actions"), icon: "i-globe", label: t("pal.lang"), hint: lang === "en" ? "PT" : "EN", keys: "idioma language trocar switch portugues", stay: true, run: function () { apply(lang === "en" ? "pt" : "en"); render(palInput.value); } }
        ];
        var links = [
            { group: t("pal.links"), icon: "i-in", label: "LinkedIn", hint: "in/pattrick-nunes", keys: "linkedin", href: "https://www.linkedin.com/in/pattrick-nunes" },
            { group: t("pal.links"), icon: "i-gh", label: "GitHub", hint: "pattrickn0", keys: "github codigo code", href: "https://github.com/pattrickn0" },
            { group: t("pal.links"), icon: "i-box", label: t("pal.agentdeck"), hint: "github", keys: "agentdeck projeto project ia ai", href: "https://github.com/pattrickn0/AgentDeck" }
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
    initMotion();
    markActive();
    fitFootName();
})();
