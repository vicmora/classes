<?php
$vote = $_REQUEST['vote'];

//get content of textfile
$filename = "poll_result.txt";
$content = file($filename);

//put content in array
$array = explode("||", $content[0]);
$fcb = $array[0];
$rm = $array[1];

if ($vote == 0) {
  $fcb = $fcb + 1;
}
if ($vote == 1) {
  $rm = $rm + 1;
}

//insert votes to txt file
$insertvote = $fcb."||".$rm;
$fp = fopen($filename,"w");
fputs($fp,$insertvote);
fclose($fp);
?>

<table>
	<thead>
		<tr>
			<th>Team</th>
			<th>Votes</th>
			<th>%</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				FC Barcelona
			</td>
			<td>
				<?php echo($fcb); ?>
			</td>
			<td>
				<?php echo(100*round($fcb/($fcb+$rm),2)); ?>%
			</td>
		</tr>
		<tr>
			<td>
				Real Madrid
			</td>
			<td>
				<?php echo($rm); ?>
			</td>
			<td>
				<?php echo(100*round($rm/($fcb+$rm),2)); ?>%
			</td>
		</tr>
	</tbody>
</table>