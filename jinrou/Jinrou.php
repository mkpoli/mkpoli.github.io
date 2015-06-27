<html>
	<head>
		<title>摸索吧！人狼游戏 v1.0</title>
		<?php
			$filename = "registed_user.list";
			if (!file_exists($filename)) {
				echo "List file does not exist. One will be created.";
			}
			$handle = fopen($filename, "r");
			$contents = fread($handle, filesize ($filename));
    		fclose($handle);

		?>
	</head>
	<body>
		<?php
			echo "今回成员列表：";
			echo $contents;
		?>
	</body>
</html>
