$.get("/api/all", function (data) {
    for (var i = 0; i < data.length; i++) {
        // creating the parent div to fill out the book conents
        const bookSection = $("<div>");
        // adding a class to said div
        bookSection.addClass("book");
        //adding a id
        bookSection.attr("id", "book-well-" + id);
        // appending it to the book-section
        $("#book-section").append(bookSection);

        //Adding in the bok data to the book-section
        $("#book-section-" +i).append("<h2>" + (i+1) + "." + data[i].title + "</h2>")
        $("#book-section-" + i).append("<h3>Author: " + data[i].author + "</h4>");
        $("#book-section-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
        $("#book-section-" + i).append("<h3>Read: " + data[i].read + "</h4>");


    }
})