document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('post-form');
    const postList = document.getElementById('post-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
            `;
            postList.appendChild(postDiv);

            // Limpar o formulário
            form.reset();
        }
    });
});