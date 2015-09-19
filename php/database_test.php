<!doctype html>
<html>
	<head>
		<title>PHP Database Test</title>
	</head>
	<body>
		<?php 
			$db = new SQLite3('../sql/my_db.db');
			$results = $db->query('SELECT * FROM bookmarks');
			while ($row = $results->fetchArray()) {
    			var_dump($row);
			}
		?>
	</body>
</html>
