const translations = {
    en: {
        username: "GitHub Username:",
        token: "GitHub Token:",
        fetchRepos: "Fetch Repos",
        makePrivate: "Make Selected Private",
        makePublic: "Make Selected Public",
        delete: "Delete Selected",
        selectAll: "Select All",
        deselectAll: "Deselect All",
        publicHeading: "Public Repos",
        privateHeading: "Private Repos",
        successPrivate: "successfully made private.",
        successPublic: "successfully made public.",
        successDelete: "successfully deleted.",
        bulkActionCompleted: "Bulk action completed."
    },
    tr: {
        username: "GitHub Kullanıcı Adı:",
        token: "GitHub Token:",
        fetchRepos: "Repoları Getir",
        makePrivate: "Seçilenleri Private Yap",
        makePublic: "Seçilenleri Public Yap",
        delete: "Seçilenleri Sil",
        selectAll: "Tümünü Seç",
        deselectAll: "Seçimi Kaldır",
        publicHeading: "Public Repos",
        privateHeading: "Private Repos",
        successPrivate: "başarıyla private yapıldı.",
        successPublic: "başarıyla public yapıldı.",
        successDelete: "başarıyla silindi.",
        bulkActionCompleted: "Toplu işlem tamamlandı."
    }
};

function changeLanguage(lang) {
    if (!lang) {
        lang = document.getElementById('language').value;
    }
    const texts = translations[lang];

    document.querySelector('label[for="username"]').textContent = texts.username;
    document.querySelector('label[for="token"]').textContent = texts.token;
    document.querySelector('button[onclick="fetchRepos()"]').textContent = texts.fetchRepos;
    document.querySelector('button[onclick="bulkAction(\'private\')"]').textContent = texts.makePrivate;
    document.querySelector('button[onclick="bulkAction(\'public\')"]').textContent = texts.makePublic;
    document.querySelector('button[onclick="bulkAction(\'delete\')"]').textContent = texts.delete;
    document.getElementById('selectAllButton').textContent = texts.selectAll;
    document.getElementById('public-heading').textContent = texts.publicHeading;
    document.getElementById('private-heading').textContent = texts.privateHeading;
}

async function fetchRepos() {
    const username = document.getElementById('username').value;
    const token = document.getElementById('token').value;
    const publicReposDiv = document.getElementById('public-repos');
    const privateReposDiv = document.getElementById('private-repos');
    publicReposDiv.innerHTML = '';
    privateReposDiv.innerHTML = '';

    try {
        const response = await fetch('https://api.github.com/user/repos?per_page=100', {
            headers: {
                'Authorization': `Basic ${btoa(username + ':' + token)}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        const repos = await response.json();

        repos.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.classList.add('repo');
            repoDiv.classList.add(repo.private ? 'private' : 'public'); // Add class based on visibility
            repoDiv.innerHTML = `
                <input type="checkbox" data-reponame="${repo.name}" id="repo-${repo.name}">
                <label for="repo-${repo.name}">${repo.name}</label>
            `;

            if (repo.private) {
                privateReposDiv.appendChild(repoDiv);
            } else {
                publicReposDiv.appendChild(repoDiv);
            }
        });
    } catch (error) {
        console.error('Error fetching repos:', error);
    }
}

async function bulkAction(action) {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const username = document.getElementById('username').value;
    const token = document.getElementById('token').value;

    // Disable buttons during the bulk action to prevent multiple requests
    const buttons = document.querySelectorAll('.header-actions button');
    buttons.forEach(button => button.disabled = true);

    try {
        for (let checkbox of checkedBoxes) {
            const repoName = checkbox.dataset.reponame;
            const repoDiv = checkbox.parentElement;
            const repoClass = repoDiv.classList.contains('private') ? 'private' : 'public';

            try {
                let response;
                if (action === 'private') {
                    response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Basic ${btoa(username + ':' + token)}`,
                            'Accept': 'application/vnd.github.v3+json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ private: true })
                    });
                    console.log(`Repo ${repoName} ${translations['en'].successPrivate}`);
                    // Move repo to private list manually
                    if (repoClass === 'public') {
                        document.getElementById('private-repos').appendChild(repoDiv);
                        repoDiv.classList.remove('public');
                        repoDiv.classList.add('private');
                    }
                } else if (action === 'public') {
                    response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Basic ${btoa(username + ':' + token)}`,
                            'Accept': 'application/vnd.github.v3+json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ private: false })
                    });
                    console.log(`Repo ${repoName} ${translations['en'].successPublic}`);
                    // Move repo to public list manually
                    if (repoClass === 'private') {
                        document.getElementById('public-repos').appendChild(repoDiv);
                        repoDiv.classList.remove('private');
                        repoDiv.classList.add('public');
                    }
                } else if (action === 'delete') {
                    await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Basic ${btoa(username + ':' + token)}`,
                            'Accept': 'application/vnd.github.v3+json'
                        }
                    });
                    console.log(`Repo ${repoName} ${translations['en'].successDelete}`);
                    // Remove repo from the list manually
                    repoDiv.remove();
                }
            } catch (error) {
                console.error(`Error performing ${action} on repo ${repoName}:`, error);
            }
        }

        alert(translations[document.getElementById('language').value].bulkActionCompleted);
    } catch (error) {
        console.error('Error performing bulk action:', error);
    } finally {
        // Re-enable buttons after the bulk action is complete
        buttons.forEach(button => button.disabled = false);
    }
}



let allSelected = false;

function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectAllButton = document.getElementById('selectAllButton');
    allSelected = !allSelected;
    
    checkboxes.forEach(checkbox => checkbox.checked = allSelected);
    
    const lang = document.getElementById('language').value;
    selectAllButton.textContent = allSelected ? translations[lang].deselectAll : translations[lang].selectAll;
}

// Initial language setup
changeLanguage('tr');
