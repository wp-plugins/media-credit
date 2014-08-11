function mediaCreditAutocomplete(id, currAuthor) {
	var PLUGIN_DIR = "../wp-content/plugins/media-credit/"; //TODO: better way to do this?
	var inputField = "input.[id='attachments[" + id + "][media-credit]']"
	
	jQuery(inputField)
		.click(function() {
			if (this.value == currAuthor) {
				this.value = "";
				removeID(id);
			}
		})
		.autocomplete({
			source: PLUGIN_DIR + "search.php",
			minLength: 2,
			select: function(event, ui) {
				addID(id, ui.item.id);
			}
		});
}

function addID(id, author) {
//	jQuery("<input/>").attr("name", "media-credit-" + id).attr("value", author).attr("type", "hidden").appendTo("input.[id='attachments[" + id + "][media-credit]']");
	jQuery("#media-credit-" + id).attr("value", author);
}

function removeID(id) {
	jQuery("#media-credit-" + id).attr("value", "");
}
