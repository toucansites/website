async function postFormDataAsJson({ url }) {
    const fetchOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json();
    } 
    throw new Error("Invalid response, not a valid JSON object.");
}

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        const term = plainFormData.term.toLowerCase();

        if (typeof term === "string" && term.length === 0) {
            window.location.href = "/news/";
            return;
        }

        const responseData = await postFormDataAsJson({ url });

        const innerHTML = responseData
        .filter(function(item) {
            return item.title.toLowerCase().includes(term) || 
                item.description.toLowerCase().includes(term);
        })
        .map(function(item) {
            const authors = item.authors.map(item => ({
                name: item.title,
                link: item.permalink,
                image: item.imageUrl
            }));
            const tags = item.tags.map(item => ({
                name: item.title,
                link: item.permalink,
            }));
            const html = createPostCard({
                featured: item.featured,
                date: item.publication.html,
                readingTime: `${item.readingTime} min read`,
                title: item.title,
                link: item.permalink,
                summary: item.description,
                authors: authors,
                tags: tags
            });
            return html;

        })
        .join("")

        if (innerHTML.trim() === "") {
            document.getElementById("blog-posts").innerHTML = `<div><p>No results.</p></div>`;
        }
        else {
            document.getElementById("blog-posts").innerHTML = innerHTML;
        }
    } 
    catch (error) {
        alert(`Something went wrong.\n${error}`);
    }
}

function createPostCard({
    featured = false,
    date,
    readingTime,
    title,
    link,
    summary,
    authors = [],
    tags = []
}) {
    return `
        <div class="post card">
            ${featured ? `<span class="featured">featured</span>` : ""}
            
            <div class="meta">
                <time datetime="${date}">${date}</time>
                · <span class="reading-time">${readingTime}</span>
            </div>
            <h2 class="title"><a href="${link}" target="">${title}</a></h2>
            <hr>
            <p>${summary}</p>
            
            <div class="grid grid-221">
                <div class="author-list">
                    ${authors.map(author => `
                        <a href="${author.link}">
                            <img class="small rounded" src="${author.image}" alt="${author.name}">
                        </a>
                    `).join("")}
                </div>

                <div class="tag-list">
                    ${tags.map(tag => `<a href="${tag.link}"><small>${tag.name}</small></a>`).join(" ")}
                </div>
            </div>
        </div>
    `;
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", handleFormSubmit);