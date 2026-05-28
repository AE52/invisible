const STORAGE_KEYS = {
    username: 'repo-manager:username',
    token: 'repo-manager:token',
    rememberToken: 'repo-manager:remember-token',
    language: 'repo-manager:language'
};

const translations = {
    en: {
        navOverview: 'Overview',
        navRepos: 'Repositories',
        navActivity: 'Activity',
        navTips: 'Safety',
        localOnlyTitle: 'Local-first',
        localOnlyText: 'Tokens stay in this browser session unless you choose to save them.',
        eyebrow: 'shadcn/ui inspired interface',
        heroTitle: 'Control your GitHub repos from one focused dashboard.',
        heroDescription: 'Fetch all repositories, inspect health signals, select by filters, and run safer bulk visibility or deletion actions.',
        fetchRepos: 'Fetch Repos',
        loadDemo: 'Load Demo',
        connectionTitle: 'GitHub connection',
        connectionSubtitle: 'Use a fine-grained token with repo permissions.',
        username: 'GitHub Username',
        token: 'GitHub Token',
        rememberToken: 'Remember token locally',
        languageLabel: 'Language',
        totalRepos: 'Total repos',
        awaitingData: 'Awaiting data',
        publicRepos: 'Public repos',
        visibleToWorld: 'Visible to everyone',
        privateRepos: 'Private repos',
        restrictedAccess: 'Restricted access',
        needsAttention: 'Needs attention',
        archivedForksEmpty: 'Archived, forks, or empty',
        workspaceTitle: 'Repository workspace',
        workspaceSubtitle: 'Search, filter, sort, select, export, and perform bulk actions.',
        searchLabel: 'Search repositories',
        visibilityLabel: 'Visibility',
        allRepos: 'All repos',
        publicOnly: 'Public only',
        privateOnly: 'Private only',
        languageFilterLabel: 'Language',
        allLanguages: 'All languages',
        sortLabel: 'Sort by',
        sortUpdated: 'Recently updated',
        sortName: 'Name',
        sortStars: 'Stars',
        sortSize: 'Size',
        selectedRepos: 'selected repositories',
        selectAll: 'Select visible',
        deselectAll: 'Deselect visible',
        clearSelection: 'Clear',
        makePrivate: 'Make private',
        makePublic: 'Make public',
        delete: 'Delete',
        publicHeading: 'Public Repos',
        privateHeading: 'Private Repos',
        publicBadge: 'Public',
        privateBadge: 'Private',
        activityTitle: 'Action timeline',
        activitySubtitle: 'Recent fetch, export, and bulk operation events.',
        noActivity: 'No activity yet.',
        safetyTitle: 'Safety checklist',
        safetySubtitle: 'Recommended guardrails before destructive changes.',
        tipFineToken: 'Prefer fine-grained personal access tokens.',
        tipExport: 'Export selected repositories before bulk changes.',
        tipDelete: 'Deletion always requires a confirmation phrase.',
        missingCredentials: 'Please enter a GitHub username and token.',
        fetching: 'Fetching repositories from GitHub...',
        fetchSuccess: 'Repositories loaded successfully.',
        fetchFailed: 'Could not fetch repositories. Check your token and permissions.',
        noRepos: 'No repositories match the current filters.',
        noSelection: 'Select at least one repository first.',
        exportSuccess: 'Export file created.',
        bulkActionCompleted: 'Bulk action completed.',
        confirmVisibility: 'Type CONFIRM to update selected repository visibility.',
        confirmDelete: 'Type DELETE to permanently delete selected repositories.',
        actionCancelled: 'Action cancelled.',
        demoLoaded: 'Demo repositories loaded.',
        emptyLanguage: 'Unknown',
        repoCount: 'repos',
        updated: 'Updated',
        stars: 'stars',
        forks: 'forks',
        issues: 'issues',
        archived: 'Archived',
        fork: 'Fork',
        emptyRepo: 'Empty',
        selected: 'Selected',
        apiRateRemaining: 'API rate remaining',
        filteredRepoCount: 'filtered repos',
        savedLocally: 'Preferences saved locally.'
    },
    tr: {
        navOverview: 'Özet',
        navRepos: 'Repolar',
        navActivity: 'Aktivite',
        navTips: 'Güvenlik',
        localOnlyTitle: 'Yerel öncelikli',
        localOnlyText: 'Tokenlar, siz kaydetmeyi seçmedikçe yalnızca bu tarayıcı oturumunda kalır.',
        eyebrow: 'shadcn/ui esintili arayüz',
        heroTitle: 'GitHub repolarınızı tek ve odaklı bir panelden yönetin.',
        heroDescription: 'Tüm repoları getirin, sağlık sinyallerini inceleyin, filtrelerle seçin ve daha güvenli toplu görünürlük ya da silme işlemleri çalıştırın.',
        fetchRepos: 'Repoları Getir',
        loadDemo: 'Demo Yükle',
        connectionTitle: 'GitHub bağlantısı',
        connectionSubtitle: 'Repo yetkili fine-grained token kullanın.',
        username: 'GitHub Kullanıcı Adı',
        token: 'GitHub Token',
        rememberToken: 'Tokenı yerelde hatırla',
        languageLabel: 'Dil',
        totalRepos: 'Toplam repo',
        awaitingData: 'Veri bekleniyor',
        publicRepos: 'Public repo',
        visibleToWorld: 'Herkese görünür',
        privateRepos: 'Private repo',
        restrictedAccess: 'Erişim kısıtlı',
        needsAttention: 'Dikkat isteyen',
        archivedForksEmpty: 'Arşiv, fork veya boş',
        workspaceTitle: 'Repo çalışma alanı',
        workspaceSubtitle: 'Ara, filtrele, sırala, seç, dışa aktar ve toplu işlem yap.',
        searchLabel: 'Repolarda ara',
        visibilityLabel: 'Görünürlük',
        allRepos: 'Tüm repolar',
        publicOnly: 'Sadece public',
        privateOnly: 'Sadece private',
        languageFilterLabel: 'Dil',
        allLanguages: 'Tüm diller',
        sortLabel: 'Sırala',
        sortUpdated: 'Son güncellenen',
        sortName: 'İsim',
        sortStars: 'Yıldız',
        sortSize: 'Boyut',
        selectedRepos: 'repo seçildi',
        selectAll: 'Görünenleri seç',
        deselectAll: 'Görünenleri kaldır',
        clearSelection: 'Temizle',
        makePrivate: 'Private yap',
        makePublic: 'Public yap',
        delete: 'Sil',
        publicHeading: 'Public Repos',
        privateHeading: 'Private Repos',
        publicBadge: 'Public',
        privateBadge: 'Private',
        activityTitle: 'İşlem geçmişi',
        activitySubtitle: 'Son getirme, dışa aktarma ve toplu işlem olayları.',
        noActivity: 'Henüz aktivite yok.',
        safetyTitle: 'Güvenlik kontrol listesi',
        safetySubtitle: 'Yıkıcı değişikliklerden önce önerilen önlemler.',
        tipFineToken: 'Fine-grained personal access token tercih edin.',
        tipExport: 'Toplu değişikliklerden önce seçili repoları dışa aktarın.',
        tipDelete: 'Silme işlemi her zaman onay metni gerektirir.',
        missingCredentials: 'Lütfen GitHub kullanıcı adı ve token girin.',
        fetching: 'Repolar GitHub üzerinden getiriliyor...',
        fetchSuccess: 'Repolar başarıyla yüklendi.',
        fetchFailed: 'Repolar getirilemedi. Token ve izinleri kontrol edin.',
        noRepos: 'Geçerli filtrelerle eşleşen repo yok.',
        noSelection: 'Önce en az bir repo seçin.',
        exportSuccess: 'Dışa aktarma dosyası oluşturuldu.',
        bulkActionCompleted: 'Toplu işlem tamamlandı.',
        confirmVisibility: 'Seçili repo görünürlüğünü güncellemek için CONFIRM yazın.',
        confirmDelete: 'Seçili repoları kalıcı silmek için DELETE yazın.',
        actionCancelled: 'İşlem iptal edildi.',
        demoLoaded: 'Demo repolar yüklendi.',
        emptyLanguage: 'Bilinmiyor',
        repoCount: 'repo',
        updated: 'Güncellendi',
        stars: 'yıldız',
        forks: 'fork',
        issues: 'issue',
        archived: 'Arşiv',
        fork: 'Fork',
        emptyRepo: 'Boş',
        selected: 'Seçildi',
        apiRateRemaining: 'Kalan API limiti',
        filteredRepoCount: 'filtrelenen repo',
        savedLocally: 'Tercihler yerelde kaydedildi.'
    }
};

const state = {
    repos: [],
    filteredRepos: [],
    selected: new Set(),
    currentLanguage: 'tr',
    lastRateLimit: null,
    isFetching: false
};

const demoRepos = [
    createDemoRepo('portfolio-next', false, 'TypeScript', 128, 18, 4, 3420, ['nextjs', 'portfolio'], '2026-05-19T10:24:00Z'),
    createDemoRepo('infra-playbooks', true, 'Shell', 22, 5, 1, 890, ['devops', 'ansible'], '2026-05-17T16:11:00Z'),
    createDemoRepo('legacy-api', true, 'JavaScript', 8, 2, 12, 0, ['api'], '2025-12-02T08:10:00Z', { archived: true }),
    createDemoRepo('design-system', false, 'CSS', 54, 6, 2, 1560, ['ui', 'components'], '2026-05-26T12:45:00Z'),
    createDemoRepo('forked-lab', false, 'Python', 3, 11, 0, 770, ['experiment'], '2026-04-08T21:03:00Z', { fork: true }),
    createDemoRepo('empty-starter', true, null, 0, 0, 0, 0, [], '2026-02-13T09:30:00Z')
];

function createDemoRepo(name, isPrivate, language, stargazersCount, forksCount, openIssuesCount, size, topics, updatedAt, overrides = {}) {
    return {
        id: `demo-${name}`,
        name,
        full_name: `demo/${name}`,
        private: isPrivate,
        html_url: `https://github.com/demo/${name}`,
        description: `Demo repository for ${name.replaceAll('-', ' ')} workflows.`,
        language,
        stargazers_count: stargazersCount,
        forks_count: forksCount,
        open_issues_count: openIssuesCount,
        size,
        topics,
        updated_at: updatedAt,
        archived: false,
        fork: false,
        ...overrides
    };
}

function t(key) {
    return translations[state.currentLanguage][key] || translations.en[key] || key;
}

function changeLanguage(lang) {
    const nextLanguage = lang || document.getElementById('language').value;
    state.currentLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage;
    localStorage.setItem(STORAGE_KEYS.language, nextLanguage);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = t(key);
    });

    document.querySelector('#searchInput').placeholder = state.currentLanguage === 'tr'
        ? 'İsim, dil, konu ara...'
        : 'Search by name, language, topic...';

    renderRepositories();
    updateStats();
    updateSelectionSummary();
}

function init() {
    state.currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || 'tr';
    document.getElementById('language').value = state.currentLanguage;
    document.getElementById('username').value = localStorage.getItem(STORAGE_KEYS.username) || '';
    document.getElementById('rememberToken').checked = localStorage.getItem(STORAGE_KEYS.rememberToken) === 'true';

    if (document.getElementById('rememberToken').checked) {
        document.getElementById('token').value = localStorage.getItem(STORAGE_KEYS.token) || '';
    }

    document.querySelectorAll('[data-filter]').forEach((element) => {
        element.addEventListener('input', applyFilters);
        element.addEventListener('change', applyFilters);
    });

    document.getElementById('rememberToken').addEventListener('change', persistCredentials);
    document.getElementById('username').addEventListener('change', persistCredentials);
    document.getElementById('token').addEventListener('change', persistCredentials);

    changeLanguage(state.currentLanguage);
    renderRepositories();
}

function persistCredentials() {
    const rememberToken = document.getElementById('rememberToken').checked;
    localStorage.setItem(STORAGE_KEYS.username, document.getElementById('username').value.trim());
    localStorage.setItem(STORAGE_KEYS.rememberToken, String(rememberToken));

    if (rememberToken) {
        localStorage.setItem(STORAGE_KEYS.token, document.getElementById('token').value);
        showToast(t('savedLocally'), 'success');
    } else {
        localStorage.removeItem(STORAGE_KEYS.token);
    }
}

function toggleTokenVisibility() {
    const tokenInput = document.getElementById('token');
    tokenInput.type = tokenInput.type === 'password' ? 'text' : 'password';
}

async function fetchRepos() {
    const username = document.getElementById('username').value.trim();
    const token = document.getElementById('token').value.trim();

    if (!username || !token) {
        showToast(t('missingCredentials'), 'error');
        return;
    }

    setFetching(true);
    showToast(t('fetching'), 'info');

    try {
        const repos = await fetchAllRepos(token);
        state.repos = repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        state.selected.clear();
        persistCredentials();
        populateLanguageFilter();
        applyFilters();
        addActivity(`${t('fetchSuccess')} (${repos.length})`);
        showToast(`${t('fetchSuccess')} ${state.lastRateLimit ? `${t('apiRateRemaining')}: ${state.lastRateLimit}` : ''}`, 'success');
    } catch (error) {
        console.error('Error fetching repos:', error);
        showToast(`${t('fetchFailed')} ${error.message || ''}`, 'error');
        addActivity(t('fetchFailed'));
    } finally {
        setFetching(false);
    }
}

async function fetchAllRepos(token) {
    const collectedRepos = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        const response = await fetch(`https://api.github.com/user/repos?per_page=100&page=${page}&sort=updated&affiliation=owner,collaborator`, {
            headers: createGitHubHeaders(token)
        });

        state.lastRateLimit = response.headers.get('x-ratelimit-remaining');

        if (!response.ok) {
            const message = await extractErrorMessage(response);
            throw new Error(message);
        }

        const repos = await response.json();
        collectedRepos.push(...repos);
        hasMore = repos.length === 100;
        page += 1;
    }

    return collectedRepos;
}

function createGitHubHeaders(token) {
    return {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
    };
}

async function extractErrorMessage(response) {
    try {
        const payload = await response.json();
        return payload.message || `${response.status} ${response.statusText}`;
    } catch {
        return `${response.status} ${response.statusText}`;
    }
}

function setFetching(isFetching) {
    state.isFetching = isFetching;
    const fetchButton = document.getElementById('fetchReposButton');
    fetchButton.disabled = isFetching;
    fetchButton.querySelector('i').classList.toggle('spin', isFetching);
}

function loadDemoData() {
    state.repos = demoRepos;
    state.selected.clear();
    populateLanguageFilter();
    applyFilters();
    addActivity(t('demoLoaded'));
    showToast(t('demoLoaded'), 'success');
}

function populateLanguageFilter() {
    const languageFilter = document.getElementById('languageFilter');
    const currentValue = languageFilter.value;
    const languages = [...new Set(state.repos.map((repo) => repo.language || t('emptyLanguage')))].sort();

    languageFilter.innerHTML = `<option value="all">${t('allLanguages')}</option>`;
    languages.forEach((language) => {
        const option = document.createElement('option');
        option.value = language;
        option.textContent = language;
        languageFilter.appendChild(option);
    });

    if ([...languageFilter.options].some((option) => option.value === currentValue)) {
        languageFilter.value = currentValue;
    }
}

function applyFilters() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const visibility = document.getElementById('visibilityFilter').value;
    const language = document.getElementById('languageFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    state.filteredRepos = state.repos.filter((repo) => {
        const repoLanguage = repo.language || t('emptyLanguage');
        const searchable = [repo.name, repo.full_name, repo.description, repoLanguage, ...(repo.topics || [])]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
        const matchesQuery = !query || searchable.includes(query);
        const matchesVisibility = visibility === 'all' || (visibility === 'private' ? repo.private : !repo.private);
        const matchesLanguage = language === 'all' || repoLanguage === language;
        return matchesQuery && matchesVisibility && matchesLanguage;
    }).sort((a, b) => sortRepos(a, b, sortBy));

    for (const repoId of [...state.selected]) {
        if (!state.filteredRepos.some((repo) => getRepoKey(repo) === repoId)) {
            state.selected.delete(repoId);
        }
    }

    renderRepositories();
    updateStats();
    updateSelectionSummary();
}

function sortRepos(a, b, sortBy) {
    if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
    }

    if (sortBy === 'stars') {
        return (b.stargazers_count || 0) - (a.stargazers_count || 0);
    }

    if (sortBy === 'size') {
        return (b.size || 0) - (a.size || 0);
    }

    return new Date(b.updated_at || 0) - new Date(a.updated_at || 0);
}

function renderRepositories() {
    const publicReposDiv = document.getElementById('public-repos');
    const privateReposDiv = document.getElementById('private-repos');
    publicReposDiv.innerHTML = '';
    privateReposDiv.innerHTML = '';

    const publicRepos = state.filteredRepos.filter((repo) => !repo.private);
    const privateRepos = state.filteredRepos.filter((repo) => repo.private);

    renderRepoList(publicRepos, publicReposDiv, 'public');
    renderRepoList(privateRepos, privateReposDiv, 'private');

    document.getElementById('public-count').textContent = `${publicRepos.length} ${t('repoCount')}`;
    document.getElementById('private-count').textContent = `${privateRepos.length} ${t('repoCount')}`;
}

function renderRepoList(repos, container, visibility) {
    if (!repos.length) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.innerHTML = `<i class="fa-regular fa-folder-open"></i><span>${t('noRepos')}</span>`;
        container.appendChild(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    repos.forEach((repo) => fragment.appendChild(createRepoCard(repo, visibility)));
    container.appendChild(fragment);
}

function createRepoCard(repo, visibility) {
    const repoKey = getRepoKey(repo);
    const repoDiv = document.createElement('article');
    repoDiv.className = `repo ${visibility}`;
    repoDiv.dataset.repoId = repoKey;

    const badges = [
        repo.archived ? `<span class="mini-badge warning">${t('archived')}</span>` : '',
        repo.fork ? `<span class="mini-badge neutral">${t('fork')}</span>` : '',
        (repo.size || 0) === 0 ? `<span class="mini-badge danger">${t('emptyRepo')}</span>` : ''
    ].join('');

    repoDiv.innerHTML = `
        <div class="repo-topline">
            <label class="repo-check" for="repo-${safeId(repoKey)}">
                <input type="checkbox" data-repo-id="${escapeHtml(repoKey)}" data-reponame="${escapeHtml(repo.name)}" id="repo-${safeId(repoKey)}" ${state.selected.has(repoKey) ? 'checked' : ''}>
                <span class="sr-only">${t('selected')} ${escapeHtml(repo.name)}</span>
            </label>
            <div class="repo-title">
                <a href="${escapeHtml(repo.html_url || '#')}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}</a>
                <span class="repo-description">${escapeHtml(repo.description || '—')}</span>
            </div>
            <span class="badge ${visibility}">${visibility === 'private' ? t('privateBadge') : t('publicBadge')}</span>
        </div>
        <div class="repo-meta">
            <span><i class="fa-solid fa-code"></i>${escapeHtml(repo.language || t('emptyLanguage'))}</span>
            <span><i class="fa-solid fa-star"></i>${repo.stargazers_count || 0} ${t('stars')}</span>
            <span><i class="fa-solid fa-code-fork"></i>${repo.forks_count || 0} ${t('forks')}</span>
            <span><i class="fa-solid fa-circle-exclamation"></i>${repo.open_issues_count || 0} ${t('issues')}</span>
        </div>
        <div class="repo-footer">
            <span>${t('updated')}: ${formatDate(repo.updated_at)}</span>
            <span>${formatSize(repo.size || 0)}</span>
        </div>
        <div class="repo-tags">${badges}${(repo.topics || []).slice(0, 4).map((topic) => `<span class="mini-badge">#${escapeHtml(topic)}</span>`).join('')}</div>
    `;

    repoDiv.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
        if (event.target.checked) {
            state.selected.add(repoKey);
        } else {
            state.selected.delete(repoKey);
        }
        updateSelectionSummary();
    });

    return repoDiv;
}

function updateStats() {
    const total = state.repos.length;
    const publicCount = state.repos.filter((repo) => !repo.private).length;
    const privateCount = state.repos.filter((repo) => repo.private).length;
    const attentionCount = state.repos.filter((repo) => repo.archived || repo.fork || (repo.size || 0) === 0).length;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-total-detail').textContent = total ? `${state.filteredRepos.length} ${t('filteredRepoCount')}` : t('awaitingData');
    document.getElementById('stat-public').textContent = publicCount;
    document.getElementById('stat-private').textContent = privateCount;
    document.getElementById('stat-attention').textContent = attentionCount;
}

function updateSelectionSummary() {
    document.getElementById('selectedCount').textContent = state.selected.size;
    const visibleIds = state.filteredRepos.map(getRepoKey);
    const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((repoId) => state.selected.has(repoId));
    const selectAllButton = document.getElementById('selectAllButton');
    selectAllButton.querySelector('span').textContent = allVisibleSelected ? t('deselectAll') : t('selectAll');
}

function toggleSelectAll() {
    const visibleIds = state.filteredRepos.map(getRepoKey);
    const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((repoId) => state.selected.has(repoId));

    visibleIds.forEach((repoId) => {
        if (allVisibleSelected) {
            state.selected.delete(repoId);
        } else {
            state.selected.add(repoId);
        }
    });

    renderRepositories();
    updateSelectionSummary();
}

function clearSelection() {
    state.selected.clear();
    renderRepositories();
    updateSelectionSummary();
}

async function bulkAction(action) {
    const selectedRepos = getSelectedRepos();
    const username = document.getElementById('username').value.trim();
    const token = document.getElementById('token').value.trim();

    if (!selectedRepos.length) {
        showToast(t('noSelection'), 'error');
        return;
    }

    if (!username || !token) {
        showToast(t('missingCredentials'), 'error');
        return;
    }

    const confirmation = window.prompt(action === 'delete' ? t('confirmDelete') : t('confirmVisibility'));
    const requiredPhrase = action === 'delete' ? 'DELETE' : 'CONFIRM';
    if (confirmation !== requiredPhrase) {
        showToast(t('actionCancelled'), 'info');
        return;
    }

    setBulkButtonsDisabled(true);

    try {
        for (const repo of selectedRepos) {
            const repoName = repo.name;
            if (action === 'delete') {
                await updateRepository(repoName, token, 'DELETE');
                state.repos = state.repos.filter((item) => getRepoKey(item) !== getRepoKey(repo));
                state.selected.delete(getRepoKey(repo));
            } else {
                const makePrivate = action === 'private';
                await updateRepository(repoName, token, 'PATCH', { private: makePrivate });
                repo.private = makePrivate;
            }
        }

        applyFilters();
        addActivity(`${t('bulkActionCompleted')} (${selectedRepos.length})`);
        showToast(t('bulkActionCompleted'), 'success');
    } catch (error) {
        console.error(`Error performing ${action}:`, error);
        showToast(error.message || `Error performing ${action}`, 'error');
    } finally {
        setBulkButtonsDisabled(false);
    }
}

async function updateRepository(repoName, token, method, body) {
    const username = document.getElementById('username').value.trim();
    const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(username)}/${encodeURIComponent(repoName)}`, {
        method,
        headers: {
            ...createGitHubHeaders(token),
            ...(body ? { 'Content-Type': 'application/json' } : {})
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok && response.status !== 204) {
        const message = await extractErrorMessage(response);
        throw new Error(`${repoName}: ${message}`);
    }
}

function setBulkButtonsDisabled(isDisabled) {
    document.querySelectorAll('.bulk-actions button').forEach((button) => {
        button.disabled = isDisabled;
    });
}

function exportSelected(format) {
    const selectedRepos = getSelectedRepos();
    if (!selectedRepos.length) {
        showToast(t('noSelection'), 'error');
        return;
    }

    const timestamp = new Date().toISOString().slice(0, 19).replaceAll(':', '-');
    const filename = `github-repos-${timestamp}.${format}`;
    const payload = format === 'csv' ? reposToCsv(selectedRepos) : JSON.stringify(selectedRepos, null, 2);
    const mimeType = format === 'csv' ? 'text/csv;charset=utf-8' : 'application/json;charset=utf-8';
    downloadFile(filename, payload, mimeType);
    addActivity(`${t('exportSuccess')} (${format.toUpperCase()})`);
    showToast(t('exportSuccess'), 'success');
}

function reposToCsv(repos) {
    const headers = ['name', 'visibility', 'language', 'stars', 'forks', 'issues', 'size_kb', 'updated_at', 'url'];
    const rows = repos.map((repo) => [
        repo.name,
        repo.private ? 'private' : 'public',
        repo.language || '',
        repo.stargazers_count || 0,
        repo.forks_count || 0,
        repo.open_issues_count || 0,
        repo.size || 0,
        repo.updated_at || '',
        repo.html_url || ''
    ]);

    return [headers, ...rows].map((row) => row.map(csvEscape).join(',')).join('\n');
}

function csvEscape(value) {
    const stringValue = String(value ?? '');
    return /[",\n]/.test(stringValue) ? `"${stringValue.replaceAll('"', '""')}"` : stringValue;
}

function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function getSelectedRepos() {
    return state.repos.filter((repo) => state.selected.has(getRepoKey(repo)));
}

function getRepoKey(repo) {
    return String(repo.id || repo.full_name || repo.name);
}

function addActivity(message) {
    const activityLog = document.getElementById('activityLog');
    const empty = activityLog.querySelector('.empty-state');
    if (empty) {
        empty.remove();
    }

    const item = document.createElement('li');
    item.innerHTML = `<span>${escapeHtml(message)}</span><time>${new Date().toLocaleTimeString(state.currentLanguage === 'tr' ? 'tr-TR' : 'en-US')}</time>`;
    activityLog.prepend(item);

    [...activityLog.children].slice(6).forEach((child) => child.remove());
}

function showToast(message, type = 'info') {
    const toastRegion = document.getElementById('toastRegion');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${escapeHtml(message)}</span><button type="button" aria-label="Dismiss"><i class="fa-solid fa-xmark"></i></button>`;
    toast.querySelector('button').addEventListener('click', () => toast.remove());
    toastRegion.appendChild(toast);
    setTimeout(() => toast.remove(), 4500);
}

function formatDate(dateValue) {
    if (!dateValue) {
        return '—';
    }

    return new Intl.DateTimeFormat(state.currentLanguage === 'tr' ? 'tr-TR' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(dateValue));
}

function formatSize(sizeInKb) {
    if (sizeInKb >= 1024) {
        return `${(sizeInKb / 1024).toFixed(1)} MB`;
    }

    return `${sizeInKb} KB`;
}

function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function safeId(value) {
    return escapeHtml(String(value).replace(/[^a-zA-Z0-9_-]/g, '-'));
}

window.addEventListener('DOMContentLoaded', init);
