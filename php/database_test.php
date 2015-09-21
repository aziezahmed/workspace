<!doctype html>
<html>
	<head>
		<title>PHP Database Test</title>
	</head>
	<body>
		<ul>
		<?php 
			$db = new SQLite3('../sql/bookmarks.db');
			$results = $db->query('SELECT * FROM bookmarks');
			while ($row = $results->fetchArray()) {
    			echo '<li><a href="';
				echo $row[2];
				echo '">';
				echo $row[1];
				echo '</a></li>';
			}
		?>
		</ul>
	</body>
</html>
