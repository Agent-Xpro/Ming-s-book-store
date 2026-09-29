const collection = {
    id: "the-thing-that-watches-in-the-dark-corner",
    title: "The Thing That Watches in the Dark Corner",
    category: "Horror",
    chapters: 7,
    description: "A seven-chapter horror story that begins with a strange presence watching from the dark corner of a house and unfolds into a series of unsettling encounters.",
    readingTime: "20+ min read"
};

const grid = document.getElementById("libraryGrid");

function renderCollection() {
    grid.innerHTML = `
        <article class="library-book story-card story-1">
            <a href="reader/book.html?id=${collection.id}" class="story-card-link">
                <div class="story-cover">
                    <img
                        src="assets/images/the-thing-that-watches-in-the-dark-corner.png"
                        alt="The Thing That Watches in the Dark Corner book cover"
                    >
                </div>

                <div class="book-info">
                    <div>
                        <h3>${collection.title}</h3>
                        <p>${collection.description}</p>
                        <div class="story-meta">
                            <span>${collection.chapters} chapters</span>
                            <span>${collection.readingTime}</span>
                        </div>
                    </div>
                    <span class="book-arrow">→</span>
                </div>
            </a>
        </article>
    `;

    const count = document.getElementById("resultsCount");
    if (count) count.textContent = "1 book · 7 chapters";
}

renderCollection();
