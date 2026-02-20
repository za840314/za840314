// script.js

// Toggle Filter form visibility
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const addForm = document.getElementById("newContent");
    
    filterForm.style.display = (filterForm.style.display === "block") ? "none" : "block";
    // Hide the add form when showing filter
    addForm.style.display = "none";
}

// Toggle Add New Article form visibility
function showAddNew() {
    const addForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");
    
    addForm.style.display = (addForm.style.display === "block") ? "none" : "block";
    // Hide the filter form when showing add
    filterForm.style.display = "none";
}

// Filter articles based on checkbox states
function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe  = document.getElementById("recipeCheckbox").checked;
    const showUpdate  = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "" : "none";
        } else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "" : "none";
        } else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "" : "none";
        }
    });
}

// Add a new article to the list
function addNewArticle() {
    const titleInput   = document.getElementById("inputHeader");
    const textArea     = document.getElementById("inputArticle");
    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio  = document.getElementById("recipeRadio");
    // lifeRadio is the Update option
    const lifeRadio    = document.getElementById("lifeRadio");

    const title = titleInput.value.trim();
    const text  = textArea.value.trim();

    if (!title || !text) {
        alert("Please enter both a title and some article text.");
        return;
    }

    let typeClass = "update";
    let markerText = "Update";

    if (opinionRadio.checked) {
        typeClass = "opinion";
        markerText = "Opinion";
    } else if (recipeRadio.checked) {
        typeClass = "recipe";
        markerText = "Recipe";
    } else if (lifeRadio.checked) {
        typeClass = "update";
        markerText = "Update";
    }

    // Create the new article element
    const newArticle = document.createElement("article");
    newArticle.className = typeClass;

    newArticle.innerHTML = `
        <span class="marker">${markerText}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;

    // Add to the top of the list (most recent first)
    const articleList = document.getElementById("articleList");
    articleList.insertBefore(newArticle, articleList.firstChild);

    // Clear the form inputs
    titleInput.value = "";
    textArea.value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;

    // Hide the form after adding
    document.getElementById("newContent").style.display = "none";

    // Re-apply current filters
    filterArticles();
}

// Run filter once when page loads (respects default checkbox states)
document.addEventListener("DOMContentLoaded", () => {
    filterArticles();
});