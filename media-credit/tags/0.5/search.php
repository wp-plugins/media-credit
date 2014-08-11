<?php
if ($_GET['term']) {
	$dir = "../../..";
	include_once("$dir/wp-config.php");
	include_once("$dir/wp-includes/wp-db.php");
	global $wpdb;

	// Prepare autocomplete term for query: add wildcard before and after, and replace all spaces with wildcards
	$user = '%' . str_replace(' ', '%', $_GET['term']) . '%';
	$query = $wpdb->get_results( $wpdb->prepare("
			SELECT ID, display_name
			FROM $wpdb->users
			WHERE upper(display_name) LIKE %s",
			strtoupper($user)));
	$results = array();
	foreach ( $query as $tag )
		$results[] = (object) array("id"=>$tag->ID, "label"=>$tag->display_name, "value"=>$tag->display_name);
	echo json_encode($results);
}
?>
