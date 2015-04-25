Template.article.helpers({
  body: function () {
    // Return teaser to article.
    return $(this.body.value).text().substr(0, 200) + '...';
  },
  dateCreated: function() {
    // Create the time output based on the timestamp from article.
    var date = moment.unix(this.created).format("MMMM DD, YYYY");

    // Return date with clock image.
    return '<span class="glyphicon glyphicon-time"></span> ' + date;
  }
});
