Template.article.helpers({
  body: function () {
    console.log($(this.body.value));
    return $(this.body.value).text().substr(0, 200) + '...';
  }
});
