<?php
	header('Content-Type: application/json');
	$db = new SQLite3('../sql/bookmarks.db');
	$results = $db->query('SELECT * FROM bookmarks');
	$data = array();
	
	while ($row = $results->fetchArray()) {
		$bookmark = array("id" => $row[0],"title" => $row[1],"url" => $row[2]);
		array_push($data,$bookmark);
	}
	echo json_encode($data);
?>