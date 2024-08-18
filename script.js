const translations = {
    en: {
        username: "GitHub Username:",
        token: "GitHub Token:",
        fetchRepos: "Fetch Repos",
        makePrivate: "Make Selected Private",
        makePublic: "Make Selected Public",
        delete: "Delete Selected",
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
    document.getElementById('public-heading').textContent = texts.publicHeading;
    document.getElementById('private-heading').textContent = texts.privateHeading;
}

async function fetchRepos() {
    const username = document.getElementById('username').value;
    const token = document.getElementById('token').value;
    const publicReposDiv = document.getElementById('public-repos');
    const privateReposDiv = document.getElementById('private-repos');
    publicReposDiv.innerHTML = ''; // Clear previous results
    privateReposDiv.innerHTML = ''; // Clear previous results

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
            repoDiv.className = 'repo';
            repoDiv.innerHTML = `
                <input type="checkbox" id="repo-${repo.name}" data-reponame="${repo.name}" ${repo.private ? 'checked' : ''}>
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
    const username = document.getElementById('username').value;
    const token = document.getElementById('token').value;
    const repos = document.querySelectorAll('.repo input:checked');

    const promises = Array.from(repos).map(async repoInput => {
        const repoName = repoInput.dataset.reponame;
        const url = `https://api.github.com/repos/${username}/${repoName}`;

        try {
            if (action === 'private') {
                await fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Basic ${btoa(username + ':' + token)}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ private: true })
                });
                console.log(`${repoName} ${translations['en'].successPrivate}`);
            } else if (action === 'public') {
                await fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Basic ${btoa(username + ':' + token)}`,
                        'Accept': 'application/vnd.github.v3+json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ private: false })
                });
                console.log(`${repoName} ${translations['en'].successPublic}`);
            } else if (action === 'delete') {
                await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Basic ${btoa(username + ':' + token)}`,
                        'Accept': 'application/vnd.github.v3+json'
                    }
                });
                console.log(`${repoName} ${translations['en'].successDelete}`);
            }
        } catch (error) {
            console.error(`Error performing ${action} on ${repoName}:`, error);
        }
    });

    await Promise.all(promises);
    alert(translations[document.getElementById('language').value].bulkActionCompleted);
}
